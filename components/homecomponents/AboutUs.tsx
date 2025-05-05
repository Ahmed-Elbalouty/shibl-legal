"use client";

import Image, { StaticImageData } from "next/image";
import about from "@/assets/images/about-section.png";
import award from "@/assets/images/award.png";
import Button from "../general/Button";
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
    <section className="flex flex-col items-center justify-between p-[24px] py-10 md:p-[48px] lg:flex-row">
      <div className="mb-8 w-full lg:mb-0 lg:max-w-[550px] xl:max-w-[721px]">
        <div data-aos="fade-left" className="mb-5">
          <Title title={t("ABOUTUS.title")} desc={t("ABOUTUS.desc")} />
        </div>

        <div
          data-aos="fade-left"
          className="grid grid-cols-1 gap-3 text-[14px] font-medium sm:grid-cols-2"
        >
          {awards.map((text, index) => (
            <div key={index} className="flex items-center gap-2">
              <Image
                src={award}
                alt={`Award Icon ${index + 1}`}
                width={32}
                height={32}
              />
              <span className="text-[16px]">{text}</span>
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
          <span className="text-[14px] font-light text-[#B3B3B3]">
            {t("ABOUTUS.btmtext")}
          </span>
        </div>

        <div className="mt-6">
          <LocalePath href="/about">
            <Button buttonText={t("ABOUTUS.textbtn")} />
          </LocalePath>
        </div>
      </div>

      <div className="lg:block">
        <Image src={about} alt="About Us Image" width={420} />
      </div>
    </section>
  );
}

export default AboutUs;
