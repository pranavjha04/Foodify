import { useRef, useState, useEffect } from "react";
import AddToCartButton from "./AddToCartButton";
import styles from "./CategoryRecipeItem.module.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router";
import { useRecipe } from "../contexts/RecipeContext";

function CategoryRecipeItem({ food }) {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.25 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) observer.unobserve(elementRef.current);
    };
  }, []);

  return (
    <div
      ref={elementRef}
      className={`${styles.container} ${isVisible ? styles.visible : ""}`}
    >
      <LazyLoadImage
        src={food.image_url}
        className={styles.image}
        alt={food.title}
        effect="blur"
      />

      <div className={styles.others}>
        <Link to={`/app/foodinfo?id=${food.id}`} className={styles.title}>
          <h3>{food.title}</h3>
        </Link>
        <p className={styles.rating}>
          {Array.from({ length: food.rating }).map((_, i) => (
            <span key={i}>⭐</span>
          ))}
        </p>
        <p className={styles.price}>
          <strong>₹{food.price}</strong>
        </p>
        <AddToCartButton food={food} />
      </div>
    </div>
  );
}

export default CategoryRecipeItem;
