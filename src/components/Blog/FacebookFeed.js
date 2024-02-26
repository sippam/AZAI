import React, { useState } from "react";
import EachBlog from "./EachBlog";
import { postList } from "./postList";
import Pagination from "@mui/material/Pagination";

const FacebookFeed = () => {
  const sm = "w-full flex flex-col justify-center items-center";
  const md = "md:grid md:grid-cols-2 md:justify-items-center md:jus";
  const two_xl = "2xl:w-4/5 2xl:grid 2xl:grid-cols-3"; // Changed from justify-items-center to justify-center

  const [currentPage, setCurrentPage] = useState(1);
  const limit = 12;

  const numberPage = Math.ceil(postList.length / limit)

  const paginate = postList.slice(
    (currentPage - 1) * limit,
    currentPage * limit
  );

  const handleChange = (_, value) => {
    setCurrentPage(value);
  };

  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-full flex flex-col justify-center items-center">
        <div className="w-11/12 flex justify-center text-start">
          <div className={`${sm} ${md} ${two_xl}`}>
            {paginate.map((post, index) => (
              <div
                key={index}
                className="flex justify-center items-start h-full"
              >
                <EachBlog post={post} />
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center w-full">
          <Pagination
            value={currentPage}
            count={numberPage}
            siblingCount={1}
            boundaryCount={1}
            shape="rounded"
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};

export default FacebookFeed;
