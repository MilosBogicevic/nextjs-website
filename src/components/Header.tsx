import Image from "next/image";
import Link from "next/link";
import Logo from "/public/logo.svg"

export default function Header() {
  return (
    <div className="w-full absolute bg-white z-10">
      <nav className="container relative flex flex-wrap justify-between items-center mx-auto p-8">
        <Link href="/" className="font-bold text-3xl">
          <Image src={Logo} alt="" fill className="max-w-[200px] w-full"/>
        </Link>
        <div className="space-x-10 text-xl">
          <Link href="/what-we-do">what we do</Link>
          <Link href="/who-we-are">who we are</Link>
          <Link href="/contact" className="border px-4 py-2 bg-primary text-secondary">let&apos;s talk</Link>
        </div>
      </nav>
    </div>
  );
}
