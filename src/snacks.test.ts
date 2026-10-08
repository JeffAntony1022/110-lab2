import { describe, it, expect } from "vitest";
import { getSnack } from "./snacks";

describe("snacks", () => {
  it("should have at least 3 items", () => {
    expect(getSnack().length).toBeGreaterThanOrEqual(3);
  });

  it("should include 'chips'", () => {
    expect(getSnack()).toContain("chips");
  });
});
