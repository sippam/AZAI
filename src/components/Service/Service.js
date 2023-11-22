import React from "react";
import Card from "./Card";

const Service = () => {
  const data = [1, 2, 3];

  return (
    <div id="service" className="w-full flex justify-center">
      <div className="w-4/5 p-3 bg-[#F2F2F2] border-0 rounded-2xl">
        <div className="justify-center mt-2">บริการ</div>
        <div className="flex flex-col items-center mb-2">
          {data.map((item, index) => {
            return (
              <div className="w-4/6">
                <Card key={index} />{" "}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Service;
