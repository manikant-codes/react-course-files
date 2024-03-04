import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthProvider";
import styles from "../styles/layouts/dashboardNavbar.module.css";

function DashboardNavbar(props) {
  const { toggleSidebar } = props;
  const auth = useAuth();
  const user = auth.user?.user;

  if (!user) return null;

  return (
    <nav className={styles.navbar}>
      <h1 className={styles.logo}>To-Do List</h1>
      <ul className={styles.links}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li className={styles.menuIcon}>
          <FontAwesomeIcon icon={faBars} onClick={toggleSidebar} />
        </li>
      </ul>
    </nav>
  );
}

export default DashboardNavbar;
