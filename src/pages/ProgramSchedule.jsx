import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import PageHeader from "../components/PageHeader";


export default function Schedule(){
    return(
    <div>
        {/* Title of the page */}
        <div className="w-full bg-slate-500">
          <PageHeader text={"Program Schedule : Minutes to Minutes "} />
        </div>
        <br/>
{/* Table Content */}
<div >
    <h1 
    style=
    {{paddingLeft:"3%", fontSize:25, fontWeight:500, fontFamily: 'cursive', color: ' rgb(100 116 139)',textAlign: 'center'}}>
    Day 1 : 14.12.2023
    </h1>
</div>

        <br/>

        <div className="overflow-y-scroll ">
        <table className="min-w-full divide-y  divide-gray-200 content-center ">
       
    <thead className="bg-gray-50 800 .mr-10">
        <tr>
           
            <th
              scope="col"
              className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 400"
            >
              Timing
            </th>

            <th
              scope="col"
              className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 400"
            >
              Program Schedule
            </th>
        </tr>
    </thead>


<tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-12 py-2 max-w-2/12 text-sm font-medium " >
                  <span>10:00am - 10:30am</span>
                </td>
                <td className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 400">
                  <span>Inauguration of the conference</span>
                </td>
              </tr>
</tbody>


<tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-12 py-2 max-w-2/12 text-sm font-medium " >
                  <span>10:30am - 11:00am</span>
                </td>
                <td className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 400">
                  <span>Keynote Speech by Invited Speakers</span>
                </td>
              </tr>
</tbody>

<tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td 
                className="px-12 py-2 max-w-2/12 text-sm font-medium " 
                rowSpan={2}>
                  <span>11:00am - 01:00pm</span>
                </td>
                <td className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 400" >
                  <span>
                    <b>Session 1:</b> Display of 10 papers
                  </span>
                </td>
              </tr>
              <td className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 400" >
                  <span>
                    <b>Session 2:</b> Display of 10 papers
                    </span>
                </td>
</tbody>

<tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-12 py-2 max-w-2/12 text-sm font-medium " >
                  <span>01:00am - 01:30pm</span>
                </td>
                <td className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 400">
                  <span>Lunch Break</span>
                </td>
              </tr>
</tbody>

<tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-12 py-2 max-w-2/12 text-sm font-medium " >
                  <span>01:30pm - 02:00pm</span>
                </td>
                <td className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 400">
                  <span>Keynote Speech by Speaker 2</span>
                </td>
              </tr>
</tbody>

<tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td 
                className="px-12 py-2 max-w-2/12 text-sm font-medium " 
                rowSpan={2}>
                  <span>02:00pm - 05:00pm</span>
                </td>
                <td className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 400" >
                  <span>
                    <b>Session 3:</b> Display of 15 papers
                  </span>
                </td>
              </tr>
              <td className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 400" >
                  <span>
                    <b>Session 4:</b> Display of 15 papers
                    </span>
                </td>
            </tbody>
        </table>
    </div>


<br/>
<br/>

<div >
    <h1 
    style=
    {{paddingLeft:"3%", fontSize:25, fontWeight:500, fontFamily: 'cursive', color: ' rgb(100 116 139)', textAlign: 'center'}}>
    Day 2 : 15.12.2023
    </h1>
</div><br/><br/>

<div className="overflow-y-scroll">
        <table className="min-w-full divide-y table-fixed divide-gray-200 ">
       
    <thead className="bg-gray-50 800 ">
        <tr>
           
            <th
              scope="col"
              className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 400"
            >
              Timing
            </th>

            <th
              scope="col"
              className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 400"
            >
              Program Schedule
            </th>
        </tr>
    </thead>


<tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-12 py-2 max-w-2/12 text-sm font-medium " >
                  <span>09:00am - 09:30am</span>
                </td>
                <td className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 400">
                  <span>KeyNote Speech by Invited Speaker</span>
                </td>
              </tr>
</tbody>


<tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td 
                className="px-12 py-2 max-w-2/12 text-sm font-medium " 
                rowSpan={2}>
                  <span>09:30am - 11:00am</span>
                </td>
                <td className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 400" >
                  <span>
                    <b>Session 5:</b> Display of 10 papers
                  </span>
                </td>
              </tr>
              <td className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 400" >
                  <span>
                    <b>Session 6:</b> Display of 10 papers
                    </span>
                </td>
</tbody>

<tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-12 py-2 max-w-2/12 text-sm font-medium " >
                  <span>11:00am - 11:30am</span>
                </td>
                <td className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 400">
                  <span>Keynote Speech by Speaker </span>
                </td>
              </tr>
</tbody>


<tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td 
                className="px-12 py-2 max-w-2/12 text-sm font-medium " 
                rowSpan={2}>
                  <span>11:30am - 01:30pm</span>
                </td>
                <td className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 400" >
                  <span>
                    <b>Session 7:</b> Display of 10 papers
                  </span>
                </td>
              </tr>
              <td className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 400" >
                  <span>
                    <b>Session 8:</b> Display of 10 papers
                    </span>
                </td>
            </tbody>

            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-12 py-2 max-w-2/12 text-sm font-medium " >
                  <span>01:30am - 02:00pm</span>
                </td>
                <td className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 400">
                  <span>Lunch Break</span>
                </td>
              </tr>
</tbody>

<tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td 
                className="px-12 py-2 max-w-2/12 text-sm font-medium " 
                rowSpan={2}>
                  <span>02:00pm - 03:00pm</span>
                </td>
                <td className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 400" >
                  <span>
                    <b>Session 9:</b> Display of 05 papers
                  </span>
                </td>
              </tr>
              <td className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 400" >
                  <span>
                    <b>Session 10:</b> Display of 05 papers
                    </span>
                </td>
            </tbody>

            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-12 py-2 max-w-2/12 text-sm font-medium " >
                  <span>03:00pm-04:00pm</span>
                </td>
                <td className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 400">
                    <span>Validictory</span>
                </td>
              </tr>
</tbody>

        </table>
    </div>

    </div>
    )
}