import PropTypes from "prop-types";
import { Link } from "react-router";
import styles from "./GoToLoginButton.module.css";

function GoToLoginButton({ children }) {
  return (
    <div className={styles.login}>
      <Link to="/login">{children}</Link>
    </div>
  );
}

GoToLoginButton.propTypes = {
  children: PropTypes.node,
};

export default GoToLoginButton;
