interface InfoSectionProps {
  title: string;
  text: string;
}

export default function InfoSection(props: InfoSectionProps) {
  return (
    <>
      <div className="py-40 px-20 flex justify-center items-center flex-col max-w-[1200px] mx-auto gap-y-10">
        <h2 className="font-bold text-6xl">{props.title}</h2>
        <p className="text-3xl text-center">{props.text}</p>
      </div>
    </>
  );
}
