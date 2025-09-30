import { useEffect, useState } from "react";
import { bubbleSort } from "../algorithms/bubbleSort";
import type { Step } from "../algorithms/types";
import { selectionSort } from "../algorithms/selectionSort";
import { Button } from "./Button";
import { insertionSort } from "../algorithms/insertionSort";
import { mergeSort } from "../algorithms/mergeSort";
import { heapSort } from "../algorithms/heapSort";
import { quickSort } from "../algorithms/quickSort";
import { ArrayChart } from "./ArrayChart";
import { NumberInput } from "./NumberInput";

export const ArrayGenerator = () => {
  const [arrLength, setArrLength] = useState<number>(50);
  const [arr, setArr] = useState<number[]>([]);
  const [highlighted, setHighlighted] = useState<number[]>([]);

  const generateArr = () => {
    const newArr: number[] = [];
    for (let i = 0; i < arrLength; i++) {
      const newNumber = Math.floor(Math.random() * 300);
      newArr.push(newNumber);
    }
    setArr(newArr);
  };

  const animateSort = (sort: Step[]) => {
    sort.forEach((step, idx) => {
      setTimeout(() => {
        if (step.type === "swap" && step.array) {
          setArr(step.array);
        }
        if (step.type === "compare") {
          setHighlighted(step.indices);
        }
      }, idx * 100);
    });
  };

  const algorithmDescriptions: Record<string, string> = {
    "Bubble Sort":
      "Bubble Sort repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. Complexity: O(n²).",
    "Selection Sort":
      "Selection Sort finds the minimum element from the unsorted part and moves it to the beginning. Repeats this process for the rest of the array. Complexity: O(n²).",
    "Insertion Sort":
      "Insertion Sort builds a sorted part of the array by taking one element at a time from the unsorted part and inserting it in the correct position. Complexity: O(n²).",
    "Merge Sort":
      "Merge Sort is a divide-and-conquer algorithm that divides the array into halves, sorts them recursively, and merges them back together. Complexity: O(n log n).",
    "Quick Sort":
      "Quick Sort selects a pivot, partitions the array into elements smaller and larger than the pivot, and recursively sorts the partitions. Complexity: O(n log n) on average.",
    "Heap Sort":
      "Heap Sort builds a max-heap from the array, then repeatedly extracts the maximum element and rebuilds the heap to sort the array. Complexity: O(n log n).",
  };

  useEffect(() => {
    generateArr();
  }, []);

  return (
    <div>
      <div className="py-7 flex row gap-4">
        <NumberInput
          value={arrLength}
          onChange={setArrLength}
          min={1}
          max={100}
        />
        <button
          className="bg-[#7dd8e8] hover:bg-cyan-500 cursor-pointer text-black font-bold py-4 px-6 rounded"
          onClick={generateArr}
        >
          Generate Array
        </button>
      </div>

      <div className="flex gap-4 p-4">
        <Button
          text="Bubble Sort"
          tooltip={algorithmDescriptions["Bubble Sort"]}
          onClickFunc={() => animateSort(bubbleSort([...arr]))}
        />
        <Button
          text="Selection Sort"
          tooltip={algorithmDescriptions["Selection Sort"]}
          onClickFunc={() => animateSort(selectionSort([...arr]))}
        />
        <Button
          text="Insertion Sort"
          tooltip={algorithmDescriptions["Insertion Sort"]}
          onClickFunc={() => animateSort(insertionSort([...arr]))}
        />
        <Button
          text="Merge Sort"
          tooltip={algorithmDescriptions["Merge Sort"]}
          onClickFunc={() => animateSort(mergeSort([...arr]))}
        />
        <Button
          text="Quick Sort"
          tooltip={algorithmDescriptions["Quick Sort"]}
          onClickFunc={() => animateSort(quickSort([...arr]))}
        />
        <Button
          text="Heap Sort"
          tooltip={algorithmDescriptions["Heap Sort"]}
          onClickFunc={() => animateSort(heapSort([...arr]))}
        />
      </div>

      <div style={{ marginTop: "10px" }}>
        <ArrayChart array={arr} highlighted={highlighted} />
      </div>
    </div>
  );
};
