import React from "react";
import Carousel from "../components/home/Carousel";
import InfoRow from "../components/home/infoRow/InfoRow";

function About() {
  const images = [
    "https://images.unsplash.com/photo-1603386329225-868f9b1ee6c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
    "https://plus.unsplash.com/premium_photo-1664303847960-586318f59035?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
  ];
  return (
    <div>
      <Carousel arrImages={images} />
      <InfoRow />
      <InfoRow />
    </div>
  );
}

export default About;
