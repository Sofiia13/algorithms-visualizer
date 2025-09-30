import type { Step } from "./types";

export const selectionSort = (arr: number[]): Step[] => {
  const steps: Step[] = [];
  const a = [...arr];

  for (let i = 0; i < a.length - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < a.length; j++) {
      steps.push({ type: "compare", indices: [minIndex, j] });

      if (a[j] < a[minIndex]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      [a[i], a[minIndex]] = [a[minIndex], a[i]];
      steps.push({ type: "swap", indices: [i, minIndex], array: [...a] });
    }
  }

  return steps;
};
