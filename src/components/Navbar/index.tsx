"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Button from "../ui/Button";
import { cn } from "@/lib/utils";
import Drawer from "../ui/Drawer";
import { useRouter } from "next/navigation";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const toggleMobileMenu = () => setMobileMenuOpen((s) => !s);

  // (Optional) remove this body scroll logic if you like; Drawer already handles it.
  useEffect(() => {
    if (mobileMenuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // const closeAndScroll = (id: string) => (e: React.MouseEvent) => {
  //   e.preventDefault();
  //   setMobileMenuOpen(false);
  //   document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  // };

  return (
    <header className="md:h-[150px] w-full mx-auto flex justify-center items-center px-4">
      <div className="w-full max-w-[1260px] mx-auto mt=[51px]">
        <div className="rounded-[24px] p-[2px] overflow-hidden md:border md:border-[#0F0F1A] max-w-[1260px]">
          <div className="md:shadow-lg">
            <div className="w-full h-full md:bg-[#0F0F1A] inner-content flex items-center justify-between mx-auto py-[20px] md:px-6 md:py-[20px] md:primary-shadow">
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
                    href="/#our-employees"
                    className={cn(
                      "text-[#F5F5FA] text-[18px] cursor-pointer",
                      pathname === "/" && ""
                    )}
                    onClick={(e) => {
                      e.preventDefault();
                      router.push("/#our-employees");
                    }}>
                    Our Employees
                  </Link>
                </nav>

                <div className="p-[2px] rounded-[12px] border border-[#0F0F1A] md:inline-block hidden primary-shadow ">
                  <Button
                    className="bg-transparent text-[#F5F5FA] border border-white text-[18px] w-[180px] h-[50px] rounded-[13px] cursor-pointer"
                     onClick={(e) => {
                      e.preventDefault();
                      router.push("/#feedback-form");
                    }}>
                    Join the Waitlist
                  </Button>
                </div>
              </div>

              {/* Mobile Menu Button */}
              <div className="flex items-center md:hidden">
                <button
                  className="md:hidden"
                  onClick={toggleMobileMenu}
                  aria-label="Toggle menu">
                  {mobileMenuOpen ? (
                    <X color="#fff" size={24} className="relative z-[100000]" />
                  ) : (
                    <Menu color="#fff" size={24} />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* GSAP Drawer for mobile menu */}
      <Drawer isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)}>
        <div className="w-full px-8">
          <div className="bg-white text-primary text-[18px] w-full h-[50px] rounded-[13px] cursor-pointer flex justify-center items-center">
            <Link
              href="/#our-employees"
              className="text-[18px]"
              onClick={()=>{
                setMobileMenuOpen(false);
              }}
              // onClick={closeAndScroll("reviews")}
            >
              Our Employees
            </Link>
          </div>

          <div className="p-[2px] rounded-[12px] border border-[#0F0F1A] primary-shadow mt-4">
            {/* <Link href="/#feedback-form"> */}
            <Button
              className="bg-white text-primary text-[18px] w-full h-[50px] rounded-[13px] cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                setMobileMenuOpen(false);
                router.push("/#feedback-form");
              }}>
              Join the Waitlist
            </Button>
            {/* </Link> */}
          </div>
        </div>
      </Drawer>
    </header>
  );
}
