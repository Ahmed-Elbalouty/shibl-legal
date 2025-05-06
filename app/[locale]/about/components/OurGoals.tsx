import imagemain from "@/assets/images/about/imagefive.png";
import bgimage from "@/assets/images/about/imagesix.png";
import imagesec from "@/assets/images/about/imageone.png";
import Image from "next/image";
import { useTranslations } from "next-intl";

function OurGoals() {
  const t = useTranslations();
  return (
    <section className="p-mobileSecPadding md:p-sectionPadding">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div
          data-aos="fade-left"
          className="relative min-h-[240px] overflow-hidden rounded-3xl bg-[#FCFAF8] bg-[url('@/assets/images/about/bg-one.png')] bg-cover bg-center md:col-span-1 md:h-auto"
        >
          <Image
            src={bgimage}
            alt="bg-image"
            className="absolute left-[50%] top-0 me-auto max-w-[100%] translate-x-[-50%]"
          />
          <Image
            src={imagesec}
            alt="bg-image"
            className="object-contain"
            fill
          />
        </div>
        <div
          data-aos="fade-right"
          className="px-sectionPadding rounded-3xl bg-[#FCFAF8] bg-[url('@/assets/images/about/bg-two.png')] bg-cover bg-center py-3 md:col-span-2 md:h-auto"
        >
          <div className="my-2 w-fit rounded-full bg-white p-3">
            <Image src={imagemain} className="size-[32px]" alt="Main Image" />
          </div>
          <div className="pb-5">
            <h2 className="text-2xl font-medium">{t("GOALS.title")}</h2>
            <p className="text-sm font-medium text-[#808080]">
              {t("GOALS.desc")}
            </p>
          </div>
          <ul className="text-secondary-color my-3 grid list-disc grid-cols-1 gap-4 pl-5 font-medium md:grid-cols-2">
            <li>{t("GOALS.lione")}</li>
            <li>{t("GOALS.litwo")}</li>
            <li>{t("GOALS.lithree")}</li>
            <li>{t("GOALS.lifour")}</li>
            <li>{t("GOALS.lifive")}</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default OurGoals;
