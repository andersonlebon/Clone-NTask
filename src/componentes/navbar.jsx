import React from "react";
import logo from "../image&&logs/logo.svg";
import "../sass/home.css";
import { Route } from "react-router-dom";

import { Link } from "react-router-dom";
import SingIn from "./common/SingnIn";
import LogInFrom from "./common/logInForm";

const Navbar = (props) => {
  return (
    <div>
      <nav className="nav-bar">
        <div className="navigation" id="navigation">
          <Link className="navbar-logo" to="/">
            <img className="logo" src={logo} alt="logo" />
          </Link>
          <ul>
            <li>
              <Link to="/home">Features</Link>
            </li>
            <li>
              <Link to="/movies">Resources</Link>
            </li>
            <li>
              <Link to="/home">Pricing</Link>
            </li>
            <li>
              <Link to="/home">Request a Demo</Link>
            </li>
          </ul>
        </div>
        <div className="buttons">
          <SingIn
            name="Sing in"
            linkTo="/home/signIn"
            class="sign-in-btn buutton"
          />
          <SingIn
            name="Sign up for free"
            linkTo="#"
            class="sign-up-btn button"
          />
        </div>
      </nav>
      <Route exact path="/home/signIn" component={LogInFrom} />
    </div>
  );
};

export default Navbar;
