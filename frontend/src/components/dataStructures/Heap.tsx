import React, { useState } from "react";
import { Button } from "../Button";
import { DataStructureVisualizer } from "./DataStructureVisualizer";

export const Heap: React.FC = () => {
  const [heap, setHeap] = useState<number[]>([]);
  const [highlighted, setHighlighted] = useState<number[]>([]);

  // Допоміжні функції для heap
  const swap = (arr: number[], i: number, j: number) => {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  };

  const heapifyUp = (arr: number[], index: number) => {
    let i = index;
    while (i > 0) {
      const parent = Math.floor((i - 1) / 2);
      if (arr[i] <= arr[parent]) break;
      swap(arr, i, parent);
      i = parent;
    }
  };

  const heapifyDown = (arr: number[], index: number) => {
    let i = index;
    const n = arr.length;
    while (true) {
      const left = 2 * i + 1;
      const right = 2 * i + 2;
      let largest = i;

      if (left < n && arr[left] > arr[largest]) largest = left;
      if (right < n && arr[right] > arr[largest]) largest = right;

      if (largest === i) break;

      swap(arr, i, largest);
      i = largest;
    }
  };

  // Додаємо новий елемент
  const insert = () => {
    const val = Math.floor(Math.random() * 100);
    const newHeap = [...heap, val];
    heapifyUp(newHeap, newHeap.length - 1);
    setHeap(newHeap);
    setHighlighted([newHeap.length - 1]);
  };

  // Видаляємо максимум
  const extractMax = () => {
    if (!heap.length) return;
    const newHeap = [...heap];
    swap(newHeap, 0, newHeap.length - 1);
    newHeap.pop();
    heapifyDown(newHeap, 0);
    setHeap(newHeap);
    setHighlighted([0]);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex gap-4">
        <Button text="Insert" onClickFunc={insert} />
        <Button text="Extract Max" onClickFunc={extractMax} />
      </div>

      <DataStructureVisualizer
        data={heap}
        highlighted={highlighted}
        direction="horizontal"
        width="w-full"
        height="h-32"
      />
    </div>
  );
};
