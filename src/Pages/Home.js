import React from 'react'
import HeroSection from '../Components/HeroSection/HeroSection'
import EnjoyableSection from '../Components/EnjoyableSection/EnjoyableSection'
import LocalFood from '../Components/LocalFood/LocalFood'
import Highlights from '../Components/Highlights/Highlights'
import FamilyGatheringSection from '../Components/FamilyGatheringSection/FamilyGatheringSection'
import ReservationBanner from '../Components/ReservationBanner/ReservationBanner'
import Footer from '../Components/Footer/Footer'

const Home = () => {
  return (
    <div>
        <HeroSection/>
        <EnjoyableSection/>
        <LocalFood/>
        <Highlights/>
        <FamilyGatheringSection/>
        <ReservationBanner/>
        <Footer/>
    </div>
  )
}

export default Home