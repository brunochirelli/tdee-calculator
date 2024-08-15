import Calories from "@/features/bmr/components/Calories/Calories";
import CaloriesTable from "@/features/bmr/components/CaloriesTable/CaloriesTable";
import TdeeResultForm from "@/features/bmr/components/TdeeResultForm/TdeeResultForm";
import {
  calculateBMR,
  calculateRateByActivityLevel,
  isValidSearchParams,
} from "@/features/bmr/utils/bmr";
import { TdeeSearchParams } from "@/types";
import { redirect } from "next/navigation";

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
  const rateByActivityLevel = calculateRateByActivityLevel(bmr, +activity);

  return (
    <>
      <h1>Your stats</h1>
      <TdeeResultForm />
      <Calories calories={rateByActivityLevel} />
      <CaloriesTable bmr={bmr} activityLevel={activity} />
    </>
  );
}
