import React, { useRef } from "react";

function UseRefDomDemo() {
  const inputElementRef = useRef(null);

  console.log("inputElement", inputElementRef);

  const focusInput = () => {
    console.log("inputElement", inputElementRef);
    inputElementRef.current.focus();
    inputElementRef.current.value = 500;
  };

  return (
    <div className="demoContainer">
      <div className="demoWrapper">
        <input type="text" id="input" ref={inputElementRef} />
        <button onClick={focusInput}>Focus</button>
      </div>
    </div>
  );
}

export default UseRefDomDemo;
