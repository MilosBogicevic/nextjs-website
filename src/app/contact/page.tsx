import Hero from "@/components/Hero";
import homeImg from "/public/hero-image-3.jpg";
import { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import Spacer from "@/components/Spacer";

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
      <Spacer height="h-20 md:h-40" />
      <ContactForm />
      <Spacer height="h-20 md:h-40" />
    </>
  );
}
