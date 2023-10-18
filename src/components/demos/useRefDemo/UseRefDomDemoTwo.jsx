import React, { useRef } from "react";
import styles from "../../../styles/UseRefDomDemoTwo.module.css";

function UseRefDomDemoTwo() {
  const firstCatRef = useRef(null);
  const secondCatRef = useRef(null);
  const thirdCatRef = useRef(null);

  function handleScrollToFirstCat() {
    firstCatRef.current.scrollIntoView({
      behavior: "smooth",
    });
  }

  function handleScrollToSecondCat() {
    secondCatRef.current.scrollIntoView({
      behavior: "smooth",
    });
  }

  function handleScrollToThirdCat() {
    thirdCatRef.current.scrollIntoView({
      behavior: "smooth",
    });
  }

  return (
    <div className="demoContainer">
      <div className={`demoWrapper `} style={{ flexDirection: "column" }}>
        <nav className={`${styles.nav}`}>
          <button className="btn-lg" onClick={handleScrollToFirstCat}>
            Tom
          </button>
          <button onClick={handleScrollToSecondCat}>Maru</button>
          <button onClick={handleScrollToThirdCat}>Jellylorum</button>
        </nav>
        <div className={`${styles.imagesContainer}`}>
          <ul>
            <li>
              <img
                src="https://placekitten.com/g/200/200"
                alt="Tom"
                ref={firstCatRef}
              />
            </li>
            <li>
              <img
                src="https://placekitten.com/g/300/200"
                alt="Maru"
                ref={secondCatRef}
              />
            </li>
            <li>
              <img
                src="https://placekitten.com/g/250/200"
                alt="Jellylorum"
                ref={thirdCatRef}
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default UseRefDomDemoTwo;
