import React from "react";

interface SpacerProps {
  height: string;
}

export default function Spacer(props: SpacerProps) {
  return <div className={`${props.height}`}></div>;
}
