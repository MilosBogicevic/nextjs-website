import Image from "next/image";
import Link from "next/link";
import Logo from "/public/logo.svg"

export default function Header() {
  return (
    <div className="w-full absolute bg-white z-10">
      <nav className="container relative flex flex-col md:flex-row justify-between items-center mx-auto p-8 gap-y-8">
        <Link href="/">
          <Image src={Logo} alt="" width={200} height={50} className="transition-transform hover:scale-105"/>
        </Link>
        <div className="flex flex-col items-center sm:flex-row gap-x-8 gap-y-4 text-xl text-primary font-bold">
          <Link href="/what-we-do" className="hover:border-b-2 hover:border-primary">what we do</Link>
          <Link href="/who-we-are" className="hover:border-b-2 hover:border-primary">who we are</Link>
          <Link href="/contact" className="border px-4 py-2 bg-primary text-secondary hover:bg-primary-light transition-transform">let&apos;s talk</Link>
        </div>
      </nav>
    </div>
  );
}
