import { faPowerOff } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthProvider";
import styles from "../styles/layouts/navbar.module.css";

function Navbar() {
  const auth = useAuth();
  const user = auth.user?.user;

  return (
    <div>
      <nav className={styles.navbar}>
        <h1 className={styles.logo}>To-Do List</h1>
        <ul className={styles.links}>
          <li>
            <Link to="/">Home</Link>
          </li>
          {user ? (
            <>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li>
                <button className={styles.logoutBtn}>
                  <FontAwesomeIcon icon={faPowerOff} />
                  Logout
                </button>
              </li>
            </>
          ) : (
            <li>
              <Link to="/login">Signup / Login</Link>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
