type Props = {
  value: number;
  onChange: (newValue: number) => void;
  min?: number;
  max?: number;
};

export const NumberInput: React.FC<Props> = ({
  value,
  onChange,
  min = 1,
  max = 100,
}) => {
  const decrement = () => {
    if (value > min) onChange(value - 1);
  };

  const increment = () => {
    if (value < max) onChange(value + 1);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if (val === "") {
      onChange(NaN);
      return;
    }

    const num = Number(val);
    if (!isNaN(num) && num >= min && num <= max) onChange(num);
  };

  return (
    <div className="py-2 px-3 bg-white border border-gray-200 rounded-lg w-32">
      <div className="flex justify-between items-center gap-x-3">
        <input
          type="number"
          value={value}
          onChange={handleChange}
          className="w-full p-1 bg-transparent border-0 text-gray-800 focus:ring-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
          style={{ MozAppearance: "textfield" }}
        />
        <div className="flex flex-col gap-y-1">
          <button
            type="button"
            onClick={increment}
            className="w-6 h-6 flex justify-center items-center text-gray-800 border border-gray-200 rounded hover:bg-gray-50"
          >
            +
          </button>
          <button
            type="button"
            onClick={decrement}
            className="w-6 h-6 flex justify-center items-center text-gray-800 border border-gray-200 rounded hover:bg-gray-50"
          >
            –
          </button>
        </div>
      </div>
    </div>
  );
};
