import React, { Component } from "react";
import ButtonsLink from "./buttonsLink";
import { Link } from "react-router-dom";
import { GiCancel } from "react-icons/gi";

class LogInFrom extends Component {
  state = {};
  render() {
    return (
      <div className="content">
        <div className="background"></div>
        <div className="form-container">
          <h4>Ready to do more?</h4>
          <p className="smarl">Fill your information and click Sign Up</p>
          <form>
            <div className="from-group">
              <label htmlFor="input">Email</label>{" "}
              <input
                placeholder="Enter your Email adress"
                type="email"
                id="input"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <input className="check-box" type="checkbox" id="check-box" />
              <label htmlFor="check-box">
                I agree to recieve product updates, ofers and promotions
              </label>
            </div>
            <button>Sign Up</button>
            <div className="or-sign">
              <hr />
              Or sign Up with
              <hr />
            </div>
          </form>
          <div className="links">
            <div className="linkTo">
              <ButtonsLink class="using justify" />
            </div>
          </div>
          <div className="infos">
            <p>
              Have you an account? <Link to="#">Sign In</Link>
            </p>
            <p className="smarl">
              By signing up, you agree to our <Link to="#">terms</Link> and
              <Link to="#"> Privacy Policy</Link>
            </p>
          </div>
          <Link to="/home" className="cancel">
            <GiCancel />
          </Link>
        </div>
      </div>
    );
  }
}

export default LogInFrom;
