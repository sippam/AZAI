// Import Swiper React components
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, A11y } from "swiper/modules";
import EachBlog from "./EachBlog";
import { postList } from "./postList";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

const BlogBetweenAboutAndFeature = () => {
  const limit = postList.slice(0, 5);

  return (
    <div className="w-full flex justify-center">
      <div className="w-11/12 p-3 2xl:w-3/5 xl:w-4/5 md:flex">
        <Swiper
          modules={[Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          breakpoints={{
            // When window width is >= 640px
            640: {
              slidesPerView: 2,
            },
            // When window width is >= 768px
            768: {
              slidesPerView: 2,
            },
            // When window width is >= 1024px
            1024: {
              slidesPerView: 3,
            },
          }}

        >
          {limit.map((post, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="flex justify-center text-left">
                  <EachBlog post={post} />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default BlogBetweenAboutAndFeature;
