import Link from "next/link";

export default function Header() {
  return (
    <div className="w-full absolute text-white z-10">
      <nav className="container relative flex flex-wrap justify-between items-center mx-auto p-8">
        <Link href="/" className="font-bold text-3xl">
          Home
        </Link>
        <div className="space-x-10 text-xl">
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </nav>
    </div>
  );
}
