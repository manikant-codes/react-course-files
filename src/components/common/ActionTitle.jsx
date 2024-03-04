import React from "react";
import styles from "../../styles/common/actionTitle.module.css";

function ActionTitle(props) {
  const { title, button } = props;
  return (
    <div className={styles.containerTitle}>
      <h2>{title}</h2>
      {button && button}
    </div>
  );
}

export default ActionTitle;
