import React from "react";
import icon2 from "../../image&&logs/sociaty/download.svg";
import { Link } from "react-router-dom";

const ListContent = (props) => {
  return (
    <div className="list-content">
      <div className="contentlist">
        <span>
          <img src={props.icon} alt="" />
        </span>
        <h6>{props.title}</h6>
        <p>{props.paragraph}</p>
        <div className="linkContent">
          <Link to={props.linkTo}>Learn More</Link> <img src={icon2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ListContent;
