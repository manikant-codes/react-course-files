import React, { useState } from "react";
import ImageSection from "./ImageSection";
import InfoSection from "./InfoSection";
import { useUser } from "../../demos/useContext/UserProvider";

function ImageFirst(props) {
  return (
    <div className="row">
      <ImageSection image={props.image} />
      <InfoSection
        title={props.title}
        description={props.description}
        content={props.content}
        setIsImageFirst={props.setIsImageFirst}
      />
    </div>
  );
}

function InfoFirst(props) {
  return (
    <div className="row">
      <InfoSection
        title={props.title}
        description={props.description}
        content={props.content}
        setIsImageFirst={props.setIsImageFirst}
      />
      <ImageSection image={props.image} />
    </div>
  );
}

function Row(props) {
  const [isImageFirst, setIsImageFirst] = useState(props.imageFirst);

  return (
    <div className="">
      {isImageFirst ? (
        <ImageFirst
          title={props.title}
          description={props.description}
          content={props.content}
          image={props.image}
          setIsImageFirst={setIsImageFirst}
        />
      ) : (
        <InfoFirst
          title={props.title}
          description={props.description}
          content={props.content}
          image={props.image}
          setIsImageFirst={setIsImageFirst}
        />
      )}
    </div>
  );
}

export default Row;
