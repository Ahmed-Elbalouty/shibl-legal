"use client";
import Image from "next/image";
import lawimage from "@/assets/images/about/law.png";
import bgimage from "@/assets/images/about/imagefour.png";
import { useTranslations } from "use-intl";
function CoreValues() {
  const t = useTranslations();
  return (
    <section
      data-aos="fade-right"
      className="px-mobileSecPadding py-sectionPadding md:px-sectionPadding flex w-full items-center justify-center"
    >
      <div className="relative flex w-[90%] flex-col items-center justify-center rounded-2xl bg-[#FCFAF8] px-6 py-10 text-center shadow-md">
        <Image src={lawimage} alt="Law Image" className="size-[50px]" />
        <h2 className="my-2 text-2xl font-medium"> {t("VALUES.title")}</h2>

        <p className="text-sm font-medium text-[#808080]">
          {t("VALUES.desc")}
          <Image
            src={bgimage}
            alt="BG Image"
            width={176}
            height={58}
            className="absolute right-0 top-0"
          />
        </p>
      </div>
    </section>
  );
}

export default CoreValues;
