import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import PageHeader from "../../components/PageHeader";

import technicalComData from "../../utils/committee_data/technical_com.json";
import organizingCommitteData from "../../utils/committee_data/organising_com.json";
import { professorLogo } from "../../utils/GraphicContent";

const Table = ({ data }) => {
  return (
    <div className="overflow-x-scroll">
      <table className="min-w-full divide-y table-fixed divide-gray-200 ">
        {/* <colgroup>
          <col span="1" style="width: 20%;" />
          <col span="1" style="width: 20%;" />
          <col span="1" style="width: 30%;" />
          <col span="1" style="width: 30%;" />
        </colgroup> */}
        <thead className="bg-gray-50 800 ">
          <tr>
            <th
              scope="col"
              className="py-3.5 px-4 text-sm font-normal text-left  ight text-gray-500 400"
            >
              <span>Name</span>
            </th>

            <th
              scope="col"
              className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 400"
            >
              Role
            </th>

            <th
              scope="col"
              className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 400"
            >
              Department
            </th>

            <th
              scope="col"
              className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 400"
            >
              College
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.members.map((mem, idx) => {
            return (
              <tr>
                <td
                  key={idx}
                  className="px-4 py-2 max-w-2/12 text-sm font-medium"
                >
                  <div>
                    <p className="text-sm font-normal text-gray-600">
                      {mem.name}
                    </p>
                  </div>
                </td>
                <td className="px-12 py-2 max-w-2/12 text-sm font-medium ">
                  {mem.job}
                </td>
                <td className="px-4 py-2 max-w-4/12 text-sm">
                  <div>{mem.dept}</div>
                </td>
                <td className="px-4 py-2 max-w-4/12 whitespace-normal text-sm">
                  <span>{mem.univ}</span>, <span>{mem.loc}</span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

const CommitteMember = ({ data: x }) => {
  return (
    <div className="flex flex-col w-[30ch] px-4 py-6 border border-gray-300 rounded-lg shadow bg-slate-300 text-sm md:w-[35ch]">
      <div className="flex gap-4">
        <div className="max-w-[30px] pt-1">
          <img
            src={professorLogo}
            className="w-full rounded-xl"
            alt="Professor Logo"
          />
        </div>
        <div>
          <p>
            <span className="font-semibold">{x["name"]}</span>, {x["job"]}
          </p>
          <p>{x["dept"]}</p>
        </div>
      </div>
      <div>
        <p>
          {x["univ"]}, {x["loc"]}
        </p>
      </div>
    </div>
  );
};

const CommitteMemberCard = ({ data }) => {
  return (
    <div className="relative block w-[370px] overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8">
      <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

      <div class="flex items-center gap-4">
        <img
          alt="Developer"
          src={data.img}
          class="h-16 w-16 rounded-full object-cover"
        />

        <div>
          <h3 class="text-base font-medium text-black">{data.name}</h3>

          <div class="flow-root">
            <ul class="-m-1 flex flex-wrap">
              <li class="p-1 leading-none">
                <a href="#" class="text-xs font-medium text-gray-500">
                  {data.job}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <p className="max-w-[40ch] text-base text-gray-800">{data?.dept}</p>
        <p className="max-w-[40ch] text-sm text-gray-500">{data?.univ}</p>
        <p className="max-w-[40ch] text-sm text-gray-500">{data?.loc}</p>
      </div>

      {/* <dl className="mt-6 flex gap-4 sm:gap-6">
        <div className="flex flex-col-reverse">
          <dt className="text-sm font-medium text-gray-600">Published</dt>
          <dd className="text-xs text-gray-500">31st June, 2021</dd>
        </div>

        <div className="flex flex-col-reverse">
          <dt className="text-sm font-medium text-gray-600">Reading time</dt>
          <dd className="text-xs text-gray-500">3 minute</dd>
        </div>
      </dl> */}
    </div>
  );
};

const CommitteHeader = ({ label }) => {
  return (
    <div className="w-full my-4 bg-slate-400 text-white text-lg uppercase py-2 px-4 rounded shadow border-gray-200 border tracking-wider font-semibold">
      {label}
    </div>
  );
};

const CommitteCard = ({ data, sph }) => {
  const [startIndex, setStartIndex] = useState(16);

  return (
    <div className="s-wrapper px-1 md:px-0">
      {data.isCategory ? (
        Object.keys(data.categories).map((cat, catI) => {
          const mems = data[cat];
          const label = data.categories[cat];
          return (
            <div key={catI}>
              <CommitteHeader label={label} />
              <div className="flex flex-wrap justify-center gap-4">
                {mems.map((m, i) => {
                  return <CommitteMemberCard key={m + i} data={m} />;
                  return <CommitteMember key={m + i} data={m} />;
                })}
              </div>
            </div>
          );
        })
      ) : (
        <Table data={data} />
        // <div className="flex gap-4 flex-col justify-center items-center">
        //   <div className="flex flex-wrap justify-center gap-4">
        //     {data.members &&
        //       data.members.slice(0, startIndex).map((x, i) => {
        //         return <CommitteMember key={i} data={x} />;
        //       })}
        //   </div>
        //   {startIndex < data.members.length && (
        //     <button
        //       className="py-2 px-4 border-gray-200 border rounded-md shadow bg-slate-300 text-black uppercase hover:bg-slate-700 hover:text-gray-200 transition ease-in duration-300 text-sm"
        //       onClick={(e) => {
        //         setStartIndex((prevStartIndex) => prevStartIndex + 16);
        //       }}
        //     >
        //       Load More
        //     </button>
        //   )}
        // </div>
      )}
    </div>
  );
};

const Committe = ({ path, setPageHeaderText }) => {
  switch (path) {
    case "advisory":
      setPageHeaderText("ADVISORY COMMITTEE");
      return <CommitteCard data={technicalComData} />;

    case "organising":
      setPageHeaderText("ORGANISING COMMITTEE");
      return <CommitteCard data={organizingCommitteData} />;

    case "technical":
      setPageHeaderText("TECHNICAL PROGRAM COMMITTEE");
      return <CommitteCard data={technicalComData} />;

    default:
      return null;
  }
};

export default function ComLayout({ headetText, children }) {
  const url = useLocation();
  const pathname = url.pathname.split("/")[1].split("-")[0];
  const [pageHeaderText, setPageHeaderText] = useState("");

  return (
    <div>
      <div className="bg-slate-500 w-full ">
        <PageHeader text={pageHeaderText} />
      </div>
      <div className="w-full py-[2rem] text-slate-700">
        <Committe path={pathname} setPageHeaderText={setPageHeaderText} />
      </div>
    </div>
  );
}
