import { Link } from "react-router";
import styles from "./CategoryItem.module.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

function CategoryItem({ category, activeCategory }) {
  return (
    <li className={styles.item}>
      <Link to={`/app/category/${category}`}>
        <LazyLoadImage
          src={`/img/${category}.png`}
          alt={`${category}`}
          className={styles.categoryImage}
          effect="blur"
        />
        <p className={activeCategory === category ? styles.activeCategory : ""}>
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </p>
      </Link>
    </li>
  );
}

export default CategoryItem;
