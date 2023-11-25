import React from "react";
import Card from "./Card";

const Service = () => {
  const data = [1, 2, 3];

  return (
    <div id="service" className="w-full flex justify-center">
      <div className="w-4/5 p-3 bg-[#F2F2F2] border-0 rounded-2xl md:px-7 2xl:w-3/5 xl:w-4/5">
        <div className="flex justify-center font-bold text-2xl mt-2 md:justify-end md:mb-4 2xl:flex 2xl:justify-center">
          บริการ
        </div>
        <div className="2xl:flex 2xl:justify-center">
          <div className="flex flex-col items-center mb-2 md:flex-row justify-center xl:w-full">
            {data.map((item, index) => {
              return (
                <div className="w-4/6 md:w-2/3 md:mx-4 2xl:flex 2xl:justify-center 2xl:mx-0">
                  <Card key={index} data={item} />{" "}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
