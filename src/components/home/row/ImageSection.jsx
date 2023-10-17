import React from "react";
import styles from "../../../styles/ImageSection.module.css";

function ImageSection(props) {
  return (
    <div className={`col ${styles.container}`}>
      <img src={props.image} className="img-fluid" alt="..." />
    </div>
  );
}

export default ImageSection;
