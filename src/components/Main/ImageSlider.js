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
              AZAI "อาศัย"
            </div>
            <div className="text-2xl md:text-3xl 2xl:text-5xl font-bold">
              แอปจัดการหอพัก ห้องเช่า <br className="md:hidden" />
              อพาร์ทเม้นท์
            </div>
            <div className="w-auto">
              <a href="https://forms.gle/bdg2bTvMXYDXeSAk8" target="_blank">
                <button className="text-2xl 2xl:text-3xl mt-6 border- px-4 py-2 rounded-2xl bg-[#255995] hover:bg-[#77b0f1]">
                  ทดลองใช้งานฟรี คลิ๊ก!
                </button>
              </a>
            </div>
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
