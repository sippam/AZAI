import React from "react";
import logo from "../../logo.svg";

const MainPage = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-4/5 p-3 border-0 rounded-2xl">
        <img src={logo} alt="logo" />
        <div className="mb-2">
          Lorem ipsum dolor sit amet consectetur. Imperdiet ornare ut quis sed
          eget vel ipsum. Facilisi potenti proin nisl in arcu porttitor sed quis
          diam.
        </div>
      </div>
    </div>
  );
};

export default MainPage;
