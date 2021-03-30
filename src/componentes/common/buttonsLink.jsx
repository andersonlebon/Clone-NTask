import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const ButtonsLink = (props) => {
  return (
    <div className={props.class}>
      <ul className={props.class}>
        <li className="button">
          <Link to="#">
            <div className="icon blue">
              <FaFacebookF />
            </div>
            Facebook
          </Link>
        </li>
        <li className="button">
          <Link to="#">
            <div className="icon blue">
              <FcGoogle />
            </div>
            Google
          </Link>
        </li>
        <li className="button">
          <Link to="#">
            <div className="icon blue">
              <FaTwitter />
            </div>
            Twitter
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default ButtonsLink;
