"use client"
import React, { useState } from "react";
import { IoMail } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import { BsCalendar2DateFill } from "react-icons/bs";
function BookNow({ position }) {
  const [formData, setFormData] = useState({
    phoneNumber: "",
    Email: "",
    appointmentDate: "",
  });
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault;
    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (res.ok) {
      setResponseMessage("Appointment booked and email sent successfully!");
    } else {
      setResponseMessage(`Error: ${result.message}`);
    }
  };

  return (
    <div className={position}>
      <div className="shadow-xl p-5 w-[rem]  border-blue-400 border rounded-md h-52">
        <h1 className="text-blue-900 text-3xl  font-semibold">
          Easily book an appointment in 3 simple steps.
        </h1>
        <form action="">
          <div className="flex gap-14 pt-4 ">
            <div>
              <div className="flex items-center gap-3 pb-2">
                <IoMail className="text-blue-500" />
                <p className="text-gray-400 text-sm">Email Address.</p>
              </div>
              <input
                type="email"
                className="placeholder:text-sm p-3 rounded-md outline-blue-200 shadow-sm border"
                placeholder="Enter Your Email Address"
              />
            </div>
            <div>
              <div className="flex items-center gap-3 pb-2">
                <IoCall className="text-blue-500" />
                <p className="text-gray-400 text-sm">Contact Number.</p>
              </div>
              <input
                type="text"
                className="placeholder:text-sm p-3 rounded-md outline-blue-200 shadow-sm border"
                placeholder="Enter Your Contact Number"
                name="phoneNumber"
                id="phoneNumber"
                value={formData.phoneNumber}
              />
            </div>
            <div>
              <div className="flex items-center gap-3 pb-2">
                <BsCalendar2DateFill className="text-blue-500" />
                <p className="text-gray-400 text-sm">Date Of Appointment.</p>
              </div>
              <input
                type="date"
                className="placeholder:text-sm p-3 rounded-md outline-blue-200 shadow-sm border"
                placeholder="Select Date of Appointment"
                name="appointmentDate"
                id="appointmentDate"
                value={formData.appointmentDate}
                required onChange={handleChange}/>
            </div>
            <button className="bg-blue-800 w-40 h-10 rounded-md mt-7 text-white" type="submit">
              Book Now
            </button>
            {responseMessage && <p>{responseMessage}</p>}
          </div>
        </form>
      </div>
    </div>
  );
}

export default BookNow;
