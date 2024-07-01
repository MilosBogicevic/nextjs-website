import React from "react";

interface SpacerProps {
  height: string;
}

const Spacer: React.FC<SpacerProps> = (prop) => {
  return <div className={`${prop.height}`}></div>;
};

export default Spacer;
