import { LazyLoadImage } from "react-lazy-load-image-component";
import PageHeader from "../components/PageHeader";
import styles from "./About.module.css";

function About() {
  return (
    <div className={styles.container}>
      <PageHeader />
      <div className={styles.infoContainer}>
        <LazyLoadImage
          src="/img/cheif.jpg"
          alt="cheif"
          effect="opacity"
          delayMethod="throttle"
          className={styles.img}
        />
        <p className={styles.description}>
          {" "}
          Welcome to our restaurant, where <span>tradition meets taste</span> in
          every bite. We take pride in offering a warm and inviting atmosphere
          paired with a <span>diverse menu</span> crafted from the finest
          ingredients. Whether you're here for a casual meal or a special
          celebration, our dishes are <span>made with passion</span>, flavor,
          and a touch of home. Come experience unforgettable food, heartfelt
          service, and the <span>true essence of hospitality</span>.
        </p>
      </div>
    </div>
  );
}

export default About;
