"use client";
import { useState, useEffect, useRef } from "react";
import { useLocale, useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import LangSwitcher from "../LangSwitcher";
import Image from "next/image";
import navlogo from "@/public/assets/images/navlogo.png";
import LocalePath from "../LocalePath";
import { TimesIcon } from "@/components/Icons";
import AOS from "aos";
import "aos/dist/aos.css";

function Navbar() {
  const t = useTranslations();
  const pathname = usePathname();
  const locale = useLocale();

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
    AOS.init({ duration: 100, easing: "ease-in-out" });
  }, []);

  useEffect(() => {
    const handleClose = (e: MouseEvent | TouchEvent) => {
      if (drawerRef.current && !drawerRef.current.contains(e.target as Node)) {
        setDrawerOpen(false);
      }
    };

    const handleResize = () => {
      if (drawerOpen) setDrawerOpen(false);
    };

    const handleScroll = (e: Event) => handleClose(e as MouseEvent);
    const handleMouseDown = (e: MouseEvent) => handleClose(e);
    const handleTouchStart = (e: TouchEvent) => handleClose(e);

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("resize", handleResize);
    };
  }, [drawerOpen]);

  const toggleDrawer = () => setDrawerOpen(!drawerOpen);
  const closeDrawer = () => setDrawerOpen(false);

  const normalizedPath = pathname.replace(`/${locale}`, "") || "/";

  return (
    <nav className="px-mobileSecPadding fixed left-0 top-0 z-50 flex w-full items-center justify-between bg-[#071c31b6] py-3 text-white">
      <div className="flex items-center gap-4">
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
      <ul
        className={`hidden items-center justify-between gap-5 text-base ${
          locale === "ar" ? "font-medium" : "font-semibold"
        } lg:flex`}
      >
        {navLinks.map((link) => {
          const href = link === "home" ? "/" : `/${link}`;
          const isActive = normalizedPath === href;

          return (
            <li
              key={link}
              className={`transition-all duration-200 hover:text-primary ${
                isActive ? "text-primary" : ""
              }`}
            >
              <LocalePath href={href}>{t(`NAV.${link}`)}</LocalePath>
            </li>
          );
        })}
      </ul>

      <LangSwitcher className="text-white" />

      {/* Drawer */}
      {drawerOpen && (
        <div className="fixed left-0 top-0 z-50 h-full w-full bg-black/30">
          <div
            ref={drawerRef}
            data-aos={locale === "ar" ? "fade-left" : "fade-right"}
            className="relative flex h-full w-[75%] flex-col gap-4 bg-white p-6 shadow-md sm:w-[60%] md:w-[40%]"
          >
            <div className="mb-2 flex items-center justify-between">
              <LocalePath href="/">
                <Image src={navlogo} alt="NavLogo" className="size-[40px]" />
              </LocalePath>
              <button onClick={closeDrawer}>
                <TimesIcon className="size-[14px] text-black" />
              </button>
            </div>

            {/* Drawer Links */}
            <ul
              className={`flex flex-col gap-4 text-base ${
                locale === "ar" ? "font-medium" : "font-semibold"
              } text-black`}
            >
              {navLinks.map((link, index) => {
                const href = link === "home" ? "/" : `/${link}`;
                const isActive = normalizedPath === href;

                return (
                  <li
                    key={link}
                    onClick={closeDrawer}
                    className={`${
                      index !== 0 ? "border-t pt-2" : ""
                    } transition-colors duration-200 hover:text-primary ${
                      isActive ? "text-primary" : ""
                    }`}
                  >
                    <LocalePath href={href}>{t(`NAV.${link}`)}</LocalePath>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
