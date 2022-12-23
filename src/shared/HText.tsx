import React from "react";

type Props = {
  children: React.ReactNode;
};

const HText = ({ children }: Props) => {
  return (
    <h1 className="font-monteserrat basis-3/5 text-3xl font-bold">
      {children}
    </h1>
  );
};

export default HText;
