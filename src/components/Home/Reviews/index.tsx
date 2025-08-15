import React from "react";
import Image from "next/image";
import Link from "next/link";

import Text from "@/components/ui/Text";
import ReviewsMobileSlider from "./MobileSlider";

import review1 from "@/public/images/home/review1.png";
import review2 from "@/public/images/home/review2.png";
import review3 from "@/public/images/home/review3.png";
import insta from "@/public/images/home/insta.png";

const Reviews = () => {
  return (
    <div id="reviews" className="">
      <div className="w-full h-full flex-wrap gap-[25px] justify-center items-center max-w-[1260px] mx-auto mb-[96px] px-5 hidden md:flex">
        {/* review 1 */}
        <div className="w-full  max-w-[385px] min-h-[395px] rounded-[10px] flex flex-col justify-center items-center px-5 border-3 border-[#0F0F1A]">
          <Image src={review1} alt="" width={60} height={60} />
          <Text className="mt-[38px] mb-[25px] text-center text-[18px] font-bold text-[#0F0F1A]">
            Laura M., Founder of an e-commerce startup
          </Text>
          <Text className="text-left text-[18px] font-normal text-[#0F0F1A]">
            “Since we started using Kognitiiv.ai’s voice agents, our sales have
            increased by 40%. The Prefrontal agent closes deals like a human.
            It’s like having a full team working day and night without stopping”
          </Text>
        </div>

        {/* review 2 */}
        <div className="w-full  max-w-[385px] min-h-[395px] flex flex-col justify-center items-center rounded-[10px] px-5 border-3 border-[#0F0F1A]">
          <Image src={review2} alt="" width={60} height={60} />
          <Text className="mt-[38px] mb-[25px] text-center text-[18px] font-bold text-[#0F0F1A]">
            Andrew G., Head of Customer Service at a fintech
          </Text>
          <Text className="text-left text-[18px] font-normal text-[#0F0F1A]">
            “We were struggling to maintain service quality as we scaled. The
            Hippocampus agent has been key: it responds accurately, with zero
            wait times, and never gets tired. Now our customers are more
            satisfied than ever.”
          </Text>
        </div>
        {/* review 3 */}
        <div className="w-full  max-w-[385px] min-h-[395px] flex flex-col justify-center items-center rounded-[10px] px-5 border-3 border-[#0F0F1A]">
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
      </div>
      <ReviewsMobileSlider/>
      <div className="w-full max-w-[650px] mx-auto px-5">
        <Text className="text-[#0F0F1A] text-[24px] font-medium text-center mb-[61px]">
          We’ll be showcasing how each one works on social media
          <span className="">
            {" "}
            follow along and stay ahead of the curve
          </span>
        </Text>
        <div className="flex justify-center items-center gap-[13px] mb-[77px]">
         
          <Link href="https://www.instagram.com/kognitiiv.ai?igsh=MWxwM3NqOWJpZTl2dA==">
            <Image src={insta} alt="" width={30} height={30}/>
          </Link>
          
        </div>
      </div>
      {/* <div
        style={{
          background:
            "#000000",
        }}
        className="w-full h-[2px] md:mb-[50px] mb-[40px]"></div> */}
    </div>
  );
};

export default Reviews;
