import React from "react";
import Navibar from "../Navbar/Navibar";
import MainPage from "../Main/MainPage";
import About from "../About/About";
import Service from "../Service/Service";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import AboutAZAI from "../About/AboutAZAI";
import BlogBetweenAboutAndFeature from "../Blog/BlogBetweenAboutAndFeature";

const Homepage = () => {
  return (
    <>
      <Navibar />
      <MainPage />
      <AboutAZAI />
      <Service />
      {/* <div className="my-20"> */}
      <BlogBetweenAboutAndFeature />
      {/* </div> */}
      <About />
      <div className="my-10">
        <Contact />
      </div>
      <div className="mt-10">
        <Footer />
      </div>
      <div className="text-red-700 sm:text-gray-100 md:text-orange-400 lg:text-lime-700 xl:text-deep-purple-700 2xl:text-blue-600">
        Homepage
      </div>
    </>
  );
};

export default Homepage;
