import React, { useEffect, useRef, useState } from "react";

function UseRefPersistanceDemo() {
  const [inputValue, setInputValue] = useState("");
  const prevStateRef = useRef("");

  useEffect(() => {
    prevStateRef.current = inputValue;
  }, [inputValue]);

  console.log("Rendered");

  return (
    <div className="demoContainer">
      <div className="demoWrapper" style={{ flexDirection: "column" }}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          id="input"
        />
        <p style={{ fontWeight: "bold", fontSize: "1.25rem" }}>
          Prev State: {prevStateRef.current}
        </p>
      </div>
    </div>
  );
}

export default UseRefPersistanceDemo;
