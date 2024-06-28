import Hero from "@/components/Hero";
import homeImg from "/public/hero-image-2.jpg";

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
