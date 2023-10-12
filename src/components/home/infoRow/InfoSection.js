import React from "react";

function InfoSection(props) {
  function handleImagePositionChange() {
    props.setIsImageFirst((prevValue) => !prevValue);
  }

  return (
    <>
      {props.content ? (
        props.content
      ) : (
        <div style={{ padding: "24px" }}>
          <h5 className="card-title">Special title treatment</h5>
          <p className="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <button
            onClick={handleImagePositionChange}
            className="btn btn-primary"
          >
            Go somewhere
          </button>
        </div>
      )}
    </>
  );
}

export default InfoSection;
