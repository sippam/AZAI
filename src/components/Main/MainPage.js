import React from "react";
import logo from "../../logo.svg";

const MainPage = () => {
  return (

      <div className="w-full flex justify-center">
        <div className="w-4/5 p-3 border-0 rounded-2xl flex flex-col justify-center items-center mt-10 2xl:w-3/5 xl:w-4/5">
          <img src={logo} alt="logo" className="w-32 h-32 md:w-64 md:h-64"/>
          <div className="font-bold text-3xl m-2 md:mb-2">AZAI</div>
          <div className="mb-2 md:w-3/5 2xl:w-2/5">
            Lorem ipsum dolor sit amet consectetur. Imperdiet ornare ut quis sed
            eget vel ipsum. Facilisi potenti proin nisl in arcu porttitor sed
            quis diam.
          </div>
        </div>
      </div>
  );
};

export default MainPage;
