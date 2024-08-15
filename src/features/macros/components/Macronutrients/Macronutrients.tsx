import MacrosCard from "../MacroCard/MacroCard";

type MacronutrientsProps = {
  calories: number;
};

export default function Macronutrients({ calories }: MacronutrientsProps) {
  return (
    <>
      <MacrosCard
        info="Moderate Carb (30/35/35)"
        proteins={calories * 0.3}
        fats={calories * 0.35}
        carbs={calories * 0.35}
      />
      <MacrosCard
        info="Lower Carb (40/40/20)"
        proteins={calories * 0.4}
        fats={calories * 0.4}
        carbs={calories * 0.2}
      />
      <MacrosCard
        info="Higher Carb (30/20/50)"
        proteins={calories * 0.3}
        fats={calories * 0.2}
        carbs={calories * 0.5}
      />
    </>
  );
}
