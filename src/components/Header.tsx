"use client";
import Image from "next/image";
import Link from "next/link";
import Logo from "/public/logo.svg";
import MenuIcon from "/public/menu-icon.svg";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const pathname = usePathname();

  return (
    <div className="w-full fixed top-0 bg-white z-10 shadow-md">
      <nav className="container relative flex flex-col md:flex-row justify-between items-center mx-auto p-4">
        <div className="flex w-full md:w-auto justify-between gap-x-8">
          <Link href="/" onClick={closeMenu}>
            <Image
              src={Logo}
              alt=""
              width={200}
              height={50}
              className="transition-transform hover:scale-105"
            />
          </Link>
          <div className="flex md:hidden cursor-pointer" onClick={toggleMenu}>
            <Image
              src={MenuIcon}
              alt=""
              width={50}
              height={50}
              className="transition-transform hover:scale-105"
            />
          </div>
        </div>
        <div
          className={`flex flex-col items-center sm:flex-row gap-x-8 gap-y-4 text-xl text-primary font-bold transition-all duration-200 ease-in-out overflow-hidden ${
            isMenuOpen
              ? "max-h-screen opacity-100 mt-8 md:mt-0"
              : "max-h-0 opacity-0"
          } md:max-h-none md:opacity-100 md:flex`}
        >
          <Link
            href="/what-we-do"
            className={
              pathname === "/what-we-do"
                ? "border-b-2 border-primary"
                : "border-b-2 border-transparent hover:border-b-2 hover:border-primary"
            }
            onClick={closeMenu}
          >
            what we do
          </Link>
          <Link
            href="/who-we-are"
            className={
              pathname === "/who-we-are"
                ? "border-b-2 border-primary"
                : "border-b-2 border-transparent hover:border-b-2 hover:border-primary"
            }
            onClick={closeMenu}
          >
            who we are
          </Link>
          <Link
            href="/contact"
            className={`border-2 border-primary px-4 py-2 ${
              pathname === "/contact"
                ? "bg-secondary text-primary"
                : "bg-primary text-secondary hover:bg-primary-light transition-transform"
            }`}
            onClick={closeMenu}
          >
            let&apos;s talk
          </Link>
        </div>
      </nav>
    </div>
  );
}
