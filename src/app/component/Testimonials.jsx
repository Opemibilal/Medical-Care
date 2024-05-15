import Image from "next/image";
import React from "react";
import { man, old } from "./img";

function Testimonials() {
  return (
    <div>
      <div>
        <div className="text-center pt-20">
          <h1 className="text-4xl text-transparent bg-clip-text from-blue-400 to-blue-600 bg-gradient-to-r font-semibold">
            {" "}
            Patient Testimonials
          </h1>
          <h2 className="text-4xl text-gray-700 font-semibold pt-4 ">
            Hear from Those We've Cared For
          </h2>
          <p className="text-sm text-gray-500 pt-3">
            Discover the difference we make through the voices of those we've
            served
          </p>
        </div>
        <div className="flex justify-center items-center mt-20 gap-16">
          <div className="flex items-center gap-7 border border-blue-500 rounded-md w-[30rem] shadow-lg bg-gradient-to-r from-blue-100 to-blue-200 h-32 pl-10">
            <Image src={old} className="w-16 h-16" />
            <p className="w-80 pt-4 text-gray-500">
              “After my knee surgery, the convenience of online consultations
              made my recovery smoother than I could have imagined.”{" "}
              <span className="text-md text-gray-700 font-semibold">
                - Linda A.
              </span>
            </p>
          </div>
          <div className="flex items-center gap-7 border border-blue-500 rounded-md w-[30rem] shadow-lg bg-gradient-to-r from-blue-100 to-blue-200 h-32 pl-10">
            <Image src={man} className="w-16 h-16" />
            <p className="w-80 pt-4 text-gray-500">
              “Managing chronic conditions like diabetes requires a lot of
              vigilance, but the medicine refill system has simplified my life.”{" "}
              <span className="text-md text-gray-700 font-semibold">
                - Henry B.
              </span>
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center  pt-20 gap-20">
          <div>
            <h1 className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-700 font-semibold">
              10,000+
            </h1>
            <p className="text-sm text-gray-500">Successful Consultations</p>
          </div>
          <div>
            <h1 className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-700 font-semibold">
              2,500+
            </h1>
            <p className="text-sm text-gray-500">Healthcare Professionals</p>
          </div>
          <div>
            <h1 className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-700 font-semibold">
              98%
            </h1>
            <p className="text-sm text-gray-500">Patient Satisfaction Rate</p>
          </div>
          <div>
            <h1 className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-700 font-semibold">
              200+%
            </h1>
            <p className="text-sm text-gray-500">Top Specialists</p>
          </div>
        </div>
        <div className="flex justify-center items-center mt-20 gap-16">
          <div className="flex items-center gap-7 border border-blue-500 rounded-md w-[30rem] shadow-lg bg-gradient-to-r from-blue-100 to-blue-200 h-32 pl-10">
            <Image src={old} className="w-16 h-16" />
            <p className="w-80 pt-4 text-gray-500">
              “The prescription refill system is a game-changer for managing my
              diabetes. It’s really efficient and completely hassle-free.”{" "}
              <span className="text-md text-gray-700 font-semibold">
                - Joshua T..
              </span>
            </p>
          </div>
          <div className="flex items-center gap-7 border border-blue-500 rounded-md w-[30rem] shadow-lg bg-gradient-to-r from-blue-100 to-blue-200 h-32 pl-10">
            <Image src={man} className="w-16 h-16" />
            <p className="w-80 pt-4 text-gray-500">
              “Finding a doctor who really understands all of my health needs
              has never been easier. This platform has changed my life.”{" "}
              <span className="text-md text-gray-700 font-semibold">
                - Samantha K.
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
