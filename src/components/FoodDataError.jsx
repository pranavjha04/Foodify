import styles from "./FoodDataError.module.css";

function FoodDataError({ message }) {
  return <h2 className={styles.messageError}>🙁 {message}</h2>;
}

export default FoodDataError;
