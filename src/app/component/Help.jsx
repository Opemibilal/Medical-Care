import React from "react";

function Help() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-gray-600 pt-20">
          Reach our{" "}
          <span className="text-transparent from-blue-900 to-blue-500 bg-gradient-to-r bg-clip-text">
            Help Desk
          </span>{" "}
          for support
        </h1>
        <p className="text-sm  w-[25rem] text-gray-500 pt-5">
          Questions? Need assistance? Our dedicated support team is here to help
          you every step of the way:
        </p>
      </div>
      <div className="flex justify-center items-center pt-20 gap-20">
        <input type="text" placeholder="Enter Your First Name"  className="border-2 w-60 border-blue-500 rounded-md  h-12 pl-3"/>
        <input type="text" placeholder="Enter Your Email" className="border-2 w-60 border-blue-500 rounded-md  h-12 pl-3" />
        <button className="bg-gradient-to-r from-blue-600 to-blue-500 rounded-md text-white w-44 h-12">Contact Us</button>
      </div>
    </div>
  );
}

export default Help;
