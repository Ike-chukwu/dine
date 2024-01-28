import React, { useContext, useEffect, useRef } from "react";
import "./Preloader.scss";
import logo from "../../assets/images/logo.svg";
import { gsap } from "gsap";
import { AuthContext } from "../../context";

const Preloader = () => {
  const preloaderContiner = useRef();
  const { isPreloaderShowing, setPreloader } = useContext(AuthContext);

  useEffect(() => {
    let tl = gsap.timeline();
    const logo = preloaderContiner.current.children[0];
    const textPack = preloaderContiner.current.children[1];
    const firstText = textPack.children[0];
    const secodText = textPack.children[1];
    const thirdText = textPack.children[2];
    const fourthText = textPack.children[3];
    tl.to(logo, {
      delay: 0.7,
      autoAlpha: 0,
      duration: 0.3,
      ease: "power2.easeIn",
    })
      .to(firstText, {
        autoAlpha: 1,
        duration: 0.3,
        ease: "power2.easeIn",
      })
      .to(firstText, {
        display: "none",
        duration: 0,
        ease: "power2.easeIn",
      })
      .to(secodText, {
        autoAlpha: 1,
        duration: 0.3,
        ease: "power2.easeIn",
      })
      .to(secodText, {
        display: "none",
        duration: 0,
        ease: "power2.easeIn",
      })
      .to(thirdText, {
        autoAlpha: 1,
        duration: 0.3,
        ease: "power2.easeIn",
      })
      .to(thirdText, {
        display: "none",
        duration: 0,
        ease: "power2.easeIn",
      })
      .to(fourthText, {
        autoAlpha: 1,
        duration: 0.3,
        ease: "power2.easeIn",
      })
      .to(fourthText, {
        display: "none",
        duration: 0,
        ease: "power2.easeIn",
      })
      .to(preloaderContiner.current, {
        delay: 0.2,
        height: 0,
        duration: 0.5,
        ease: "power2.easeInOut",
      });
    const timeOut = setTimeout(() => {
      setPreloader(false);
    }, 3000);

    return () => clearTimeout(timeOut);
  });

  return (
    <div className="preloader-container" ref={preloaderContiner}>
      <img src={logo} className="p-logo" alt="" />
      <div className="actual-text-pack">
        <div className="text">a</div>
        <div className="text">taste</div>
        <div className="text">you'll</div>
        <div className="text">remember</div>
      </div>
    </div>
  );
};

export default Preloader;
