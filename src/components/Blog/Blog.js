import React from "react";
import Navibar from "../Navbar/Navibar";
import Footer from "../Footer/Footer";
import FacebookFeed from "./FacebookFeed";

const Blog = () => {
  return (
    <div id="blog" className="flex flex-col h-screen">
      <div className="mb-12">
        <Navibar />
      </div>

      <div className="flex flex-col justify-center mt-4">
        <FacebookFeed />
      </div>
      <div className="mt-6">
        <Footer />
      </div>
    </div>
  );
};

export default Blog;
