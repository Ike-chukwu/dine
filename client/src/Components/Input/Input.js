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
          maxLength={2}
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
          maxLength={2}

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
          maxLength={4}

        />
      );
      break;
    case "Hour":
      element = (
        <input
          {...props}
          className="duration"
          value={props.value}
          onChange={(e) => props.onchange(e)}
          onBlur={triggerFocus}
          focused={focused.toString()}
          maxLength={2}

        />
      );
      break;
    case "Minutes":
      element = (
        <input
          {...props}
          className="duration"
          value={props.value}
          onChange={(e) => props.onchange(e)}
          onBlur={triggerFocus}
          focused={focused.toString()}
          maxLength={2}

        />
      );
      break;

    default:
      break;
  }

  return element;
};

export default Input;
