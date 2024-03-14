import Link from "next/link";

export default async function Header() {
  return (
    <header className="flex justify-between container py-4">
      <span className="text-slate-900 font-bold ">Next Forms</span>
      <Links />
    </header>
  );
}

function Links() {
  return (
    <Link
      href="/server-action-form"
      className="rounded-full bg-tremor-brand text-white py-2 px-5 "
    >
      Server Action Form
    </Link>
  );
}
