export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="p-4 text-sm bg-slate-700 text-white">
      {currentYear === 2024 ? 2024 : `${2024}-${currentYear}`} &copy; Tdee
      Calculator
    </footer>
  );
}
