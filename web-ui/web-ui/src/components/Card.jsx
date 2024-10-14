import React from "react";

const Card = (props) => {
  return (
    <div
      className="card"
      style={{ color: props.color, backgroundColor: props.bgColor }}
    >
      <p>{props.text}</p>
      <h3>{props.value}</h3>
      <p>{props.subText}</p>
    </div>
  );
};

export default Card;
