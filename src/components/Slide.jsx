"use client";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import { truncateText3 } from "@/utils/truncateText3";
import { truncateText4 } from "@/utils/truncateText4";

export default function Slide({ datas }) {
  return (
    <div className="h-[280px] md:h-[440px]">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {datas.map(
          (data, index) =>
            index < 10 && (
              <SwiperSlide key={index} className="relative">
                <Image
                  src={data.imageUrl}
                  width={1000}
                  height={1000}
                  alt="Slide"
                  className="w-full object-center object-cover"
                />
                <div className="bg-black absolute bottom-0 bg-opacity-30 text-white">
                  <div className="px-4 mb-4 py-4 space-y-2">
                    <h3 className="text-xs sm:text-sm md:text-base">
                      {truncateText3(`${data.title}`)}
                    </h3>
                    <h4 className="text-[0.5rem] md:text-xs">
                      {truncateText4(`${data.description}`)}
                    </h4>
                  </div>
                </div>
              </SwiperSlide>
            )
        )}
      </Swiper>
    </div>
  );
}
