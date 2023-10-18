import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

function UseEffectCounterDemo() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount(count + 1);
    }, 1000);
  }, [count]);

  return (
    <div className="demoContainer">
      <div className="demoWrapper">
        <FontAwesomeIcon icon={faClock} size="4x" color="#07a5cc" />
        <h1 style={{ margin: "0px" }}>{count}</h1>
      </div>
    </div>
  );
}

export default UseEffectCounterDemo;
