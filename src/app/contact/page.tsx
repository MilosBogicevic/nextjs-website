import Hero from "@/components/Hero";
import homeImg from "/public/hero-image-3.jpg";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Let's Discuss Your Business Transformation Needs",
};

export default function ContactPage() {
    return (
      <>
        <Hero
        imgData={homeImg}
        imgAlt="Contact Us"
        title="Let's Discuss Your Business Transformation Needs"
      />
      </>
    );
  }
  