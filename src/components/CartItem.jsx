import { LazyLoadImage } from "react-lazy-load-image-component";
import styles from "./CartItem.module.css";
import IncDecButton from "./IncDecButton";
import { useEffect, useState, useRef } from "react";
import { useRecipe } from "../contexts/RecipeContext";

function CartItem({ item }) {
  const { updateQuantity, setTotalPrice } = useRecipe();

  const price = item.price * item.quantity;

  function handleIncrease() {
    setTotalPrice((prev) => prev + item.price);
    updateQuantity(item.id);
  }

  function handleDecrease() {
    setTotalPrice((prev) => prev - item.price);
    updateQuantity(item.id, "decrease");
  }

  return (
    <li className={styles.cartItem}>
      <LazyLoadImage
        className={styles.itemImage}
        src={`${item.image_url}`}
        alt={item.title}
        effect="opacity"
      />
      <div className={styles.infoContainer}>
        <h3 className={styles.itemName}>{item.title}</h3>
        <div className={styles.others}>
          <div className={styles.quantityControl}>
            <IncDecButton handleClick={handleDecrease}>-</IncDecButton>
            <p className={styles.total}>{item.quantity}</p>
            <IncDecButton handleClick={handleIncrease}>+</IncDecButton>
          </div>

          <p className={styles.totalBill}>₹{price}</p>
        </div>
      </div>
    </li>
  );
}

export default CartItem;
