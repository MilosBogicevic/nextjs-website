import Link from "next/link";

export default function Header() {
  return (
    <div className="mb-20 flex gap-x-5">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
    </div>
  );
}
