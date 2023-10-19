import React from "react";
import "./Button.scss";
import { Link } from "react-router-dom";

const Button = () => {
  return (
    <Link to='/reservation'>
      <button>book a table</button>
    </Link>
  );
};

export default Button;
