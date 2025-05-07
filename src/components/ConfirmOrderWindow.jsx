import { useRecipe } from "../contexts/RecipeContext";
import CloseButton from "./CloseButton";
import styles from "./ConfirmOrderWindow.module.css";

function ConfirmOrderWindow() {
  const { setShowWindow, clearCart, setTotalPrice } = useRecipe();

  function handleConfirmClick() {
    setTotalPrice(0);
    clearCart();
    handleCloseClick();
  }

  function handleCloseClick() {
    setShowWindow(false);
  }

  return (
    <div
      className={`${styles.disableOverlay} ${
        setShowWindow ? styles.visible : ""
      }`}
    >
      <div className={styles.container}>
        <CloseButton handleClick={handleCloseClick} />
        <p className={styles.message}>
          Are you sure you want to confirm your order?
        </p>

        <div className={styles.buttons}>
          <button
            onClick={handleCloseClick}
            className={`${styles.btn} ${styles.cancelBtn}`}
          >
            Cancel
          </button>
          <button
            onClick={handleConfirmClick}
            className={`${styles.btn} ${styles.confirmBtn}`}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmOrderWindow;
