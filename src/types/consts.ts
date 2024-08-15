import { ActivityLevel } from ".";

export const ACTIVITY_NAME_MAP: Record<string, string> = {
  [ActivityLevel.SEDENTARY]: "Sedentary",
  [ActivityLevel.LIGHTLY_ACTIVE]: "Light Exercise",
  [ActivityLevel.MODERATELY_ACTIVE]: "Moderate Exercise",
  [ActivityLevel.VERY_ACTIVE]: "Heavy Exercise",
  [ActivityLevel.SUPER_ACTIVE]: "Athlete",
};

export const BMI_LEVELS = {
  UNDERWEIGHT: 0,
  NORMAL: 1,
  OVERWEIGHT: 2,
  OBESE: 3,
};

export const BMI_RANGES_TEXT_MAP: Record<number, string> = {
  0: "Underweight",
  1: "Normal",
  2: "Overweight",
  3: "Obese",
};

export const BMI_SCORE_TEXT_MAP: Record<number, string> = {
  0: "18.5 or less",
  1: "18.5 – 24.99",
  2: "25 – 29.99",
  3: "30+",
};
