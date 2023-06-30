import React from "react";
import PageHeader from "../components/PageHeader";
import { Link } from "react-router-dom";

import { FaUserTie, FaUniversity, FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { editors } from "../utils/Data";

export default function Editors() {
  return (
    <div>
      <div className="w-full bg-slate-500">
        <PageHeader text={"Proceeding Editors"} />
      </div>

      <div className=" flex flex-row gap-10 flex-wrap justify-center mt-15">
        {editors.map((elem, index) => {
          return (
            <div className="flex  flex-wrap justify-center gap-4">
              <div className="relative block w-[450px]  rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8">
                <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>
                <div class="flex items-center gap-4">
                  <img
                    alt="Developer"
                    src={elem.img}
                    class="h-16 w-16 rounded-full object-cover"
                  />

                  <div>
                    <h3 class="text-lg font-medium text-black">{elem.name}</h3>

                    <div class="flow-root">
                      <ul class="-m-1 flex flex-wrap">
                        <li class="p-1 leading-none">
                          <a href="#" class="text-xs font-medium text-gray-500">
                            {/* {elem.desig} */}
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="flex items-center flex-wrap gap-4">
                  <div className="mt-4 w-full">
                    <div className="flex gap-4">
                      <FaUniversity className="h-8 w-8 p-1 rounded-full border-slate-500 border text-slate-700" />
                      <div>
                        <p>{elem.loc}</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-0  w-full">
                    <div className="flex gap-4">
                      <FaPhoneAlt className="h-8 w-8 p-1 rounded-full border-slate-500 border text-slate-700" />
                      {elem.contact.length === 1 ? (
                        <div>
                          <p>{elem.contact[0]}</p>
                        </div>
                      ) : (
                        <div>
                          <p>
                            {elem.contact[0]}
                            <span className="font-extrabold text-transparent text-1xl bg-clip-text bg-gradient-to-t px-2 from-green-300 via-blue-500 to-purple-600">
                              |
                            </span>
                            <span> {elem.contact[1]} </span>
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="mt-0 w-full">
                    <div className="flex gap-4 ">
                      <IoMail className="h-8 w-8 p-1 rounded-full border-slate-500 border text-slate-700" />
                      <div>
                        <p>{elem.email}</p>
                      </div>
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
