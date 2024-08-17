"use client";

import { useTdeeForm } from "@/hooks/useTdeeForm";
import { useSearchParams } from "next/navigation";

export const TdeeResultForm = () => {
  const searchParams = useSearchParams();
  const age = searchParams.get("age") ?? "";
  const sex = searchParams.get("sex") ?? "";
  const weight = searchParams.get("weight") ?? "";
  const height = searchParams.get("height") ?? "";
  const activity = searchParams.get("activity") ?? "";

  const { register } = useTdeeForm();

  return (
    <>
      <form className="hidden sm:block">
        <input type="radio" {...register("sex")} value="1" />
        <input type="radio" {...register("sex")} value="2" />
        <input {...register("age")} type="number" placeholder="Age" />
        <input {...register("weight")} type="number" placeholder="kg" />
        <input {...register("height")} type="number" placeholder="cm" />
        <select {...register("activity")}>
          <option value="1.2">Sedentary</option>
          <option value="1.375">Lightly active</option>
          <option value="1.55">Moderately active</option>
          <option value="1.725">Very active</option>
          <option value="1.9">Super active</option>
        </select>
        <button type="submit">Calculate</button>
      </form>

      <p className="sm:hidden">
        You are a {age} year old {sex} who is {height} cm tall and weights{" "}
        {weight} kg while doing {activity} activity.
      </p>
    </>
  );
};
