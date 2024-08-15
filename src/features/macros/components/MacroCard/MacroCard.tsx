import { CARB, FAT, PROTEIN } from "@/types/consts";

type MacroCardProps = {
  info: string;
  carbs: number;
  proteins: number;
  fats: number;
};

export default function MacrosCard({
  info,
  carbs,
  proteins,
  fats,
}: MacroCardProps) {
  return (
    <div>
      <p>{info}</p>
      <p>{Math.round(proteins / PROTEIN)}g protein</p>
      <p>{Math.round(fats / FAT)}g fat</p>
      <p>{Math.round(carbs / CARB)}g carb</p>
    </div>
  );
}
