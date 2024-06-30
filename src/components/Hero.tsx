import type { StaticImageData } from "next/image";
import Image from "next/image";

interface HeroProps {
  imgData: StaticImageData;
  imgAlt: string;
  title: string;
}

export default function Hero(props: HeroProps) {
  return (
    <>
      <div className="relative h-[100vh] flex justify-center items-center pt-[280px] md:pt-[120px]">
        <div className="absolute -z-10 inset-0">
          <Image
            src={props.imgData}
            alt={props.imgAlt}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>
        <div className="px-10 text-center md:text-left flex justify-center items-center">
          <h1 className="text-white text-xl sm:text-3xl md:text-5xl xl:text-6xl max-w-[800px]">{props.title}</h1>
        </div>
      </div>
    </>
  );
}
