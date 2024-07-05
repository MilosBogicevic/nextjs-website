import { ReactNode } from "react";

interface PageHeadingProps {
  title: string;
}

export default function PageHeading(props: PageHeadingProps) {
  return (
    <>
      <div className="px-10 text-center md:text-left flex justify-center items-center">
        <h1 className="text-white text-[40px] md:text-[60px] xl:text-[80px] leading-tight max-w-[1200px]">
          {props.title}
        </h1>
      </div>
    </>
  );
}