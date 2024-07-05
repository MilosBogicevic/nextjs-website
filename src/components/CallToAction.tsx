import type { StaticImageData } from "next/image";
import Image from "next/image";
import Link from "next/link";

interface CallToActionProps {
  imgData: StaticImageData;
  imgAlt: string;
  title: string;
}

export default function CallToAction(props: CallToActionProps) {
  return (
    <>
      <div className="relative h-[40vh] flex justify-center items-center">
        <div className="absolute -z-10 inset-0">
          <Image
            src={props.imgData}
            alt={props.imgAlt}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-80"></div>
        </div>
        <div className="flex flex-col justify-center items-center gap-y-10">
          <h3 className="text-white text-center px-8 text-3xl sm:text-5xl max-w-[900px]">
            {props.title}
          </h3>
          <Link
            href="/contact"
            className="text-3xl border-2 border-secondary px-4 py-2 sm:px-8 sm:py-4 bg-primary text-secondary hover:bg-primary-light transition-transform"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </>
  );
}
