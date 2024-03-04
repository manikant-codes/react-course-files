import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthProvider";
import styles from "../../styles/login/loginForm.module.css";

function SignupForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { signup } = useAuth();
  const navigate = useNavigate();

  function handleChange(e) {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    await signup(formState);
    navigate("/dashboard");
  }

  return (
    <div className={styles.loginFormContainer}>
      <form onSubmit={handleSubmit} className={styles.loginForm}>
        <div className={styles.loginFormFieldsContainer}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formState.name}
            onChange={handleChange}
          />
        </div>
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
          <FontAwesomeIcon icon={faUserPlus} />
          Sign Up
        </button>
        <p>OR</p>
        <Link to="/login">Login</Link>
      </form>
    </div>
  );
}

export default SignupForm;
