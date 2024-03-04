import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styles from "../../styles/home/hero.module.css";

function Hero() {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.contentContainer}>
        <h2>Your all tasks at one place!</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae
          nesciunt expedita laboriosam eaque numquam reprehenderit distinctio
          eius facilis aliquam. Asperiores neque doloribus consequatur est
          suscipit!
        </p>
        <button>
          Get Started <FontAwesomeIcon icon={faAnglesRight} />
        </button>
      </div>
      <div className={styles.imgContainer}>
        <img src="/images/heroIllustration.svg" alt="" />
      </div>
    </div>
  );
}

export default Hero;
