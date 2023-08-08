import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";

import banner from "../assets/conbanner.png";
import { sponsors_img } from "../utils/GraphicContent";

export default function Home() {
  return (
    <div className="">
      <div className="bg-slate-300 pt-6">
        <div className="s-wrapper">
          <div className="p-2">
            <Carousel
              showArrows={true}
              infiniteLoop={true}
              autoPlay={true}
              swipeable
            >
              <div>
                <img src={banner} alt="" />
              </div>
              {/* <div>
                <img src={banner} alt="" />
              </div> */}
            </Carousel>
          </div>
        </div>
      </div>

      <div className="bg-white mt-6">
        <div className="s-wrapper grid grid-cols-1 md:gap-10 md:grid-cols-7">
          <div className="col-span-5 px-4 md:px-0">
            <marquee behavior="" direction="left">
              Accepted papers will be published in "SCOPUS database"
            </marquee>
            <h1 className="text-3xl font-bold">About CUH</h1>
            <hr />
            <div className="mt-4 text-justify">
              <p>
                Central University of Haryana is one of the fifteen new Central
                Universities established by Ministry of Human Resource
                Development, Government of India (GoI) in XI Five Year Plan
                (2007-2012) under the Central University Act-2009 of the
                Parliament. <br /> The University has been accredited with 'A'
                Grade in the first cycle of NAAC assessment and accreditation
                conducted in March 2017. The University has been listed among
                the top 150-200 Universities in NIRF ranking. The University is
                fully funded by the University Grants Commission (UGC).
                Permanent Campus of the University is situated in 484 acres of
                land at Jant-Pali Villages, Mahendergarh district of Haryana
                from where CUH is running its academic operations. Presently the
                University offers 83 academic programmes (UG/PG/Research).
              </p>
            </div>
            <br />

            {/* <span className="ml-1">ICICAI</span> */}
            <h1 className="text-3xl font-bold">Conference</h1>
            <hr />
            <div className="mt-4 text-justify ">
              <p>
                The International Conference on Innovative Computing and
                Artificial Intelligence (ICICAI) is a premier conference
                dedicated to the dissemination of research and development in
                the field of computing and artificial intelligence. ICICAI
                brings together researchers, engineers, and practitioners from
                academia and industry to exchange their ideas and experiences in
                various aspects of innovative computing and AI.
              </p>
              <br />
              <p>
                The conference covers a broad range of topics, including but not
                limited to:
              </p>
              <ul style={{ listStyleType: "disc", marginLeft: "50px" }}>
                <li>Machine learning and deep learning</li>
                <li>Natural language processing and text mining</li>
                <li>Computer vision and image processing</li>
                <li>Robotics and automation</li>
                <li>Intelligent systems and decision support systems</li>
                <li>Data mining and knowledge discovery</li>
                <li>Cloud and edge computing</li>
                <li>Internet of things (IoT) and cyber-physical systems</li>
                <li>Human-computer interaction and user experience</li>
                <li>Security and privacy in computing and AI</li>
              </ul>
              <br />
              <p>
                ICICAI provides a platform for researchers and practitioners to
                present and discuss their latest research findings, innovations,
                and applications. The conference features keynote speeches,
                technical sessions, workshops, and poster sessions. Participants
                can also take part in various networking and social events, such
                as a banquet and a cultural tour.
              </p>
              <br />
              <p>
                ICICAI welcomes submissions of original research papers, survey
                papers, and technical notes. All submissions are peer-reviewed
                by an international program committee.
              </p>
              <br />
              <p>
                ICICAI is attracting participants from academia and industry
                worldwide. It provides an excellent opportunity for participants
                to learn about the latest trends and developments in innovative
                computing and AI and to network with their peers. Through online
                mode
              </p>
              <hr />
            </div>
          </div>
          <div className="col-span-2 p-4 md:px-0">
            <div className="flex flex-col gap-4 shadow-md rounded shadow-slate-400 p-2 px-3 pt-4 pb-6">
              <div>
                <h2 className="font-bold text-lg text-slate-700 mb-4">
                  Important Notice
                </h2>
                <div className="pl-2 flex flex-col gap-3">
                  <Link
                    to="https://fdp.nitttrchd.ac.in/icaiot2023/Prog_sch.php"
                    className="text-[14px] hover:text-slate-500"
                  >
                    Programme and Paper Presentaion Schedule
                  </Link>
                  <Link to="#" className="text-[14px] hover:text-slate-500 ">
                    List of TENTATIVELY ACCEPTED PAPERS
                  </Link>
                </div>
              </div>
              <hr />
              {/* <div>
                <h2 className="font-bold text-lg text-slate-700 mb-4">
                  Sponsors
                </h2>
                <div className="pl-2 flex justify-around gap-3">
                  {sponsors_img.map((img, index) => {
                    return (
                      <img
                        key={index}
                        src={img}
                        className={"h-24 w-24"}
                        alt={img}
                      />
                    );
                  })}
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
