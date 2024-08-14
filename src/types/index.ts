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
