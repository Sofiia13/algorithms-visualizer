import type React from "react";

type Props = {
  text: string;
  onClickFunc: () => void;
  tooltip?: string;
};

export const Button: React.FC<Props> = ({ text, onClickFunc, tooltip }) => {
  return (
    <div className="relative group">
      <button
        onClick={onClickFunc}
        className="bg-[#7dd8e8] hover:bg-cyan-500 cursor-pointer text-black font-bold py-2 px-4 rounded"
      >
        {text}
      </button>
      {tooltip && (
        <span className="absolute bottom-full mb-2 hidden group-hover:block w-60 bg-gray-800 text-white text-sm p-2 rounded shadow-lg">
          {tooltip}
        </span>
      )}
    </div>
  );
};
