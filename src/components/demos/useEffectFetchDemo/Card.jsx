import React from "react";

function Card(props) {
  const { item } = props;
  return (
    <div className="col-3">
      <div className="card" style={{ width: "18rem" }}>
        <img src={item.url} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{item.title}</h5>
        </div>
      </div>
    </div>
  );
}

export default Card;
