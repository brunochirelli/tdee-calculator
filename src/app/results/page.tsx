import BMI from "@/components/Bmi/Bmi";
import { calculateBMI } from "@/lib/bmi";
import Calories from "@/components/Calories/Calories";
import CaloriesTable from "@/components/CaloriesTable/CaloriesTable";
import TdeeResultForm from "@/components/TdeeResultForm/TdeeResultForm";

import Macronutrients from "@/components/Macronutrients/Macronutrients";
import { TdeeSearchParams } from "@/types";
import { redirect } from "next/navigation";
import {
  calculateBMR,
  calculateRateByActivityLevel,
  isValidSearchParams,
} from "@/lib/bmr";

type ResultsPageProps = {
  searchParams: TdeeSearchParams;
};

export default function ResultsPage({ searchParams }: ResultsPageProps) {
  if (!isValidSearchParams(searchParams)) {
    redirect("/");
  }

  const { age, sex, height, weight, activity } = searchParams;
  const bmr = calculateBMR({
    ageInYears: +age,
    heighInCm: +height,
    weightInKg: +weight,
    sex,
  });
  const caloriesWithActivity = calculateRateByActivityLevel(bmr, +activity);
  const bmi = calculateBMI(+weight, +height);

  return (
    <>
      <h1>Your stats</h1>
      <TdeeResultForm />
      <Calories calories={caloriesWithActivity} />
      <CaloriesTable bmr={bmr} activityLevel={activity} />
      <BMI bmi={bmi} />
      <Macronutrients calories={caloriesWithActivity} />
    </>
  );
}
