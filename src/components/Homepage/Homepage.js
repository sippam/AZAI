import React from "react";
import Navibar from "../Navbar/Navibar";
import MainPage from "../Main/MainPage";
import About from "../About/About";
import Service from "../Service/Service";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import AboutAZAI from "../About/AboutAZAI";
// import ContractFooter from "../Footer/ContractFooter";

const Homepage = () => {
  return (
    <>
      <Navibar />
      <MainPage />
      <AboutAZAI />
      {/* <div className="mt-60 md:my-10"> */}
      {/* <div className="my-10"> */}
        <Service />
      {/* </div> */}
      {/* <div className="my-10"> */}
        <About />
      {/* </div> */}
      <div className="my-10">
        <Contact />
      </div>
      <div className="mt-10">
        {/* <ContractFooter /> */}
        <Footer />
      </div>
      {/* <div className="text-red-700 sm:text-gray-100 md:text-orange-400 lg:text-lime-700 xl:text-deep-purple-700 2xl:text-blue-600">
        Homepage
      </div> */}
    </>
  );
};

export default Homepage;
