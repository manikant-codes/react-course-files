import React, { useState } from "react";
import ImageSection from "./ImageSection";
import InfoSection from "./InfoSection";

function ImageFirstRow(props) {
  return (
    <>
      <ImageSection image={props.image} />
      <InfoSection
        content={props.ramesh}
        setIsImageFirst={props.setIsImageFirst}
      />
    </>
  );
}

function InfoFirstRow(props) {
  return (
    <>
      <InfoSection
        content={props.ramesh}
        setIsImageFirst={props.setIsImageFirst}
      />
      <ImageSection image={props.image} />
    </>
  );
}

function InfoRow(props) {
  const [isImageFirst, setIsImageFirst] = useState(props.imageFirst);
  return (
    <div style={{ display: "grid", gridTemplateColumns: "50% 50%" }}>
      {isImageFirst ? (
        <ImageFirstRow
          content={props.content}
          image={props.image}
          setIsImageFirst={setIsImageFirst}
        />
      ) : (
        <InfoFirstRow
          content={props.content}
          image={props.image}
          setIsImageFirst={setIsImageFirst}
        />
      )}
    </div>
  );
}

export default InfoRow;
