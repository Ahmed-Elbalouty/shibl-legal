"use client";
import AboutUs from "@/components/homecomponents/AboutUs";
import PageBg from "../../../components/general/PageBg";
import image from "@/assets/images/about/aboutbg.png";
import { useTranslations } from "next-intl";
import OurGoals from "./components/OurGoals";
import WhyUs from "@/components/homecomponents/WhyUs";
import CoreValues from "./components/CoreValues";
import OurVision from "./components/OurVision";

function About() {
  const t = useTranslations();

  return (
    <div>
      <PageBg
        imgSrc={image.src}
        title={t("LABELS.about")}
        desc={t("LABELS.aboutdesc")}
      />
      <AboutUs />
      <OurGoals />
      <WhyUs />
      <CoreValues />
      <OurVision />
    </div>
  );
}

export default About;
