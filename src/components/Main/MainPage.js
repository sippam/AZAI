import React from "react";
import ImageSlider from "./ImageSlider";
import Pasaric from "../../img/MainPage/pasaric.jpg";
import Shimazaki from "../../img/MainPage/shimazaki.jpg";
import Shuraeva from "../../img/MainPage/shuraeva.jpg";
import Stapleton from "../../img/MainPage/stapleton.jpg";

const MainPage = () => {

  const Images = [Pasaric, Shimazaki, Shuraeva, Stapleton];

  return (
    <div id="home" className="w-full flex justify-center">
      <div className="w-full flex flex-col justify-center">
        {/* <div className="text-7xl 2xl:text-8xl font-bold md:text-left">AZAI</div> */}
        <div className="flex flex-col mt-10">
          <ImageSlider
            images={Images}
          />
        </div>
        {/* <hr className="mt-5 border-2 border-black" /> */}
      </div>
    </div>
  );
};

export default MainPage;
