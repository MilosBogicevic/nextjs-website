import Hero from "@/components/Hero";
import homeImg from "/public/hero-image-2.jpg";

export default function AboutPage() {
  return (
    <>
      <Hero
        imgData={homeImg}
        imgAlt="About Us"
        title="We design, develop, and deliver eCommerce experiences"
      />
    </>
  );
}
