import { calculateBMI } from "@/lib/bmi";
import Calories from "@/components/ui/Calories/Calories";
import CaloriesTable from "@/components/ui/CaloriesTable/CaloriesTable";

import Macronutrients from "@/components/ui/Macronutrients/Macronutrients";
import { TdeeSearchParams } from "@/types";
import { redirect } from "next/navigation";
import {
  calculateBMR,
  calculateRateByActivityLevel,
  isValidSearchParams,
} from "@/lib/bmr";
import { TdeeResultForm } from "@/components/forms/TdeeResultForm/TdeeResultForm";
import BMI from "@/components/ui/Bmi/Bmi";
import { useTdeeSearchQuery } from "@/hooks/useTdeeSearchQuery";
import { searchParamsCache } from "@/utils/searchParams";

type ResultsPageProps = {
  searchParams: TdeeSearchParams;
};

export default function ResultsPage({ searchParams }: ResultsPageProps) {
  const { age, sex, height, weight, activity } =
    searchParamsCache.parse(searchParams);

  if (!isValidSearchParams(searchParams)) {
    redirect("/");
  }

  const bmr = calculateBMR({
    ageInYears: +age,
    heighInCm: +height,
    weightInKg: +weight,
    sex,
  });
  const caloriesWithActivity = calculateRateByActivityLevel(bmr, +activity);
  const bmi = calculateBMI(+weight, +height);

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold uppercase">Your stats</h1>
      <TdeeResultForm />
      <Calories />
      <CaloriesTable />
      <BMI bmi={bmi} />
      <Macronutrients calories={caloriesWithActivity} />
    </div>
  );
}
