import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

function initialize() {
  console.log("initialize called");
  return 0;
}

function UseStateDemo() {
  const [count, setCount] = useState(initialize);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div className={"demoContainer"}>
      <div className={"demoWrapper"}>
        <button onClick={decrement} className={`roundedButton`}>
          <FontAwesomeIcon icon={faMinus} size="xs" />
        </button>
        <span style={{ fontSize: "4rem", margin: "0px 8px 0px 8px" }}>
          {count}
        </span>
        <button onClick={increment} className={`roundedButton`}>
          <FontAwesomeIcon icon={faPlus} size="xs" />
        </button>
      </div>
    </div>
  );
}

export default UseStateDemo;
