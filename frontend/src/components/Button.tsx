import type React from "react";

type Props = {
  text: string;
  onClickFunc: () => void;
};

export const Button: React.FC<Props> = ({ text, onClickFunc }) => {
  return <button onClick={onClickFunc}>{text}</button>;
};
