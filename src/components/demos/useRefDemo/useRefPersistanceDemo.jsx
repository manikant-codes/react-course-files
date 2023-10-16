import React, { useEffect, useRef, useState } from "react";

function UseRefPersistanceDemo() {
  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);
  //   const [renderCount, setRenderCount] = useState(0);

  useEffect(() => {
    count.current++;
    // setRenderCount((prevRenderCount) =>  prevRenderCount + 1);
  }, [inputValue]);

  console.log("Rendered");

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h1>Render Count: {count.current}</h1>
      {/* <h1>Render Count: {renderCount}</h1> */}
    </>
  );
}

export default UseRefPersistanceDemo;
