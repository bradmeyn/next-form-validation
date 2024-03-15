import Link from "next/link";

export default async function Header() {
  return (
    <header className="flex justify-between container py-4">
      <span className="text-slate-900 font-bold ">Next Forms</span>
    </header>
  );
}
