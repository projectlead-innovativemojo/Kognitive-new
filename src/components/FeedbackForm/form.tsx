"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

import Text from "@/components/ui/Text";

import feedbackbg from "@/public/images/home/feedbackbg.svg";

import IndustryDropdown from "../ui/select";

const FeedbackForm = () => {
  const router = useRouter();
  const industryOptions = [
    {
      value: "disabled",
      label: "What is your interest?",
      bullets: [] as string[],
    },
    {
      value: "cybersecurity",
      label: "Cybersecurity & IT Services",
      bullets: [] as string[],
    },
    {
      value: "healthcare",
      label: "Medical Offices & Healthcare Clinics",
      bullets: [] as string[],
    },
    {
      value: "real-estate",
      label: "Real Estate & Property Management",
      bullets: [] as string[],
    },
    {
      value: "legal",
      label: "Law Firms & Legal Services",
      bullets: [] as string[],
    },
    {
      value: "home-services",
      label: "Home Services (HVAC, Plumbing, Landscaping, etc.)",
      bullets: [] as string[],
    },
    { value: "other", label: "Other", bullets: [] as string[] },
  ];

  const [form, setForm] = useState({
    name: "",
    lastName: "",
    email: "",
    company: "",
    interest: "",
    message: "",
  });
  const [selectedIndustry, setSelectedIndustry] = useState(industryOptions[0]);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  type Option = { value: string; label: string; bullets: string[] };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleIndustryChange = (opt: Option) => {
    setSelectedIndustry(opt);
    const bulletsText = opt.bullets.length
      ? "\n" + opt.bullets.map(() => "• ").join("\n")
      : "";
    setForm((prev) => ({ ...prev, interest: opt.label + bulletsText }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    setSuccess(false);
    try {
      const res = await fetch("/api/feedbackform", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok && !data.error) {
        setSuccess(true);
        setForm({
          name: "",
          lastName: "",
          email: "",
          company: "",
          interest: "",
          message: "",
        });
        router.push("/thank-you");
      } else {
        setError(data.error || "Something went wrong");
      }
    } catch (err) {
      setError("Server error");
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      id="feedback-form"
      className="w-full md:max-w-[723px] max-w-full relative mx-auto mt-[121px] md:mb-[78px] mb-[101px]">
      <Image src={feedbackbg} alt="" className="absolute top-[33%] left-0" />
      <div className="absolute w-full h-full blur-[500px] bottom-0"></div>
      <div className="relative z-10 mx-auto flex flex-col justify-center items-center px-5">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-full md:max-w-[677px] relative z-10 py-10 px-5 md:p-10 shadow-[0px_7px_29px_0px_#64646F33] bg-white rounded-[12px]">
          <div className="flex flex-col gap-[32px] md:gap-[12px] md:flex-row mb-[30px]">
            <div className="w-full">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={form.name}
                onChange={handleChange}
                className="px-[10px] py-[10px] w-full h-[50px] rounded-[10px] text-black border border-[#0F0F1A] outline-none bg-white"
                required
              />
            </div>
            <div className="w-full">
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={form.lastName}
                onChange={handleChange}
                className="px-[10px] py-[10px] w-full h-[50px] rounded-[10px] text-black border border-[#0F0F1A] outline-none bg-white"
                required
              />
            </div>
          </div>
          <div className="w-full mb-[30px]">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className="px-[10px] py-[10px] w-full rounded-[10px] border border-[#0F0F1A] h-[50px] text-black outline-none bg-white"
              required
            />
          </div>
          <div className="w-full mb-[30px]">
            <input
              type="text"
              name="company"
              placeholder="Company"
              value={form.company}
              onChange={handleChange}
              className="px-[10px] py-[10px] w-full rounded-[10px] text-black outline-none bg-white border border-[#0F0F1A] h-[50px]"
              required
            />
          </div>
          {/* Native select with first option disabled */}
          {/* <div className="border border-[#0F0F1A] h-[50px] mb-[30px] rounded-[10px] bg-white w-full max-w-[100vw] relative overflow-hidden">
            <select
              value={selectedIndustry.value}
              onChange={handleIndustryChange}
              className="text-[16px] rounded-[14px] w-full text-left bg-white outline-none h-full text-[#0F0F1A]">
              {industryOptions.map((option, index) => (
                <option
                  key={option.value}
                  value={option.value}
                  disabled={index === 0}
                  className={
                    index === 0
                      ? "text-gray-400 text-[16px] text-wrap"
                      : "text-black text-[16px]"
                  }>
                  {index === 0 ? option.label : `${index}- ${option.label}`}
                </option>
              ))}
            </select>
          </div> */}
          <div className="mb-[30px]">
            <IndustryDropdown
              options={industryOptions}
              value={
                selectedIndustry?.value === "disabled" ? null : selectedIndustry
              }
              onChange={handleIndustryChange}
              placeholder={industryOptions[0].label}
            />
          </div>
          {success && (
            <div className="text-green-600 my-2 text-center">
              Thank you for your feedback!
            </div>
          )}
          {error && <div className="text-red-600 mb-2">{error}</div>}
          <div className="rounded-[12px]">
            <button
              type="submit"
              className="w-full h-[50px] rounded-[10px] bg-[#0F0F1A] text-white text-[18px] primary-shadow cursor-pointer"
              disabled={submitting}>
              {submitting ? "Submitting..." : "Join the Waitlist"}
            </button>
          </div>
        </form>
        <Text className="text-[23px] font-medium text-[#0F0F1A] mt-[75px] px-5 text-center">
          First 100 on the waitlist get early access + bonus features
        </Text>
      </div>
    </div>
  );
};

export default FeedbackForm;
