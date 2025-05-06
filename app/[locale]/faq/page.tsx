"use client";
import { useState } from "react";
import PageBg from "../../../components/general/PageBg";
import image from "@/assets/images/faq/faqbg.png";
import { useTranslations } from "next-intl";

function FAQ() {
  const t = useTranslations();
  const questions = [
    {
      question: t("FAQ.question1"),
      answer: t("FAQ.answer1"),
    },
    {
      question: t("FAQ.question2"),
      answer: t("FAQ.answer2"),
    },
    {
      question: t("FAQ.question3"),
      answer: t("FAQ.answer3"),
    },
    {
      question: t("FAQ.question4"),
      answer: t("FAQ.answer4"),
    },
    {
      question: t("FAQ.question5"),
      answer: t("FAQ.answer5"),
    },
    {
      question: t("FAQ.question6"),
      answer: t("FAQ.answer5"),
    },
    {
      question: t("FAQ.question6"),
      answer: t("FAQ.answer5"),
    },
    {
      question: t("FAQ.question7"),
      answer: t("FAQ.answer7"),
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-[#F2F4F5]">
      <PageBg imgSrc={image.src} title={t("FAQ.title")} desc={t("FAQ.desc")} />

      <section className="px-[48px] py-16 text-center">
        <h2 className="mb-6 text-4xl font-bold">{t("FAQ.title")}</h2>

        <div className="max-w-3xl mx-auto mt-8 space-y-4 text-start">
          {questions.map((item, index) => (
            <div
              key={index}
              className="border-b-2 border-gray-300 transition-all duration-300"
            >
              <button
                onClick={() => toggleQuestion(index)}
                className="flex w-full items-center justify-between px-4 py-4 text-[20px] font-[500] transition-colors duration-200 hover:bg-gray-100"
              >
                <span>{item.question}</span>
                <span className="text-[20px] text-primary">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96 px-4 pb-4" : "max-h-0 px-4"
                }`}
              >
                <p className="text-secondary-color font-medium">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default FAQ;
