import React from "react";
import logo from "../../logo.svg";
import Navibar from "../Navbar/Navibar";
import About from "../About/About";
import Service from "../Service/Service";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";

const MainPage = () => {
  return (

      <div className="w-full flex justify-center">
        <div className="w-4/5 p-3 border-0 rounded-2xl flex flex-col justify-center items-center">
          <img src={logo} alt="logo" className="w-32 h-32 md:w-64 md:h-64"/>
          <div className="mb-2">
            Lorem ipsum dolor sit amet consectetur. Imperdiet ornare ut quis sed
            eget vel ipsum. Facilisi potenti proin nisl in arcu porttitor sed
            quis diam.
          </div>
        </div>
      </div>
  );
};

export default MainPage;
