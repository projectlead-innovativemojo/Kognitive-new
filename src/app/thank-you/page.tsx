import ThankYouHero from "@/components/ThankYou/Hero";
import Cards from "@/components/Home/Cards";
import Text from "@/components/ui/Text";
import Link from "next/link";
import Image from "next/image";
import insta from "@/public/images/home/insta.png";

const ThankYou = () => {
  return (
    <>
      <ThankYouHero />
      <Cards />
      <div className="w-full max-w-[650px] mx-auto px-5">
        <Text className="text-[#0F0F1A] text-[24px] font-medium text-center mb-[61px]">
          We’ll be showcasing how each one works on social media
          {/* <span className="bg-gradient-to-r from-[#5F27CD] to-[#40E0D0] via-[#5F27CD] bg-clip-text text-transparent"> */}
            {" "}
            follow along and stay ahead of the curve
          {/* </span> */}
        </Text>
        <div className="flex justify-center items-center gap-[13px] mb-[77px]">
         
          <Link href="https://www.instagram.com/kognitiiv.ai?igsh=MWxwM3NqOWJpZTl2dA==">
            <Image src={insta} alt="" width={30} height={30} />
          </Link>
         
        </div>
      </div>
      <div
        style={{
          background:
            "#000000",
        }}
        className="w-full h-[2px] md:mb-[50px] mb-[40px]"></div>
    </>
  );
};

export default ThankYou;
