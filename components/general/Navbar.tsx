"use client";

import { useState, useEffect, useRef } from "react";
import { useLocale, useTranslations } from "next-intl";
import LangSwitcher from "../LangSwitcher";
import Image from "next/image";
import navlogo from "@/public/assets/images/navlogo.png";
import LocalePath from "../LocalePath";
import { TimesIcon } from "@/components/Icons";
import AOS from "aos";
import "aos/dist/aos.css";

function Navbar() {
  const t = useTranslations();
  const navLinks: string[] = [
    "home",
    "about",
    "faq",
    "services-section",
    "contact",
  ];
  const [drawerOpen, setDrawerOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    AOS.init({ duration: 300, easing: "ease-in-out" });
  }, []);

  useEffect(() => {
    const handleClose = (e: MouseEvent | TouchEvent) => {
      // Checking if the click happened outside of the drawer
      if (drawerRef.current && !drawerRef.current.contains(e.target as Node)) {
        setDrawerOpen(false);
      }
    };

    const handleResize = () => {
      if (drawerOpen) setDrawerOpen(false); // Close the drawer on window resize
    };

    // Explicitly casting events
    const handleScroll = (e: Event) => handleClose(e as MouseEvent);
    const handleMouseDown = (e: MouseEvent) => handleClose(e);
    const handleTouchStart = (e: TouchEvent) => handleClose(e);

    window.addEventListener("scroll", handleScroll); // Listen to scroll event
    document.addEventListener("mousedown", handleMouseDown); // Listen to clicks
    document.addEventListener("touchstart", handleTouchStart); // Listen to touch events
    window.addEventListener("resize", handleResize); // Listen to resize events

    return () => {
      // Cleanup event listeners when component unmounts
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("resize", handleResize);
    };
  }, [drawerOpen]);

  const toggleDrawer = () => setDrawerOpen(!drawerOpen);
  const closeDrawer = () => setDrawerOpen(false);

  const locale = useLocale();

  return (
    <nav className="fixed left-0 top-0 z-50 flex w-full items-center justify-between bg-[#071c31b6] py-3 pl-[24px] pr-[24px] text-white">
      <div className="flex items-center gap-4">
        {/* Menu Icon */}
        <span
          onClick={toggleDrawer}
          className="flex cursor-pointer flex-col gap-[4px] lg:hidden"
        >
          <span className="h-[2px] w-[20px] rounded bg-white"></span>
          <span className="h-[2px] w-[16px] rounded bg-white"></span>
          <span className="h-[2px] w-[12px] rounded bg-white"></span>
        </span>

        <LocalePath href="/">
          <Image src={navlogo} alt="NavLogo" width={45} height={45} />
        </LocalePath>
      </div>

      {/* Desktop links */}
      <ul className="hidden items-center justify-between gap-5 text-[16px] font-[500] lg:flex">
        {navLinks.map((link) => (
          <li
            key={link}
            className="transition-all duration-200 hover:text-primary"
          >
            <LocalePath href={link === "home" ? "/" : `/${link}`}>
              {t(`NAV.${link}`)}
            </LocalePath>
          </li>
        ))}
      </ul>

      <LangSwitcher className="text-white" />
      {drawerOpen && (
        <div className="fixed left-0 top-0 z-50 h-full w-full bg-black/30">
          <div
            ref={drawerRef}
            data-aos={locale === "ar" ? "fade-left" : "fade-right"}
            className="relative flex h-full w-[75%] flex-col gap-4 bg-white p-6 shadow-md sm:w-[60%] md:w-[40%]"
          >
            <div className="mb-2 flex items-center justify-between">
              <LocalePath href="/">
                <Image src={navlogo} alt="NavLogo" width={40} height={40} />
              </LocalePath>
              <button onClick={closeDrawer}>
                <TimesIcon className="h-[14px] w-[14px] text-black" />
              </button>
            </div>

            {/* Drawer Links */}
            <ul className="flex flex-col gap-4 text-[16px] font-[500] text-black">
              {navLinks.map((link, index) => (
                <li
                  key={link}
                  onClick={closeDrawer}
                  className={`${index !== 0 ? "border-t pt-2" : ""} transition-colors duration-200 hover:text-primary`}
                >
                  <LocalePath href={link === "home" ? "/" : `/${link}`}>
                    {t(`NAV.${link}`)}
                  </LocalePath>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
