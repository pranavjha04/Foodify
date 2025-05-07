import { Outlet } from "react-router";
import styles from "./AppLayout.module.css";
import NavBar from "../components/NavBar";
import Cart from "../components/Cart";
import { useRecipe } from "../contexts/RecipeContext";
import ConfirmOrderWindow from "../components/ConfirmOrderWindow";

function AppLayout() {
  const { showCart, showWindow } = useRecipe();
  return (
    <div className={styles.app}>
      <NavBar />
      <Outlet />
      {showCart && <Cart />}
      {showCart && showWindow && <ConfirmOrderWindow />}
    </div>
  );
}

export default AppLayout;
