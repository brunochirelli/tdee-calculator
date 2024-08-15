import { calculateIBW } from "./idealWeight";

describe("idealWeight", () => {
  it("should calculate ideal body weight", () => {
    expect(calculateIBW("1", 173)).toBe(79);
  });
});
