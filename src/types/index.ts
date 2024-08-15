export const MacroType = {
  PROTEIN: 4,
  FAT: 9,
  CARB: 4,
} as const;

type Protein = number;
type Fat = number;
type Carb = number;
type Macro = [Protein, Fat, Carb];

export type MacrosOptions = {
  lowCarb: Macro;
  moderateCarb: Macro;
  highCarb: Macro;
};

export const Sex = {
  FEMALE: "1",
  MALE: "2",
} as const;

export const ActivityLevel = {
  SEDENTARY: "1.2",
  LIGHTLY_ACTIVE: "1.375",
  MODERATELY_ACTIVE: "1.55",
  VERY_ACTIVE: "1.725",
  SUPER_ACTIVE: "1.9",
} as const;

export type TdeeSearchParams = {
  sex: string;
  weight: string;
  height: string;
  age: string;
  activity: string;
};
