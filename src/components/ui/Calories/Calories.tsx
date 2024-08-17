type CaloriesProps = {
  calories: number;
};

export default function Calories({ calories }: CaloriesProps) {
  const caloriesPerWeek = calories * 7;

  return (
    <>
      <p>{calories} calories per day</p>
      <p>{caloriesPerWeek} calories per week</p>
    </>
  );
}
