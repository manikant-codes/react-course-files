import React from "react";

function Carousel(props) {
  return (
    <div
      id="carouselExample"
      className="carousel slide"
      style={{ height: "70vh", overflow: "hidden" }}
    >
      <div className="carousel-inner" style={{ height: "70vh !important" }}>
        {props.arrImages.map((image, index) => {
          return (
            <div
              key={index}
              className="carousel-item active"
              style={{ height: "70vh !important", overflow: "hidden" }}
            >
              <img
                src={image}
                className="d-block w-100"
                alt="..."
                style={{ objectFit: "cover" }}
              />
            </div>
          );
        })}
      </div>
      {/* Prev Button */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      {/* Next Button */}
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousel;
