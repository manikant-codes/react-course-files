import React from "react";
import styles from "../styles/layouts/navbar.module.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <h1 className={styles.logo}>To-Do List</h1>
      <ul className={styles.links}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Log In / Sign Up</Link>
        </li>
      </ul>
      <button className={styles.menuBtn}>
        <FontAwesomeIcon icon={faBars} />
      </button>
    </nav>
  );
}

export default Navbar;
