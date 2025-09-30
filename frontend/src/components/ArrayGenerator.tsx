import { useState } from "react";
import { bubbleSort } from "../algorithms/bubbleSort";
import type { Step } from "../algorithms/types";
import { selectionSort } from "../algorithms/selectionSort";
import { Button } from "./Button";
import { insertionSort } from "../algorithms/insertionSort";

export const ArrayGenerator = () => {
  const [arrLength, setArrLength] = useState<number>(30);
  const [arr, setArr] = useState<number[]>([]);

  const generateArr = () => {
    const newArr: number[] = [];
    for (let i = 0; i < arrLength; i++) {
      const newNumber = Math.floor(Math.random() * 300);
      newArr.push(newNumber);
    }
    setArr(newArr);
  };

  const animateSort = (sort: Step[]) => {
    const steps: Step[] = sort;
    steps.forEach((step, idx) => {
      setTimeout(() => {
        if (step.type === "swap" && step.array) setArr(step.array);
        // Тут можна додати підсвічування step.indices під час compare
      }, idx * 50); // 100ms між кроками
    });
  };

  return (
    <div>
      <button onClick={generateArr}>Generate Array</button>

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

      <div
        style={{
          display: "flex",
          gap: "2px",
          marginTop: "10px",
          alignItems: "flex-end",
          height: "300px",
        }}
      >
        {arr.map((value, idx) => (
          <div
            key={idx}
            style={{
              height: `${value}px`,
              width: "10px",
              backgroundColor: "turquoise",
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};
