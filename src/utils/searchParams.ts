import { createSearchParamsCache, parseAsString } from "nuqs/server";

export const tdeeParsers = {
  activity: parseAsString.withDefault("1.2"),
  sex: parseAsString.withDefault("2"),
  height: parseAsString.withDefault(""),
  weight: parseAsString.withDefault(""),
  age: parseAsString.withDefault(""),
};
export const searchParamsCache = createSearchParamsCache(tdeeParsers);
