import { LazyLoadImage } from "react-lazy-load-image-component";
import { useAuth } from "../contexts/FakeAuthContext";
import LogoutButton from "./LogoutButton";
import styles from "./Profile.module.css";

function Profile() {
  const { user } = useAuth();
  return (
    <div className={styles.profile}>
      <LazyLoadImage src={`${user.avatar}`} alt="Profile" />
      <p>Hi, Pranav</p>
      <LogoutButton />
    </div>
  );
}

export default Profile;
