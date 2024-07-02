import React from "react";
import InfoGridData from "@/app/data/info-grid.json";
import Image from "next/image";

export default function TextWithImage() {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-1 gap-10 max-w-screen-lg w-full px-4">
        {InfoGridData.map((el, index) => (
          <div
            key={index}
            className={`${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } flex flex-col border border-gray-200 rounded bg-primary p-8 md:p-12 transition-transform ease-in-out hover:scale-105`}
          >
            <div className="w-full md:w-1/2 h-48 md:h-auto">
              <Image
                src={el.image}
                alt=""
                width={200}
                height={200}
                className="w-full h-full object-cover rounded"
              />
            </div>
            <div className="w-full md:w-1/2 pt-8 md:p-12">
              <h2 className="text-2xl font-bold text-secondary">{el.title}</h2>
              <p className="mt-2 text-xl text-white">{el.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
