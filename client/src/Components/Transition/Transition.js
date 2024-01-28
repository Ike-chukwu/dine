import React, { useEffect, useRef } from "react";
import "./Transition.scss";
import { gsap } from "gsap";

const Transition = ({ timeline }) => {
  const trans = useRef();

  useEffect(() => {
    timeline.to(trans.current, {
      duration: 3.5,
      x: 2600,
      ease: "power4.easeInOut",
    });
  });

  return (
    <div>
      <div className="transition-effect" ref={trans}></div>
    </div>
  );
};

export default Transition;
