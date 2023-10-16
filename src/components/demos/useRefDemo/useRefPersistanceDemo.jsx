import React, { useEffect, useRef, useState } from "react";

function UseRefPersistanceDemo() {
  const [inputValue, setInputValue] = useState("");
  const prevState = useRef(null);
  const count = useRef(0);

  // const [renderCount, setRenderCount] = useState(0);

  useEffect(() => {
    count.current++;
    prevState.current = inputValue;
    // setRenderCount((prevRenderCount) => prevRenderCount + 1);
  }, [inputValue]);

  console.log("Rendered");

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        id="input"
      />

      <button
        onClick={() => {
          count.current++;
          console.log(count);
        }}
      >
        ++
      </button>
      <h1>Render Count: {count.current}</h1>
      <h1>{prevState.current}</h1>
      {/* <h1>Render Count: {renderCount}</h1> */}
    </>
  );
}

export default UseRefPersistanceDemo;
