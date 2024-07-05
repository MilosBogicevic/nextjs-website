import SectionHeading from "./SectionHeading";

interface AboutSectionProps {
  title: string;
  text: string;
}

export default function AboutSection(props: AboutSectionProps) {
  return (
    <>
      <div className="px-4 md:px-20 flex justify-center items-center flex-col max-w-[1200px] mx-auto gap-y-10">
        <SectionHeading title={props.title} />
        <p className="text-xl md:text-3xl text-center">{props.text}</p>
      </div>
    </>
  );
}
