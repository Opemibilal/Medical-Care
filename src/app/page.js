import React from 'react'
import Nav from './component/Nav'
import HeroSection from './component/HeroSection'
import Services from './component/Services'
import Ourstory from './component/ourstory'
import WeWork from './component/WeWork'
import Testimonials from './component/Testimonials'

function page() {
  return (
    <div>
      <Nav/>
      <HeroSection/>
      <Services/>
      <Ourstory/>
      <WeWork/>
      <Testimonials/>
    </div>
  )
}

export default page