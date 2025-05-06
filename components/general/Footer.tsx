"use client";

import Image from "next/image";
import footerlogo from "@/assets/images/footerlogo.png";
import SocialLinks from "./SocialLinks";
import { useTranslations } from "next-intl";

function Footer() {
  const t = useTranslations();

  return (
    <footer className="px-mobileSecPadding py-sectionPadding md:px-sectionPadding bg-[url('@/assets/images/footer.png')] bg-cover bg-center">
      <div className="flex items-center gap-3">
        <Image
          src={footerlogo}
          alt="footer logo"
          width={78}
          height={98.4}
          data-aos="fade-left"
        />
        <div data-aos="fade-right">
          <h3 className="text-[24px] text-white">{t("FOOTER.SheblLegal")}</h3>
          <p className="text-secondary-color text-sm font-medium lg:max-w-[550px] xl:max-w-[650px]">
            {t("FOOTER.footdesc")}
          </p>
        </div>
      </div>

      <span className="my-6 block h-[1px] w-full bg-[#33495D]"></span>

      <div className="flex flex-wrap items-center justify-between gap-3">
        <ul className="flex gap-3 font-[400] text-white">
          <li>{t("FOOTER.TermsandConditions")}</li>
          <li>{t("FOOTER.PrivacyPolicy")}</li>
        </ul>
        <SocialLinks className="flex gap-4" />
      </div>
    </footer>
  );
}

export default Footer;
