import { calculateBMI } from "./bmi";

describe("bmiUtils", () => {
  it("should calculate BMI correctly", () => {
    expect(calculateBMI(89, 173)).toBe(29.74);
  });
});
