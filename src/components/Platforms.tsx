import Image from "next/image";
import Logo from "/public/logo.svg";
import SectionHeading from "./SectionHeading";

export default function Platforms() {
  return (
    <>
      <div className="flex flex-col items-center gap-y-20 px-4 text-center">
        <SectionHeading title="Technology platforms" />
        <div className="flex justify-center gap-8 flex-wrap">
          <div>
            <Image
              src={Logo}
              alt=""
              width={200}
              height={50}
              className="transition-transform hover:scale-105"
            />
          </div>
          <div>
            <Image
              src={Logo}
              alt=""
              width={200}
              height={50}
              className="transition-transform hover:scale-105"
            />
          </div>
          <div>
            <Image
              src={Logo}
              alt=""
              width={200}
              height={50}
              className="transition-transform hover:scale-105"
            />
          </div>
        </div>
      </div>
    </>
  );
}
