import React, { useState } from "react";
import "./CheckoutInput.scss";

const CheckoutInput = (props) => {
  const [focused, setFocused] = useState(false);

  const onBlurHandler = () => {
    setFocused(true);
  };

  return (
    <div className={props.pClassName}>
      <input
        focused={focused.toString()}
        onBlur={onBlurHandler}
        className={props.className}
        {...props}
        value={props.value}
        onChange={(e) => props.onChange(e)}
      />
      <p className="errorMessage">{props.errorMessage}</p>
    </div>
  );
};

export default CheckoutInput;
