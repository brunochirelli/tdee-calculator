import { Sex } from "@/types";
import { calculateBMR } from "./bmr";

describe("bmr", () => {
  it.each([Sex.MALE, Sex.FEMALE])(
    "should calculate BMR for sex %s using the Mifflin St Jeor equation",
    (sex) => {
      const result = calculateBMR({
        ageInYears: 30,
        heighInCm: 170,
        weightInKg: 70,
        sex,
      });

      expect(result).toBe(sex === Sex.MALE ? 1618 : 1452);
    },
  );

  it("should throw when sex is not provided", () => {
    expect(() =>
      calculateBMR({
        ageInYears: 30,
        heighInCm: 170,
        weightInKg: 70,
        sex: "",
      }),
    ).toThrowError(/Invalid sex/);
  });

  it.each([0, false, null, undefined, ""])(
    "should throw when inputs is invalid %s",
    (input) => {
      expect(() =>
        calculateBMR({
          // @ts-expect-error Testing invalid input
          ageInYears: input,
          // @ts-expect-error Testing invalid input
          heighInCm: input,
          // @ts-expect-error Testing invalid input
          weightInKg: input,
        }),
      ).toThrowError(/Invalid sex/);
    },
  );
});
