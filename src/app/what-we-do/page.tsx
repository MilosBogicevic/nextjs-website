import Hero from "@/components/Hero";
import homeImg from "/public/hero-image-2.jpg";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "What we do",
  description: "We design, develop, and deliver exceptional eCommerce experiences.",
};

export default function WhatWeDoPage() {
  return (
    <>
      <Hero
        imgData={homeImg}
        imgAlt="What we do"
        title="We design, develop, and deliver exceptional eCommerce experiences."
      />
    </>
  );
}
