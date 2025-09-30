import { useState } from "react";
import { Button } from "./Button";
import { DataStructureVisualizer } from "./DataStructureVisualizer";

export const Stack = () => {
  const [stack, setStack] = useState<number[]>([]);
  const [highlighted, setHighlighted] = useState<number[]>([]);

  const push = () => {
    const val = Math.floor(Math.random() * 100);
    setStack(prev => [...prev, val]);
    setHighlighted([stack.length]);
  };

  const pop = () => {
    if (!stack.length) return;
    setHighlighted([stack.length - 1]);
    setTimeout(() => setStack(prev => prev.slice(0, -1)), 300);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex gap-4">
        <Button text="Push" onClickFunc={push} />
        <Button text="Pop" onClickFunc={pop} />
      </div>
      <DataStructureVisualizer
        data={stack}
        highlighted={highlighted}
        direction="vertical"
        width="w-24"
        height="h-64"
      />
    </div>
  );
};
