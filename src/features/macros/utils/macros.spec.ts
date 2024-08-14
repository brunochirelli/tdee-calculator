import { getMacros } from "./macros";

describe("macros", () => {
  it("should return 3 macros suggestions for low carb, moderate carb and high carb", () => {
    expect(getMacros(2000)).toEqual({
      lowCarb: [200, 89, 100],
      moderateCarb: [150, 78, 175],
      highCarb: [150, 44, 250],
    });
  });

  it("should throw an error if the input is invalid", () => {
    expect(() => getMacros(NaN)).toThrow("Invalid input");
  });
});
