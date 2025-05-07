import styles from "./CartButton.module.css";
import { useRecipe } from "../contexts/RecipeContext";

function CartButton() {
  const { setShowCart, cartList } = useRecipe();

  function handleClick() {
    setShowCart(true);
  }
  return (
    <button
      style={{ border: "none", background: "transparent" }}
      onClick={handleClick}
    >
      <div className={styles.cartContainer}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M2 17h20" />
          <path d="M4 17a8 8 0 0 1 16 0" />
          <path d="M12 9V5" />
          <path d="M12 3h.01" />
        </svg>
        <span className={styles.cartBadge}>{cartList.length}</span>
      </div>
    </button>
  );
}

export default CartButton;
