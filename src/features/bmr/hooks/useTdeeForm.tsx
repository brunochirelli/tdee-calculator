"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  activity: z.string(),
  age: z.string(),
  height: z.string(),
  weight: z.string(),
  sex: z.string(),
});

export type TdeeFormSchema = z.infer<typeof schema>;

export const useTdeeForm = () => {
  const searchParams = useSearchParams();

  return useForm<TdeeFormSchema>({
    defaultValues: {
      activity: searchParams.get("activity") ?? "1.2",
      sex: searchParams.get("sex") ?? "2",
      age: searchParams.get("age") ?? "",
      height: searchParams.get("height") ?? "",
      weight: searchParams.get("weight") ?? "",
    },
    resolver: zodResolver(schema),
  });
};
