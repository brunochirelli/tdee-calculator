export const getGoalDateBasedOnCaloriesSaving = (
  caloryDeficit: number,
  weightGoal: number,
  actualWeight: number,
) => {
  const daysToLoseOneKg = (7700 / caloryDeficit) * (actualWeight - weightGoal);
  const today = new Date();
  const goalDate = new Date(today);
  goalDate.setDate(today.getDate() + daysToLoseOneKg);
  return goalDate;
};

export const getKgFromCalory = (dailyCalories: number) => {
  return (dailyCalories * 7) / 7700;
};
