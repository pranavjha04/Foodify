import { useRecipe } from "../contexts/RecipeContext";
import styles from "./CartSummary.module.css";

function CartSummary() {
  const { totalPrice, cartList, clearCart, setShowWindow } = useRecipe();
  function handleClearClick() {
    clearCart();
  }
  function handlePlayClick() {
    if (!totalPrice) return;
    setShowWindow(true);
  }

  return (
    <div className={styles.summary}>
      <p className={styles.totalItems}>
        You added <span className={styles.items}>{cartList.length}</span> Items
        in Cart
      </p>
      <p className={styles.totalBill}>
        Your Total is{" "}
        <span className={styles.bill}>₹{totalPrice ?? "Nothing"}</span>
      </p>

      <div className={styles.buttons}>
        <button
          className={`${styles.btn} ${styles.clearBtn}`}
          onClick={handleClearClick}
        >
          Clear All
        </button>
        <button className={`${styles.btn}`} onClick={handlePlayClick}>
          Order Now
        </button>
      </div>
    </div>
  );
}

export default CartSummary;
