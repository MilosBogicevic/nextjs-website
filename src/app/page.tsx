import Hero from "@/components/Hero";
import homeImg from "/public/hero-image-1.jpg";

export default function Home() {
  return (
    <>
      <Hero
        imgData={homeImg}
        imgAlt="Hero image for home page"
        title="We offer high performance eCommerce solutions"
      />
    </>
  );
}
