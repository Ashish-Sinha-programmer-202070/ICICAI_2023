import React from "react";
import PageHeader from "../components/PageHeader";
import { members } from "../utils/invited_speakers.json";

export default function Speakers() {
    return (
        <div>
            <div className="w-full bg-slate-500">
                <PageHeader text={"INVITED SPEAKERS"} />
            </div>

            <div className=" flex flex-row gap-10 flex-wrap justify-center mt-15">
                {members.map((elem, index) => {
                    return (
                        <div className="flex  flex-wrap justify-center gap-4 my-8 ">
                            <div className="relative block w-[400px]  rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8">
                                <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>
                                <div className="flex items-center gap-4">
                                    <img
                                        alt="Invited Speaker"
                                        src={elem.image}
                                        className="h-16 w-16 rounded-full object-cover"
                                    />

                                    <div>
                                        <a href={elem.cv_link}>
                                            <h3 className="text-lg font-medium text-black">
                                                {elem.name}
                                            </h3>
                                        </a>
                                        <div className="flow-root">
                                            <ul className="-m-1 flex flex-wrap">
                                                <li className="p-1 leading-none">
                                                    <a href="#" className="text-base font-medium text-gray-400">
                                                        {elem.depatment}
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div>
                                        <div className="mt-4">
                                            <p className="max-w-[40ch] text-base text-gray-800 font-medium ">
                                                {elem.location}
                                            </p>
                                            <p className="max-w-[40ch] mt-2 text-sm font-bold text-gray-500 ">
                                                {elem.talk}
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
    )
}