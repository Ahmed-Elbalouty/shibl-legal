import ContactUs from "@/components/homecomponents/ContactUs";
import PageBg from "../../../components/general/PageBg";
import image from "@/assets/images/contact/contactbg.png";
import { useTranslations } from "next-intl";

function Contact() {
  const t = useTranslations();
  return (
    <>
      <PageBg
        imgSrc={image.src}
        title={t("LABELS.contactus")}
        desc={t("LABELS.contactdesc")}
      />
      <ContactUs />
    </>
  );
}

export default Contact;
