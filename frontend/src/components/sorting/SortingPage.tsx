import { useEffect, useRef, useState } from "react";
import { bubbleSort } from "../../algorithms/bubbleSort";
import type { Step } from "../../algorithms/types";
import { selectionSort } from "../../algorithms/selectionSort";
import { Button } from "../Button";
import { insertionSort } from "../../algorithms/insertionSort";
import { mergeSort } from "../../algorithms/mergeSort";
import { heapSort } from "../../algorithms/heapSort";
import { quickSort } from "../../algorithms/quickSort";
import { ArrayChart } from "./ArrayChart";
import { NumberInput } from "./NumberInput";

export const SortingPage = () => {
  const defaultValue = 20;

  const [arrLength, setArrLength] = useState<number>(defaultValue);
  const [arr, setArr] = useState<number[]>([]);
  const [highlighted, setHighlighted] = useState<number[]>([]);
  const [selectedAlgorithm, setSelectedAlgorithm] = useState<string | null>(
    null
  );

  const timeoutsRef = useRef<number[]>([]);

  const clearAllTimeouts = () => {
    timeoutsRef.current.forEach((t) => clearTimeout(t));
    timeoutsRef.current = [];
  };

  const generateArr = () => {
    clearAllTimeouts();
    setSelectedAlgorithm(null);
    setHighlighted([]);

    const length = arrLength || defaultValue;

    const newArr: number[] = [];
    for (let i = 0; i < length; i++) {
      const newNumber = Math.floor(Math.random() * 300);
      newArr.push(newNumber);
    }
    setArr(newArr);
    setArrLength(length);
  };

  useEffect(() => {
    generateArr();
  }, []);

  const animateSort = (sort: Step[]) => {
    clearAllTimeouts();

    sort.forEach((step, idx) => {
      const timeout = setTimeout(() => {
        if (step.type === "swap" && step.array) {
          setArr(step.array);
        }
        if (step.type === "compare") {
          setHighlighted(step.indices);
        }
      }, idx * 100);
      timeoutsRef.current.push(timeout);
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
          onClick={() => {
            generateArr();
            setSelectedAlgorithm(null);
          }}
        >
          Generate Array
        </button>
      </div>

      <div
        className="flex gap-4 py-4 justify-start sm:justify-center 
             overflow-x-auto sm:overflow-visible 
             sm:flex-wrap scrollbar-hide"
      >
        {Object.keys(algorithmDescriptions).map((algorithm) => (
          <Button
            key={algorithm}
            text={algorithm}
            tooltip={algorithmDescriptions[algorithm]}
            disabled={
              selectedAlgorithm !== null && selectedAlgorithm !== algorithm
            }
            onClickFunc={() => {
              setSelectedAlgorithm(algorithm);
              switch (algorithm) {
                case "Bubble Sort":
                  animateSort(bubbleSort([...arr]));
                  break;
                case "Selection Sort":
                  animateSort(selectionSort([...arr]));
                  break;
                case "Insertion Sort":
                  animateSort(insertionSort([...arr]));
                  break;
                case "Merge Sort":
                  animateSort(mergeSort([...arr]));
                  break;
                case "Quick Sort":
                  animateSort(quickSort([...arr]));
                  break;
                case "Heap Sort":
                  animateSort(heapSort([...arr]));
                  break;
                default:
                  break;
              }
            }}
            className={`${
              algorithm === selectedAlgorithm ? "bg-yellow-600" : ""
            }`}
          />
        ))}
      </div>

      <div style={{ marginTop: "10px" }}>
        <ArrayChart array={arr} highlighted={highlighted} />
      </div>
    </div>
  );
};
