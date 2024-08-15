type MacroCardProps = {
  info: string;
  carbs: number;
  proteins: number;
  fats: number;
};

export default function MacroCard({
  info,
  carbs,
  proteins,
  fats,
}: MacroCardProps) {
  return (
    <div>
      <p>{info}</p>
      <p>{proteins}g protein</p>
      <p>{fats}g fat</p>
      <p>{carbs}g carb</p>
    </div>
  );
}
