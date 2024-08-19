"use client";

import { useTdeeForm } from "@/hooks/useTdeeForm";
import { cn } from "@/lib/utils";
import { ACTIVITY_NAME_MAP, SEX_TEXT_MAP } from "@/types/consts";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

export const TdeeResultForm = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const { register, watch } = useTdeeForm();

  const age = watch("age");
  const activityLevel = watch("activity");
  const weight = watch("weight");
  const height = watch("height");
  const sex = watch("sex");

  const currentActivityLevelLabel =
    ACTIVITY_NAME_MAP[activityLevel as keyof typeof ACTIVITY_NAME_MAP];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(e.target.name, e.target.value);
    router.replace(`${pathname}?${params.toString()}`);
  };

  const spinButtonHiddenClass =
    "[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none";

  return (
    <>
      <p className="sr-only">
        You're a {age} year old {sex} who is {height}cm tall and weights{" "}
        {weight}kg while doing {currentActivityLevelLabel} activity.
      </p>
      <form className="font-mono not-sr-only">
        <p>
          You are a{" "}
          {
            <input
              {...register("age", { onChange: handleChange })}
              className={cn("max-w-[2ch]", spinButtonHiddenClass, "ring-1")}
              type="number"
              placeholder="Age"
              min={10}
              max={99}
            />
          }{" "}
          year old{" "}
          {
            <select
              {...register("sex", { onChange: handleChange })}
              className="ring-1"
              style={{ maxWidth: `${SEX_TEXT_MAP[sex].length + 2}ch` }}
            >
              <option value="1">{SEX_TEXT_MAP[1].toLowerCase()}</option>
              <option value="2">{SEX_TEXT_MAP[2].toLowerCase()}</option>
            </select>
          }{" "}
          who is{" "}
          {
            <input
              {...register("height", { onChange: handleChange })}
              className={cn("max-w-[3ch]", spinButtonHiddenClass, "ring-1")}
              type="number"
              placeholder="cm"
            />
          }{" "}
          cm tall and weights{" "}
          {
            <input
              {...register("weight", { onChange: handleChange })}
              className={cn(
                `max-w-[${weight.length}ch]`,
                spinButtonHiddenClass,
                "ring-1",
              )}
              type="number"
              placeholder="kg"
            />
          }{" "}
          kg while {activityLevel === "1.2" ? "being" : "doing"}{" "}
          {
            <select
              {...register("activity", { onChange: handleChange })}
              className="ring-1"
              style={{ maxWidth: `${currentActivityLevelLabel.length + 2}ch` }}
            >
              <option value="1.2">
                {ACTIVITY_NAME_MAP[1.2].toLocaleLowerCase()}
              </option>
              <option value="1.375">
                {ACTIVITY_NAME_MAP[1.375].toLocaleLowerCase()}
              </option>
              <option value="1.55">
                {ACTIVITY_NAME_MAP[1.55].toLocaleLowerCase()}
              </option>
              <option value="1.725">
                {ACTIVITY_NAME_MAP[1.725].toLocaleLowerCase()}
              </option>
              <option value="1.9">
                {ACTIVITY_NAME_MAP[1.9].toLocaleLowerCase()}
              </option>
            </select>
          }{" "}
          {activityLevel !== "1.2" && "activity."}
        </p>
      </form>
    </>
  );
};
