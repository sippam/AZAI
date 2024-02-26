import React from "react";
import Calendar from "./../../img/Blog/calendar.png";

const EachBlog = ({ post }) => {
  return (
    <a
      href={`blog/${post.id}`}
      className="w-full flex justify-center border-b-2 my-4 md:w-8/12 md:flex-col"
    >
      {/* Image */}
      <div className="w-5/12 h-5/12 md:w-full">
        <img src={post.imgTitle} alt="Image" className="w-full h-full" />
      </div>
      {/*  */}
      <div className="w-11/12 flex flex-col justify-between md:w-full">
        {/* Title */}
        <div className="font-bold m-2 md:text-xl">
          <h1>{post.title}</h1>
        </div>
        {/*  */}

        <div className="hidden md:flex m-2">{post.desc}</div>

        <div className="flex flex-col m-2 text-sm bottom-0">
          {/* Date */}
          <div className="flex mb-2">
            <img src={Calendar} alt="calendar" className="h-5 w-5 mr-2" />
            <p>{post.date}</p>
          </div>
          {/*  */}
          <div className="font-bold text-xs">อ่านเพิ่มเติม &#707;</div>
        </div>
      </div>
    </a>
  );
};

export default EachBlog;

{
  /* <div>
          <img src={post.imgTitle} />
        </div>
        <div className="text-3xl font-bold m-2 mt-4">
          <h1>{post.title}</h1>
        </div>
        <div className="flex m-2">
          <img src={Calendar} alt="calendar" className="h-5 w-5 mr-2" />
          <p>{post.date}</p>
        </div>
        <div className="m-2">
          <p>{post.desc}</p>
        </div>

        <div className="font-bold m-2 mb-4">อ่านเพิ่มเติม &#707;</div> */
}
