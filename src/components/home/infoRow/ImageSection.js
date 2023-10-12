import React from "react";

function ImageSection(props) {
  return (
    <div
      style={{
        width: "auto",
        height: "300px",
        objectFit: "cover",
        overflow: "hidden",
      }}
    >
      <img
        src={
          props.image
            ? props.image
            : "https://images.unsplash.com/photo-1505155679343-57f78fd3b103?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        }
        class="img-fluid"
        alt="..."
      ></img>
    </div>
  );
}

export default ImageSection;
