import { Female, Male, Sex } from "@/types";

export function calculateIBW(sex: Female | Male, heightCm: number) {
  const baseHeightCm = 152.4;
  let ibw;

  if (sex === Sex.MALE) {
    const baseWeightKg = 48.08;
    const weightPerCm = 1.85;
    ibw = baseWeightKg + (heightCm - baseHeightCm) * weightPerCm;
  }
  if (sex === Sex.FEMALE) {
    const baseWeightKg = 45.36;
    const weightPerCm = 1.65;
    ibw = baseWeightKg + (heightCm - baseHeightCm) * weightPerCm;
  }

  if (!ibw) throw new Error("Invalid sex");

  return Math.round(ibw);
}
