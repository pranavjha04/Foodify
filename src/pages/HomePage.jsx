import styles from "./HomePage.module.css";

import GoToLoginButton from "../components/GoToLoginButton";

import { LazyLoadImage } from "react-lazy-load-image-component";
import PageHeader from "../components/PageHeader";

function HomePage() {
  return (
    <div className={styles.homeContainer}>
      <PageHeader />
      <section className={styles.section}>
        <div className={styles.intro}>
          <h2>Where Taste Meets Art. A Culinary Experience to Remember.</h2>
          <p>
            Discover dishes that delight, crafted like masterpieces. Like,
            explore, and indulge — your next favorite meal is just a tap away.
          </p>
          <GoToLoginButton>Get Started</GoToLoginButton>
        </div>
        <div className={styles.imageWrapper}>
          <LazyLoadImage
            className={styles.heroImg}
            src="./img/hero.webp"
            alt="hero"
            effect="opacity"
            draggable={false}
          />
        </div>
      </section>
    </div>
  );
}

export default HomePage;
