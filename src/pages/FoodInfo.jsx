import { useEffect } from "react";
import { Link, useSearchParams } from "react-router";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import styles from "./FoodInfo.module.css";
import AddToCartFoodInfoButton from "../components/AddToCartFoodInfoButton";
import Spinner from "../components/Spinner";
import FoodDataError from "../components/FoodDataError";

import { useRecipe } from "../contexts/RecipeContext";

function FoodInfo() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");

  const {
    setActiveId,
    activeFoodData,
    isFoodDataLoading,
    foodDataError,
    setShowCategory,
  } = useRecipe();

  useEffect(() => {
    if (!id) return;
    setActiveId(id);
    setShowCategory(true);
  }, [id, setActiveId, setShowCategory]);

  useEffect(() => {
    document.title = isFoodDataLoading
      ? "Loading..."
      : foodDataError
      ? "There was a Problem"
      : activeFoodData.title;

    return () => (document.title = "Foodify");
  }, [activeFoodData.title, isFoodDataLoading, foodDataError]);

  if (foodDataError) return <FoodDataError message={foodDataError} />;
  if (!id) return <FoodDataError message={"No Result Found"} />;

  return (
    <div className={styles.foodInfoContainer}>
      {isFoodDataLoading ? (
        <Spinner />
      ) : (
        <>
          <div className={styles.imageWrapper}>
            {activeFoodData.image_url && (
              <LazyLoadImage
                src={activeFoodData.image_url}
                alt={activeFoodData.title}
                effect="blur"
                delayTime={1000}
                className={styles.foodInfoImage}
              />
            )}
          </div>

          <div className={styles.info}>
            <Link to={`/app/foodinfo?id=${id}`} className={styles.foodHeading}>
              <h2>{activeFoodData.title}</h2>
            </Link>

            {activeFoodData && (
              <>
                <p className={styles.infoContainer}>
                  Cooking Time ⌚ :{" "}
                  <span className={styles.data}>
                    {activeFoodData.cooking_time}mins
                  </span>
                </p>

                <p className={styles.infoContainer}>
                  Servings 🍛 :{" "}
                  <span className={styles.data}>{activeFoodData.servings}</span>
                </p>

                <AddToCartFoodInfoButton food={activeFoodData} />
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default FoodInfo;
