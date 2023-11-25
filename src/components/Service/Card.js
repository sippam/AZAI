import React from "react";

const Card = ({ dataImg }) => {
  return (
    <div className="w-full flex flex-col justify-center bg-[#D9D9D9] my-2 rounded-2xl 2xl:w-4/6 xl:w-full">
      <div className="flex justify-center">
        <img src={dataImg} className="w-32 h-32" alt="logo" />
      </div>
      <div className="font-bold mx-2 mb-2">Lorem</div>
      <div className="mx-2 mb-4">
        Lorem ipsum dolor sit amet consectetur. Imperdiet ornare
      </div>
    </div>
  );
};

export default Card;
