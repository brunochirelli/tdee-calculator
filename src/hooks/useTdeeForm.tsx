"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useTdeeSearchQuery } from "./useTdeeSearchQuery";

const schema = z.object({
  activity: z.string(),
  age: z.string(),
  height: z.string(),
  weight: z.string(),
  sex: z.string(),
});

export type TdeeFormSchema = z.infer<typeof schema>;

export const useTdeeForm = () => {
  const [{ activity, sex, age, height, weight }] = useTdeeSearchQuery();

  return useForm<TdeeFormSchema>({
    defaultValues: {
      activity: activity ?? "1.2",
      sex: sex ?? "2",
      age: age ?? "",
      height: height ?? "",
      weight: weight ?? "",
    },
    resolver: zodResolver(schema),
  });
};
