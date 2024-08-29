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
import CuttingCalculator from "@/components/ui/CuttingCalculator/CuttingCalculator";

type ResultsPageProps = {
  searchParams: TdeeSearchParams;
};

export default function CuttingPage({ searchParams }: ResultsPageProps) {
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

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold uppercase">Cutting Planner</h1>
      <CuttingCalculator
        calories={caloriesWithActivity}
        currentWeight={+weight}
      />
    </div>
  );
}
