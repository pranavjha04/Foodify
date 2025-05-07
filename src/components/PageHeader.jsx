import AboutButton from "./AboutButton";
import GoToLoginButton from "./GoToLoginButton";
import Logo from "./Logo";
import styles from "./PageHeader.module.css";

function PageHeader() {
  return (
    <header className={styles.header}>
      <Logo />
      <ul className={styles.others}>
        <li>
          <AboutButton />
        </li>
        <li>
          <GoToLoginButton>Login</GoToLoginButton>
        </li>
      </ul>
    </header>
  );
}

export default PageHeader;
