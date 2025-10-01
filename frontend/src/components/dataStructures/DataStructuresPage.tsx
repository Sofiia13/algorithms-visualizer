import type React from "react";
import { Button } from "../Button";
import { useState } from "react";
import { Stack } from "./Stack";
import { Queue } from "./Queue";
import { Heap } from "./Heap";

type Props = {};

export const DataStructurePage: React.FC<Props> = () => {
  const [selectedStructure, setSelectedStructure] = useState<string | null>(
    null
  );

  const dataStructureDescriptions: Record<string, string> = {
    Stack: "Stack (LIFO): push/pop at top. O(1) operations.",
    Queue: "Queue (FIFO): enqueue at end, dequeue at front. O(1) operations.",
    "Priority Queue":
      "Priority Queue: higher-priority elements served first. O(log n) operations.",
    Heap: "Heap: complete binary tree, used for priority queues. O(log n) insert/extract.",
  };

  return (
    <div className="flex flex-col items-center gap-6 py-10">
      <div className="flex gap-4">
        {Object.keys(dataStructureDescriptions).map((structure) => (
          <Button
            key={structure}
            text={structure}
            tooltip={dataStructureDescriptions[structure]}
            onClickFunc={() => setSelectedStructure(structure)}
            className={`${
              structure === selectedStructure ? "bg-yellow-600" : ""
            }`}
          />
        ))}
      </div>

      <div className="mt-6 w-full flex justify-center">
        {selectedStructure === "Queue" && <Queue type="normal" />}
        {selectedStructure === "Stack" && <Stack />}
        {selectedStructure === "Priority Queue" && <Queue type="priority" />}
        {selectedStructure === "Heap" && <Heap />}
      </div>
    </div>
  );
};
