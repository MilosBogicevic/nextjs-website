import Hero from "@/components/Hero";
import homeImg from "/public/hero-image-1.jpg";
import InfoSectionBelowHero from "@/components/InfoSectionBelowHero";
import { Metadata } from "next";

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
      <InfoSectionBelowHero
        title="About Us"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
          reprehenderit voluptatem magni laborum commodi? Facere quae nisi
          laboriosam ut earum? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Obcaecati culpa voluptatibus, sequi illo sunt ad.
          Est odit laborum autem a."
      />
    </>
  );
}
