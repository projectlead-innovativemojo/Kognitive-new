"use client";
import React from "react";
import Image from "next/image";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Keyboard, Navigation, Scrollbar } from "swiper/modules";

import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Text from "@/components/ui/Text";

import movenextbtn from "@/public/images/home/CaretRight.svg";
import moveprevbtn from "@/public/images/home/CaretLeft.svg";
import review1 from "@/public/images/home/review1.png";
import review2 from "@/public/images/home/review2.png";
import review3 from "@/public/images/home/review3.png";

const ReviewsMobileSlider = () => {
  const swiper = useSwiper();

  const handleprevbtn = () => {
    swiper?.slidePrev();
  };

  const handleNextvbtn = () => {
    swiper?.slideNext();
  };

  // const handleSlideChange = (swiper) => {
  //   setActiveIndex(swiper.activeIndex);
  // };

  return (
    <div className="parent-div md:hidden block px-5" id="reviews">
      <div className="swiper-main-div">
        <Swiper
          // onSlideChange={handleSlideChange}
          slidesPerView={1}
          // activeIndex={activeIndex}
          initialSlide={1}
        //   spaceBetween={70}
        spaceBetween={10}
          centeredSlides={true}
          // slidesPerGroupSkip={3}
          // scrollbar={true}
          loop={true}
          navigation={{
            nextEl: ".custom-next",

            prevEl: ".custom-prev",
          }}
          modules={[Keyboard, Navigation, Scrollbar]}
          className="mySwiper">
          <SwiperSlide>
            <div className="w-full  max-w-full min-h-[395px] rounded-[10px] flex flex-col justify-center items-center px-5 border-3 border-[#0F0F1A]">
              <Image src={review1} alt="" width={60} height={60} />
              <Text className="mt-[38px] mb-[25px] text-center text-[18px] font-bold text-[#0F0F1A]">
                Laura M., Founder of an e-commerce startup
              </Text>
              <Text className="text-left text-[18px] font-normal text-[#0F0F1A]">
                “Since we started using Kognitiiv.ai’s voice agents, our sales
                have increased by 40%. The Prefrontal agent closes deals like a
                human. It’s like having a full team working day and night
                without stopping”
              </Text>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full  max-w-full min-h-[395px] flex flex-col justify-center items-center rounded-[10px] px-5 border-3 border-[#0F0F1A]">
              <Image src={review2} alt="" width={60} height={60} />
              <Text className="mt-[38px] mb-[25px] text-center text-[18px] font-bold text-[#0F0F1A]">
                Andrew G., Head of Customer Service at a fintech
              </Text>
              <Text className="text-left text-[18px] font-normal text-[#0F0F1A]">
                “We were struggling to maintain service quality as we scaled.
                The Hippocampus agent has been key: it responds accurately, with
                zero wait times, and never gets tired. Now our customers are
                more satisfied than ever.”
              </Text>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full  max-w-full min-h-[395px] flex flex-col justify-center items-center rounded-[10px] px-5 border-3 border-[#0F0F1A]">
              <Image src={review3} alt="" width={60} height={60} />
              <Text className="mt-[38px] mb-[25px] text-center text-[18px] font-bold text-[#0F0F1A]">
                Camila R., Digital Marketing Specialist
              </Text>
              <Text className="text-left text-[18px] font-normal text-[#0F0F1A]">
                “The Broca agent has revolutionized our engagement strategy. It
                launches campaigns automatically, replies in real time, and
                personalizes every interaction. It’s like having a creative team
                running 24/7.”
              </Text>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="flex justify-center items-center gap-5 mt-[30px] mb-[58px]">
            <Image
              className="custom-prev"
              onClick={handleNextvbtn}
              src={moveprevbtn}
              alt="moveprevbtn"
            />
          <Image
            className="custom-next"
            onClick={handleprevbtn}
            src={movenextbtn}
            alt="movenextbtn"
          />
        </div>
      </div>
    </div>
  );
};

export default ReviewsMobileSlider;
