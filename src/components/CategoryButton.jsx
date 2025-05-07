import styles from "./CategoryButton.module.css";
import { Link } from "react-router";

function CategoryButton() {
  return (
    <Link to="/app" className={styles.link}>
      Category
    </Link>
  );
}

export default CategoryButton;
