import React, { useState, useEffect } from "react";

function UseEffectHookExample() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Use Effect");
    return () => {
      console.log("Effect Clean Up");
    };
  }, [count]);

  console.log("Component Rendered");

  return (
    <div className="container">
      <button onClick={() => setCount((c) => c - 1)}>-</button>
      <h1>{count}</h1>
      <button onClick={() => setCount((c) => c + 1)}>+</button>
    </div>
  );
}

export default UseEffectHookExample;
