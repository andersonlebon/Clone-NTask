import React from "react";
import { Link } from "react-router-dom";

const SingIn = (props) => {
  return (
    <Link to={props.linkTo} className={props.class}>
      {props.name}
    </Link>
  );
};

export default SingIn;
