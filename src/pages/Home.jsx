import React from "react";
import Carousel from "../components/home/carousel/Carousel";
import Row from "../components/home/row/Row";

function Home() {
  const names = ["Vicky", "Chintu", "Jassi", "Baloo"];

  const images = [
    "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1552308995-2baac1ad5490?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  ];

  const list = (
    <ul style={{ padding: "32px" }}>
      {names.map((item, index) => {
        return <li key={index}>{item}</li>;
      })}
    </ul>
  );

  return (
    <>
      <Carousel arrImages={images} />
      <Row
        title="First Row"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur id maxime debitis, exercitationem beatae blanditiis commodi ad nulla voluptatem fugit nam non consequuntur deleniti labore quidem assumenda, nihil quibusdam eos."
        image="https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        imageFirst
      />
      <Row
        title="Second Row"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur id maxime debitis, exercitationem beatae blanditiis commodi ad nulla voluptatem fugit nam non consequuntur deleniti labore quidem assumenda, nihil quibusdam eos."
        image="https://images.unsplash.com/photo-1618477388954-7852f32655ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80"
      />
      <Row
        title="Third Row"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur id maxime debitis, exercitationem beatae blanditiis commodi ad nulla voluptatem fugit nam non consequuntur deleniti labore quidem assumenda, nihil quibusdam eos."
        component={list}
        imageFirst
        image="https://images.unsplash.com/photo-1565120130276-dfbd9a7a3ad7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
      />
    </>
  );
}

export default Home;
