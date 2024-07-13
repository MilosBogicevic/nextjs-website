import Hero from "@/components/Hero";
import homeImg from "/public/hero-image-2.jpg";
import { Metadata } from "next";
import Spacer from "@/components/Spacer";
import CallToAction from "@/components/CallToAction";

export const metadata: Metadata = {
  title: "Who we are",
  description:
    "We are a modern consulting company focused on strategy, technology, and business transformation.",
};

export default function WhoWeArePage() {
  return (
    <>
      <Hero
        imgData={homeImg}
        imgAlt="Who we are"
        title="We are a modern consulting company focused on strategy, technology, and business transformation."
      />
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
