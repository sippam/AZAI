import React from "react";

const CardShowMember = ({ data }) => {
  return (
    <div className="w-full grid grid-cols-2 items-center mb-4 md:mb-8 justify-center bg-[#255995] rounded-2xl">
      <div className="relative w-32 h-32 md:w-24 md:h-24 overflow-hidden rounded-full ml-6 my-2">
        <img
          src={data.img}
          className="object-cover w-full h-full"
          alt={data.name}
        />
      </div>
      <div className="flex flex-col justify-center text-center mr-6 text-white">
        <div className="text-lg font-semibold">{data.name}</div>
        <div>{data.position}</div>
      </div>
    </div>
  );
};

export default CardShowMember;
