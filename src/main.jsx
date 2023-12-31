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
        path: '/result',
        element: <Result></Result>
      },
      {
        path: '/gallery',
        element: <CollegeGallery></CollegeGallery>
      },
      {
        path: '/contact',
        element: <ContactUs></ContactUs>
      },
      {
        path: "/admission",
        element: <Admission></Admission>
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

