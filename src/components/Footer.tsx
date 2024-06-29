import Image from "next/image";
import Link from "next/link";
import Logo from "/public/logo.svg";
import InstagramIcon from "/public/ecsmb-instagram.svg";
import FacebookIcon from "/public/ecsmb-facebook.svg";
import PinterestIcon from "/public/ecsmb-pinterest.svg";

export default function Footer() {
  return (
    <footer className="flex w-full border-t border-gray-200 p-8">
      <div className="flex container mx-auto items-center justify-between">
        <div className="flex flex-col">
          <Link href="/">
            <Image
              src={Logo}
              alt="ECSMB Logo"
              width={150}
              height={45}
              className="transition-transform hover:scale-105"
            />
          </Link>
          <p className="mt-2">@ 2024 ECSMB. All Rights Reserved.</p>
        </div>
        <div className="flex space-x-4">
          <Link href="https://www.facebook.com">
            <Image
              src={FacebookIcon}
              alt="ECSMB Facebook page"
              width={40}
              height={40}
              className="transition-transform hover:scale-105"
            />
          </Link>
          <Link href="https://www.instagram.com">
            <Image
              src={InstagramIcon}
              alt="ECSMB Instagram page"
              width={40}
              height={40}
              className="transition-transform hover:scale-105"
            />
          </Link>
          <Link href="https://www.pinterest.com">
            <Image
              src={PinterestIcon}
              alt="ECSMB Pinterest account"
              width={40}
              height={40}
              className="transition-transform hover:scale-105"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}
