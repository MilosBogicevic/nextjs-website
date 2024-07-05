import { ReactNode } from "react";

interface SectionHeadingProps {
  title: string;
}

export default function SectionHeading(props: SectionHeadingProps) {
  return (
    <>
      <h2 className="font-bold text-3xl md:text-6xl">{props.title}</h2>
    </>
  );
}
