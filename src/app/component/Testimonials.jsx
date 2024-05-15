import Image from 'next/image'
import React from 'react'
import { man, old } from './img'

function Testimonials() {
  return (
    <div>
      <div>
        <h1 className='text-3xl text-transparent bg-clip-text from-blue-400 to-blue-600 bg-gradient-to-r'> Patient Testimonials</h1>
        <h2 className='text-4xl text-gray-700 '>Hear from Those We've Cared For</h2>
        <p className='text-sm text-gray-500 pt-7'>Discover the difference we make through the voices of those we've served</p>

        <div>
          <div>
            <Image src={old} />
            <p>“After my knee surgery, the convenience of online consultations made my recovery smoother than I could have imagined.” <span>- Linda A.</span></p>
          </div>
          <div>
            <Image src={man} />
            <p>“Managing chronic conditions like diabetes requires a lot of vigilance, but the medicine refill system has simplified my life.” <span>- Henry B..</span></p>
          </div>
        </div>
        <div>
          <div>
            <h1>10,000+</h1>
            <p>Successful Consultations</p>
          </div>
          <div>
            <h1>2,500+</h1>
            <p>Healthcare Professionals</p>
          </div>
          <div>
            <h1>98%</h1>
            <p>Patient Satisfaction Rate</p>
          </div>
          <div>
            <h1>200+%</h1>
            <p>Top Specialists</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials