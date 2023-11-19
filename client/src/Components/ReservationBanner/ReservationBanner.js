import React, { useEffect, useRef, useState } from "react";
import "./ReservationBanner.scss";
import Button from "../Button/Button";
import { gsap } from "gsap";

const ReservationBanner = () => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const btnRef = useRef();

  const bannerRef = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0].isIntersecting;
        setIsIntersecting(entry);
      },
      {
        threshold: 0.5,
      }
    );
    observer.observe(bannerRef.current);

    return () => observer.disconnect();
  });

  useEffect(() => {
    const actualBannerSectionRef = bannerRef.current.children[0];
    const tilteRef = actualBannerSectionRef.children[0];
    const tl = gsap.timeline();
    if (isIntersecting) {
      tl.to(tilteRef, {
        autoAlpha: 1,
        x: 0,
        duration: 0.7,
        ease: "power2",
      }).to(btnRef.current, {
        autoAlpha: 1,
        duration: 1,
        x: 0,
        ease: "power3",
      });
    }
  }, [isIntersecting]);

  return (
    <div className="section-banner-parent" ref={bannerRef}>
      <section className="section-banner">
        <h1>Ready to make a reservation?</h1>
        <Button ref={btnRef} />
      </section>
    </div>
  );
};

export default ReservationBanner;
