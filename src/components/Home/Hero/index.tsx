import React from "react";
import Text from "@/components/ui/Text";
import GoogleGeminiEffectAnimation from "./Google-Gemini-Effect-Animation";
import Navbar from "@/components/Navbar";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
const Hero = () => {
  return (
    <div
      style={{
        background:
          "linear-gradient(359.63deg, #F5F5FA 0.34%, #8F95BB 12.27%, #1A1A28 22.13%, #1A1A28 51.41%, #1A1A28 81.96%, #1A1A28 99.69%)",
      }}
      className="w-full h-full">
      <div className="w-full h-full flex justify-center items-center flex-col">
        <Navbar />
        <div className="w-full h-full max-w-[1200px] md:mt-[128px] mt-[40px] px-4">
          <BackgroundBeamsWithCollision>
          <Text as="h1" className="md:mb-[50px] mb-[80px] text-[#F5F5FA] text-center leading-[45px]">
            Hire 6 AI Voice Employees for{" "}
              {" "}
              Less Than $1/Hour
          </Text>
          <Text as ="h2" className="text-[#F5F5FA] text-center mb-[80px] md:mb-[140px] font-normal md:leading-[45px]">
            <span className=" font-bold">
              {" "}
              Kognitiiv.ai
            </span>{" "}
            gives your business a full team of AI voice agents that handle
            sales, support, marketing, and more <br className="md:block hidden" /> 24/7, no breaks, no burnout
          </Text>
          <Text className="md:text-[24px] text-[20px] font-medium text-[#F5F5FA] text-center">
            Be among the first to access this game-changing workforce. <br className="md:block hidden" />Join the
            waitlist to claim early access + exclusive launch perks
          </Text>
          </BackgroundBeamsWithCollision>
        </div>
          <GoogleGeminiEffectAnimation />
      </div>
    </div>
  );
};

export default Hero;
