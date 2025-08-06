import React from "react";
import Image from "next/image";

import Text from "@/components/ui/Text";

import handcoin from "@/public/images/home/HandCoins.svg";

const Cards = () => {
  return (
    <div className="w-full h-full max-w-[1260px] mx-auto flex flex-wrap justify-center items-center md:gap-[10px] gap-6 mb-[121px] px-5">
      {/* card 1 */}
      <div className="element-with-gradient-border-rounded w-full md:max-w-[281px] max-w-full md:min-h-[255px] min-h-[115px]">
        <div
          style={{ boxShadow: "-6px -2px 16px 0px #FFFFFFCC" }}
          className="w-full md:max-w-[281px] max-w-full md:min-h-[255px] inner-content min-h-[115px] bg-[#0F0F1A] flex flex-col justify-center items-center">
          <Image src={handcoin} alt="" />
          <Text className="text-[14px] font-normal text-white">Prefrontal</Text>
          <Text className="text-[14px] font-bold bg-gradient-to-r from-[#9747FF] to-[#00CEC9] bg-clip-text text-transparent">
            AI Sales Closer
          </Text>
        </div>
      </div>

      <div className="w-full md:max-w-[281px] max-w-full">
        {/* card 2 */}
        <div className="element-with-gradient-border-rounded w-full md:max-w-[281px] max-w-full mb-[25px] h-[115px]">
          <div
            style={{ boxShadow: "-6px -2px 16px 0px #FFFFFFCC" }}
            className="w-full md:max-w-[281px] max-w-full min-h-[115px] bg-[#0F0F1A] mb-[25px] flex flex-col justify-center items-center rounded-[12px]">
            <Image src={handcoin} alt="" />
            <Text className="text-[14px] font-normal text-white">Broca</Text>
            <Text className="text-[14px] font-bold bg-gradient-to-r from-[#9747FF] to-[#00CEC9] bg-clip-text text-transparent">
              AI Marketing & Engagement
            </Text>
          </div>
        </div>
        {/* card 3 */}
        <div className="element-with-gradient-border-rounded w-full md:max-w-[281px] max-w-full min-h-[115px]">
          <div
            style={{ boxShadow: "-6px -2px 16px 0px #FFFFFFCC" }}
            className="w-full md:max-w-[281px] max-w-full min-h-[115px] bg-[#0F0F1A] flex flex-col justify-center items-center rounded-[12px]">
            <Image src={handcoin} alt="" />
            <Text className="text-[14px] font-normal text-white">
              Occipital
            </Text>
            <Text className="text-[14px] font-bold bg-gradient-to-r from-[#9747FF] to-[#00CEC9] bg-clip-text text-transparent">
              AI Analytics Reporter
            </Text>
          </div>
        </div>
      </div>
      <div className="w-full md:max-w-[281px] max-w-full">
        {/* card 4 */}
        <div className="element-with-gradient-border-rounded w-full md:max-w-[281px] max-w-full mb-[25px] h-[115px]">
          <div
            style={{ boxShadow: "-6px -2px 16px 0px #FFFFFFCC" }}
            className="w-full md:max-w-[281px] max-w-full min-h-[115px] bg-[#0F0F1A] mb-[25px] flex flex-col justify-center items-center rounded-[12px]">
            <Image src={handcoin} alt="" />
            <Text className="text-[14px] font-normal text-white">
              Hippocampus
            </Text>
            <Text className="text-[14px] font-bold bg-gradient-to-r from-[#9747FF] to-[#00CEC9] bg-clip-text text-transparent">
              AI Customer Service Agent
            </Text>
          </div>
        </div>
        {/* card 5 */}
        <div className="element-with-gradient-border-rounded w-full md:max-w-[281px] max-w-full  h-[115px]">
          <div
            style={{ boxShadow: "-6px -2px 16px 0px #FFFFFFCC" }}
            className="w-full md:max-w-[281px] max-w-full min-h-[115px] bg-[#0F0F1A] flex flex-col justify-center items-center rounded-[12px]">
            <Image src={handcoin} alt="" />
            <Text className="text-[14px] font-normal text-white">
              Cerebellum
            </Text>
            <Text className="text-[14px] font-bold bg-gradient-to-r from-[#9747FF] to-[#00CEC9] bg-clip-text text-transparent">
              AI IT Support Agent
            </Text>
          </div>
        </div>
      </div>
      {/* card 6 */}
      <div className="element-with-gradient-border-rounded w-full md:max-w-[281px] max-w-full md:min-h-[255px] min-h-[115px]">
        <div
          style={{ boxShadow: "-6px -2px 16px 0px #FFFFFFCC" }}
          className="w-full md:max-w-[281px] max-w-full md:min-h-[255px] min-h-[115px] bg-[#0F0F1A] flex flex-col justify-center items-center rounded-[12px]">
          <Image src={handcoin} alt="" />
          <Text className="text-[14px] font-normal text-white">Amygdala</Text>
          <Text className="text-[14px] font-bold bg-gradient-to-r from-[#9747FF] to-[#00CEC9] bg-clip-text text-transparent">
            AI Receptionist / Call Filter
          </Text>
        </div>
      </div>
    </div>
  );
};

export default Cards;
