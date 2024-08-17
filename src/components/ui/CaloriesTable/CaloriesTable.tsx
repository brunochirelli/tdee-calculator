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
    <div>
      <table>
        <tbody>
          {availableActivityLevels.map((activityLevelValue) => (
            <tr
              key={activityLevelValue}
              className={
                activityLevel === activityLevelValue ? "font-bold" : ""
              }
            >
              <td>{ACTIVITY_NAME_MAP[activityLevelValue]}</td>
              <td>{Math.ceil(bmr * +activityLevelValue)} calories per day</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
