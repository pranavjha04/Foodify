import { useNavigate } from "react-router";
import { useAuth } from "../contexts/FakeAuthContext";
import styles from "./LogoutButton.module.css";

function LogoutButton() {
  const { logout } = useAuth();
  const navigate = useNavigate();
  function handleClick() {
    logout();
    navigate("/");
  }
  return (
    <button className={styles.btn} onClick={handleClick}>
      Logout
    </button>
  );
}

export default LogoutButton;
