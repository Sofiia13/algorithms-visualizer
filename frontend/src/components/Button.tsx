import type React from "react";

type Props = {
  text: string;
  onClickFunc: () => void;
  tooltip?: string;
  disabled?: boolean;
  className?: string;
};

export const Button: React.FC<Props> = ({
  text,
  onClickFunc,
  tooltip,
  disabled,
  className,
}) => {
  return (
    <div className="relative group">
      <button
        disabled={disabled}
        onClick={onClickFunc}
        className={`bg-[#ffd803] hover:bg-yellow-400 cursor-pointer text-black font-bold py-2 px-4 rounded ${className}`}
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
