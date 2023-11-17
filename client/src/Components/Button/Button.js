import React from "react";
import "./Button.scss";
import { Link } from "react-router-dom";

const Button = React.forwardRef((props, ref) => {
  return (
    <Link to="/reservation">
      <button ref={ref}>book a table</button>
    </Link>
  );
});

export default Button;
