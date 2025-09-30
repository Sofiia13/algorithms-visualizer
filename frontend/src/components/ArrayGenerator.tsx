import { useState } from "react";

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

  return (
    <div>
      <button onClick={generateArr}>Generate Array</button>
      <div
        style={{
          display: "flex",
          gap: "2px",
          marginTop: "10px",
          alignItems: "flex-end",
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
