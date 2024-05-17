import Image from "next/image";
import React from "react";
import { Doctors, write } from "./img";
import { IoCall } from "react-icons/io5";
function Med() {
  return (
    <div>
      <div>
        <div className="text-center flex flex-col justify-center  items-center">
          <h1 className="bg-gradient-to-r bg-clip-text text-transparent from-blue-400 to-blue-700 text-4xl font-semibold pt-20">
            Masters of Medicine:
          </h1>
          <h2 className="text-4xl text-gray-700 font-semibold pt-3">
            Meet our team of specialists
          </h2>
          <p className="text-sm text-gray-600 w-[40rem] pt-3 ">
            Our team of specialists is at the forefront of medical innovation.
            Each specialist brings a unique blend of expertise, empathy, and
            experience to ensure that your health is in the best hands:
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-20 mt-20">
          <div className="flex border-2 border-blue-700 bg-gradient-to-r from-blue-300 gap-5  to-blue-400 w-[50rem] rounded-md">
            <Image src={write} cl />
            <div className="pt-10">
              <h1 className="text-3xl font-semibold text-white">
                Dr.Sarah Johnson(Cardiologist)
              </h1>
              <p className="text-white w-[25rem]">
                Heart health is Dr,wang's passion,and her approach to cardiology
                integrates cutting-edge technology with compassionate care.She's
                a respected voice int the prevention of heart disease and a
                trusted partner to her patients on their journey to wellness
              </p>
              <button className=" text-blue-500 bg-white    rounded-md p-2 flex w-[13rem] mt-5 h-14 text-lg font-medium items-center gap-2">
                <p> Book appointment</p>
                <IoCall />
              </button>
            </div>
          </div>
          <div className="flex border-2 border-blue-700 bg-gradient-to-r from-blue-300 gap-5  to-blue-400 w-[50rem] rounded-md">
            <Image src={Doctors} cl />
            <div className="pt-10">
              <h1 className="text-3xl font-semibold text-white">
                Dr. Mark Lee (Dermatologist )
              </h1>
              <p className="text-white w-[25rem]">
                Dr. Lee is a visionary in dermatology, advancing treatments for
                skin health with a gentle, holistic approach. His dedication to
                clinical excellence and patient education has made him a leader
                in dermatological care. He’s known for his precision and
                commitment to patient-centered care.
              </p>
              <button className=" text-blue-500 bg-white    rounded-md p-2 flex w-[13rem] mt-5 h-14 text-lg font-medium items-center gap-2">
                <p> Book appointment</p>
                <IoCall />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Med;
