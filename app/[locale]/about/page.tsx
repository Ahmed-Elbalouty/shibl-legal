import AboutUs from "@/components/homecomponents/AboutUs";
import PageBg from "../../../components/general/PageBg";
import image from "@/assets/images/about/aboutbg.png"; 
import { useTranslations } from "next-intl";

function About() {
  const t = useTranslations();

  return (
    <>
      <PageBg
        imgSrc={image.src} 
        title={t("LABELS.about")}
        desc={t("LABELS.aboutdesc")}
      />
      <AboutUs />
    </>
  );
}

export default About;
