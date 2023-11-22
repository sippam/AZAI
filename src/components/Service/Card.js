import React from "react";
import logo from "../../logo.svg";

const Card = ({data}) => {
  return (
    <div className="w-full flex flex-col justify-center bg-[#D9D9D9] my-2 rounded-2xl">
      <div className="flex justify-center">
        <img src={logo} className="w-32 h-32" alt="logo" />
      </div>
      <div className="font-bold mx-2 mb-2">Lorem{data}</div>
      <div className="mx-2 mb-4">Lorem ipsum dolor sit amet consectetur. Imperdiet ornare</div>
    </div>
  );
};

export default Card;
