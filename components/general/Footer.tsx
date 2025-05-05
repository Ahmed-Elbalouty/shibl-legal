"use client";

import Image from "next/image";
import footerlogo from "@/assets/images/footerlogo.png";
import SocialLinks from "./SocialLinks";
import { useTranslations } from "next-intl";

function Footer() {
  const t = useTranslations();

  return (
    <footer className="bg-[url('@/assets/images/footer.png')] bg-cover bg-center p-[48px]">
      <div className="flex items-center gap-3">
        <Image src={footerlogo} alt="footer logo" width={78} height={98.4} />
        <div>
          <h3 className="text-white text-[24px]">{t("FOOTER.SheblLegal")}</h3>
          <p className="text-[#999999] text-[14px] lg:max-w-[550px] xl:max-w-[650px]">
            {t("FOOTER.footdesc")}
          </p>
        </div>
      </div>

      <div className="h-[1px] w-full bg-[#33495D] my-6"></div>

      {/* Social Links Section */}
      <div className="flex justify-between items-center flex-wrap gap-3">
        <ul className="text-white font-[400] flex gap-3">
          <li>{t("FOOTER.TermsandConditions")}</li>
          <li>{t("FOOTER.PrivacyPolicy")}</li>
        </ul>
        <SocialLinks className="flex gap-4" />
      </div>
    </footer>
  );
}

export default Footer;
