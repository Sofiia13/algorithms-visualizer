import type React from "react";

type Props = {
  text: string;
  onClickFunc: () => void;
};

export const Button: React.FC<Props> = ({ text, onClickFunc }) => {
  return (
    <button
      className="bg-yellow-400 hover:bg-amber-300 text-black font-bold py-2 px-4 rounded-full cursor-pointer"
      onClick={onClickFunc}
    >
      {text}
    </button>
  );
};
