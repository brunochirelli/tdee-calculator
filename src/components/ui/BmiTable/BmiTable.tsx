import { getBMIScore } from "@/lib/bmi";
import {
  BMI_LEVELS,
  BMI_RANGES_TEXT_MAP,
  BMI_SCORE_TEXT_MAP,
} from "@/types/consts";

type BmiTableProps = {
  bmi: number;
};

export default function BmiTable({ bmi }: BmiTableProps) {
  const bmiScore = getBMIScore(bmi);
  const bmiLevels = Object.values(BMI_LEVELS);

  return (
    <table>
      <tbody>
        {bmiLevels.map((level) => (
          <tr
            key={`bmi-level-${level}`}
            className={bmiScore === level ? "font-bold" : ""}
          >
            <td>{BMI_SCORE_TEXT_MAP[level]}</td>
            <td>{BMI_RANGES_TEXT_MAP[level]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
