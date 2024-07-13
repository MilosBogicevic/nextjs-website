interface TitleWithDescriptionProps {
  title: string;
  text: string;
}

export default function TitleWithDescription(props: TitleWithDescriptionProps) {
  return (
    <>
      <div className="flex flex-col gap-y-8">
        <h3 className="text-[30px] sm:text-[40px] leading-tight font-bold text-primary">
          {props.title}
        </h3>
        <p className="text-[20px] sm:text-[30px] leading-tight text-primary-light">
          {props.text}
        </p>
      </div>
    </>
  );
}
