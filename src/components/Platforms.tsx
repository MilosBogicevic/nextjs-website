import Image from "next/image";
import SectionHeading from "./SectionHeading";
import PlatformsData from "@/app/data/platforms.json";

export default function Platforms() {
  return (
    <>
      <div className="flex flex-col items-center gap-y-20 px-4 text-center">
        <SectionHeading title="Technology platforms" />
        <div className="flex justify-center gap-8 flex-wrap">
          {PlatformsData.map((platform, index) => (
            <div key={index}>
              <Image
                src={platform.image}
                alt=""
                width={platform.width}
                height={platform.height}
                className="transition-transform hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
