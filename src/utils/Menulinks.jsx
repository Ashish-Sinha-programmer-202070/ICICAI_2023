export const menus = [
  {
    name: "HOME",
    link: "/",
  },
  {
    name: "CALL FOR PAPERS",
    link: "call-for-papers",
  },
  {
    name: "committee",
    link: "#",
    children: [
      "Advisory Committee",
      "Organising Committee",
      "Technical Program Committee",
    ],
  },
  {
    name: "speakers",
    link: "speakers",
    // children: ["Invited Speakers"],
  },
  {
    name: "Attending",
    link: "#",
    children: ["Submission", "Registration", "Proceeding Editors"],
  },
  {
    name: "Conference info",
    link: "#",
    children: [
      "Conference Venue",
      "Sponsors",
      "Program Schedule",
      "Contact us",
    ],
  },
  {
    name: "Student coordinators",
    link: "/student-coordinators",
    // children: ["ICCCN-2018", "ICIIL-2019"],
  },
];

export const footerMenus = [
  {
    name: "committee",
    link: "committee",
    children: [
      "Speakers",
      "Advisory Committee",
      "Organising Committee",
      "Technical Program Committee",
    ],
  },
  {
    name: "Attending",
    link: "attending",
    children: [
      "Submission",
      "Registration",
      "Important Dates",
      "Program Schedule",
    ],
  },
  {
    name: "Conference info",
    link: "conference-info",
    children: [
      "Conference Venue",
      "Proceeding Editors",
      "Sponsors",
      "Contact us",
    ],
  },
  {
    name: "Student Coordinators",
    link: "student",
    children: ["Student Coordinators"],
  },
];

import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoTwitter,
} from "react-icons/io5";

export const socialMediaLinks = [
  {
    icon: (props) => <IoLogoFacebook {...props} />,
    name: "facebook",
    link: "https://www.facebook.com/profile.php?id=100092279855936",
  },
  {
    icon: (props) => <IoLogoTwitter {...props} />,
    name: "twitter",
    link: "https://twitter.com/home",
  },
  {
    icon: (props) => <IoLogoInstagram {...props} />,
    name: "instagram",
    link: "https://www.instagram.com/icicai_conference_cuh/",
  },
];
