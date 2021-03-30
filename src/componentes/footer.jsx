import React from "react";
import logo from "../image&&logs/logo.svg";
import appleStore from "../image&&logs/iconAppStore.svg";
import playStore from "../image&&logs/iconGooglePlay.svg";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { GrMedium } from "react-icons/gr";
import { FcGoogle } from "react-icons/fc";

const Footer = (props) => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footerSideOne">
          <span>
            <img className="f-logo" src={logo} alt="" />
          </span>
          <h4>The Platform that works for You,Us and Everyone else.</h4>
          <p>
            Say goodbye to overdue tasks and shufflingbetween tools to do
            things.
            <p>
              <strong>nTask is here.</strong>
            </p>
          </p>
          <div className="get-s">
            <button>get started for free</button>
          </div>
          <div className="storeLink">
            <span className="f-img">
              <img src={appleStore} alt="" />
            </span>
            <span className="f-img">
              <img src={playStore} alt="" />
            </span>
          </div>
        </div>
        <div className="footerSideTwo">
          <ul className="main-list">
            <li>
              <Link to="#">product</Link>
              <ul className="list22">
                <li>
                  <Link to="#">Pricing</Link>
                </li>
                <li>
                  <Link to="#">Project Management</Link>
                </li>
                <li>
                  <Link to="#">Task Management</Link>
                </li>
                <li>
                  <Link to="#">Kanban Boards</Link>
                </li>
                <li>
                  <Link to="#">Gantt Charts</Link>
                </li>
                <li>
                  <Link to="#">Team Management</Link>
                </li>
                <li>
                  <Link to="#">Team Management</Link>
                </li>

                <li>
                  <Link to="#">Time Tracking & Timesheets</Link>
                </li>

                <li>
                  <Link to="#">Team Management</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="#">compare</Link>
              <ul className="list22">
                <li>
                  <Link to="#">Pricing</Link>
                </li>
                <li>
                  <Link to="#">Project Management</Link>
                </li>
                <li>
                  <Link to="#">Task Management</Link>
                </li>
                <li>
                  <Link to="#">Kanban Boards</Link>
                </li>
                <li>
                  <Link to="#">Gantt Charts</Link>
                </li>
                <li>
                  <Link to="#">Team Management</Link>
                </li>
                <li>
                  <Link to="#">Team Management</Link>
                </li>

                <li>
                  <Link to="#">Time Tracking & Timesheets</Link>
                </li>

                <li>
                  <Link to="#">Team Management</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="#">use cases</Link>
              <ul className="list22">
                <li>
                  <Link to="#">Pricing</Link>
                </li>
                <li>
                  <Link to="#">Project Management</Link>
                </li>
                <li>
                  <Link to="#">Task Management</Link>
                </li>
                <li>
                  <Link to="#">Kanban Boards</Link>
                </li>
                <li>
                  <Link to="#">Gantt Charts</Link>
                </li>
                <li>
                  <Link to="#">Team Management</Link>
                </li>
                <li>
                  <Link to="#">Team Management</Link>
                </li>

                <li>
                  <Link to="#">Time Tracking & Timesheets</Link>
                </li>

                <li>
                  <Link to="#">Team Management</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="#">Contact</Link>
              <ul className="list22">
                <li>
                  <Link to="#">Pricing</Link>
                </li>
                <li>
                  <Link to="#">Project Management</Link>
                </li>
                <li>
                  <Link to="#">Task Management</Link>
                </li>
                <li>
                  <Link to="#">Kanban Boards</Link>
                </li>
                <li>
                  <Link to="#">Gantt Charts</Link>
                </li>
                <li>
                  <Link to="#">Team Management</Link>
                </li>
                <li>
                  <Link to="#">Team Management</Link>
                </li>

                <li>
                  <Link to="#">Time Tracking & Timesheets</Link>
                </li>

                <li>
                  <Link to="#">Team Management</Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div className="links-copy">
        <div className="link-content">
          <div className="text-link">
            Copyright © 2021 nTask. All Rights Reserved.
          </div>
          <div className="s-media">
            <div>
              <FaFacebookF />
            </div>
            <div>
              <FaTwitter />
            </div>
            <div>
              <FaYoutube />
            </div>
            <div>
              <FaLinkedinIn />
            </div>
            <div>
              <FaInstagram />
            </div>
            <div>
              <GrMedium />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
