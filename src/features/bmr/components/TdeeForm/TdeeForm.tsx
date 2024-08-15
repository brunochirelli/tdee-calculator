"use client";
import { ActivityLevel, Sex } from "@/types";
import { useRouter } from "next/navigation";
import { calculateBMR } from "../../utils/bmr";
import { TdeeFormSchema, useTdeeForm } from "../../hooks/useTdeeForm";

export default function TdeeForm() {
  const router = useRouter();

  const { register, handleSubmit } = useTdeeForm();

  const onSubmit = (data: TdeeFormSchema) => {
    const transformObjValuesToString = (obj: object) =>
      Object.fromEntries(
        Object.entries(obj).map(([key, value]) => [key, String(value)]),
      );

    const bmr = calculateBMR({
      ageInYears: +data.age,
      heighInCm: +data.height,
      weightInKg: +data.weight,
      sex: data.sex,
    });

    console.log(bmr);

    const searchParams = new URLSearchParams(transformObjValuesToString(data));
    router.push(`/results?${searchParams.toString()}`);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="radio" {...register("sex")} value={Sex.FEMALE} />
      <input type="radio" {...register("sex")} value={Sex.MALE} />
      <input {...register("age")} type="number" placeholder="Age" />
      <input {...register("weight")} type="number" placeholder="kg" />
      <input {...register("height")} type="number" placeholder="cm" />
      <select {...register("activity")}>
        <option value={ActivityLevel.SEDENTARY}>Sedentary</option>
        <option value={ActivityLevel.LIGHTLY_ACTIVE}>Lightly active</option>
        <option value={ActivityLevel.MODERATELY_ACTIVE}>
          Moderately active
        </option>
        <option value={ActivityLevel.VERY_ACTIVE}>Very active</option>
        <option value={ActivityLevel.SUPER_ACTIVE}>Super active</option>
      </select>
      <button type="submit">Calculate</button>
    </form>
  );
}
