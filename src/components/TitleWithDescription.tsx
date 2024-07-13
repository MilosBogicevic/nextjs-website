interface TitleWithDescriptionProps {
  title: string;
  text: string;
}

export default function TitleWithDescription(props: TitleWithDescriptionProps) {
  return (
    <>
      <h3 className="text-2xl font-bold text-primary">{props.title}</h3>
      <p className="mt-2 text-xl text-primary-light">{props.text}</p>
    </>
  );
}
