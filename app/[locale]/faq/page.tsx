"use client";
import { useEffect, useState } from "react";
import PageBg from "../../../components/general/PageBg";
import image from "@/assets/images/faq/faqbg.png";
import { useTranslations } from "next-intl";
import { getFAQData } from "@/services/ApiHandler";

interface FAQ {
  id: number;
  question: string;
  answer: string;
}

function FAQ() {
  const t = useTranslations();
  const [faqs, setFaqs] = useState<FAQ[]>([]);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getFAQData();
        const faqItems = res.data.faq;
        setFaqs(faqItems);
      } catch (err) {
        console.error("Error loading FAQs:", err);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <PageBg imgSrc={image.src} title={t("FAQ.title")} desc={t("FAQ.desc")} />

      <section className="px-[48px] py-16 text-center">
        <h2 className="mb-6 text-4xl font-bold">{t("FAQ.title")}</h2>

        <div className="max-w-3xl mx-auto mt-8 space-y-4 text-start">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b-2 border-gray-300 transition-all duration-300"
            >
              <button
                onClick={() => toggleQuestion(index)}
                className="flex w-full items-center justify-between px-4 py-4 text-[20px] font-[500] transition-colors duration-200 hover:bg-gray-100"
              >
                <span>{faq.question}</span>
                <span className="text-[20px] text-primary">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96 px-4 pb-4" : "max-h-0 px-4"
                }`}
              >
                <p className="text-secondary-color font-medium">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default FAQ;
