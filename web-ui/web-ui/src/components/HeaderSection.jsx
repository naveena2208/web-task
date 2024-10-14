import React from "react";
import Button from "./Button";

const HeaderSection = (props) => {
  return (
    <section className="header">
      <div>
        <h3>{props.text}</h3>
        <h5>{props.subText}</h5>
      </div>
      <div className="btn">
        <Button text="ADD" />
        <Button text="DELETE" />
      </div>
    </section>
  );
};

export default HeaderSection;
