import React from "react";
import styles from "../../../styles/Carousel.module.css";
import Image from "./Image";
import NextButton from "./NextButton";
import PrevButton from "./PrevButton";

function Carousel(props) {
  return (
    <div
      id="carouselExample"
      className={`carousel slide ${styles.carouselContainer}`}
    >
      <div className="carousel-inner">
        {props.arrImages.map((image, index) => {
          return <Image image={image} key={index} />;
        })}
      </div>
      <PrevButton />
      <NextButton />
    </div>
  );
}

export default Carousel;
