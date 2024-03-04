import React from "react";
import ActionTitle from "../components/common/ActionTitle";
import DashboardCards from "../components/dashboard/dashboardCards/DashboardCards";

function Dashboard() {
  return (
    <div>
      <ActionTitle title="Dashboard" />
      <DashboardCards />
    </div>
  );
}

export default Dashboard;
