import { getBMIScore } from "@/lib/bmi";
import { cn } from "@/lib/utils";
import {
  BMI_LEVELS,
  BMI_RANGES_TEXT_MAP,
  BMI_SCORE_TEXT_MAP,
} from "@/types/consts";

type BmiTableProps = {
  bmi: number | string;
};

export default function BmiTable({ bmi }: BmiTableProps) {
  const bmiScore = getBMIScore(+bmi);
  const bmiLevels = Object.values(BMI_LEVELS);

  return (
    <table className="w-full">
      <tbody>
        {bmiLevels.map((level) => (
          <tr
            key={`bmi-level-${level}`}
            className={cn(
              { "font-bold": bmiScore === level },
              "w-full border-b",
            )}
          >
            <td className="w-[50%]">{BMI_SCORE_TEXT_MAP[level]}</td>
            <td className="w-[50%]">{BMI_RANGES_TEXT_MAP[level]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
