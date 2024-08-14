import { MacrosOptions, MacroType } from "../../../types";

export const getMacros = (currentCalories: number): MacrosOptions => {
  if (isNaN(currentCalories)) throw new Error("Invalid input");

  return {
    lowCarb: [
      Math.round((currentCalories * 0.4) / MacroType.Protein),
      Math.round((currentCalories * 0.4) / MacroType.Fat),
      Math.round((currentCalories * 0.2) / MacroType.Carb),
    ],
    moderateCarb: [
      Math.round((currentCalories * 0.3) / MacroType.Protein),
      Math.round((currentCalories * 0.35) / MacroType.Fat),
      Math.round((currentCalories * 0.35) / MacroType.Carb),
    ],
    highCarb: [
      Math.round((currentCalories * 0.3) / MacroType.Protein),
      Math.round((currentCalories * 0.2) / MacroType.Fat),
      Math.round((currentCalories * 0.5) / MacroType.Carb),
    ],
  };
};
