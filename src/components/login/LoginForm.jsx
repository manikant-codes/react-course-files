import React, { useState } from "react";
import { useAuth } from "../../contexts/AuthProvider";
import styles from "../../styles/login/loginForm.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";

function LoginForm() {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const { login } = useAuth();
  const navigate = useNavigate();

  function handleChange(e) {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    await login(formState);
    navigate("/dashboard");
  }

  return (
    <div className={styles.loginFormContainer}>
      <form onSubmit={handleSubmit} className={styles.loginForm}>
        <div className={styles.loginFormFieldsContainer}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formState.email}
            onChange={handleChange}
          />
        </div>
        <div className={styles.loginFormFieldsContainer}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formState.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit">
          <FontAwesomeIcon icon={faRightToBracket} />
          Login
        </button>
        <p>OR</p>
        <Link to="/signup">Sign Up</Link>
      </form>
    </div>
  );
}

export default LoginForm;
