import Image from "next/image";
import award from "@/assets/images/award.png";
import { useTranslations } from "next-intl";
import arrow from "@/assets/images/arrow-left.png";
import { useLocale } from "next-intl";
import LocalePath from "../LocalePath";

function HeroSection() {
  const t = useTranslations();
  const locale = useLocale();
  const isEnglish = locale === "en";
  return (
    <section className="px-mobileSecPadding md:px-sectionPadding relative top-0 min-h-[90%] w-full bg-[url('@/assets/images/bghero.png')] bg-cover bg-center py-[130px]">
      <div className="content" data-aos="fade-left">
        <div className="flex items-center gap-1">
          <Image src={award} alt="Award Image" className="size-[32px]" />
          <span className="text-secondary-color font-medium">
            {t("HERO.award")}
          </span>
        </div>
        <div className="lg:max-w-[750px] xl:max-w-[850px]">
          <div className="mt-2 text-2xl font-bold text-white md:text-3xl lg:text-4xl xl:text-5xl">
            {t("HERO.main")}
          </div>
          <div className="text-secondary-color mt-4 text-base md:text-lg">
            {t("HERO.bottom")}
          </div>
        </div>
        <div className="mt-4 flex items-center gap-2">
          <LocalePath href="/contact">
            <button
              data-aos="fade-left"
              style={{
                background:
                  "linear-gradient(264.73deg, #CC966A 4.98%, #D39A6B 93.5%)",
              }}
              className="mt-4 flex items-center gap-1 rounded-[2.5rem] pb-2 pl-3 pr-3 pt-2"
            >
              <span className="text-sm text-white md:text-[17px]">
                {t("HERO.contact")}
              </span>
              <span>
                <Image
                  src={arrow}
                  alt="Left Arrow"
                  className={`${isEnglish ? "rotate-180" : ""} size-[24px]`}
                />
              </span>
            </button>
          </LocalePath>
          <div className="text-secondary-color mt-3 font-medium">
            {t("HERO.textnextbtn")}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
