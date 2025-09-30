import { useState } from "react";
import { Button } from "./Button";
import { DataStructureVisualizer } from "./DataStructureVisualizer";

type QueueElement = { value: number; priority?: number };

type Props = {
  type?: "normal" | "priority";
};

export const Queue: React.FC<Props> = ({ type = "normal" }) => {
  const [queue, setQueue] = useState<QueueElement[]>([]);
  const [highlighted, setHighlighted] = useState<number[]>([]);

  const enqueue = () => {
    const val = Math.floor(Math.random() * 100);
    const newEl =
      type === "priority"
        ? { value: val, priority: Math.floor(Math.random() * 10) }
        : { value: val };
    const newQueue = [...queue, newEl];

    if (type === "priority") {
      newQueue.sort((a, b) => (b.priority ?? 0) - (a.priority ?? 0));
    }

    setQueue(newQueue);
    setHighlighted([queue.length]);
  };

  const dequeue = () => {
    if (!queue.length) return;
    setHighlighted([0]);
    setTimeout(() => setQueue((prev) => prev.slice(1)), 300);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex gap-4">
        <Button text="Enqueue" onClickFunc={enqueue} />
        <Button text="Dequeue" onClickFunc={dequeue} />
      </div>
      <DataStructureVisualizer
        data={queue.map((e) =>
          type === "priority" && e.priority !== undefined
            ? `${e.value} (p:${e.priority})`
            : e.value.toString()
        )}
        highlighted={highlighted}
        direction="horizontal"
        width="w-full"
        height="h-24"
      />
    </div>
  );
};
