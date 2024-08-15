import Calories from "@/features/bmr/components/Calories/Calories";
import CaloriesTable from "@/features/bmr/components/CaloriesTable/CaloriesTable";
import {
  calculateBMR,
  calculateRateByActivityLevel,
} from "@/features/bmr/utils/bmr";
import { BMRSearchParams } from "@/types";
import { redirect } from "next/navigation";

function isValidSearchParams(searchParams: BMRSearchParams): boolean {
  return (
    !!searchParams.sex ||
    !!searchParams.weight ||
    !!searchParams.height ||
    !!searchParams.age ||
    !!searchParams.activity
  );
}

type ResultsPageProps = {
  searchParams: BMRSearchParams;
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
      <p>
        You are a {age} year old {sex} who is {height} cm tall and weights{" "}
        {weight} kg while doing {activity} activity.
      </p>
      <Calories calories={rateByActivityLevel} />
      <CaloriesTable bmr={bmr} activityLevel={activity} />
    </>
  );
}
