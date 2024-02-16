import React from "react";
import styles from "../styles/layouts/navbar.module.css";

function Navbar() {
  console.log("styles", styles);
  return (
    <nav className={styles.navbar}>
      <h1>To-Do List</h1>
    </nav>
  );
}

export default Navbar;
