import type { Step } from "./types";

export const insertionSort = (arr: number[]): Step[] => {
  const steps: Step[] = [];
  const a = [...arr];

  for (let i = 1; i < a.length; i++) {
    let key = a[i];
    let j = i - 1;

    while (j >= 0 && a[j] > key) {
      steps.push({ type: "compare", indices: [j, j + 1] });

      a[j + 1] = a[j];
      steps.push({ type: "swap", indices: [j, j + 1], array: [...a] });

      j--;
    }

    a[j + 1] = key;
    steps.push({ type: "swap", indices: [j + 1, i], array: [...a] });
  }

  return steps;
};
