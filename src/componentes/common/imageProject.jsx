import React from "react";

const Image = (props) => {
  return (
    <div className="project2">
      <div className={props.class}>
        <img src={props.background} alt="" />
      </div>
      <img src={props.image} alt="" />
    </div>
  );
};

export default Image;
