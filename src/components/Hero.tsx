import type { StaticImageData } from "next/image";
import Image from "next/image";
import PageHeading from "./PageHeading";

interface HeroProps {
  imgData: StaticImageData;
  imgAlt: string;
  title: string;
}

export default function Hero(props: HeroProps) {
  return (
    <>
      <div className="relative h-[100vh] flex justify-center items-center pt-[120px]">
        <div className="absolute -z-10 inset-0">
          <Image
            src={props.imgData}
            alt={props.imgAlt}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>
        <PageHeading>{props.title}</PageHeading>
      </div>
    </>
  );
}
