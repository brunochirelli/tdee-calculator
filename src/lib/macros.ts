import { MacrosOptions, MacroType } from "../types";

export const getMacros = (currentCalories: number): MacrosOptions => {
  if (isNaN(currentCalories)) throw new Error("Invalid input");

  return {
    lowCarb: [
      Math.round((currentCalories * 0.4) / MacroType.PROTEIN),
      Math.round((currentCalories * 0.4) / MacroType.FAT),
      Math.round((currentCalories * 0.2) / MacroType.CARB),
    ],
    moderateCarb: [
      Math.round((currentCalories * 0.3) / MacroType.PROTEIN),
      Math.round((currentCalories * 0.35) / MacroType.FAT),
      Math.round((currentCalories * 0.35) / MacroType.CARB),
    ],
    highCarb: [
      Math.round((currentCalories * 0.3) / MacroType.PROTEIN),
      Math.round((currentCalories * 0.2) / MacroType.FAT),
      Math.round((currentCalories * 0.5) / MacroType.CARB),
    ],
  };
};
