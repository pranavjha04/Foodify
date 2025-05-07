import { LazyLoadComponent } from "react-lazy-load-image-component";
import styles from "./CategoryHeader.module.css";

function CategoryHeader() {
  return (
    <LazyLoadComponent>
      <h2 className={styles.categoryHeader}>Search Food By Category</h2>
    </LazyLoadComponent>
  );
}

export default CategoryHeader;
