import React from "react";
import "./Cancel.scss";
import { Link } from "react-router-dom";

const Cancel = () => {
  return (
    <div className="cancel-parent">
      <div className="cancel-modal">
        <h1 className="mark">!</h1>
        <h1 className="cancel-tag">payment failed</h1>
        <p className="caution">
          Hey there.Something went wrong while you were in the process of
          completing your checkout.Please restart your checkout process
        </p>
        <Link to="/" className="home-btn">
          <div>back to home</div>
        </Link>
      </div>
    </div>
  );
};

export default Cancel;
