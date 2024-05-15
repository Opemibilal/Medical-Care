import React from 'react'

function BookNow({position}) {
  return (
    <div className={position}>
        <div className='shadow-xl p-5 w-[rem]  border-blue-400 border rounded-md h-52'>
            <h1 className='text-blue-900 text-3xl  font-semibold'>Easily book an appointment in 3 simple  steps.</h1>
            <div className='flex gap-14 pt-4 '>
                <div>
                    <p className='text-gray-400 text-sm'>Email Address.</p>
                    <input type="email"  className='placeholder:text-sm p-3 rounded-md outline-blue-200 shadow-sm border' placeholder='Enter Your Email Address'/>
                </div>
                <div>
                    <p className='text-gray-400 text-sm'>Contact Number.</p>
                    <input type="text"  className='placeholder:text-sm p-3 rounded-md outline-blue-200 shadow-sm border' placeholder='Enter Your Contact Number'/>
                </div>
                <div>
                    <p className='text-gray-400 text-sm'>Date Of Appointment.</p>
                    <input type="date" className='placeholder:text-sm p-3 rounded-md outline-blue-200 shadow-sm border'  placeholder='Select Date of Appointment'/>
                </div>
            <button className='bg-blue-800 w-40 h-10 rounded-md mt-7 text-white'>Book Now</button>
            </div>
        </div>
    </div>
  )
}

export default BookNow