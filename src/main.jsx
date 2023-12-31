import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Main/Main.jsx";
import AuthProvider from "./Provider/AuthProvider/AuthProvider.jsx";
// import Login from "./Components/Login.jsx";
import Register from "./Components/Register.jsx";
import AllColleges from "./Routes/AllColleges/AllColleges.jsx";
import SingleDetails from "./Routes/AllColleges/SingleDetails.jsx";
import Admission from "./Routes/Admission/Admission.jsx";
import SingleAdmission from "./Routes/Admission/SingleAdmission.jsx";
import MyCollege from "./Routes/MyCollege/MyCollege.jsx";
import PrivetRoute from "./Routes/PrivetRoute/PrivetRoute.jsx";
import NotFound404 from "./Components/NotFound.jsx";
import Profile from "./Routes/Profile/Profile.jsx";
import Login from "./Components/Login.jsx";
import Result from "./Components/Result/Result.jsx";
import ContactUs from "./Pages/ContactUs/ContactUs.jsx";
import Gallery from "./Pages/Gallery/Gallery.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <NotFound404></NotFound404>,
    children: [
      {
        path: '/',
        element: <App></App>
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/allColleges",
        element: <AllColleges></AllColleges>
      },
      {
        path: '/result',
        element: <Result></Result>
      },
      {
        path: '/gallery',
        element: <Gallery></Gallery>
      },
      {
        path: '/contact',
        element: <ContactUs></ContactUs>
      },
      {
        path: "/college/:id",
        element: <PrivetRoute><SingleDetails></SingleDetails></PrivetRoute>,
        loader: ({ params }) => fetch(`https://e-commerce-site-back-end.vercel.app/allCollege/${params.id}`)
      },
      {
        path: "admission",
        element: <Admission></Admission>
      },
      {
        path: "/admissionCollege/:id",
        element: <PrivetRoute><SingleAdmission></SingleAdmission></PrivetRoute>,
        loader: ({ params }) => fetch(`https://e-commerce-site-back-end.vercel.app/allCollege/${params.id}`)
      },
      {
        path: "/myCollege",
        element: <MyCollege></MyCollege>
      },
      {
        path: "/profile",
        element: <Profile></Profile>
      }
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

