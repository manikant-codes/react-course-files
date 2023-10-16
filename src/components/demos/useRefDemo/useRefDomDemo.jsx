import React, { useRef } from "react";

function UseRefDomDemo() {
  const inputElement = useRef(null);

  console.log("inputElement", inputElement);

  const focusInput = () => {
    console.log("inputElement", inputElement);
    inputElement.current.focus();
    inputElement.current.size = 500;
  };

  return (
    <>
      <input type="text" id="input" ref={inputElement} />
      <button onClick={focusInput}>Focus Input</button>
    </>
  );
}

export default UseRefDomDemo;
