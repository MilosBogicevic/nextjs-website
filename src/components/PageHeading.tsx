interface PageHeadingProps {
  title: string;
}

export default function PageHeading(props: PageHeadingProps) {
  return (
    <>
      <div className="text-center md:text-left flex justify-center items-center">
        <h1 className="text-white text-[20px] xs:text-[30px] sm:text-[40px] md:text-[60px] leading-tight max-w-[1200px]">
          {props.title}
        </h1>
      </div>
    </>
  );
}
