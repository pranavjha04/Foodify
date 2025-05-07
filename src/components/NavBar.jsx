import styles from "./NavBar.module.css";
import Logo from "./Logo";
import AboutButton from "./AboutButton";
import CartButton from "./CartButton";
import Profile from "./Profile";
import SearchBar from "./SearchBar";
import CategoryButton from "./CategoryButton";
import { useRecipe } from "../contexts/RecipeContext";

function NavBar() {
  const { showCategory } = useRecipe();
  return (
    <nav className={styles.nav}>
      <Logo />
      <SearchBar />
      <ul className={styles.others}>
        {showCategory && (
          <li>
            <CategoryButton />
          </li>
        )}
        <li>
          <AboutButton />
        </li>
        <li>
          <CartButton />
        </li>
        <li>
          <Profile />
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
