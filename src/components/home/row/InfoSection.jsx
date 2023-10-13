import React from "react";
import styles from "../../../styles/InfoSection.module.css";

function InfoSection(props) {
  function handleImagePositionChange() {
    props.setIsImageFirst((prevValue) => !prevValue);
  }

  return (
    <div className={`col ${styles.container}`}>
      <div>
        {props.content ? (
          props.content
        ) : (
          <>
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.description}</p>
            <button
              onClick={handleImagePositionChange}
              className="btn btn-primary"
            >
              Switch Sides
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default InfoSection;
