import { useRecipe } from "../contexts/RecipeContext";
import styles from "./AddToCartFoodInfoButton.module.css";

function AddToCartFoodInfoButton({ food }) {
  const { addToCart } = useRecipe();

  function handleClick() {
    addToCart(food);
  }
  return (
    <button className={styles.btn} onClick={handleClick}>
      Add To Cart
    </button>
  );
}

export default AddToCartFoodInfoButton;
