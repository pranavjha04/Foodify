import { useEffect, useState } from "react";
import { useAuth } from "../contexts/FakeAuthContext";
import styles from "./Login.module.css";
import { useNavigate } from "react-router";
import PageHeader from "../components/PageHeader";

function Login() {
  const { isAuthenticated, login } = useAuth();
  const [email, setEmail] = useState("pranav@gmail.com");
  const [password, setPassword] = useState("qwerty");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (email && password) login(email, password);
  }
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/app", { replace: true });
    }
  }, [isAuthenticated, navigate]);
  return (
    <div className={styles.formContainer}>
      <PageHeader />

      <div className={styles.formWrapper}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="pranav@gmail.com"
              className={styles.input}
            />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              placeholder="qwerty"
              className={styles.input}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className={styles.button}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
