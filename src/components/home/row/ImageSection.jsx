import React from "react";
import styles from "../../../styles/ImageSection.module.css";

function ImageSection(props) {
  return (
    <div className={`col ${styles.container}`}>
      <img src={props.image} class="img-fluid" alt="..." />
    </div>
  );
}

export default ImageSection;
