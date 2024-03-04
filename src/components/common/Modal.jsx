import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../../styles/common/modal.module.css";

function Modal(props) {
  const {
    title,
    content,
    btnCancelText,
    btnOkText,
    handleCancel,
    handleSubmit,
    handleClose,
  } = props;

  return (
    <div className={styles.modalContainer}>
      <div className={styles.modalInnerContainer}>
        <div className={styles.modalTitleContainer}>
          <h2>{title}</h2>
          <button onClick={handleClose}>
            <FontAwesomeIcon icon={faClose} />
          </button>
        </div>
        <div className={styles.modalContentContainer}>{content}</div>
        {!(!btnCancelText && !btnOkText) && (
          <div className={styles.modalFooterContainer}>
            <button onClick={handleCancel}>{btnCancelText}</button>
            <button onClick={handleSubmit}>{btnOkText}</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Modal;
