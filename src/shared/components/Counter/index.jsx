import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(1); 

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) setCount(count - 1); 
  };

  return (
    <div className="inline-flex justify-start items-center bg-[#F6F7F8] rounded-md text-sm md:text-base">
      <button
        onClick={increment}
        className="text-[#33A0FF] py-1  md:py-2 px-3 cursor-pointer"
      >
        +
      </button>

      <div className="py-1 md:py-2 px-3">{count}</div>

      <button
        onClick={decrement}
        className="text-[#33A0FF] py-1 md:py-2 px-3 cursor-pointer"
      >
        -
      </button>
    </div>
  );
};

export default Counter;
