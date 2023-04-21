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
                <div class="flex items-center gap-4">
                  <img
                    alt="Developer"
                    src={elem.img}
                    class="h-16 w-16 rounded-full object-cover"
                  />

                  <div>
                    <h3 class="text-base font-medium text-black">
                      {elem.name}
                    </h3>

                    <div class="flow-root">
                      <ul class="-m-1 flex flex-wrap">
                        <li class="p-1 leading-none">
                          <a href="#" class="text-xs font-medium text-gray-500">
                            Student
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div>
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
          );
        })}
      </div>
    </div>
  );
}
