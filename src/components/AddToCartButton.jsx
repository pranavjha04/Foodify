import { useRecipe } from "../contexts/RecipeContext";
import styles from "./AddToCartButton.module.css";

function AddToCartButton({ food }) {
  const { addToCart } = useRecipe();
  function handeClick() {
    addToCart(food);
  }
  return (
    <button className={styles.btn} onClick={handeClick}>
      Add To Cart
    </button>
  );
}

export default AddToCartButton;
