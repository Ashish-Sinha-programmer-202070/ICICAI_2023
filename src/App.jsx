import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CallForPapers from "./pages/CallForPapers";
import NotFound from "./pages/404";
import ContactUs from "./pages/ContactUs";
import ComLayout from "./pages/committee/ComLayout";
// import Speakers from "./pages/Speakers";
import Submission from "./pages/Submission";
import Registration from "./pages/Registration";
import Student from "./pages/StudentCorrdinator";
import Schedule from "./pages/ProgramSchedule";
import ConVenue from "./pages/ConferenceInfo";
import Speaker from "./pages/Speaker";
import Editor from "./pages/editors";
import ImportantDates from "./pages/ImportantDates";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App relative">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/call-for-papers" element={<CallForPapers />} />
        <Route path="/contact-us" element={<ContactUs />} />
        {[
          "/advisory-committee",
          "/organising-committee",
          "/technical-program-committee",
        ].map((path, index) => (
          <Route path={path} element={<ComLayout />} key={index} />
        ))}

        {/* <Route path="/invited-speakers" element={<Speakers />} /> */}
        <Route path="/student-coordinators" element={<Student />} />
        <Route path="/submission" element={<Submission />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/important-dates" element={<ImportantDates />} />
        <Route path="/speakers" element={<Speaker />} />
        <Route path="/proceeding-editors" element={<Editor />} />
        <Route path="/program-schedule" element={<Schedule />} />
        <Route path="/conference-venue" element={<ConVenue />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
