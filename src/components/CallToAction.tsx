import type { StaticImageData } from "next/image";
import Image from "next/image";
import Button from "./Button";

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
          <Button url="/contact" size="big" text="Contact Us" />
        </div>
      </div>
    </>
  );
}
