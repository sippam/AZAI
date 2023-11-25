import React from "react";
import Navibar from "../Navbar/Navibar";
import SorryImg from "../../img/Feeling-sorry-rafiki.png";
import Footer from "../Footer/Footer";

const Blog = () => {
  return (
    <div id="blog" className="flex flex-col min-h-screen">
      <div className="mb-12">
        <Navibar />
      </div>
      <div className="flex flex-col justify-center flex-grow">
        <img src={SorryImg} alt="Sorry" className="w-72 h-72 md:w-96 md:h-96 mx-auto" />
        <div className="text-center">ขออภัย ฟีเจอร์นี้ยังไม่พร้อมใช้งาน</div>
      </div>
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default Blog;
