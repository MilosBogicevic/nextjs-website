import Image from "next/image";
import Link from "next/link";
import Logo from "/public/logo.svg";
import SocialNetworks from "./SocialNetworks";

export default function Footer() {
  return (
    <footer className="flex w-full border-t border-gray-200 p-8">
      <div className="flex container mx-auto items-center justify-between flex-col md:flex-row gap-y-8">
        <div className="flex flex-col items-center md:items-start">
          <Link href="/">
            <Image
              src={Logo}
              alt="ECSMB Logo"
              width={150}
              height={45}
              className="transition-transform hover:scale-105"
            />
          </Link>
          <p className="mt-2 text-center md:text-left">
            @ 2024 ECSMB. All Rights Reserved.
          </p>
        </div>
        <SocialNetworks />
      </div>
    </footer>
  );
}
