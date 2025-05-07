import styles from "./CategoryResults.module.css";
import { useSearch } from "../hooks/useSearch";
import Spinner from "./Spinner";
import CategoryRecipeItem from "./CategoryRecipeItem";
import { memo, useMemo } from "react";

const CategoryResults = memo(function CategoryResults({ activeCategory }) {
  const [{ results, isLoading, error }] = useSearch(activeCategory);

  const processedResults = useMemo(() => {
    return results.map((food) => {
      const randRating = Math.floor(Math.random() * 4) + 2;
      let price;
      if (randRating === 2) {
        price = Math.floor(Math.random() * 101) + 350;
      } else if (randRating === 3 || randRating === 4) {
        price = Math.floor(Math.random() * 101) + 100;
      } else if (randRating === 5) {
        price = Math.floor(Math.random() * 51) + 50;
      }

      return {
        ...food,
        price,
        rating: randRating,
      };
    });
  }, [results]);

  if (isLoading) return <Spinner />;
  if (error) return <div>An Error Occured</div>;

  return (
    <div className={styles.results}>
      {processedResults.map((food) => (
        <CategoryRecipeItem food={food} key={food.id} />
      ))}
    </div>
  );
});
export default memo(CategoryResults);
