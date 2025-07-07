import React from "react";

// import Image from "next/image";
import Text from "../ui/Text";
import BrainAnimation from "./BrainAnimation";
import FeedbackForm from "./form";

const Signup = () => {
  return (
    <div className="w-full h-full bg-white flex justify-center items-center px-4 md:mt-[80px]">
      <div className="w-full h-full bg-white max-w-[1260px] flex md:flex-row flex-col justify-between items-start md:gap-[50px]">
        <div className="w-full">
          {/* <Image
            src="/images/animation.png"
            alt="Signup"
            width={476}
            height={214}
            className="w-full max-w-[588px]"
          /> */}
          <BrainAnimation />
          <Text className="text-center text-[#0F0F1A] text-[40px] font-semibold">
            Kognitiiv.ai
          </Text>
        </div>
       <FeedbackForm/>
      </div>
    </div>
  );
};

export default Signup;
