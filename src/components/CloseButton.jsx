import styles from "./CloseButton.module.css";

function CloseButton({ handleClick }) {
  return (
    <p className={styles.closeBtn} onClick={handleClick}>
      &times;
    </p>
  );
}

export default CloseButton;
