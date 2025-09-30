export type Step = {
  type: "compare" | "swap";
  indices: number[];
  array?: number[];
};
