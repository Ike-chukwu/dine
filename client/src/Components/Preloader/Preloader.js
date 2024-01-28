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
      duration: 0.4,
      ease: "power2.easeIn",
    })
      .to(firstText, {
        autoAlpha: 1,
        duration: 0.4,
        ease: "power2.easeIn",
      })
      .to(firstText, {
        autoAlpha: 0,
        duration: 0.4,
        ease: "power2.easeIn",
      })
      .set(firstText, {
        display: "none",
      })
      .to(secodText, {
        autoAlpha: 1,
        duration: 0.4,
        ease: "power2.easeIn",
      })
      .to(secodText, {
        autoAlpha: 0,
        duration: 0.4,
        ease: "power2.easeIn",
      })
      .set(secodText, {
        display: "none",
      })
      .to(thirdText, {
        autoAlpha: 1,
        duration: 0.4,
        ease: "power2.easeIn",
      })
      .to(thirdText, {
        autoAlpha: 0,
        duration: 0.4,
        ease: "power2.easeIn",
      })
      .set(thirdText, {
        display: "none",
      })
      .to(fourthText, {
        autoAlpha: 1,
        duration: 0.4,
        ease: "power2.easeIn",
      })
      .to(fourthText, {
        autoAlpha: 0,
        duration: 0.4,
        ease: "power2.easeIn",
      })
      .set(fourthText, {
        display: "none",
      })
      .to(preloaderContiner.current, {
        delay: 0.2,
        height: 0,
        duration: 0.7,
        ease: "power2.easeInOut",
      })
      .set(preloaderContiner.current, {
        display: "none",
      });
    const timeOut = setTimeout(() => {
      setPreloader(false);
    }, 4600);

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
