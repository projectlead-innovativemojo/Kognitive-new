"use client";
import React, { useState } from "react";
import { Listbox } from "@headlessui/react";
import Image from "next/image";
import Text from "@/components/ui/Text";
import feedbackbg from "@/public/images/home/feedbackbg.svg";

const FeedbackForm = () => {
  const industryOptions = [
    {
      value: "cybersecurity",
      label: "Cybersecurity & IT Services",
      bullets: [
        "These companies already value automation and tech.",
        "They often get <strong>high-volume, low-complexity calls</strong> (password resets, FAQs, onboarding) that are <strong>perfect for AI agents</strong>.",
        "Bonus: They’ll appreciate the technical capabilities like RAG, STT/TTS, and GCP infrastructure.",
      ],
    },
    {
      value: "healthcare",
      label: "Medical Offices & Healthcare Clinics",
      bullets: [
        "Constant calls for <strong>appointments, insurance questions, lab results, follow-ups</strong> — most of which can be automated.",
        "High pressure on admin staff = big opportunity to offload work to a friendly AI receptionist.",
        "HIPAA-safe language in your messaging will be a big win here.",
      ],
    },
    {
      value: "real-estate",
      label: "Real Estate & Property Management",
      bullets: [
        "They deal with <strong>renters, buyers, sellers, maintenance calls</strong>, and a ton of scheduling.",
        "AI agents can handle <strong>after-hours inquiries</strong>, free up leasing agents, and provide 24/7 lead capture.",
        "High churn and high lead cost = your system can help improve conversion.",
      ],
    },
    {
      value: "legal",
      label: "Law Firms & Legal Services",
      bullets: [
        "Many small-to-midsize law firms need help managing intake calls, appointment setting, and follow-ups.",
        "AI can act as a legal intake assistant — especially for firms that don’t want to miss leads.",
        "You can pitch this as a way to filter tire-kickers while keeping real leads warm.",
      ],
    },
    {
      value: "home-services",
      label: "Home Services (HVAC, Plumbing, Landscaping, etc.)",
      bullets: [
        "AI agents can <strong>book appointments, provide availability, and answer common questions</strong> while the team is in the field.",
        "These companies often miss calls or get overwhelmed during peak season.",
        "They typically <strong>don’t have a call center</strong>, so a reliable AI “receptionist” feels like a huge upgrade.",
      ],
    },
    {
      value: "other",
      label: "Other",
      bullets: [],
    },
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

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleIndustryChange = (option: (typeof industryOptions)[0]) => {
    setSelectedIndustry(option);
    // Compose the full option content as plain text with bullets
    const bulletsText =
      option.bullets.length > 0
        ? "\n" +
          option.bullets.map((b) => "• " + b.replace(/<[^>]+>/g, "")).join("\n")
        : "";
    setForm({ ...form, interest: option.label + bulletsText });
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
    <div className="w-full md:max-w-[723px] max-w-full relative mx-auto mt-[121 px] md:mb-[208px] mb-[101px]">
      <Image
        src={feedbackbg}
        alt=""
        className="absolute top-[33%] left-0"
      />
      <div
        style={{
          background:
            "linear-gradient(179.84deg, #5F27CD 0.14%, #00CEC9 82.39%)",
        }}
        className="absolute w-full h-full blur-[500px] bottom-0"
      ></div>
      <div className="relative z-10 mx-auto flex flex-col justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-full md:max-w-[677px] relative z-10 py-10 px-5 md:p-10 shadow-[0px_7px_29px_0px_#64646F33] bg-white rounded-[12px]">
        <div className="flex flex-col gap-[32px] md:gap-[12px] md:flex-row mb-[32px]">
          <div className="w-full max-w-full md:max-w-1/2 element-with-gradient-border-rounded-input ">
          <div className="inner-content-input w-full">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
              className="px-[10px] py-[10px] w-full h-full max-w-full rounded-[13px] text-black outline-none bg-white"
              required
            />
            </div>
          </div>
          <div className="w-full max-w-full md:max-w-1/2 element-with-gradient-border-rounded-input ">
            <div className="inner-content-input w-full">
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={form.lastName}
              onChange={handleChange}
              className="px-[10px] py-[10px] w-full h-full max-w-full rounded-[13px] text-black outline-none bg-white "
              required
            />
            </div>
          </div>
        </div>

        <div className="w-full max-w-full element-with-gradient-border-rounded-input mb-[30px]">
        <div className="inner-content-input w-full">
        <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="px-[10px] py-[10px] w-full rounded-[13px] text-black outline-none bg-white"
            required
          />
          </div>
        </div>

        <div className="w-full max-w-full element-with-gradient-border-rounded-input mb-[30px]">
        <div className="inner-content-input w-full">
          <input
            type="text"
            name="company"
            placeholder="Company"
            value={form.company}
            required
            onChange={handleChange}
            className="px-[10px] py-[10px] w-full rounded-[13px] text-black outline-none bg-white"
          />
          </div>
        </div>
{/*         <div className="w-full max-w-full element-with-gradient-border-rounded-input mb-[30px]">
 */}
        <div className="element-with-gradient-border-rounded-input mb-[30px]">
          <Listbox value={selectedIndustry} onChange={handleIndustryChange}>
            <div className="relative">
              <Listbox.Button className="px-[10px] py-[10px] w-full rounded-[13px] font-rubik text-[#0F0F1A] bg-white outline-none border-none text-left relative">
                {selectedIndustry ? (
                  <span>{selectedIndustry.label}</span>
                ) : (
                  <span className="text-gray-400">What is your industry?</span>
                )}
                {/* Dropdown arrow icon */}
                <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M6 8L10 12L14 8"
                      stroke="#0F0F1A"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </Listbox.Button>
              <Listbox.Options className="absolute z-10 mt-3 w-full bg-white shadow-lg rounded-[10px] overflow-hidden border border-[#0F0F1A]">
                <div className="max-h-60 overflow-auto">
                  {industryOptions.map((option, index) => (
                    <Listbox.Option
                      key={option.value}
                      value={option}
                      className={({ active }) =>
                        `cursor-pointer select-none px-4 py-3 ${
                          active ? "bg-gray-100" : ""
                        }`
                      }>
                      <div>
                        <div className="font-semibold text-[18px] text-[#0F0F1A]">
                          {index + 1}- {option.label}
                        </div>
                        {option.bullets.length > 0 && (
                          <ul className="list-disc pl-5 text-[16px] font-rubik text-[#0F0F1A] mt-0.5 space-y-0.5">
                            {option.bullets.map((b, i) => (
                              <li
                                className="font-rubik"
                                key={i}
                                dangerouslySetInnerHTML={{ __html: b }}
                              />
                            ))}
                          </ul>
                        )}
                      </div>
                    </Listbox.Option>
                  ))}
                </div>
              </Listbox.Options>
            </div>
          </Listbox>
        </div>
        {/* Show industry bullets if selected */}
        {/* {selectedIndustry && selectedIndustry.bullets.length > 0 && (
          <ul className="mb-4 ml-2 text-sm text-[#0F0F1A] list-disc list-inside">
            {selectedIndustry.bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        )} */}

        {success && (
          <div className="text-green-600 my-2 text-center">
            Thank you for your feedback!
          </div>
        )}
        {error && <div className="text-red-600 mb-2">{error}</div>}

        <div className="rounded-[12px]">
          <button
            type="submit"
            className="w-full h-[50px] rounded-[10px] bg-[#0F0F1A] text-white text-[18px] primary-shadow"
            disabled={submitting}>
            {submitting ? "Submitting..." : "Join the Waitlist"}
          </button>
        </div>
      </form>
        <Text className="text-[24px] font-medium text-[#0F0F1A] mt-[120px] px-5 md:text-left text-center">
          First 100 on the waitlist get early access + bonus features
        </Text>
        </div>
    </div>
  );
};

export default FeedbackForm;
