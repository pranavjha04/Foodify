import { Outlet, useNavigate, useParams } from "react-router";
import CategoryItem from "../components/CategoryItem";
import { useEffect, Suspense, lazy } from "react";
const CategoryHeader = lazy(() => import("../components/CategoryHeader"));
import styles from "./CategoryPage.module.css";
import Spinner from "../components/Spinner";
const categories = [
  "burger",
  "pasta",
  "pizza",
  "spaghetti",
  "fries",
  "coffee",
  "biryani",
  "dessert",
];

function CategoryPage() {
  const { id: activeCategory } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    function checkInvalidCategory() {
      if (!activeCategory || !categories.includes(activeCategory)) {
        navigate("/app/category/burger");
      }
    }
    checkInvalidCategory();
  }, [activeCategory, navigate]);

  return (
    <>
      <div className={styles.cateogoryContainer}>
        <Suspense fallback={<Spinner />}>
          <CategoryHeader />
        </Suspense>
        <ul className={styles.categoryList}>
          {categories.map((category, i) => (
            <CategoryItem
              category={category}
              key={i}
              activeCategory={activeCategory}
            />
          ))}
        </ul>
      </div>
      <Outlet context={{ activeCategory }} />
    </>
  );
}

export default CategoryPage;
