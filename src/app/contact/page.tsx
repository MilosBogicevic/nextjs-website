import Hero from "@/components/Hero";
import homeImg from "/public/hero-image-3.jpg";

export default function ContactPage() {
    return (
      <>
        <Hero
        imgData={homeImg}
        imgAlt="Contact Us"
        title="We are a modern consulting company focused on strategy, technology, and business transformation."
      />
      </>
    );
  }
  