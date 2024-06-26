import Hero from "@/components/Hero";
import homeImg from "/public/hero-image-1.jpg";
import InfoSectionBelowHero from "@/components/InfoSectionBelowHero";

export default function Home() {
  return (
    <>
      <Hero
        imgData={homeImg}
        imgAlt="Hero image for home page"
        title="We offer high performance eCommerce solutions"
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
