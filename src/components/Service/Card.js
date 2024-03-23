import React from "react";

const Card = ({ dataImg }) => {
  return (
    <div className="w-full flex flex-col justify-center my-2 2xl:w-4/6 xl:w-full">
      {/*bg-[#D9D9D9]*/}
      <div className="flex justify-center ">
        <img src={dataImg} className="w-8/12 h-auto rounded-2xl" alt="logo" loading="lazy" />
      </div>
    </div>
  );
};

export default Card;
