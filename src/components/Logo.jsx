import { Link } from "react-router";
import styles from "./Logo.module.css";

function Logo() {
  return (
    <Link className={styles.logo} to="/">
      <p>FOODIFY</p>
    </Link>
  );
}

export default Logo;
