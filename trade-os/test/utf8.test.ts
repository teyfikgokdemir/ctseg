import { describe, expect, it } from "vitest";
import { LocalResearchReviewProvider } from "../lib/research/research-review";
import type { ParsedIntent } from "../lib/research/intent-parser";

describe("Turkish UTF-8 responses", () => {
  it("keeps Turkish text through JSON serialization", async () => {
    const review = await new LocalResearchReviewProvider().review({ normalizedProduct: "Ürün", grade: "Gıda" } as ParsedIntent, "SOURCING", []);
    const response = Response.json(review);
    expect(response.headers.get("content-type")).toContain("application/json");
    const body = await response.json();
    expect(body.summary).toContain("şirket adayı");
    expect(body.limitations.join(" ")).toContain("Ücretsiz kaynaklardan doğrulanabilir");
    expect(JSON.stringify(body)).not.toMatch(/Ã|Å|Ä|Â|�/u);
  });
});
