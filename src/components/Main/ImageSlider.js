import React from "react";
import HeroSlider, { Overlay, Slide, Nav } from "hero-slider";

const ImageSlider = ({ images }) => {

  const height = "70vh";

  return (
    <div>
      <HeroSlider
        height={height}
        autoplay={{
          autoplayDuration: 5000,
        }}
        controller={{
          initialSlide: 1,
          slidingDuration: 500,
          slidingDelay: 100,
        }}
      >
        <Overlay>
          <div className="flex flex-col justify-center w-full h-full">
            <div className="text-6xl 2xl:text-8xl font-bold py-3">
              AZAI
            </div>
            <div className="text-2xl md:text-3xl 2xl:text-5xl font-bold">แอปจัดการหอพัก ห้องเช่า <br className="md:hidden"/>อพาร์ทเม้นท์</div>
          </div>
        </Overlay>
        {images.map((data, index) => {
          return (
            <Slide
              key={index}
              background={{
                backgroundImageSrc: data,
              }}
            />
          );
        })}
        <Nav />
      </HeroSlider>
    </div>
  );
};

export default ImageSlider;
