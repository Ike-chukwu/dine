import React from "react";
import HeroSection from "../Components/HeroSection/HeroSection";
import EnjoyableSection from "../Components/EnjoyableSection/EnjoyableSection";
import LocalFood from "../Components/LocalFood/LocalFood";
import Highlights from "../Components/Highlights/Highlights";
import FamilyGatheringSection from "../Components/FamilyGatheringSection/FamilyGatheringSection";
import ReservationBanner from "../Components/ReservationBanner/ReservationBanner";
import Footer from "../Components/Footer/Footer";
import Transition from "../Components/Transition/Transition";
import { gsap } from "gsap";

const Home = () => {
  const homeTl = gsap.timeline();

  return (
    <div>
      <Transition timeline={homeTl} />
      <HeroSection />
      <EnjoyableSection />
      <LocalFood />
      <Highlights />
      <FamilyGatheringSection />
      <ReservationBanner />
      <Footer />
    </div>
  );
};

export default Home;
