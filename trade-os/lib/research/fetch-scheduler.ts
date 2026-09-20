import { SourceFetcher } from "./source-fetcher";
import type { ResearchFinding } from "./types";
import { domainKey } from "./company-resolver";

export interface ScheduledFetch {
  finding: ResearchFinding;
  priority: number;
}

export class FetchScheduler {
  private queue: ScheduledFetch[] = [];
  private activeFetches = 0;
  private domainFetches = new Map<string, number>();
  private domainActive = new Map<string, number>();

  constructor(
    private globalConcurrency: number,
    private perDomainConcurrency: number,
    private perDomainFetchCap: number,
    private onFetchComplete: (finding: ResearchFinding, content: NonNullable<ResearchFinding["fetchedContent"]>) => Promise<void>
  ) {}

  add(finding: ResearchFinding, priority: number) {
    this.queue.push({ finding, priority });
    this.queue.sort((a, b) => b.priority - a.priority);
  }

  hasPending(): boolean {
    return this.queue.length > 0 || this.activeFetches > 0;
  }

  canScheduleNext(): boolean {
    if (this.activeFetches >= this.globalConcurrency) return false;
    // Check if there is any item in queue that can be scheduled
    for (const item of this.queue) {
      const domain = domainKey(item.finding.domain);
      const active = this.domainActive.get(domain) || 0;
      const total = this.domainFetches.get(domain) || 0;
      if (active < this.perDomainConcurrency && total < this.perDomainFetchCap) {
        return true;
      }
    }
    return false;
  }

  async processNextBatch(): Promise<boolean> {
    const promises: Promise<void>[] = [];
    
    while (this.activeFetches < this.globalConcurrency && this.queue.length > 0) {
      let selectedIndex = -1;
      
      for (let i = 0; i < this.queue.length; i++) {
        const item = this.queue[i];
        const domain = domainKey(item.finding.domain);
        const active = this.domainActive.get(domain) || 0;
        const total = this.domainFetches.get(domain) || 0;
        
        if (active < this.perDomainConcurrency && total < this.perDomainFetchCap) {
          selectedIndex = i;
          break;
        }
      }

      if (selectedIndex === -1) break; // Cannot schedule anything right now due to domain limits

      const item = this.queue.splice(selectedIndex, 1)[0];
      const domain = domainKey(item.finding.domain);
      
      this.activeFetches++;
      this.domainActive.set(domain, (this.domainActive.get(domain) || 0) + 1);
      this.domainFetches.set(domain, (this.domainFetches.get(domain) || 0) + 1);

      const p = (async () => {
        try {
          const content = await SourceFetcher.fetch(item.finding.url);
          await this.onFetchComplete(item.finding, content);
        } catch (e) {
          console.error("Fetch failed", e);
        } finally {
          this.activeFetches--;
          this.domainActive.set(domain, (this.domainActive.get(domain) || 0) - 1);
        }
      })();
      
      promises.push(p);
    }

    if (promises.length > 0) {
      await Promise.all(promises);
      return true;
    }
    return false;
  }
}