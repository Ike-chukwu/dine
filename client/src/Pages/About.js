import React from 'react'
import { RestaurantInfo } from '../Components/RestaurantInfo/RestaurantInfo'
import ReservationBanner from '../Components/ReservationBanner/ReservationBanner'
import Footer from '../Components/Footer/Footer'

const About = () => {
  return (
    <div>
      <RestaurantInfo/>
      <ReservationBanner/>
      <Footer/>
    </div>
  )
}

export default About