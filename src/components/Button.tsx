"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface ButtonProps {
  url: string;
  size: "big" | "small";
  text: string;
  onClick?: () => void;
}

export default function Button(props: ButtonProps) {
  const pathname = usePathname();

  return (
    <>
      <Link
        href={props.url}
        className={`${
          props.size === "big"
            ? "px-4 py-2 sm:px-8 sm:py-4 text-3xl"
            : "px-4 py-2 text-xl"
        } ${
          pathname === "/contact"
            ? "bg-secondary text-primary border-2 border-primary"
            : "bg-primary text-secondary hover:bg-primary-light transition-transform"
        }`}
        onClick={props.onClick}
      >
        {props.text}
      </Link>
    </>
  );
}
