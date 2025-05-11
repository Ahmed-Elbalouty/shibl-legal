"use client";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import LocalePath from "../LocalePath";
import { getFAQData } from "@/services/ApiHandler";

interface FAQ {
  id: number;
  question: string;
  answer: string;
}

interface Banner {
  title: string;
  description: string;
  image: string;
}

function CommonQuestions() {
  const [isOpen, setIsOpen] = useState<boolean[]>([]);
  const [faqs, setFaqs] = useState<FAQ[]>([]);
  const [banner, setBanner] = useState<Banner | null>(null);

  const toggleAccordion = (index: number) => {
    setIsOpen((prev) => prev.map((item, i) => (i === index ? !item : item)));
  };

  useEffect(() => {
    AOS.init();
    const fetchData = async () => {
      try {
        const res = await getFAQData();
        const faqItems = res.data.faq.slice(0, 4); // Show only 4 items
        setFaqs(faqItems);
        setBanner(res.data.banner);
        setIsOpen(faqItems.map(() => false)); // Initialize accordion state
      } catch (err) {
        console.error("Error loading FAQs:", err);
      }
    };
    fetchData();
  }, []);

  return (
    <section
      className="px-mobileSecPadding py-sectionPadding md:px-sectionPadding flex w-full justify-center"
      data-aos="fade-right"
    >
      <div className="flex w-[90%] flex-col bg-[url('@/assets/images/why-us.png')] items-center rounded-[2.5rem] bg-cover bg-center px-6 py-10 text-center md:px-[72px]">
        <div className="mb-8 flex w-full items-center justify-between">
          <h1 className="text-2xl font-bold text-white">
            {banner?.title || "FAQs"}
          </h1>
          <LocalePath href="/faq">
            <button className="mt-1 rounded-full border-2 border-primary px-6 py-2 text-primary hover:bg-primary hover:text-white">
              View All
            </button>
          </LocalePath>
        </div>

        {/* Questions */}
        <div className="w-full">
          {faqs.map((faq, index) => (
            <div key={faq.id}>
              <div
                className="flex cursor-pointer items-center justify-between py-2"
                onClick={() => toggleAccordion(index)}
              >
                <p className="text-lg text-white">{faq.question}</p>
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
                  <p>{faq.answer}</p>
                </div>
              )}

              {index < faqs.length - 1 && (
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
