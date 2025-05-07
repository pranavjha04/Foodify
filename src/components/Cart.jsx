import { useEffect } from "react";
import { useRecipe } from "../contexts/RecipeContext";
import styles from "./Cart.module.css";
import CartItemList from "./CartItemList";
import CartSummary from "./CartSummary";
import CloseButton from "./CloseButton";

function Cart() {
  const { setShowCart, showCart } = useRecipe();
  function handleClick() {
    setShowCart(false);
  }

  useEffect(() => {
    function callBack(e) {
      if (e.code === "Escape") {
        setShowCart(false);
      }
    }

    document.addEventListener("keydown", callBack);

    return () => document.removeEventListener("keydown", callBack);
  }, [setShowCart]);

  return (
    <div className={`${styles.cartOverlay} ${showCart ? styles.visible : ""}`}>
      <div className={styles.cartContainer}>
        <header className={styles.header}>
          <h2 className={styles.cartHeading}>Food Cart</h2>
          <CloseButton handleClick={handleClick} />
        </header>
        <CartItemList />
        <CartSummary />
      </div>
    </div>
  );
}

export default Cart;
