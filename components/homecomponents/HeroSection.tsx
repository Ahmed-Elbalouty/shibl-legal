import Image from "next/image"
import award from "@/assets/images/award.png"
import Button from "../general/Button"
import { useTranslations } from "next-intl";


function HeroSection() {
  const t = useTranslations()
  return (
    <section className="bg-[url('@/assets/images/bghero.png')] bg-cover bg-center min-h-[90%] w-full pt-[130px] pb-[130px] px-[48px] relative top-0">
      <div className="content" data-aos="fade-left">
          <div className="flex items-center gap-1">
            <Image src={award} alt="Award Image" width={32} height={32}/>
            <span className="font-[500] text-[#CCCCCC]">{t("HERO.award")}</span>
          </div>
          <div className="lg:max-w-[750px] xl:max-w-[850px]">
            <div className="text-white font-bold text-[25px] md:text-[30px] lg:text-[40px] mt-2">{t("HERO.main")}</div>
            <div className="text-[17px] text-[#E5E5E5] font-[400] mt-4">{t("HERO.bottom")}</div>
          </div>
          <div className="flex items-center gap-2 mt-4">
            <Button buttonText={t("HERO.contact")}/>
            <div className="mt-3 font-[500] text-[#B3B3B3]">{t("HERO.textnextbtn")}</div>
          </div>
      </div>
    </section>
  )
}

export default HeroSection
