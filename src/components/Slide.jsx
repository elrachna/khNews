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
import Link from "next/link";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { truncateText } from "@/utils/truncateText";
import { truncateText2 } from "@/utils/truncateText2";
import { truncateText5 } from "@/utils/truncateText5";

export default function Slide({ datas }) {
  return (
    <div className="h-[280px] md:h-[540px] ">
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={{
          prevEl: ".custom-prev-btn",
          nextEl: ".custom-next-btn",
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper relative"
      >
        {/* Custom Navigation Buttons */}
        <button
          className="custom-prev-btn absolute top-1/2 left-4 z-10 -translate-y-1/2 text-white p-2 transition-transform hover:scale-110 hover:translate-x-[-0.25rem]"
          aria-label="Previous Slide"
        >
          <FaArrowLeft size={24} />
        </button>
        <button
          className="custom-next-btn absolute top-1/2 right-4 z-10 -translate-y-1/2 text-white p-2 transition-transform hover:scale-110 hover:translate-x-1"
          aria-label="Next Slide"
        >
          <FaArrowRight size={24} />
        </button>
        {datas.map(
          (data, index) =>
            index < 8 && (
              <SwiperSlide key={index} className="relative">
                <Link href={`/article/${data.id}`}>
                  <Image
                    src={data.imageUrl}
                    width={1000}
                    height={1000}
                    alt="Slide"
                    className="w-full object-center object-cover"
                  />
                  <div className="bg-black absolute bottom-0 bg-opacity-30 w-full text-white">
                    <div className="px-4 mb-4 py-4 space-y-2">
                      <h3 className="text-xl">
                        {truncateText(`${data.title}`)}
                      </h3>
                      <h4 className="text-base">
                        {truncateText4(`${data.description}`)}
                      </h4>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            )
        )}
      </Swiper>
    </div>
  );
}
