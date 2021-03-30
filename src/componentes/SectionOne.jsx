import React from "react";
import SingIn from "./common/SingnIn";
import imageOne from "../image&&logs/sectionOne.png";
import play from "../image&&logs/playGreen.svg";
import { Link } from "react-router-dom";
import bg from "../image&&logs/bg1.svg";
import { BiMessageSquareDetail } from "react-icons/bi";
import ButtonsLink from "./common/buttonsLink";

const SectionOne = (props) => {
  return (
    <div className="section-one">
      <div className="allSides">
        <div className="bg">
          <img src={bg} />
        </div>
        <div className="sideOne">
          <h1>Do it Right with nTask</h1>
          <p>
            Project management software that enables your teams to collaborate,
            plan, analyze and manage everyday tasks
          </p>
          <form className="form">
            <input type="text" placeholder="Enter your Email Adress" />
            <SingIn
              name="Get started for free"
              linkTo="#"
              class="sign-up-btn get-s"
            />
          </form>
          <p className="smarl">
            * 100% free to get started. No credit card required.
          </p>
          <div className="using">
            <span>Or sign in using: </span>
            <ButtonsLink class="using" />
          </div>
        </div>
        <div className="side-two">
          <img src={imageOne} alt="no image found" />
          <div className="play">
            <img src={play} alt="play not available" />
          </div>
        </div>
      </div>
      <div className="message">
        <Link to="#">
          <BiMessageSquareDetail />
        </Link>
      </div>
    </div>
  );
};

export default SectionOne;
