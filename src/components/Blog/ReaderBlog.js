import React from "react";
import Navibar from "../Navbar/Navibar";
import Footer from "../Footer/Footer";
import Calendar from "./../../img/Blog/calendar.png";
import { useParams } from "react-router-dom";
import { postList } from "./postList";

const ReaderBlog = () => {
  const { id } = useParams();

  const post = postList.find((post) => post.id == id);

  return (
    <div>
      {post && (
        <div className="w-full h-full flex flex-col justify-center items-center">
          <div className="mb-12 w-full">
            <Navibar />
          </div>

          <div className="w-full md:w-9/12 2xl:w-5/12 flex flex-col justify-center items-center">
            <div className="w-full">
              <img
                src={post.imgTitle}
                alt="Image Title"
                className="w-full h-full"
              />
            </div>

            <div className="w-10/12 md:w-full text-left">
              <div className="my-6 mx-2">
                <img
                  src={Calendar}
                  alt="Calendar"
                  className="w-5 h-5 inline-block mr-2"
                />
                {post.date}
              </div>

              <div className="text-3xl font-bold mx-2">{post.title}</div>

              {post.data.map((post, index) => {
                return (
                  <div key={index} className="my-4 mb-8 mx-2">
                    <div className="text-xl font-bold mb-2">{post.header}</div>
                    <div dangerouslySetInnerHTML={{ __html: post.text }} />
                  </div>
                );
              })}
            </div>
            <div className="w-full flex justify-between text-lg font-bold">
              {id != 0 && (
                <a
                  href={`/blog/${parseInt(id) - 1}`}
                  className="w-auto flex items-start mx-2"
                >
                  Previous
                </a>
              )}

              {id != postList.length - 1 && (
                <a
                  href={`/blog/${parseInt(id) + 1}`}
                  className="w-auto flex item mx-2"
                >
                  Next
                </a>
              )}
            </div>
          </div>

          <div className="mt-auto w-full">
            <Footer />
          </div>
        </div>
      )}
    </div>
  );
};

export default ReaderBlog;
