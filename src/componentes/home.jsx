import React, { Component } from "react";
import Navbar from "./navbar";
import "bootstrap/dist/css/bootstrap.css";
import "../sass/home.css";
import { Link, Switch, Route, Redirect } from "react-router-dom";
import SectionOne from "./SectionOne";
import LogInFrom from "./common/logInForm";
import SectionTwo from "./sectionTwo";
import AllSection from "./allSections";

class Home extends Component {
  state = {};
  render() {
    return (
      <div className="home">
        <Route path="/" component={Navbar} />
        <Route path="/home/logIn" component={LogInFrom} />
        <AllSection />
      </div>
    );
  }
}

export default Home;
