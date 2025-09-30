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
          onClickFunc={() => animateSort(bubbleSort([...arr]))}
        />

        <Button
          text="Selection Sort"
          onClickFunc={() => animateSort(selectionSort([...arr]))}
        />

        <Button
          text="Insertion Sort"
          onClickFunc={() => animateSort(insertionSort([...arr]))}
        />

        <Button
          text="Merge Sort"
          onClickFunc={() => animateSort(mergeSort([...arr]))}
        />

        <Button
          text="Quick Sort"
          onClickFunc={() => animateSort(quickSort([...arr]))}
        />

        <Button
          text="Heap Sort"
          onClickFunc={() => animateSort(heapSort([...arr]))}
        />
      </div>

      <div style={{ marginTop: "10px" }}>
        <ArrayChart array={arr} highlighted={highlighted} />
      </div>
    </div>
  );
};
