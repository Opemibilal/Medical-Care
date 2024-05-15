import Image from 'next/image'
import React from 'react'
import { Group } from './img'

function Services() {
    const services = [
        {
            name: "Prescription",
            features: "Receive and renew prescriptions  digitally after yourn consultation with our specialists."
        },
        {
            name: "Medical Notes",
            features: "Obtain necessary medical notes for work or school with only a few clicks of hassle"
        },
        {
            name: "Medicine Refills",
            features: "Skip  the Pharmacy queues and save time +  energy br ordering medicine refills online"
        }
    ]
    return (
        <div className='pt-[23rem]'>
            <div  className='flex flex-col justify-center items-center'>
                <h1 className='  text-3xl font-semibold '>Top <span className='text-blue-500'>services</span>  we offer</h1>
                <p className=' w-[35rem] text-sm pt-3 text-gray-400'>In today's fast paced world, your health deserves the utmost attention and convenience.That's why HeadNet offers a suite of intergrated services designed to cater your healthcare needs degitally. </p>
            </div>
            <div>
                <div className='flex justify-center items-center  gap-32 mb-20 mt-20 '>
                    <div className='w-[35rem] h-52 p-4 shadow-lg  border border-blue-400 rounded-md'>
                        <h1 className='text-3xl font-semibold text-blue-700'>Online Consultation</h1>
                        <p className='text-sm w-96'>Consult with top doctors across various specialties via video or chat communications.its's totally secure, private, and convenient. Choose the best time for an-in person visit with our  easy-to-use scheduling system or proceed with oyr online consultation  </p>
                    </div>
                    <div className=' shadow-lg w-72 h-52 rounded-md  border p-3 pt-14 border-blue-400'>
                        <h1 className='font-semibold text-2xl text-blue-700'>Booking Appointment</h1>
                        <p className='text-slate-500 text-sm pt-3'>Choose the best time for an-in person visit our-easy to use scheduling system or proceed with pour online consultation features</p>
                    </div>
                </div>
                <div>
                    <div className='flex justify-center gap-14 relative'>
                        {services.map((item, i) => (
                            <div key={i} className='shadow-lg w-72 h-52 rounded-md  border p-3 pt-14 border-blue-400'>
                                <h1 className='font-semibold text-2xl text-blue-700'>{item.name}</h1>
                                <p className='text-slate-500 text-sm pt-3'>{item.features}</p>
                            </div>
                        ))}
                    </div>
                    <div className='absolute right-40 z-20 '> 
                        <Image src={Group} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services