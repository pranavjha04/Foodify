import { useOutletContext } from "react-router";
import styles from "./Category.module.css";
import CategoryResults from "../components/CategoryResults";
import { useRecipe } from "../contexts/RecipeContext";
import { memo, useEffect, useMemo } from "react";

const Category = memo(function Category() {
  const { activeCategory } = useOutletContext();
  const { setShowCategory } = useRecipe();

  const formattedCategory = useMemo(() => {
    return activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1);
  }, [activeCategory]);

  useEffect(() => {
    setShowCategory(false);
  }, [setShowCategory]);

  return (
    <section className={styles.categorySection}>
      <h2 className={styles.categoryTitle}>
        Results for{" "}
        <span className={styles.highlight}>{formattedCategory}</span>
      </h2>
      <CategoryResults activeCategory={activeCategory} />
    </section>
  );
});

export default memo(Category);
