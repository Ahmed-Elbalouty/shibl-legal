"use client";
import { useTranslations } from "next-intl";
import { useState, useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import LocalePath from "../LocalePath";

function CommonQuestions() {
  const t = useTranslations();
  const [isOpen, setIsOpen] = useState<boolean[]>([false, false, false, false]);

  const toggleAccordion = (index: number) => {
    setIsOpen((prevState) =>
      prevState.map((item, i) => (i === index ? !item : item)),
    );
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section
      className="flex w-full justify-center p-[24px] py-10 md:p-[48px]"
      data-aos="fade-right"
    >
      <div className="flex w-[90%] flex-col items-center rounded-[40px] bg-[url('@/assets/images/why-us.png')] bg-cover bg-center px-6 py-10 text-center md:px-[72px]">
        {/* Title and Button */}
        <div className="mb-8 flex w-full items-center justify-between">
          <h1 className="text-2xl font-bold text-white">{t("FAQ.title")}</h1>
          <LocalePath href="/faq">
            <button className="mt-1 rounded-full border-2 border-primary px-6 py-2 text-primary hover:bg-primary hover:text-white">
              {t("FAQ.viewAllButton")}
            </button>
          </LocalePath>
        </div>

        {/* Questions */}
        <div className="w-full">
          {[...Array(4)].map((_, index) => (
            <div key={index}>
              <div
                className="flex cursor-pointer items-center justify-between py-2"
                onClick={() => toggleAccordion(index)}
              >
                <p className="text-lg text-white">
                  {t(`FAQ.question${index + 1}`)}
                </p>
                <span className="text-2xl text-white">
                  {isOpen[index] ? "-" : "+"}
                </span>
              </div>

              {/* Answer */}
              {isOpen[index] && (
                <div
                  data-aos="fade-in"
                  data-aos-duration="500"
                  className="pt-2 text-[#B3B3B3] transition-all duration-500 ease-in-out"
                  style={{
                    maxHeight: isOpen[index] ? "500px" : "0",
                    overflow: "hidden",
                  }}
                >
                  <p>{t(`FAQ.answer${index + 1}`)}</p>
                </div>
              )}

              {index < 4 && (
                <div className="mt-4 border-t border-gray-300 border-opacity-30"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CommonQuestions;
