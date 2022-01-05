import { useState } from "react";

const Counter = () => {
  const [number, setChange] = useState(0);

  const increment = () => {
    console.log("Increment");
    setChange(number + 1);
  };

  const decrement = () => {
    console.log("Decrement");
    setChange(number - 1);
  };

  return (
    <div className="flex items-center">
      <button
        onClick={increment}
        className="bg-blue-900 text-white px-5 py-1 rounded-lg mr-5"
      >
        +
      </button>
      <div>{number}</div>
      <button
        onClick={decrement}
        className="bg-primary text-white px-5 py-1 rounded-lg ml-5"
      >
        -
      </button>
    </div>
  );
};

export default Counter;
