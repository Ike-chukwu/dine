import React, { useState } from "react";
import "./Input.css";

const Input = (props) => {
  const [focused, setFocus] = useState(false);

  const triggerFocus = () => {
    setFocus(true);
  };

  let element;
  switch (props.name) {
    case "Name":
      element = (
        <>
          <input
            onBlur={triggerFocus}
            focused={focused.toString()}
            className={props.className}
            {...props}
            value={props.value}
            onChange={(e) => props.onchange(e)}
          />
          {/* <span className="error">{props.errorMessage}</span> */}
        </>
      );
      break;
    case "Email":
      element = (
        <>
          <input
            onBlur={triggerFocus}
            focused={focused.toString()}
            className={props.className}
            {...props}
            value={props.value}
            onChange={(e) => props.onchange(e)}
          />
          {/* <span className="error">{props.errorMessage}</span> */}
        </>
      );
      break;
    case "Month":
      element = (
        <input
          className="duration"
          {...props}
          value={props.value}
          onChange={(e) => props.onchange(e)}
          onBlur={triggerFocus}
          focused={focused.toString()}
          // type="number"
        />
      );
      break;
    case "Day":
      element = (
        <input
          {...props}
          value={props.value}
          className="duration"
          onChange={(e) => props.onchange(e)}
          onBlur={triggerFocus}
          focused={focused.toString()}
          // type="number"
        />
      );
      break;
    case "Year":
      element = (
        <input
          {...props}
          className="duration"
          value={props.value}
          onChange={(e) => props.onchange(e)}
          onBlur={triggerFocus}
          focused={focused.toString()}
          // type="number"
        />
      );
      break;

    default:
      break;
  }

  return element;
};

export default Input;
