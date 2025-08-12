import React from "react";
import Image from "next/image";

import Text from "@/components/ui/Text";

import handcoin from "@/public/images/home/HandCoins.svg";
import threeusers from "@/public/images/home/UsersThree.svg";
import chart from "@/public/images/home/ChartScatter.svg"
import addressbook from "@/public/images/home/AddressBook.svg";
import headcircuit from "@/public/images/home/HeadCircuit.svg";
import headset from "@/public/images/home/Headset.svg";

const Cards = () => {
  return (
    <div id="our-employees" className="w-full h-full max-w-[1260px] mx-auto flex flex-wrap justify-center items-center md:gap-[23px] gap-6 mb-[97px] md:mb-[121px] px-5">
      {/* card 1 */}
      <div className="w-full md:max-w-[281px] max-w-full min-h-[255px] border border-black bg-white rounded-[20px]">
        <div
          style={{ boxShadow: "6px 2px 16px 0px #88A5BF7A", }}

          className="w-full md:max-w-[281px] max-w-full min-h-[255px] flex flex-col justify-center items-center rounded-[20px]">
          <Image src={handcoin} alt="" />
          <Text className="text-[14px] font-normal text-black mb-[10px]">Prefrontal</Text>
          <Text className="text-[14px] font-bold ">
            AI Sales Closer
          </Text>
        </div>
      </div>

      <div className="w-full md:max-w-[281px] max-w-full">
        {/* card 2 */}
        <div className="w-full md:max-w-[281px] max-w-full mb-[25px] h-[115px] border border-black bg-white rounded-[20px]">
          <div
            style={{ boxShadow: "6px 2px 16px 0px #88A5BF7A" }}
            className="w-full md:max-w-[281px] max-w-full min-h-[115px] flex flex-col justify-center items-center rounded-[20px]">
            <Image src={threeusers} alt="" />
            <Text className="text-[14px] font-normal text-black mb-[10px]">Broca</Text>
            <Text className="text-[14px] font-bold ">
              AI Marketing & Engagement
            </Text>
          </div>
        </div>
        {/* card 3 */}
        <div className="w-full md:max-w-[281px] max-w-full min-h-[115px] border border-black bg-white rounded-[20px]">
          <div
            style={{ boxShadow: "6px 2px 16px 0px #88A5BF7A" }}
            className="w-full md:max-w-[281px] max-w-full min-h-[115px] flex flex-col justify-center items-center rounded-[20px]">
            <Image src={chart} alt="" />
            <Text className="text-[14px] font-normal text-black mb-[10px]">
              Occipital
            </Text>
            <Text className="text-[14px] font-bold ">
              AI Analytics Reporter
            </Text>
          </div>
        </div>
      </div>
      <div className="w-full md:max-w-[281px] max-w-full">
        {/* card 4 */}
        <div className="w-full md:max-w-[281px] max-w-full mb-[25px] h-[115px] border border-black bg-white rounded-[20px]">
          <div
            style={{ boxShadow: "6px 2px 16px 0px #88A5BF7A" }}
            className="w-full md:max-w-[281px] max-w-full min-h-[115px] flex flex-col justify-center items-center rounded-[20px]">
            <Image src={addressbook} alt="" />
            <Text className="text-[14px] font-normal text-black mb-[10px]">
              Hippocampus
            </Text>
            <Text className="text-[14px] font-bold ">
              AI Customer Service Agent
            </Text>
          </div>
        </div>
        {/* card 5 */}
        <div className="w-full md:max-w-[281px] max-w-full  h-[115px] border border-black bg-white rounded-[20px]">
          <div
            style={{ boxShadow: "6px 2px 16px 0px #88A5BF7A" }}
            className="w-full md:max-w-[281px] max-w-full min-h-[115px] flex flex-col justify-center items-center rounded-[20px]">
            <Image src={headcircuit} alt="" />
            <Text className="text-[14px] font-normal text-black mb-[10px]">
              Cerebellum
            </Text>
            <Text className="text-[14px] font-bold ">
              AI IT Support Agent
            </Text>
          </div>
        </div>
      </div>
      {/* card 6 */}
      <div className="w-full md:max-w-[281px] max-w-full min-h-[255px] border border-black bg-white rounded-[20px]">
        <div
          style={{ boxShadow: "6px 2px 16px 0px #88A5BF7A" }}
          className="w-full md:max-w-[281px] max-w-full min-h-[255px] flex flex-col justify-center items-center rounded-[20px]">
          <Image src={headset} alt="" />
          <Text className="text-[14px] font-normal text-black mb-[10px]">Amygdala</Text>
          <Text className="text-[14px] font-bold ">
            AI Receptionist / Call Filter
          </Text>
        </div>
      </div>
    </div>
  );
};

export default Cards;
