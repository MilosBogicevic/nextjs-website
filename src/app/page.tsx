import Hero from "@/components/Hero";
import homeImg from "/public/hero-image-1.jpg";
import AboutSection from "@/components/AboutSection";
import { Metadata } from "next";
import InfoGrid from "@/components/InfoGrid";
import Spacer from "@/components/Spacer";
import CallToAction from "@/components/CallToAction";

export const metadata: Metadata = {
  title: "ECSMB - High-Performance eCommerce solutions",
  description: "Innovative eCommerce Solutions for Maximum Impact.",
};

export default function Home() {
  return (
    <>
      <Hero
        imgData={homeImg}
        imgAlt="Hero image for home page"
        title="Innovative eCommerce Solutions for Maximum Impact."
      />
      <Spacer height="h-20 md:h-40" />
      <AboutSection
        title="About Us"
        text="ECSMB is a consulting and software development company specializing in comprehensive eCommerce solutions for the world's most innovative brands. We empower entrepreneurs with tools and strategies that transform their eCommerce stores into exceptional platforms."
      />
      <Spacer height="h-20 md:h-40" />
      <InfoGrid />
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
