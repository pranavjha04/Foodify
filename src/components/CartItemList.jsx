import { useRecipe } from "../contexts/RecipeContext";
import CartItem from "./CartItem";
import styles from "./CartItemList.module.css";

function CartItemList() {
  const { cartList } = useRecipe();
  return (
    <ul className={styles.cartListContainer}>
      {cartList && cartList.length > 0 ? (
        cartList.map((item) => <CartItem item={item} key={item.id} />)
      ) : (
        <p className={styles.nothing}>😢 Your Cart is Empty</p>
      )}
    </ul>
  );
}

export default CartItemList;
