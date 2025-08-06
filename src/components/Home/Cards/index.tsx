import React from "react";
import Image from "next/image";

import Text from "@/components/ui/Text";

import handcoin from "@/public/images/home/HandCoins.svg";

const Cards = () => {
  return (
    <div className="w-full h-full max-w-[1260px] mx-auto flex justify-center items-center gap-[10px] mb-[121px]">
      {/* card 1 */}
      <div
        style={{ boxShadow: "-6px -2px 16px 0px #FFFFFFCC" }}
        className="w-full max-w-[281px] min-h-[255px] bg-[#0F0F1A] flex flex-col justify-center items-center rounded-[12px]">
        <Image src={handcoin} alt="" />
        <Text className="text-[14px] font-normal text-white">Prefrontal</Text>
        <Text className="text-[14px] font-bold bg-gradient-to-r from-[#9747FF] to-[#00CEC9] bg-clip-text text-transparent">
          AI Sales Closer
        </Text>
      </div>
      <div className="w-full max-w-[281px]">
        {/* card 2 */}
        <div
          style={{ boxShadow: "-6px -2px 16px 0px #FFFFFFCC" }}
          className="w-full max-w-[281px] min-h-[115px] bg-[#0F0F1A] mb-[25px] flex flex-col justify-center items-center rounded-[12px]">
          <Image src={handcoin} alt="" />
          <Text className="text-[14px] font-normal text-white">Broca</Text>
          <Text className="text-[14px] font-bold bg-gradient-to-r from-[#9747FF] to-[#00CEC9] bg-clip-text text-transparent">
            AI Marketing & Engagement
          </Text>
        </div>
        {/* card 3 */}
        <div
          style={{ boxShadow: "-6px -2px 16px 0px #FFFFFFCC" }}
          className="w-full max-w-[281px] min-h-[115px] bg-[#0F0F1A] flex flex-col justify-center items-center rounded-[12px]">
          <Image src={handcoin} alt="" />
          <Text className="text-[14px] font-normal text-white">Occipital</Text>
          <Text className="text-[14px] font-bold bg-gradient-to-r from-[#9747FF] to-[#00CEC9] bg-clip-text text-transparent">
            AI Analytics Reporter
          </Text>
        </div>
      </div>
      <div className="w-full max-w-[281px]">
        {/* card 4 */}
        <div
          style={{ boxShadow: "-6px -2px 16px 0px #FFFFFFCC" }}
          className="w-full max-w-[281px] min-h-[115px] bg-[#0F0F1A] mb-[25px] flex flex-col justify-center items-center rounded-[12px]">
          <Image src={handcoin} alt="" />
          <Text className="text-[14px] font-normal text-white">
            Hippocampus
          </Text>
          <Text className="text-[14px] font-bold bg-gradient-to-r from-[#9747FF] to-[#00CEC9] bg-clip-text text-transparent">
            AI Customer Service Agent
          </Text>
        </div>
        {/* card 5 */}
        <div
          style={{ boxShadow: "-6px -2px 16px 0px #FFFFFFCC" }}
          className="w-full max-w-[281px] min-h-[115px] bg-[#0F0F1A] flex flex-col justify-center items-center rounded-[12px]">
          <Image src={handcoin} alt="" />
          <Text className="text-[14px] font-normal text-white">Cerebellum</Text>
          <Text className="text-[14px] font-bold bg-gradient-to-r from-[#9747FF] to-[#00CEC9] bg-clip-text text-transparent">
            AI IT Support Agent
          </Text>
        </div>
      </div>
      {/* card 6 */}
      <div
        style={{ boxShadow: "-6px -2px 16px 0px #FFFFFFCC" }}
        className="w-full max-w-[281px] min-h-[255px] bg-[#0F0F1A] flex flex-col justify-center items-center rounded-[12px]">
        <Image src={handcoin} alt="" />
        <Text className="text-[14px] font-normal text-white">Amygdala</Text>
        <Text className="text-[14px] font-bold bg-gradient-to-r from-[#9747FF] to-[#00CEC9] bg-clip-text text-transparent">
          AI Receptionist / Call Filter
        </Text>
      </div>
    </div>
  );
};

export default Cards;
