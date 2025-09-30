import type React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
  LabelList,
} from "recharts";

type Props = { array: number[]; highlighted: number[] };

export const ArrayChart: React.FC<Props> = ({ array, highlighted }) => {
  const data = array.map((value, idx) => ({
    index: idx,
    value,
    fill: highlighted.includes(idx) ? "orange" : "#22d3ee",
  }));

  return (
    <div className="flex justify-center items-center py-6">
      <div className="border-2 border-gray-400 rounded-xl p-6 bg-white shadow-md w-[70%]">
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={data}>
            <XAxis dataKey="index" hide />
            <YAxis hide />
            <Tooltip />
            <Bar dataKey="value">
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
              <LabelList dataKey="value" position="top" />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
