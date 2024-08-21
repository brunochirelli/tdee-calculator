"use client";

import { useTdeeSearchQuery } from "@/hooks/useTdeeSearchQuery";
import { calculateBMR } from "@/lib/bmr";

export default function Calories() {
  const [{ activity, sex, age, height, weight }] = useTdeeSearchQuery();

  const bmr = calculateBMR({
    sex,
    ageInYears: +age,
    heighInCm: +height,
    weightInKg: +weight,
  });

  const calories = Math.round(bmr * +activity);
  const caloriesPerWeek = calories * 7;

  return (
    <>
      <p>{calories} calories per day</p>
      <p>{caloriesPerWeek} calories per week</p>
    </>
  );
}
