import React from "react";
import Image from "next/image";
import Link from "next/link";

import Text from "@/components/ui/Text";

import review1 from "@/public/images/home/review1.png";
import review2 from "@/public/images/home/review2.png";
import review3 from "@/public/images/home/review3.png";
import fb from "@/public/images/home/fb.svg";
import linkedin from "@/public/images/home/linkedin.svg";
import insta from "@/public/images/home/insta.svg";
import x from "@/public/images/home/x.svg";

const Reviews = () => {
  return (
    <>
      <div className="w-full h-full flex flex-wrap gap-[25px] justify-center items-center max-w-[1260px] mx-auto mb-[96px]">
        {/* review 1 */}
        <div className="w-full bg-[#0F0F1A] max-w-[385px] min-h-[395px] flex flex-col justify-center items-center rounded-[8px] px-5">
          <Image src={review1} alt="" width={60} height={60} />
          <Text className="mt-[38px] mb-[25px] text-center text-[18px] font-bold text-[#F5F5FA]">
            Laura M., Founder of an e-commerce startup
          </Text>
          <Text className="text-left text-[18px] font-normal text-[#F5F5FA]">
            “Since we started using Kognitiiv.ai’s voice agents, our sales have
            increased by 40%. The Prefrontal agent closes deals like a human.
            It’s like having a full team working day and night without stopping”
          </Text>
        </div>
        {/* review 2 */}
        <div className="w-full bg-[#0F0F1A] max-w-[385px] min-h-[395px] flex flex-col justify-center items-center rounded-[8px] px-5">
          <Image src={review2} alt="" width={60} height={60} />
          <Text className="mt-[38px] mb-[25px] text-center text-[18px] font-bold text-[#F5F5FA]">
            Andrew G., Head of Customer Service at a fintech
          </Text>
          <Text className="text-left text-[18px] font-normal text-[#F5F5FA]">
            “We were struggling to maintain service quality as we scaled. The
            Hippocampus agent has been key: it responds accurately, with zero
            wait times, and never gets tired. Now our customers are more
            satisfied than ever.”
          </Text>
        </div>
        {/* review 3 */}
        <div className="w-full bg-[#0F0F1A] max-w-[385px] min-h-[395px] flex flex-col justify-center items-center rounded-[8px] px-5">
          <Image src={review3} alt="" width={60} height={60} />
          <Text className="mt-[38px] mb-[25px] text-center text-[18px] font-bold text-[#F5F5FA]">
            Camila R., Digital Marketing Specialist
          </Text>
          <Text className="text-left text-[18px] font-normal text-[#F5F5FA]">
            “The Broca agent has revolutionized our engagement strategy. It
            launches campaigns automatically, replies in real time, and
            personalizes every interaction. It’s like having a creative team
            running 24/7.”
          </Text>
        </div>
      </div>
      <div className="w-full max-w-[650px] mx-auto">
        <Text className="text-[#0F0F1A] text-[24px] font-medium text-center mb-[61px]">
          We’ll be showcasing how each one works on social media
          <span className="bg-gradient-to-r from-[#5F27CD] to-[#40E0D0] via-[#5F27CD] bg-clip-text text-transparent">
            {" "}
            follow along and stay ahead of the curve
          </span>
        </Text>
        <div className="flex justify-center items-center gap-[13px] mb-[77px]">
          <Link href="#">
            <Image src={fb} alt="" />
          </Link>
          <Link href="#">
            <Image src={insta} alt="" />
          </Link>
          <Link href="#">
            <Image src={x} alt="" />
          </Link>
          <Link href="#">
            <Image src={linkedin} alt="" />
          </Link>
        </div>
      </div>
      <div
        style={{
          background:
            "linear-gradient(179.84deg, #5F27CD 0.14%, #00CEC9 82.39%)",
        }}
        className="w-full h-[2px] mb-[139px]"></div>
    </>
  );
};

export default Reviews;
