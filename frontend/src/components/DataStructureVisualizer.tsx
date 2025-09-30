import type React from "react";

type Props = {
  data: (number | string)[];
  highlighted: number[];
  direction?: "vertical" | "horizontal";
  width?: string;
  height?: string;
};

export const DataStructureVisualizer: React.FC<Props> = ({
  data,
  highlighted,
  direction = "vertical",
  width = "w-24",
  height = "h-48",
}) => {
  return (
    <div
      className={`flex ${
        direction === "vertical" ? "flex-col-reverse" : "flex-row"
      } gap-2 border-2 border-gray-400 p-4 rounded-md items-center justify-center ${width} ${height} overflow-auto`}
    >
      {data.map((value, idx) => (
        <div
          key={idx}
          className={`flex justify-center items-center rounded px-2 py-1 text-center ${
            highlighted.includes(idx) ? "bg-orange-400" : "bg-cyan-400"
          } transition-colors`}
        >
          {value}
        </div>
      ))}
    </div>
  );
};
