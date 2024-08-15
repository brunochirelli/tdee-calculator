import { Female, Male } from "@/types";
import { calculateIBW } from "../../lib/idealWeight";

type IdealWeightProps = {
  height: number;
  sex: Female | Male;
};

export default function IdealWeight({ height, sex }: IdealWeightProps) {
  const ibw = calculateIBW(sex, height);

  return <p>Your ideal body weight is estimated to be {ibw}</p>;
}
