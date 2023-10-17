import React, { useEffect, useRef, useState } from "react";

function UseRefPersistanceDemo() {
  const [inputValue, setInputValue] = useState("");
  const prevStateRef = useRef("");

  useEffect(() => {
    prevStateRef.current = inputValue;
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

      <h1>Prev State: {prevStateRef.current}</h1>
    </>
  );
}

export default UseRefPersistanceDemo;
