import React from "react";

function Image({ image }) {
  return (
    <div className="carousel-item active">
      <img src={image} className="d-block w-100" alt="..." />
    </div>
  );
}

export default Image;
