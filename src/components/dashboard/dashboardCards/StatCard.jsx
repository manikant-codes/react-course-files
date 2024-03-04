import React from "react";
import styles from "../../../styles/dashboard/dsahboardCards.module.css";

function StatCard(props) {
  const { title, number } = props;
  return (
    <div className={styles.statCardContainer}>
      <h2>{title}</h2>
      <p>{number}</p>
    </div>
  );
}

export default StatCard;
