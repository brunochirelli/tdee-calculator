import { BMI_RANGES_TEXT_MAP } from "@/types/consts";
import BmiTable from "../BmiTable/BmiTable";
import { getBMIScore } from "@/lib/bmi";

type BMIProps = {
  bmi: number;
};

export default function BMI({ bmi }: BMIProps) {
  const bmiClassification = getBMIScore(bmi);

  const removeTrailingZeros = (strNumber: string) =>
    strNumber.replace(/\.?0*$/, "");

  const fixedBmi = removeTrailingZeros(bmi.toFixed(2));

  return (
    <div className="space-y-2">
      <p className="font-semibold text-2xl">BMI Score: {fixedBmi}</p>
      <p>
        Your <b>BMI</b> is <b>{fixedBmi}</b>, which means you are classified as{" "}
        <b>{BMI_RANGES_TEXT_MAP[bmiClassification]}</b>...
      </p>
      <BmiTable bmi={fixedBmi} />
    </div>
  );
}
