import React, { useEffect, useRef, useState } from "react";
import "./Footer.scss";
import logo from "../../assets/images/logo.svg";
import { gsap } from "gsap";

const Footer = () => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const footerRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entry) => {
        const entries = entry[0].isIntersecting;
        setIsIntersecting(entries);
      },
      {
        threshold: 0.5,
      }
    );
    observer.observe(footerRef.current);
    return () => observer.disconnect();
  });

  useEffect(() => {
    const tl = gsap.timeline();
    const imgRef = footerRef.current.children[0];
    const wordPackRef = footerRef.current.children[1].children[0].children;
    const secondWordPackRef =
      footerRef.current.children[1].children[1].children;
    if (isIntersecting) {
      tl.to(imgRef, {
        autoAlpha: 1,
        x: 0,
        duration: 0.7,
        ease: "power2",
      })
        .to(
          wordPackRef,
          {
            autoAlpha: 1,
            x: 0,
            duration: 0.7,
            ease: "power2",
            stagger: 0.3,
          },
          "-=0.3"
        )
        .to(
          secondWordPackRef,
          {
            autoAlpha: 1,
            x: 0,
            duration: 0.7,
            ease: "power2",
            stagger: 0.3,
          },
          "-=0.3"
        );
    }
  }, [isIntersecting]);

  return (
    <div className="footer-parent">
      <section className="footer" ref={footerRef}>
        <img src={logo} alt="" />
        <div className="right-footer-content">
          <div className="first-footer-content">
            <p>MARTHWAITE, SEDBERGH</p>
            <p>CUMBRIA</p>
            <p>+00 44 123 4567</p>
          </div>
          <div className="second-footer-content">
            <p>OPEN TIMES</p>
            <p>MON - FRI: 09:00 AM - 10:00 PM</p>
            <p>SAT - SUN: 09:00 AM - 11:30 PM</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
