"use client";

import { tdeeParsers } from "@/utils/searchParams";
import { useQueryStates } from "nuqs";

export const useTdeeSearchQuery = () => {
  return useQueryStates(tdeeParsers);
};
