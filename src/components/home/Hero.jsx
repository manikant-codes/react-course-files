import React from "react";
import styles from "../../styles/home/hero.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthProvider";

function Hero() {
  const navigate = useNavigate();
  const auth = useAuth();

  function handleClick() {
    if (auth.user) {
      navigate("/dashboard");
    } else {
      navigate("/login");
    }
  }

  return (
    <div className={styles.heroContainer}>
      <div className={styles.heroContentContainer}>
        <h2>All your tasks at one place!</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At, ducimus
          iusto non vel eaque quasi possimus, esse vero repellat, blanditiis
          pariatur sint fugit recusandae officiis optio eius suscipit
          perferendis! Qui!
        </p>
        <button onClick={handleClick}>
          Get Started <FontAwesomeIcon icon={faAnglesRight} />
        </button>
      </div>
      <div className={styles.heroImgContainer}>
        <img src="./images/heroIllustration.svg" alt="" />
      </div>
    </div>
  );
}

export default Hero;
