import React from "react";
import icon from "../../image&&logs/sociaty/download6.svg";
import icon2 from "../../image&&logs/sociaty/download.svg";

const Sidetext = (props) => {
  return (
    <div className="plan-section">
      <div className="plan-info">
        <span className={props.class}>
          <img className="img" src={props.iconOne} alt="" /> {props.content}
        </span>
        <h4>{props.headingOne}</h4>
        <p>{props.paragrepheOne}</p>
        <h4 className="list-p">{props.listTitle}</h4>
        <ul>
          <li>
            <img src={icon} alt="" />
            {props.list1}
          </li>
          <li>
            <img src={icon} alt="" />
            {props.list2}
          </li>
          <li>
            <img src={icon} alt="" />
            {props.list3}
          </li>
          <li>
            <img src={icon} alt="" />
            {props.list4}
          </li>
        </ul>
        <span className={props.class}>
          Learn More <img src={icon2} alt="" />{" "}
        </span>
      </div>
    </div>
  );
};

export default Sidetext;
