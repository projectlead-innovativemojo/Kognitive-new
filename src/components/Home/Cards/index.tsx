"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

import Text from "@/components/ui/Text";
import { CardSpotlight } from "@/components/ui/card-spotlight";

import handcoin from "@/public/images/home/HandCoins.svg";
import threeusers from "@/public/images/home/UsersThree.svg";
import addressbook from "@/public/images/home/AddressBook.svg";
import headcircuit from "@/public/images/home/HeadCircuit.svg";
import headset from "@/public/images/home/Headset.svg";
import usergear from "@/public/images/home/UserGear.svg";

const Cards = () => {
  const [isCardClicked, setIsCardClicked] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Check if the device is mobile or not
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // You can adjust the mobile breakpoint as needed
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Function to toggle visibility of hidden content on mobile
  // Function to toggle visibility of hidden content on mobile
  const handleCardClick = (index: number) => {
    if (isMobile) {
      setIsCardClicked((prevState: number | null) =>
        prevState === index ? null : index
      );
    }
  };

  return (
    <div
      id="our-employees"
      className="w-full h-full max-w-[1260px] mx-auto flex flex-wrap justify-center md:gap-[23px] gap-[32px] mb-[97px] md:mb-[121px] px-5"
    >
      <div>
        {/* card 1 */}
        <CardSpotlight color="rgba(38, 38, 38, 0.5)">
          <div className="flex flex-col gap-[20px] mb-6 min-h-[211px] justify-center items-center relative z-10">
            <div
              className="w-full md:max-w-[281px] max-w-full pt-[17px] border border-black min-h-[211px] justify-center items-center rounded-[20px] group transition-all duration-1000 overflow-hidden"
              onClick={() => handleCardClick(1)} // Only active on mobile
            >
              {/* Visible content */}
              <div className="w-full md:max-w-[281px] max-w-full flex flex-col justify-center items-center rounded-[20px] min-h-[211px]">
                <Image src={handcoin} alt="" />
                <Text className="text-[14px] font-normal text-black mb-[10px]">
                  Prefrontal
                </Text>
                <Text className="text-[14px] font-bold">AI Sales Closer</Text>
                <Text className="text-[14px] font-bold px-10 text-center mt-[14px] mb-[18px]">
                  Cold calls, qualifies leads, closes deals
                </Text>
              </div>

              {/* Hidden content (appears on hover or click) */}
              <div
                className={`${
                  isMobile
                    ? isCardClicked === 1
                      ? "max-h-[500px] opacity-100"
                      : "max-h-0 opacity-0"
                    : "group-hover:max-h-[500px] group-hover:opacity-100"
                } max-h-0 opacity-0 transition-all duration-500`}
              >
                <div className="bg-opacity-70 text-white w-full">
                  <Text className="text-[14px] text-black text-center mb-[24px] px-4">
                    Think of Prefrontal as your unstoppable outbound sales rep.
                    It makes thousands of calls a day, talks to prospects,
                    qualifies them, and books meetings on your calendar.
                    <br />
                    Perfect for industries like IT, insurance, real estate, and
                    consulting.
                  </Text>
                  <Text className="text-[14px] text-[#000]  font-bold text-center mb-[15px] px-4">
                    This is the “decision-maker” of your business brain—focused,
                    relentless, and built to sell.
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </CardSpotlight>

        {/* card 2 */}
        <CardSpotlight color="rgba(38, 38, 38, 0.5)">
          <div className="flex flex-col gap-[20px] min-h-[211px] justify-center items-center relative z-10">
            <div
              className="w-full md:max-w-[281px] max-w-full pt-[17px] min-h-[211px] justify-center items-center  border border-black rounded-[20px] group transition-all duration-1000 overflow-hidden"
              onClick={() => handleCardClick(2)} // Only active on mobile
            >
              {/* Visible content */}
              <div className="w-full md:max-w-[281px] max-w-full  flex flex-col justify-center items-center rounded-[20px] min-h-[211px]">
                <Image src={headset} alt="" />
                <Text className="text-[14px] font-normal text-black mb-[10px]">
                  Thalamus
                </Text>
                <Text className="text-[14px] font-bold">
                  Your AI Receptionist & Call Router
                </Text>
                <Text className="text-[14px] font-bold px-10 text-center mt-[14px] mb-[18px]">
                  Picks up. Routes smartly. Follows up fast
                </Text>
              </div>

              {/* Hidden content (appears on hover or click) */}
              <div
                className={`${
                  isMobile
                    ? isCardClicked === 2
                      ? "max-h-[500px] opacity-100"
                      : "max-h-0 opacity-0"
                    : "group-hover:max-h-[500px] group-hover:opacity-100"
                } max-h-0 opacity-0 transition-all duration-500`}
              >
                <div className="bg-opacity-70 text-white w-full">
                  <Text className="text-[14px] text-black text-center mb-[24px] px-4">
                    Thalamus answers every single call, instantly. It sends
                    callers to the right department (sales, billing, support),
                    and can text them links, forms, or reminders after the call
                    ends.
                    <br />
                    No more missed leads. No more confusion
                  </Text>
                  <Text className="text-[14px] text-[#000]  font-bold text-center mb-[15px] px-4">
                    The brain’s “switchboard.” It makes sure every signal gets
                    to the right place.
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </CardSpotlight>
      </div>

      <div>
        {/* card 3 */}
        <CardSpotlight color="rgba(38, 38, 38, 0.5)">
          <div className="flex flex-col gap-[20px] mb-6 min-h-[211px] justify-center items-center">
            <div
              className="w-full md:max-w-[281px] max-w-full pt-[17px] min-h-[211px] justify-center items-center border border-black relative z-10 rounded-[20px] group transition-all duration-1000 overflow-hidden"
              onClick={() => handleCardClick(3)} // Only active on mobile
            >
              {/* Visible content */}
              <div className="w-full md:max-w-[281px] max-w-full flex flex-col justify-center items-center rounded-[20px] min-h-[211px]">
                <Image src={threeusers} alt="" />
                <Text className="text-[14px] font-normal text-black mb-[10px]">
                  Broca
                </Text>
                <Text className="text-[14px] font-bold px-[35px] text-center">
                  Your AI Marketing & Engagement Coordinator
                </Text>
                <Text className="text-[14px] font-bold px-10 text-center mt-[14px] mb-[18px]">
                  Content manager. Comment responder. Engagement engine.
                </Text>
              </div>

              {/* Hidden content (appears on hover or click) */}
              <div
                className={`${
                  isMobile
                    ? isCardClicked === 3
                      ? "max-h-[500px] opacity-100"
                      : "max-h-0 opacity-0"
                    : "group-hover:max-h-[500px] group-hover:opacity-100"
                } max-h-0 opacity-0 transition-all duration-500`}
              >
                <div className="bg-opacity-70 text-white w-full">
                  <Text className="text-[14px] text-black text-center mb-[24px] px-4">
                    Broca posts on social media, responds to DMs and comments,
                    and follows up with leads from your ads automatically—voice
                    or text. <br />
                    It also watches what works and suggests smarter strategies
                    over time
                  </Text>
                  <Text className="text-[14px] text-[#000]  font-bold text-center mb-[15px] px-4">
                    This is your brand’s “voice.” Friendly, consistent, and made
                    to convert attention into action.
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </CardSpotlight>

        {/* card 4 */}
        <CardSpotlight color="rgba(38, 38, 38, 0.5)">
          <div className="flex flex-col gap-[20px] min-h-[211px] justify-center items-center">
            <div
              className="w-full md:max-w-[281px] max-w-full pt-[17px] min-h-[211px] justify-center items-center border border-black relative z-10 rounded-[20px] group transition-all duration-1000 overflow-hidden"
              onClick={() => handleCardClick(4)} // Only active on mobile
            >
              {/* Visible content */}
              <div className="w-full md:max-w-[281px] max-w-full flex flex-col justify-center items-center rounded-[20px] min-h-[211px]">
                <Image src={usergear} alt="" />
                <Text className="text-[14px] font-normal text-black mb-[10px]">
                  Hippocampus
                </Text>
                <Text className="text-[14px] font-bold px-[35px] text-center">
                  Your AI Training & Knowledge Assistant
                </Text>
                <Text className="text-[14px] font-bold px-10 text-center mt-[14px] mb-[18px]">
                  Onboarding buddy. SOP navigator. FAQ guru
                </Text>
              </div>

              {/* Hidden content (appears on hover or click) */}
              <div
                className={`${
                  isMobile
                    ? isCardClicked === 4
                      ? "max-h-[500px] opacity-100"
                      : "max-h-0 opacity-0"
                    : "group-hover:max-h-[500px] group-hover:opacity-100"
                } max-h-0 opacity-0 transition-all duration-500`}
              >
                <div className="bg-opacity-70 text-white w-full">
                  <Text className="text-[14px] text-black text-center mb-[24px] px-4">
                    Need to train a new hire or answer customer questions 24/7?
                    Hippocampus can walk people through your processes, dig into
                    your internal knowledge base (Notion, wikis, SOPs), and even
                    train new staff or clients.
                  </Text>
                  <Text className="text-[14px] text-[#000]  font-bold text-center mb-[15px] px-4">
                    The {"“memory”"} center. It holds everything and delivers
                    answers instantly
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </CardSpotlight>
      </div>

      <div className="w-full md:max-w-[281px] max-w-full">
        {/* card 5 */}
        <CardSpotlight color="rgba(38, 38, 38, 0.5)">
          <div className="flex flex-col gap-[20px] mb-6 min-h-[211px] justify-center items-center">
            <div
              className="w-full md:max-w-[281px] max-w-full pt-[17px] min-h-[211px] justify-center items-center  border border-black relative z-10 rounded-[20px] group transition-all duration-1000 overflow-hidden"
              onClick={() => handleCardClick(5)} // Only active on mobile
            >
              {/* Visible content */}
              <div className="w-full md:max-w-[281px] max-w-full flex flex-col justify-center items-center rounded-[20px] min-h-[211px]">
                <Image src={addressbook} alt="" />
                <Text className="text-[14px] font-normal text-black mb-[10px]">
                  Cerebellum
                </Text>
                <Text className="text-[14px] font-bold px-[35px] text-center">
                  Your AI Operations Coordinator
                </Text>
                <Text className="text-[14px] font-bold px-10 text-center mt-[14px] mb-[18px]">
                  Scheduler. Reminder-sender. Logistics hero.
                </Text>
              </div>

              {/* Hidden content (appears on hover or click) */}
              <div
                className={`${
                  isMobile
                    ? isCardClicked === 5
                      ? "max-h-[500px] opacity-100"
                      : "max-h-0 opacity-0"
                    : "group-hover:max-h-[500px] group-hover:opacity-100"
                } max-h-0 opacity-0 transition-all duration-500`}
              >
                <div className="bg-opacity-70 text-white w-full">
                  <Text className="text-[14px] text-black text-center mb-[24px] px-4">
                    Cerebellum keeps your business running smoothly. It books
                    appointments, sends reminders and confirmations, updates
                    your field team, and tracks service documents without
                    missing a beat.
                  </Text>
                  <Text className="text-[14px] text-[#000]  font-bold text-center mb-[15px] px-4">
                    This is your {"“muscle memory”"}—quiet, precise, and always
                    on time
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </CardSpotlight>

        {/* card 6 */}
        <CardSpotlight color="rgba(38, 38, 38, 0.5)">
          <div className="flex flex-col gap-[20px] min-h-[211px] justify-center items-center">
            <div
              className="w-full md:max-w-[281px] max-w-full pt-[17px] min-h-[211px] justify-center items-center border border-black relative z-10 rounded-[20px] group transition-all duration-1000 overflow-hidden"
              onClick={() => handleCardClick(6)} // Only active on mobile
            >
              {/* Visible content */}
              <div className="w-full md:max-w-[281px] max-w-full flex flex-col justify-center items-center rounded-[20px] min-h-[211px]">
                <Image src={headcircuit} alt="" />
                <Text className="text-[14px] font-normal text-black mb-[10px]">
                  Occipital
                </Text>
                <Text className="text-[14px] font-bold px-[35px] text-center">
                  Your AI IT Support Specialist
                </Text>
                <Text className="text-[14px] font-bold px-10 text-center mt-[14px] mb-[18px]">
                  Tech troubleshooter. Helpdesk helper.
                </Text>
              </div>

              {/* Hidden content (appears on hover or click) */}
              <div
                className={`${
                  isMobile
                    ? isCardClicked === 6
                      ? "max-h-[500px] opacity-100"
                      : "max-h-0 opacity-0"
                    : "group-hover:max-h-[500px] group-hover:opacity-100"
                } max-h-0 opacity-0 transition-all duration-500`}
              >
                <div className="bg-opacity-70 text-white w-full">
                  <Text className="text-[14px] text-black text-center mb-[24px] px-4">
                    Occipital is your first line of IT defense. It handles basic
                    tech problems like WiFi issues, login errors, and password
                    resets. If it can’t fix it, it creates a ticket and follows
                    up for you—automatically.
                  </Text>
                  <Text className="text-[14px] text-[#000]  font-bold text-center mb-[15px] px-4">
                    The {"“vision system.”"} It spots problems fast and keeps
                    your business online
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </CardSpotlight>
      </div>
    </div>
  );
};

export default Cards;
