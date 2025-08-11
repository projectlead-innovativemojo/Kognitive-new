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
    <header className="md:h-[150px] w-full mx-auto flex justify-center items-center px-4">
      <div className="w-full max-w-[1260px] mx-auto mt-[51px]">
        <div className=" rounded-[24px] p-[2px] overflow-hidden border border-[#0F0F1A] max-w-[1260px]">
        <div className="shadow-lg">
          <div className="w-full h-full bg-[#0F0F1A] inner-content  flex items-center justify-between  mx-auto px-6 py-[20px] md:py-[20px] primary-shadow">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/Logo.svg"
                alt=""
                width={193}
                height={60}
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="flex items-center gap-[128px]">
              <nav className="hidden md:flex items-center space-x-[25px]">
               
                <Link
                  href="#reviews"
                  className={cn(
                    "text-[#F5F5FA] text-[18px] cursor-pointer",
                    pathname === "/" && ""
                  )}
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('reviews')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Our Employees
                </Link>
              </nav>

              <div className="p-[2px] rounded-[12px] border border-[#0F0F1A] md:inline-block hidden primary-shadow ">
                <Button 
                  className="bg-transparent text-[#F5F5FA] border border-white text-[18px] w-[180px] h-[50px] rounded-[10px] cursor-pointer"
                  onClick={() => {
                    document.getElementById('feedback-form')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Join the Waitlist
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
                  <X color="#fff" size={24} />
                ) : (
                  <Menu color="#fff" size={24} />
                )}
              </button>
            </div>
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
                      <X color="#0F0F1A" size={24} />
                    ) : (
                      <Menu color="#0F0F1A" size={24} />
                    )}
                  </button>
                </div>
                
                
                <Link
                  href="#reviews"
                  className="text-[#0F0F1A] py-2 font-rubik cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    setMobileMenuOpen(false);
                    document.getElementById('reviews')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                Our Employees
                </Link>
                <div className="p-[2px] rounded-[12px] border border-[#0F0F1A] primary-shadow ">
                <Button 
                  className="bg-white text-primary text-[18px] w-full h-[50px] rounded-[10px] cursor-pointer"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    document.getElementById('feedback-form')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Join the Waitlist
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
