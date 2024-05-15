import Image from 'next/image'
import React from 'react'
import { nurse, plus } from './img'
import { BsStarFill } from "react-icons/bs";

function WeWork() {
    const Work = [
        {
            Guide: "Create Your Profile",
            line: "Sign up and fill  in your medical history securely. Setting up your Profile this way would ensure that you stay up-to-date  with your medical processes",
        }, {
            Guide: "Choose Your Services",
            line: "Select from our range of services and  book a consultation, Booking  a consultation with HealNet's is fairly simple and straightforward",
        }, {
            Guide: "Meet Your Doctor",
            line: "Here  a virtual consultation with one of our certified specialists, or go  for a physical  visit  to the doctor  in case you opted for  a physical  check-up",
        }
    ]
    return (
        <div>
            <div>
                <div className='text-center flex justify-center items-center flex-col pt-20'>
                    <h1 className='text-3xl font-semibold'>How <span className='text-blue-700'>our Platform</span> works</h1>
                    <p className='w-[40rem] text-sm text-gray-500 pt-3'>Navigating your healthcare journey with HealNet seamlessly. Just follow these steps mentioned below to proceed with your selected services. You can also see our FAQ section for more guidance </p>
                </div>
                <div className='flex justify-center items-center gap-40'>
                    <div>
                        <div className='flex flex-col gap-6 pt-32'>
                            {
                                Work.map((item, i) => (
                                    <div key={i} className='flex items-start gap-4'>
                                        <div className='flex-shrink-0 flex justify-center items-center h-10 w-10 bg-blue-400 rounded-full text-white font-semibold'>{i + 1}</div>
                                        <div>
                                            <h1 className='text-2xl font-semibold pb-2 text-gray-600'>{item.Guide}</h1>
                                            <p className='text-sm w-80 text-gray-400'>{item.line}</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className='relative'>
                        <Image src={nurse} />
                        <Image src={plus} className='absolute top-28 left-72' />
                        <div className='flex items-center gap-3 absolute bottom-24  rounded-md  font-semibold text-blue-500 bg-white left-44   h-10  shadow-lg  p-2 w-72'>
                            <BsStarFill />
                            <p>Best Certified Team of Specialists</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WeWork
