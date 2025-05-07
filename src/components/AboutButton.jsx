import { Link } from "react-router";
import styles from "./AboutButton.module.css";

function AboutButton() {
  return (
    <Link to="/about" className={styles.link}>
      About
    </Link>
  );
}

export default AboutButton;
