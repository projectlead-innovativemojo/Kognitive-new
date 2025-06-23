"use client";

import Image from "next/image";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Button from "../ui/Button";

import { cn } from "@/lib/utils";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <header className="md:h-[150px] w-full mx-auto flex justify-center items-center navbar-gradient px-4">
      <div className="w-full max-w-[1260px] mx-auto mt-[51px]">
        <div className=" rounded-[24px] p-[2px] overflow-hidden bg-gradient-to-b from-[#5F27CD] to-[#00CEC9] max-w-[1260px]">
          <div className="w-full h-full bg-white rounded-[22px] flex items-center justify-between  mx-auto px-6 py-[20px] md:py-[20px] primary-shadow">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/Logo.svg"
                alt=""
                width={63}
                height={60}
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="flex items-center gap-[128px]">
              <nav className="hidden md:flex items-center space-x-[25px]">
                <Link
                  href="/"
                  className={cn(
                    "text-primary text-[18px] ",
                    pathname === "/" && ""
                  )}
                >
                  The Problem
                </Link>
                <Link
                  href="/#about"
                  className={cn(
                    "text-primary text-[18px]",
                    pathname === "/" &&
                      "text-transparent bg-clip-text bg-gradient-to-r from-[#5F27CD] to-[#40E0D0]"
                  )}
                >
                  The Kognitiiv.ai Solution
                </Link>
                <Link
                  href="/#capabilities"
                  className={cn(
                    "text-primary text-[18px]",
                    pathname === "/" && ""
                  )}
                >
                  How It Works
                </Link>
              </nav>

              <div className="p-[2px] rounded-[12px] bg-gradient-to-b from-[#5F27CD] to-[#00CEC9] md:inline-block hidden primary-shadow ">
                <Button className="bg-white text-primary text-[18px] w-[180px] h-[50px] rounded-[10px]">
                  <Link href="/#contact-us">Join the Waitlist</Link>
                </Button>
              </div>
            </div>

            <div className="flex items-center md:hidden">
              {/* Mobile Menu Button */}
              <button
                className="md:hidden "
                onClick={toggleMobileMenu}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <X color="#56AD37" size={24} />
                ) : (
                  <Menu color="#56AD37" size={24} />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <>
            {/* Overlay to cover the whole page */}
            <div className="fixed inset-0 bg-white z-[9999]" />
            <div className="fixed inset-0 md:hidden bg-white border-t border-gray-100 py-4 h-screen mt-0 z-[10000] overflow-y-auto">
              <div className="sm:container mx-auto px-4 flex flex-col space-y-4">
                <div className="flex justify-between items-center">
                  <Link href="/" className="flex items-center font-rubik">
                    <Image
                      src="/images/Logo.svg"
                      alt="logo"
                      width={60}
                      height={60}
                      priority
                    />
                  </Link>
                  <button
                    className="md:hidden "
                    onClick={toggleMobileMenu}
                    aria-label="Toggle menu"
                  >
                    {mobileMenuOpen ? (
                      <X color="#56AD37" size={24} />
                    ) : (
                      <Menu color="#56AD37" size={24} />
                    )}
                  </button>
                </div>
                
                <Link
                  href="/"
                  className="text-primary py-2 mt-6 font-rubik"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  The Problem
                </Link>
                <Link
                  href="/"
                  className="text-primary py-2 font-rubik"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  The Kognitiiv.ai Solution
                </Link>
                <Link
                  href="/"
                  className="text-primary py-2 font-rubik"
                  onClick={() => setMobileMenuOpen(false)}
                >
                How It Works
                </Link>
                <div className="p-[2px] rounded-[12px] bg-gradient-to-b from-[#5F27CD] to-[#00CEC9] primary-shadow ">
                <Button className="bg-white text-primary text-[18px] w-full h-[50px] rounded-[10px]">
                  <Link href="/">Join the Waitlist</Link>
                </Button>
              </div>
              </div>
            </div>
          </>
        )}
      </div>
    </header>
  );
}
