import React from "react";
import "./Input.scss";

const Input = (props) => {
  let element;
  switch (props.name) {
    case "Name":
      element = <input />;
      break;
    case "Email":
      element = <input />;
      break;
    case "Month":
      element = <input />;
      break;
    case "Day":
      element = <input />;
      break;
    case "Year":
      element = <input />;
      break;

    default:
      break;
  }

  return <div>Input</div>;
};

export default Input;
