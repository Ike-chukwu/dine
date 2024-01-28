import React from "react";
import "./Loader.scss";
import Lottie from "lottie-react";
import loaderBar from "../../loaderBar.json";
const Loader = () => {
  return (
    <div className="loader">
      <Lottie animationData={loaderBar} />
    </div>
  );
};

export default Loader;
