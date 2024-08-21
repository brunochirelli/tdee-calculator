"use client";

import { useTdeeSearchQuery } from "@/hooks/useTdeeSearchQuery";
import { calculateBMR } from "@/lib/bmr";
import { cn } from "@/lib/utils";
import { ActivityLevel } from "@/types";
import { ACTIVITY_NAME_MAP } from "@/types/consts";

export default function CaloriesTable() {
  const [{ activity, age, height, weight, sex }] = useTdeeSearchQuery();
  const bmr = calculateBMR({
    ageInYears: +age,
    heighInCm: +height,
    weightInKg: +weight,
    sex,
  });
  const availableActivityLevels = Object.values(ActivityLevel);

  return (
    <table className="w-full">
      <tbody>
        {availableActivityLevels.map((activityLevelValue) => (
          <tr
            key={activityLevelValue}
            className={cn(
              { "font-bold": activity === activityLevelValue },
              "w-full border-b",
            )}
          >
            <td className="w-[50%]">{ACTIVITY_NAME_MAP[activityLevelValue]}</td>
            <td className="w-[50%]">
              {Math.ceil(bmr * +activityLevelValue)} calories per day
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
