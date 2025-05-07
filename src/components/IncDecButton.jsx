import styles from "./IncDecButton.module.css";

function IncDecButton({ handleClick, children }) {
  return (
    <button className={styles.button} onClick={handleClick}>
      {children}
    </button>
  );
}

export default IncDecButton;
