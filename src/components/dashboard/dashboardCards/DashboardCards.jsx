import React from "react";
import styles from "../../../styles/dashboard/dsahboardCards.module.css";
import StatCard from "./StatCard";
import useFetch from "../../../customHooks/useFetch";
import { getStats } from "../../../services/apiServices";

function DashboardCards() {
  const { loading, data, error } = useFetch(getStats);

  if (loading) return <p>Loading...</p>;

  if ((!loading && error) || !data) return <p>Something went wrong!</p>;

  return (
    <div className={styles.cardsContainer}>
      <StatCard title="Incomplete Tasks" number={data.incompleteTasks} />
      <StatCard title="Completed Tasks" number={data.completedTasks} />
      <StatCard title="Total Tasks" number={data.totalTasks} />
    </div>
  );
}

export default DashboardCards;
