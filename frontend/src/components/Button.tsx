import type React from "react";

type Props = {
  text: string;
  onClickFunc: () => void;
};

export const Button: React.FC<Props> = ({ text, onClickFunc }) => {
  return (
    <button
      className="bg-[#ffd803] hover:bg-amber-300 text-[#272343] font-bold py-2 px-4 rounded-full cursor-pointer"
      onClick={onClickFunc}
    >
      {text}
    </button>
  );
};
