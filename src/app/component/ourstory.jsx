import Image from 'next/image'
import React from 'react'
import { Woman } from './img'

function Ourstory() {
    return (
        <div className='flex justify-center items-center'>
            <div className='border border-blue-400 rounded-md mt-40 w-[65rem] h-[30rem] shadow-xl'>
                <h1 className='text-2xl font-semibold text-center pt-5'><span className='text-blue-500'>HealNet's Story:</span> Get to know  us</h1>

                <div className='flex items-center justify-around pt-10'>
                    <Image src={Woman}/>
                    <div>
                        <p className='w-[30rem] text-sm font-extralight text-gray-500'>HealNet is more than just an online medical service. it's movement towards accessible  efficient,and compassionate healthcare for all. Founded by a team of visionary doctors;  healthcare professional, and technology experts. we are driven by the mission to deliver exceptional medical care directly to you, no matter where you are. Our platform is built on the pillars ot trust,innovation, and patient-centricity,ensuring that every interaction is personailzed and every treatment plan is tailored to your unique heeds.With a network  of licensed practitioners from diverse medical fields, we gurantee comprehensive care that's just a click away</p>
                        <button className='bg-blue-700  text-white w-48 h-14  rounded-md mt-10'>Learn more about us</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ourstory