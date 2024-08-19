import Link from "next/link";

export default function Header() {
  return (
    <div>
      <header className="bg-slate-700 text-white px-4">
        <Link href="/" className="text-2xl inline-block py-2">
          Tdee Calculator
        </Link>
      </header>
    </div>
  );
}
