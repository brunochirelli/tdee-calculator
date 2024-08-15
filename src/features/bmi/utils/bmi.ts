export const calculateBMI = (weightInKg: number, heightInCm: number) => {
  const heightInM = heightInCm / 100;
  return Math.round((weightInKg / heightInM ** 2 + Number.EPSILON) * 100) / 100;
};

export const getBMIScore = (bmi: number): number => {
  if (bmi <= 18.5) {
    return 0;
  } else if (bmi < 24.9) {
    return 1;
  } else if (bmi < 29.9) {
    return 2;
  } else {
    return 3;
  }
};
