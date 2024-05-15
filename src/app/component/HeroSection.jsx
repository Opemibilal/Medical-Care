import Image from 'next/image'
import React from 'react'
import { doctor } from './img'
import { line } from './img'
import BookNow from './BookNow'
import { BsStarFill } from "react-icons/bs";
import { FaGoogle } from "react-icons/fa6";
import { RiAppleFill } from "react-icons/ri";
import { BsSpotify } from "react-icons/bs";
import { FiSlack } from "react-icons/fi";
function HeroSection() {
    return (
        <div>
            <div className='flex justify-around mt-20 items-center relative'>
                <div>
                    <h1 className='text-5xl font-semibold w-[30rem] leading-snug'>Your <span className='text-transparent bg-gradient-to-r from-blue-300 to-blue-700  bg-clip-text'>trusted partner</span> in digital healthcare </h1>
                    <p className='w-[35rem] font-medium pt-4 about-us'><span className='text-blue-400 span'>Empowering Your Health at Every Step,</span> Experience personalized medical care from the  comfort of your home.Connect with <span className='text-blue-400 span'>certified doctors,</span> or manage prescriptions, and schedule appointments with ease. Ready to take control of your health? <span className='text-blue-500 span'>Get Started</span> or Book an Appointment today.</p>
                    <div>
                        <button className='bg-primary w-52 h-10 bg-gradient-to-r from-blue-300 to-blue-400 rounded-md text-white mt-5'>Book an appointment </button>
                    </div>
                    <div>
                        <p className='text-gray-400 pt-3'>Trusted by millions across the world.</p>
                        <div className='flex gap-6 text-3xl pt-4 text-gray-500'>
                            <FaGoogle className=''/>
                            <RiAppleFill/>
                            <BsSpotify/>
                            <FiSlack/>
                        </div>
                    </div>
                </div>
                <div className='relative z-10' >
                    <div className='z'>
                        <Image src={doctor} className='h-[25rem] w-[25rem]' />
                    </div>
                    <div className='bg-white shadow-lg rounded-md flex items-center gap-3 absolute bottom-14 h-10 p-2 text-sm  -left-16' >
                    <BsStarFill className='text-blue-500'/>
                        <p className='text-blue-500 font-semibold'> Easy Appointment Booking</p>
                    </div>
                </div>
            </div>
            <div className='absolute -bottom-[8rem] left-44 '>
                <Image src={line} />
            </div>

            <BookNow position="absolute left-52  -bottom-[10rem]"/>
        </div>
    )
}

export default HeroSection