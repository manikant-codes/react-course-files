import React from "react";
import Carousel from "../components/home/carousel/Carousel";
import Row from "../components/home/row/Row";

function About() {
  const images = [
    "https://images.unsplash.com/photo-1552308995-2baac1ad5490?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  ];

  return (
    <div>
      <Carousel arrImages={images} />
      <Row
        imageFirst
        image="https://images.unsplash.com/photo-1672309558498-cfcc89afff25?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        title="Lorem"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum sequi excepturi doloremque maiores. Quaerat debitis laudantium sit culpa rerum, nulla repellendus, in nobis id magnam amet accusantium. Architecto, qui quod!"
      />
      <Row
        image="https://images.unsplash.com/photo-1545670723-196ed0954986?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80"
        title="Lorem"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum sequi excepturi doloremque maiores. Quaerat debitis laudantium sit culpa rerum, nulla repellendus, in nobis id magnam amet accusantium. Architecto, qui quod!"
      />
    </div>
  );
}

export default About;
