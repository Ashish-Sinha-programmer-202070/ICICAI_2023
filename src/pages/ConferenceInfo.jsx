import React from "react";
import conferencelogo from "../assets/sponsors/onlinemeet.jpg";
import { Link } from "react-router-dom";

export default function Venue() {
  return (
    <main className="relative min-h-max overflow-hidden bg-white">
      <div className="wrapper m-container m-auto">
        <div className="container z-10 flex items-center justify-between min-h-[90svh] px-6 pt-32 mx-auto md:pt-0">
          <div className="container relative flex flex-col-reverse items-center justify-between px-6 mx-auto lg:flex-row">
            <div className="w-full flex flex-col items-center md:items-start mb-16 text-center md:mb-8 lg:text-left">
              <h1 className="mt-12 font-sans text-5xl font-light text-center text-gray-700 lg:text-left lg:text-8xl md:mt-0">
                Online @ WEBEX
              </h1>
              <Link to="/" className="px-18 py-3 text-center mt-14 text-lg transition duration-200 ease-in font-light rounded text-gray-200 bg-slate-600 w-36 hover:bg-slate-900 focus:outline-none">
               Click Here to Join 
              </Link>
              {/* <Button css={'max-w-36 mt-16 py-2 ml-auto mr-auto md:ml-0 md:mr-0'}/> */}
            </div>
            <div className="relative block w-full max-w-md mx-auto md:mt-0 lg:max-w-5xl ">
              <img src={conferencelogo} alt="conference-logo" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
