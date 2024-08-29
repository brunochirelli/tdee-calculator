"use client";

import { useState } from "react";
import { Slider } from "../slider";
import {
  getGoalDateBasedOnCaloriesSaving,
  getKgFromCalory,
} from "@/lib/caloriesPlanner";
import { useSearchParams } from "next/navigation";
import { parseISO, format } from "date-fns";
import { TdeeResultForm } from "@/components/forms/TdeeResultForm/TdeeResultForm";

type CuttingCalculatorProps = {
  calories: number;
  currentWeight: number;
};

export default function CuttingCalculator({
  calories,
  currentWeight,
}: CuttingCalculatorProps) {
  const searchParams = useSearchParams();

  const [weightGoal, setWeightGoal] = useState<number>(currentWeight);

  const [value, setValue] = useState([400]);
  const dailyCalories = calories - value[0];
  const dateGoal = getGoalDateBasedOnCaloriesSaving(
    value[0],
    weightGoal,
    currentWeight,
  );
  const weekKgLoss = getKgFromCalory(value[0]).toFixed(3);

  const formattedDate = format(
    parseISO(dateGoal.toISOString()),
    "LLLL d, yyyy",
  );

  return (
    <>
      <TdeeResultForm />
      <form>
        <label>
          Weight goal:{" "}
          <input
            type="number"
            value={weightGoal}
            onChange={(e) => setWeightGoal(Number(e.target.value))}
          />
        </label>
      </form>
      <p>deficit: {value}</p>
      <p>kg semanal: {weekKgLoss}</p>

      <Slider
        defaultValue={value}
        step={10}
        max={600}
        min={100}
        onValueChange={(e) => setValue(e)}
      />

      <p>Daily calories: {dailyCalories}</p>
      <p>{formattedDate}</p>
    </>
  );
}
