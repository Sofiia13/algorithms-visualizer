import type { Step } from "./types";

export const quickSort = (arr: number[]): Step[] => {
  const steps: Step[] = [];
  const a = [...arr];

  const partition = (low: number, high: number): number => {
    const pivot = a[high];
    let i = low;
    for (let j = low; j < high; j++) {
      steps.push({ type: "compare", indices: [j, high] });
      if (a[j] < pivot) {
        [a[i], a[j]] = [a[j], a[i]];
        steps.push({ type: "swap", indices: [i, j], array: [...a] });
        i++;
      }
    }
    [a[i], a[high]] = [a[high], a[i]];
    steps.push({ type: "swap", indices: [i, high], array: [...a] });
    return i;
  };

  const quickSortRecursive = (low: number, high: number) => {
    if (low < high) {
      const pi = partition(low, high);
      quickSortRecursive(low, pi - 1);
      quickSortRecursive(pi + 1, high);
    }
  };

  quickSortRecursive(0, a.length - 1);
  return steps;
};
