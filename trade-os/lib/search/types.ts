export type SearchResult = {
  title: string;
  url: string;
  snippet?: string;
  engine?: string;
  publishedAt?: string | null;
};

export type SearchRequest = {
  query: string;
  language?: string;
  timeRange?: "day" | "week" | "month" | "year";
  page?: number;
};

export interface SearchAdapter {
  name: string;
  search(input: SearchRequest): Promise<SearchResult[]>;
}
