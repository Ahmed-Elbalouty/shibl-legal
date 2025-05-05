import PageBg from "../../../components/general/PageBg"
import image from "@/assets/images/services/servicesbg.png"; 
import OurServices from "@/components/homecomponents/OurServices";
import { useTranslations } from "next-intl";

function Services (){
  const t = useTranslations();
  return (
    <div className="bg-[#F2F4F5]">
    <PageBg
    imgSrc={image.src} 
    title={t("LABELS.services")}
    desc={t("LABELS.servicesdesc")}
  />
  <OurServices />
    </div>
  )
}
export default Services