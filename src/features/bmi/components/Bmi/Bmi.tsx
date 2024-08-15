import { BMI_RANGES_TEXT_MAP } from "@/types/consts";
import { getBMIScore } from "../../utils/bmi";
import BmiTable from "../BmiTable/BmiTable";

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
