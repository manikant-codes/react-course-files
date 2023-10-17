import React, { useRef } from "react";

function UseRefDomDemo() {
  const inputElementRef = useRef(null);

  console.log("inputElement", inputElementRef);

  const focusInput = () => {
    console.log("inputElement", inputElementRef);
    inputElementRef.current.focus();
    inputElementRef.current.size = 500;
    inputElementRef.current.value = 500;
  };

  return (
    <>
      <input type="text" id="input" ref={inputElementRef} />
      <button onClick={focusInput}>Focus Input</button>
    </>
  );
}

export default UseRefDomDemo;
