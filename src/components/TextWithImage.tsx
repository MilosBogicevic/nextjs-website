import React from "react";
import InfoGridData from "@/app/data/text-with-image-data.json";
import Image from "next/image";
import TitleWithDescription from "./TitleWithDescription";

export default function TextWithImage() {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-1 gap-10 max-w-screen-lg w-full px-4">
        {InfoGridData.map((el, index) => (
          <div
            key={index}
            className={`${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } flex flex-col py-8 md:py-12`}
          >
            <div className="w-full md:w-1/2 h-auto">
              <Image
                src={el.image}
                alt=""
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full md:w-1/2 pt-8 md:pt-0 md:p-12">
              <TitleWithDescription title={el.title} text={el.description} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
