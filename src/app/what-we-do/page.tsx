import Hero from "@/components/Hero";
import homeImg from "/public/hero-image-2.jpg";
import { Metadata } from "next";
import TextWithImage from "@/components/TextWithImage";
import Spacer from "@/components/Spacer";
import CallToAction from "@/components/CallToAction";

export const metadata: Metadata = {
  title: "What we do",
  description:
    "We design, develop, and deliver exceptional eCommerce experiences.",
};

export default function WhatWeDoPage() {
  return (
    <>
      <Hero
        imgData={homeImg}
        imgAlt="What we do"
        title="We design, develop, and deliver exceptional eCommerce experiences."
      />
      <Spacer height="h-20 md:h-40" />
      <TextWithImage />
      <Spacer height="h-20 md:h-40" />
      <CallToAction
        imgData={homeImg}
        imgAlt="Call to action"
        title="Still not sure? Let's make a meeting."
      />
      <Spacer height="h-20 md:h-40" />
    </>
  );
}
