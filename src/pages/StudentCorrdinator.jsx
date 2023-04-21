import React from "react";
import PageHeader from "../components/PageHeader";
import { Link } from "react-router-dom";
import { FaUserTie, FaUniversity, FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { contact, student } from "../utils/Data";

export default function Student() {
  return (
    <div>
      <div className="w-full bg-slate-500">
        <PageHeader text={"Student Coordinators"} />
      </div>

      <div className=" flex flex-row gap-10 flex-wrap justify-center mt-15">
        {student.map((elem, index) => {
          return (
    <div className="flex  flex-wrap justify-center gap-4">
            <div className="relative block w-[370px]  rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8">
              <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>
              <div className="flex items-center gap-4">

                <div 
                // key={index}
                //   className="flex flex-col gap-4 shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-4 card"
                  >
                  <div className="flex items-center gap-4" >
                    <img
                      src={elem.img}
                      className="className= h-16 w-16 rounded-full object-cover"/>
                     <div className="flex gap-4">
                    {/* <FaUserTie className="h-8 w-8 p-1  rounded-full border-slate-500 border text-slate-700" style={{marginTop:'10px'}}/> */}
                    <div >
                      <h3 className="text-base font-medium text-black pt-1 px-5"> {elem.name}</h3>
                      <div className="flow-root">
                        <ul className="-m-1 flex flex-wrap">
                          <a href="#" className="text-xs font-medium text-gray-500 px-6">Student</a>
                        </ul>
                      </div>
                  </div>

                 

                    </div>

                  </div>
                  <div className="mt-4">
                    <p className="max-w-[40ch] text-base text-gray-800">
                      {elem.department}
                    </p>
                    <p className="max-w-[40ch] text-sm text-gray-500">
                      {elem.loc}
                    </p>
                  </div>


                </div>









              </div>
            </div>
            </div>
          )

        })}
      </div>



    </div>
  )
}
