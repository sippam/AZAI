import React from "react";
import Card from "./Card";

const Service = () => {
  const data = [1, 2, 3];

  return (
    <div id="service" className="w-full flex justify-center">
      <div className="w-4/5 p-3 bg-[#F2F2F2] border-0 rounded-2xl md:px-7">
        <div className="flex justify-center font-bold text-2xl mt-2 md:justify-end md:mr-4 md:mb-4">บริการ</div>
        <div className="flex flex-col items-center mb-2 md:flex-row justify-center">
          {data.map((item, index) => {
            return (
              <div className="w-4/6 md:w-2w/3 md:mx-4">
                <Card key={index} data={item} />{" "}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Service;
