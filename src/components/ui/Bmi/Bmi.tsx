import { BMI_RANGES_TEXT_MAP } from "@/types/consts";
import BmiTable from "../BmiTable/BmiTable";
import { getBMIScore } from "@/lib/bmi";

type BMIProps = {
  bmi: number;
};

export default function BMI({ bmi }: BMIProps) {
  const bmiClassification = getBMIScore(bmi);

  return (
    <>
      <p>BMI Score: {bmi}</p>
      <p>
        Your BMI is {bmi}, which means you are classified as{" "}
        {BMI_RANGES_TEXT_MAP[bmiClassification]}
      </p>
      <BmiTable bmi={bmi} />
    </>
  );
}
