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
          "linear-gradient(359.63deg, #FFFFFF 0.34%, #8F95BB 12.27%, #1A1A28 22.13%, #191923 51.41%, #1A1A28 81.96%, #1A1A28 99.69%)",
      }}
      className="w-full h-full">
      <div className="w-full h-full flex justify-center items-center flex-col">
        <Navbar />
        <div className="w-full h-full max-w-[1200px] md:mt-[128px] mt-[60px]">
          <BackgroundBeamsWithCollision>
          <Text as="h1" className="mb-[50px] text-[#F5F5FA] text-center">
            Hire 6 AI Voice Employees for{" "}
            <span className="bg-gradient-to-r from-[#5F27CD] to-[#40E0D0] via-[#5F27CD] bg-clip-text text-transparent">
              {" "}
              Less Than $1/Hour
            </span>
          </Text>
          <Text as ="h2" className="text-[#F5F5FA] text-center mb-10 md:mb-[140px] font-normal md:leading-[45px]">
            <span className="bg-gradient-to-r from-[#5F27CD] to-[#40E0D0] via-[#5F27CD] bg-clip-text text-transparent font-bold">
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
