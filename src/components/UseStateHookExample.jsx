import React, { useState } from "react";

function initialize() {
  console.log("initialize called");
  return 0;
}

function UseStateHookExample() {
  const [count, setCount] = useState(initialize);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <>
      <div>
        <button
          onClick={decrement}
          style={{ padding: "16px", fontSize: "4rem" }}
        >
          -
        </button>
        <span style={{ fontSize: "4rem", margin: "0px 34px 0px 34px" }}>
          {count}
        </span>
        <button
          onClick={increment}
          style={{ padding: "16px", fontSize: "4rem" }}
        >
          +
        </button>
      </div>
    </>
  );
}

export default UseStateHookExample;
