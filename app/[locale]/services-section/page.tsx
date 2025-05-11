import PageBg from "../../../components/general/PageBg";
import image from "@/assets/images/services/servicesbg.png";
import OurServices from "@/components/homecomponents/OurServices";
import { useTranslations } from "next-intl";

function Services() {
  const t = useTranslations();
  return (
    <>
      <PageBg
        imgSrc={image.src}
        title={t("LABELS.services")}
        desc={t("LABELS.servicesdesc")}
      />
      <OurServices />
    </>
  );
}
export default Services;
