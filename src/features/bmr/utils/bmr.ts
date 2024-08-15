import { ActivityLevel, Sex } from "@/types";

type BMR = number;
type BMRArgs = {
  sex: string;
  weightInKg: number;
  heighInCm: number;
  ageInYears: number;
};

// Mifflin St. Jeor equation
export const calculateBMR = ({
  sex,
  weightInKg,
  heighInCm,
  ageInYears,
}: BMRArgs): BMR => {
  if (sex === Sex.MALE) {
    return Math.round(10 * weightInKg + 6.25 * heighInCm - 5 * ageInYears + 5);
  }

  if (sex === Sex.FEMALE) {
    return Math.round(
      10 * weightInKg + 6.25 * heighInCm - 5 * ageInYears - 161,
    );
  }

  throw new Error("Invalid sex");
};

export const calculateRateByActivityLevel = (
  bmr: number,
  activityLevel: keyof typeof ActivityLevel,
) => {
  return Math.ceil(bmr * +activityLevel);
};
