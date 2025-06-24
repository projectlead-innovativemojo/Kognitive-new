import React from "react";

import Image from "next/image";

import Text from "../ui/Text";

const Signup = () => {
  return (
    <div className="w-full h-full bg-white flex justify-center items-center px-4 mt-[80px]">
      <div className="w-full h-full bg-white max-w-[1260px] flex md:flex-row flex-col justify-between items-start">
        <div>
          <Image
            src="/images/animation.png"
            alt="Signup"
            width={476}
            height={214}
            className="w-full max-w-[588px]"
          />
          <Text className="text-transparent text-center text-[#0F0F1A] text-[40px] font-semibold">
            Kognitiiv.ai
          </Text>
        </div>
        <div className="w-full md:max-w-[514px] max-w-full">
          <form className="w-full max-w-full md:max-w-[514px] p-10 shadow-[0px_7px_29px_0px_#64646F33] bg-white rounded-[12px] mt-[60px] mb-[268px]">
            <div className="flex flex-col gap-[24px] md:flex-row mb-[30px]">
              <div className="p-[2px] rounded-[12px] border border-[#0F0F1A]">
                <input
                  type="text"
                  placeholder="Name"
                  className="px-[10px] py-[10px] w-full md:w-[150px] rounded-[10px] text-black outline-none bg-white border-none"
                />
              </div>
              <div className="p-[2px] rounded-[12px] border border-[#0F0F1A]">
                <input
                  type="text"
                  placeholder="Last Name"
                  className="px-[10px] py-[10px] w-full md:w-[260px] rounded-[10px] text-black outline-none bg-white border-none"
                />
              </div>
            </div>

            <div className="p-[2px] rounded-[12px] border border-[#0F0F1A] mb-[30px]">
              <input
                type="email"
                placeholder="Email"
                className="px-[10px] py-[10px] w-full rounded-[10px] text-black outline-none bg-white border-none"
              />
            </div>

            <div className="p-[2px] rounded-[12px] border border-[#0F0F1A] mb-[30px]">
              <input
                type="text"
                placeholder="Company"
                className="px-[10px] py-[10px] w-full rounded-[10px] text-black outline-none bg-white border-none"
              />
            </div>

            <div className="p-[2px] rounded-[12px] border border-[#0F0F1A] mb-[70px]">
              <select
                className="px-[10px] py-[10px] w-full rounded-[10px] font-rubik text-[#0F0F1A] bg-white outline-none border-none"
                
              >
                <option disabled value="" className="text-[#0F0F1A] bg-white font-rubik">
                  What is your interest?
                </option>
                <option value="industry2" className="text-[#0F0F1A] bg-white font-rubik">
                  Select Industry 2
                </option>
              </select>
            </div>

            <div className="rounded-[12px]">
              <button
                className="w-full h-[50px] rounded-[10px] bg-[#0F0F1A] text-white text-[18px] primary-shadow"
              >
                Join the Waitlist
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
