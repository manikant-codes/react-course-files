import {
  faDashboard,
  faList,
  faPowerOff,
  faUserLarge,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthProvider";
import styles from "../styles/layouts/dashboardSidebar.module.css";

function DashboardSidebar(props) {
  const { isExpanded } = props;
  const { user, logout } = useAuth();

  if (!user) return null;

  async function handleLogout() {
    await logout();
  }

  return (
    <div
      className={`${styles.sidebarContainer} ${
        isExpanded ? styles.isExpanded : styles.isCollapsed
      }`}
    >
      <ul className={styles.links}>
        <li>
          <Link to="/dashboard/profile">
            <FontAwesomeIcon icon={faUserLarge} />
            {user.user.name}
          </Link>
        </li>
        <li>
          <Link to="/dashboard">
            <FontAwesomeIcon icon={faDashboard} />
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/dashboard/todos">
            <FontAwesomeIcon icon={faList} />
            ToDos
          </Link>
        </li>
        <li onClick={handleLogout}>
          <FontAwesomeIcon icon={faPowerOff} />
          Logout
        </li>
      </ul>
    </div>
  );
}

export default DashboardSidebar;
