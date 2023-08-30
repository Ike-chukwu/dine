import React from 'react'
import HeroSection from '../Components/HeroSection/HeroSection'
import EnjoyableSection from '../Components/EnjoyableSection/EnjoyableSection'
import LocalFood from '../Components/LocalFood/LocalFood'
import Highlights from '../Components/Highlights/Highlights'
import FamilyGatheringSection from '../Components/FamilyGatheringSection/FamilyGatheringSection'

const Home = () => {
  return (
    <div>
        <HeroSection/>
        <EnjoyableSection/>
        <LocalFood/>
        <Highlights/>
        <FamilyGatheringSection/>
    </div>
  )
}

export default Home