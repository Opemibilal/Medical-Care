import React from 'react'
import Nav from './component/Nav'
import HeroSection from './component/HeroSection'
import Services from './component/Services'
import Ourstory from './component/ourstory'
import WeWork from './component/WeWork'

function page() {
  return (
    <div>
      <Nav/>
      <HeroSection/>
      <Services/>
      <Ourstory/>
      <WeWork/>
    </div>
  )
}

export default page