"use client";

import Image, { StaticImageData } from "next/image";
import about from "@/assets/images/about-section.png";
import award from "@/assets/images/award.png";
import arrow from "@/assets/images/arrow-left.png";
import roundedOne from "@/assets/images/round-about-1.png";
import roundedTwo from "@/assets/images/round-about-2.png";
import roundedThree from "@/assets/images/round-about-3.png";
import { useTranslations, useLocale } from "next-intl";
import LocalePath from "../LocalePath";
import Title from "../general/Title";

type RoundedImage = {
  src: StaticImageData;
  alt: string;
  className?: string;
};

function AboutUs() {
  const t = useTranslations();
  const locale = useLocale();
  const isRTL = locale === "ar";

  const awards: string[] = [
    t("ABOUTUS.textone"),
    t("ABOUTUS.texttwo"),
    t("ABOUTUS.textthree"),
    t("ABOUTUS.textfour"),
  ];

  const roundedImages: RoundedImage[] = [
    { src: roundedOne, alt: "User 1" },
    {
      src: roundedTwo,
      alt: "User 2",
      className: isRTL ? "mr-[-20px]" : "ml-[-20px]",
    },
    {
      src: roundedThree,
      alt: "User 3",
      className: isRTL ? "mr-[-20px]" : "ml-[-20px]",
    },
  ];

  return (
    <section className="px-mobileSecPadding py-sectionPadding md:px-sectionPadding flex flex-col items-center justify-between lg:flex-row">
      <div className="mb-8 w-full lg:mb-0 lg:max-w-[550px] xl:max-w-[721px]">
        <div data-aos="fade-left" className="mb-5">
          <Title title={t("ABOUTUS.title")} desc={t("ABOUTUS.desc")} />
        </div>

        <div
          data-aos="fade-left"
          className="grid grid-cols-1 gap-3 text-sm font-medium sm:grid-cols-2"
        >
          {awards.map((text, index) => (
            <div key={index} className="flex items-center gap-2">
              <Image
                src={award}
                alt={`Award Icon ${index + 1}`}
                className="size-[32px]"
              />
              <span className="text-base">{text}</span>
            </div>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-2" data-aos="fade-left">
          {roundedImages.map((img, idx) => (
            <Image
              key={idx}
              src={img.src}
              alt={img.alt}
              width={40}
              height={40}
              className={img.className || ""}
            />
          ))}
          <span className="text-secondary-color text-sm">
            {t("ABOUTUS.btmtext")}
          </span>
        </div>

        <div className="mt-6">
          <LocalePath href="/about">
            <button
              data-aos="fade-left"
              style={{
                background:
                  "linear-gradient(264.73deg, #CC966A 4.98%, #D39A6B 93.5%)",
              }}
              className="mt-4 flex items-center gap-1 rounded-[2.5rem] pb-2 pl-3 pr-3 pt-2"
            >
              <span className="text-sm text-white md:text-[17px]">
                {t("ABOUTUS.textbtn")}
              </span>
              <span>
                <Image
                  src={arrow}
                  alt="Left Arrow"
                  className={`${!isRTL ? "rotate-180" : ""} size-[24px]`}
                />
              </span>
            </button>
          </LocalePath>
        </div>
      </div>

      <div
        data-aos="fade-left"
        className="bg-[url('@/assets/images/aboutbg.png')] bg-cover bg-center lg:block"
      >
        <Image src={about} alt="About Us Image" width={420} />
      </div>
    </section>
  );
}

export default AboutUs;
