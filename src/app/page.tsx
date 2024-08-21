import TdeeForm from "@/components/forms/TdeeForm/TdeeForm";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <div className="text-center p-8">
        <h1 className="text-2xl mb-4 font-bold">
          Learn how many calories you burn every day
        </h1>
        <p>
          Use the tdee calculator to learn your total daily energy expenditure,
          a measure of how many calories you burn per day. This calories
          calculator will also display your BMI, BMR and Macros.
        </p>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <TdeeForm />
      </Suspense>
    </>
  );
}
