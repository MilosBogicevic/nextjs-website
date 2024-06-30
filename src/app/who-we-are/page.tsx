import Hero from "@/components/Hero";
import homeImg from "/public/hero-image-2.jpg";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Who we are",
  description: "",
};

export default function WhoWeArePage() {
  return (
    <>
      <Hero
        imgData={homeImg}
        imgAlt="Who we are"
        title="We design, develop, and deliver eCommerce experiences"
      />
    </>
  );
}
