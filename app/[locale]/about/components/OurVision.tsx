import Image from "next/image";
import vision from "@/assets/images/about/vision.png";
import { useTranslations } from "next-intl";

function OurVision() {
  const t = useTranslations();
  return (
    <section className="px-mobileSecPadding py-sectionPadding md:px-sectionPadding flex items-center justify-center">
      <div className="relative flex flex-col items-center">
        <Image
          data-aos="fade-left"
          src={vision}
          className="w-[300px] sm:w-[400px] md:w-[550px]"
          alt="vision Image"
        />
        <p
          data-aos="fade-right"
          className="relative top-[-100px] max-w-[300px] rounded-xl bg-white/70 px-5 py-3 shadow-[0px_4px_16px_0px_#0000000F] backdrop-blur-[42px] md:left-[-50%] md:max-w-[400px] lg:top-[-150px]"
        >
          {t("VISION.desc")}
        </p>
      </div>
    </section>
  );
}

export default OurVision;
