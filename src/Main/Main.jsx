import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Banner from "../Components/Banner";
import Navbar from "../Components/Navbar";

const Main = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto ">
        <Navbar></Navbar>
        <Banner></Banner>
      </div>
      <Outlet></Outlet>

      <Footer></Footer>
    </div>
  );
};

export default Main;
