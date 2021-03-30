import React from "react";
import quote from "../../image&&logs/quote.svg";

const Testimony = (props) => {
  return (
    <div className="testimony">
      <div className="contentTest">
        <span>
          <img src={quote} alt="" />
        </span>
        <p>{props.paragraph}</p>
        <div className="image-content">
          <div className="img">
            <img src={props.image} alt="" />
          </div>
          <div className="text-content">
            <h5>{props.name}</h5>
            <span>{props.job}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimony;
