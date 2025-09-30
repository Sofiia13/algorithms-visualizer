import type { Step } from "./types";

export const bubbleSort = (arr: number[]): Step[] => {
  const steps: Step[] = [];
  const a = [...arr];

  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a.length - i - 1; j++) {
      steps.push({ type: "compare", indices: [j, j + 1] });

      if (a[j] > a[j + 1]) {
        [a[j], a[j + 1]] = [a[j + 1], a[j]];
        steps.push({ type: "swap", indices: [j, j + 1], array: [...a] });
      }
    }
  }

  return steps;
};
