import { cn } from "@/lib/utils";
import { ActivityLevel } from "@/types";
import { ACTIVITY_NAME_MAP } from "@/types/consts";

type CaloriesTableProps = {
  bmr: number;
  activityLevel: string;
};

export default function CaloriesTable({
  bmr,
  activityLevel,
}: CaloriesTableProps) {
  const availableActivityLevels = Object.values(ActivityLevel);

  return (
    <table className="w-full">
      <tbody>
        {availableActivityLevels.map((activityLevelValue) => (
          <tr
            key={activityLevelValue}
            className={cn(
              { "font-bold": activityLevel === activityLevelValue },
              "w-full border-b",
            )}
          >
            <td className="w-[50%]">{ACTIVITY_NAME_MAP[activityLevelValue]}</td>
            <td className="w-[50%]">
              {Math.ceil(bmr * +activityLevelValue)} calories per day
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
