import React from "react";
import image1 from "../image&&logs/sociaty/at&t_Logo.svg";
import image2 from "../image&&logs/sociaty/download.png";
import image3 from "../image&&logs/sociaty/download4.svg";
import image4 from "../image&&logs/sociaty/download3.svg";
import image5 from "../image&&logs/sociaty/download7.svg";
import image6 from "../image&&logs/sociaty/download5.svg";
import image7 from "../image&&logs/sociaty/download222.svg";
import icon from "../image&&logs/sociaty/download6.svg";
import icon2 from "../image&&logs/sociaty/download.svg";
import project2 from "../image&&logs/download.png";
import background from "../image&&logs/download.svg";
import icon3 from "../image&&logs/download3.svg";

import Side from "./common/sectionSide";

const SectionTwo = (props) => {
  return (
    <div className="section-two">
      <div className="client-section">
        <h2>Over 150,000 Companies Trust nTask in 155 Countries</h2>
        <div className="images">
          <img src={image1} alt="" />
          <img src={image2} alt="" />
          <img src={image3} alt="" />
          <img src={image4} alt="" />
          <img src={image5} alt="" />
          <img src={image6} alt="" />
          <img src={image7} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
