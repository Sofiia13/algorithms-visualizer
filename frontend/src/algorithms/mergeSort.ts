import type { Step } from "./types";

export const mergeSort = (arr: number[]): Step[] => {
  const steps: Step[] = [];
  const a = [...arr];

  const merge = (
    left: number[],
    right: number[],
    startIndex: number
  ): number[] => {
    const merged: number[] = [];
    let i = 0,
      j = 0;

    while (i < left.length && j < right.length) {
      steps.push({
        type: "compare",
        indices: [startIndex + i, startIndex + left.length + j],
      });
      if (left[i] <= right[j]) {
        merged.push(left[i++]);
      } else {
        merged.push(right[j++]);
      }
    }
    while (i < left.length) merged.push(left[i++]);
    while (j < right.length) merged.push(right[j++]);

    // записуємо злитий масив для анімації
    for (let k = 0; k < merged.length; k++) {
      a[startIndex + k] = merged[k];
      steps.push({ type: "swap", indices: [startIndex + k], array: [...a] });
    }

    return merged;
  };

  const mergeSortRecursive = (start: number, end: number): number[] => {
    if (end - start <= 1) return a.slice(start, end);
    const mid = Math.floor((start + end) / 2);
    const left = mergeSortRecursive(start, mid);
    const right = mergeSortRecursive(mid, end);
    return merge(left, right, start);
  };

  mergeSortRecursive(0, a.length);
  return steps;
};
