import React from "react";
import Image from "next/image";
import Link from "next/link";

import Text from "@/components/ui/Text";
import footerlogo from "@/public/images/footerlogo.svg";
import fb from "@/public/images/home/fb.svg";
import linkedin from "@/public/images/home/linkedin.svg";
import insta from "@/public/images/home/insta.svg";
import x from "@/public/images/home/x.svg";

const Footer = () => {
  return (
    <div className="w-full h-full relative">
      <div
        className="w-full absolute bottom-[150px] blur-[200px] max-w-[1440px] h-[98px]"
        style={{
          background:
            "linear-gradient(179.84deg, #5F27CD 0.14%, #00CEC9 82.39%)",
        }}></div>
      <div className="flex justify-between items-start max-w-[762px] mx-auto mb-[100px] relative z-10">
        <Link href="/">
          <Image src={footerlogo} alt="" />
        </Link>
        <div>
          <Text className="font-bold text-[18px] mb-[30px] text-[#0F0F1A]">
            Company
          </Text>
          <Link href="#">
            <Text className="text-[18px] font-normal text-[#0F0F1A] mb-5">
              Company
            </Text>
          </Link>
          <Link href="#">
            <Text className="text-[18px] font-normal text-[#0F0F1A] mb-5">
              Careers
            </Text>
          </Link>
          <Link href="#">
            <Text className="text-[18px] font-normal text-[#0F0F1A] mb-5">
              Contact
            </Text>
          </Link>
          <Link href="#">
            <Text className="text-[18px] font-normal text-[#0F0F1A] mb-5">
              Mareting
            </Text>
          </Link>
        </div>
        <div>
          <Text className="font-bold text-[18px] mb-[30px] text-[#0F0F1A]">
            Resources
          </Text>
          <Link href="#">
            <Text className="text-[18px] font-normal text-[#0F0F1A] mb-5">
              Documentation
            </Text>
          </Link>
          <Link href="#">
            <Text className="text-[18px] font-normal text-[#0F0F1A] mb-5">
              Privacy policy
            </Text>
          </Link>
          <Link href="#">
            <Text className="text-[18px] font-normal text-[#0F0F1A] mb-5">
              Legal
            </Text>
          </Link>
        </div>
      </div>
      <div className="w-full h-[1px] bg-[#0F0F1A]/10 mb-[40px]"></div>
      <div className="w-full max-w-[1260px] flex justify-end items-center gap-[115px] mob:gap-2 mb-[58px] relative z-10">
        <Text className="text-[18px] font-normal text-[#0F0F1A]">
          Built by <span className="text-[#F4D06F]"> Innovative Mojo</span>
        </Text>
        <div className="flex justify-center items-center gap-[13px]">
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
    </div>
  );
};

export default Footer;
