"use client";
import Image from "next/image";
import award from "@/assets/images/award.png";
import { useTranslations } from "next-intl";
import arrow from "@/assets/images/arrow-left.png";
import { useLocale } from "next-intl";
import LocalePath from "../LocalePath";
import BottomHero from "./BottomHero";
import { useEffect, useState } from "react";
import { getAllData } from "@/services/ApiHandler";

interface Feature {
  id: number;
  value: string;
  icon: string;
  is_active: boolean;
}

interface HeroInfo {
  title: string;
  description: string;
  image: string;
  icon: string;
  features: Feature[];
}

interface Section {
  type: string;
  title: string;
  description: string;
  image: string;
  icon: string;
  is_active: boolean;
  features?: Feature[];
}

interface ApiResponse {
  data: {
    sections: Section[];
  };
}

function HeroSection() {
  const t = useTranslations();
  const locale = useLocale();
  const isEnglish = locale === "en";

  const [heroData, setHeroData] = useState<HeroInfo | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchHeroData = async () => {
      try {
        const data: ApiResponse = await getAllData();

        const heroSection = data.data.sections.find(
          (section) => section.type === "main_banner"
        );

        if (heroSection) {
          setHeroData({
            title: heroSection.title,
            description: heroSection.description,
            image: heroSection.image,
            icon: heroSection.icon,
            features: heroSection.features ?? [],
          });
        } else {
          setError("Hero section not found");
        }
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : "Failed to load data";
        setError(errorMessage);
      }
    };

    fetchHeroData();
  }, []);

  if (error) return <div>{error}</div>;
  if (!heroData) return <div>Loading...</div>;

  return (
    <>
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
              {heroData.title}
            </div>
            <div className="text-secondary-color mt-4 text-base md:text-lg">
              {heroData.description}
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
      {heroData.features.length > 0 && <BottomHero data={heroData.features} />}
    </>
  );
}

export default HeroSection;
