import React from "react";
import Image from "next/image";

import videopng from "@/public/images/home/videobrain.png";

import Text from "@/components/ui/Text";
import Navbar from "@/components/Navbar";
const ThankYouHero = () => {
  return (
    <div
      style={{
        background:
          "linear-gradient(359.63deg, #FFFFFF 0.34%, #8F95BB 12.27%, #1A1A28 22.13%, #1A1A28 51.41%, #1A1A28 81.96%, #1A1A28 99.69%)",
      }}
      className="w-full h-full">
      <div className="w-full h-full flex justify-center items-center flex-col">
        <Navbar />
        <div className="w-full h-full max-w-[1200px] md:mt-[128px] mt-[60px] px-5">
         
          <Text as="h1" className="mb-[70px] text-[#F5F5FA] text-center">
          You’re {" "}
            {/* <span className="bg-gradient-to-r from-[#5F27CD] to-[#40E0D0] via-[#5F27CD] bg-clip-text text-transparent"> */}
              {" "}
              On the List
            {/* </span> */}
          </Text>
          <Text as ="h2" className="text-[#F5F5FA] text-center mb-10 md:mb-[70px] font-normal md:leading-[45px]">
            {/* <span className=" font-bold">
              {" "}
              Kognitiiv.ai
            </span>{" "} */}
          {"We'll"} will notify you when your AI workforce is ready.
             <br className="md:block hidden" /> In the meantime, meet your team
          </Text>
         <Image src={videopng} alt="" width={778} height={422} className="mx-auto mb-[86px]" />
         
        </div>
      </div>
    </div>
  );
};

export default ThankYouHero;
