import React from "react";

import { callForPapers } from "../utils/Data";
import cof from "../assets/cof.jpg";
import { IoIosPaper } from "react-icons/io";
import PageHeader from "../components/PageHeader";

export default function CallForPapers() {
  return (
    <div>
      <div className="bg-slate-500 w-full ">
        <PageHeader text={"CALL FOR PAPERS"} />
      </div>
      <div className="w-full py-[2rem] text-slate-700">
        <div className="s-wrapper px-4 md:px-0">
          <div className="grid grid-cols-1 gap-4 mb-4 md:grid-cols-3">
            <div className="text-justify col-span-2 font-sanchez">
              <p className="mb-4">
                1st International Conference on Innovative Computing and
                Artificial Intelligence (ICICAI'23) will provide an excellent
                international forum for sharing knowledge and results in theory,
                methodology and applications of Computer Networks & Information
                Technology. The Conference looks for significant contributions
                to the Artificial Intelligence and Computing in an innovative
                way in all theoretical and practical aspects. Original papers
                are invited on Computer Networks, Network Protocols and Wireless
                Networks, Data Communication Technologies, Network Security,
                Cyber Security, Cyber Crime and Forensic Tools, Web
                Architectures, Biometrics, Software Engineering, Cloud Computing
                etc. The aim of the conference is to provide a platform to the
                researchers and practitioners from both academia as well as
                industry to meet and share cutting-edge development in the
                field.
              </p>
              <p>
                The Accepted papers in this conference will be published on{" "}
                <b className="font-bold">Journal of Autonomous Intelligence</b>{" "}
                <br />
                eISSN: 2630-5046
              </p>
            </div>
            <div className="hidden md:block">
              <img src={cof} alt="" className="" />
            </div>
          </div>

          <div className="mt-0 mb-10 font-sanchez">
            <h2 className="text-xl text-slate-900">Important Dates</h2>
            <div class="flex flex-col">
              <div class="-m-1.5 overflow-x-auto">
                <div class="p-1.5 min-w-full inline-block align-middle">
                  <div class="overflow-hidden">
                    <table class="divide-y divide-gray-200 dark:divide-gray-700">
                      <thead>
                        <tr>
                          <th
                            scope="col"
                            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                          >
                            Event
                          </th>
                          <th
                            scope="col"
                            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                          >
                            Date
                          </th>
                        </tr>
                      </thead>
                      <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
                        <tr>
                          <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 ">
                            Submission Deadline
                          </td>
                          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
                            15<sup>th</sup> September 2023
                          </td>
                        </tr>

                        <tr>
                          <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 ">
                            Notification of Acceptance
                          </td>
                          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
                            15<sup>th</sup> October 2023
                          </td>
                        </tr>

                        <tr>
                          <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 ">
                            Camera Ready <br />
                            Submission for Revised Paper
                          </td>
                          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
                            15<sup>th</sup> November 2023
                          </td>
                        </tr>
                        <tr>
                          <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 ">
                            Registration Deadline
                          </td>
                          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
                            1<sup>st</sup> December 2023
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-0 font-sanchez">
            <h2 className="text-xl text-slate-900">Topics of Interest</h2>
            <span className="font-sanchez">
              These are the areas of interest for paper acceptance but not
              limited to:
            </span>
            <div className="grid grid-cols-1 gap-x-4 gap-y-2 mt-4 pl-4 md:grid-cols-2">
              {callForPapers &&
                callForPapers.map((paper, index) => {
                  return (
                    <div
                      className="col-span-1 hover:bg-slate-300 py-1 px-2 rounded cursor-default"
                      key={index}
                    >
                      <IoIosPaper className="inline mr-2" />
                      {paper}
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
