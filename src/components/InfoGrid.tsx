import React from "react";
import InfoGridData from "@/app/data/info-grid.json";

export default function InfoGrid() {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-screen-lg w-full px-4">
        {InfoGridData.map((el, index) => (
          <div
            key={index}
            className="relative border border-gray-200 rounded-3xl overflow-hidden transition-transform ease-in-out hover:scale-105"
            style={{
              backgroundImage: `url(${el.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-primary opacity-90"></div>
            <div className="relative p-8 md:p-12">
              <h2 className="text-2xl font-bold text-secondary">{el.title}</h2>
              <p className="mt-2 text-xl text-white">{el.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
