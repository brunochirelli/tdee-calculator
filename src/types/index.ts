export enum MacroType {
  Protein = 4,
  Fat = 9,
  Carb = 4,
}

type Protein = number;
type Fat = number;
type Carb = number;
type Macro = [Protein, Fat, Carb];

export type MacrosOptions = {
  lowCarb: Macro;
  moderateCarb: Macro;
  highCarb: Macro;
};

export enum Sex {
  Female = 1,
  Male = 2,
}
export enum ActivityLevel {
  SEDENTARY = "1.2",
  LIGHTLY_ACTIVE = "1.375",
  MODERATELY_ACTIVE = "1.55",
  VERY_ACTIVE = "1.725",
  SUPER_ACTIVE = "1.9",
}
