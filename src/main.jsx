import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Main/Main.jsx";
import AuthProvider from "./Provider/AuthProvider/AuthProvider.jsx";
// import Login from "./Components/Login.jsx";
import Register from "./Components/Register.jsx";
import Admission from "./Routes/Admission/Admission.jsx";
import NotFound404 from "./Components/NotFound.jsx";
import Profile from "./Routes/Profile/Profile.jsx";
import Login from "./Components/Login.jsx";
import Result from "./Components/Result/Result.jsx";
import ContactUs from "./Pages/ContactUs/ContactUs.jsx";
import CollegeGallery from "./Components/CollegeGallery/CollegeGallery.jsx";
import Library from "./Pages/Facilities/Library.jsx";
import PhysicsLab from "./Pages/Facilities/PhysicsLab.jsx";
import BiologyLab from "./Pages/Facilities/BiologyLab.jsx";
import ChemistryLab from "./Pages/Facilities/ChemistryLab.jsx";
import IctLab from "./Pages/Facilities/IctLab.jsx";
import PlayGround from "./Pages/Facilities/PlayGround.jsx";
import CoCurricular from "./Pages/Facilities/CoCurricular.jsx";
import ClassSchedule from "./Pages/Academic/ClassSchedule.jsx";
import OurStaffs from "./Pages/Academic/OurStaffs.jsx";
import AcademicRules from "./Pages/Academic/AcademicRules.jsx";
import AcademicCalandar from "./Pages/Academic/AcademicCalandar.jsx";
import AttendanceSheet from "./Pages/Academic/AttendanceSheet.jsx";
import LeaveInformation from "./Pages/Academic/LeaveInformation.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <NotFound404></NotFound404>,
    children: [
      { path: '/', element: <App></App> },
      { path: "/login", element: <Login></Login>, },
      { path: "/register", element: <Register></Register>, },
      // facilities
      { path: '/library', element: <Library></Library> },
      { path: '/physicslab', element: <PhysicsLab></PhysicsLab> },
      { path: '/biologylab', element: <BiologyLab></BiologyLab> },
      { path: '/chemistrylab', element: <ChemistryLab></ChemistryLab> },
      { path: '/ictlab', element: <IctLab></IctLab> },
      { path: '/playground', element: <PlayGround></PlayGround> },
      { path: '/cocurricular', element: <CoCurricular></CoCurricular> },

      // Academic
      { path: "/schedule", element: <ClassSchedule></ClassSchedule> },
      { path: "/teachers", element: <></> },
      { path: "/staffs", element: <OurStaffs /> },
      { path: "/rules", element: <AcademicRules /> },
      { path: "/results", element: <Result /> },
      { path: "/calandar", element: <AcademicCalandar /> },
      { path: "/attendance", element: <AttendanceSheet /> },
      { path: "/information", element: <LeaveInformation /> },
      { path: '/result', element: <Result></Result> },
      { path: '/gallery', element: <CollegeGallery></CollegeGallery> },
      { path: '/contact', element: <ContactUs></ContactUs> },
      { path: "/admission", element: <Admission></Admission> },
      { path: "/profile", element: <Profile></Profile> }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);

