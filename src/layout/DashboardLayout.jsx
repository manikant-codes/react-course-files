import React, { useCallback, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import AuthGuard from "../guards/AuthGuard";
import styles from "../styles/layouts/dashboardLayout.module.css";
import DashboardSidebar from "./DashboardSidebar";
import DashboardNavbar from "./DashboardNavbar";

function DashboardLayout() {
  const [isExpanded, setIsExpanded] = useState(true);
  const location = useLocation();

  const publicPaths = ["/", "/login", "/signup"];

  const toggleSidebar = useCallback(
    function () {
      setIsExpanded(!isExpanded);
    },
    [isExpanded]
  );

  return (
    <>
      <DashboardNavbar toggleSidebar={toggleSidebar} />
      <AuthGuard>
        <div
          className={
            !publicPaths.includes(location.pathname) ? styles.containerMain : ""
          }
        >
          <DashboardSidebar isExpanded={isExpanded} />
          <div className={styles.containerOutlet}>
            <Outlet />
          </div>
        </div>
      </AuthGuard>
    </>
  );
}

export default DashboardLayout;
