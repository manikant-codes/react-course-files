import React from "react";
import styles from "../../styles/common/modal.module.css";

function Modal(props) {
  return (
    <div className={styles.modalContainer}>
      <div className={styles.modalInnerContainer}>
        <div className={styles.modalTitleContainer}>
          <h2>{props.title}</h2>
        </div>
        <div className={styles.modalContentContainer}>{props.content}</div>
        {!props.hideButtons && (
          <div className={styles.modalFooterContainer}>
            <button onClick={props.onCancel}>{props.btnTextCancel}</button>
            <button onClick={props.onSubmit}>{props.btnTextOk}</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Modal;
