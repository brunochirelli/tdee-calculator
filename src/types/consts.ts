import { ActivityLevel } from ".";

export const ACTIVITY_NAME_MAP: Record<string, string> = {
  [ActivityLevel.SEDENTARY]: "Sedentary",
  [ActivityLevel.LIGHTLY_ACTIVE]: "Light Exercise",
  [ActivityLevel.MODERATELY_ACTIVE]: "Moderate Exercise",
  [ActivityLevel.VERY_ACTIVE]: "Heavy Exercise",
  [ActivityLevel.SUPER_ACTIVE]: "Athlete",
};
