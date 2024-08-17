import Link from "next/link";

export default function Header() {
  return (
    <div>
      <header className="bg-slate-700 text-white px-4">
        <Link href="/" className="text-2xl inline-block py-2">
          Tdee Calculator
        </Link>
      </header>
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
    </div>
  );
}
