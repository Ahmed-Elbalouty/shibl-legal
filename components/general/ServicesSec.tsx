import { useTranslations } from "next-intl";
import Image, { StaticImageData } from "next/image";
import BaseCard from "../base/BaseCard";
import Title from "./Title";

import ser1 from "@/assets/images/ser1.png";
import ser2 from "@/assets/images/ser2.png";
import ser3 from "@/assets/images/ser3.png";
import ser4 from "@/assets/images/ser4.png";
import ser5 from "@/assets/images/ser5.png";

function ServicesSec() {
  const t = useTranslations();
  interface Service {
    title: string;
    desc: string;
    image: StaticImageData;
  }
  
  const services: Service[] = [
    {
      title: t("SERVICES.textone"),
      desc: t("SERVICES.textonedesc"),
      image: ser1,
    },
    {
      title: t("SERVICES.texttwo"),
      desc: t("SERVICES.texttwodesc"),
      image: ser2,
    },
    {
      title: t("SERVICES.textthree"),
      desc: t("SERVICES.textthreedesc"),
      image: ser3,
    },
    {
      title: t("SERVICES.textfour"),
      desc: t("SERVICES.textfourdesc"),
      image: ser4,
    },
    {
      title: t("SERVICES.textfive"),
      desc: t("SERVICES.textfivedesc"),
      image: ser5, 
    },
  ];
  return (
    <section className="py-[44px] px-[48px]">
      <Title
        title={t("SERVICES.title")}
        desc={t("SERVICES.desc")}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8" data-aos="fade-right">
        {services.map((service, index) => (
          <BaseCard
            key={index}
            className={`bg-[#FCFAF8] rounded-[24px] p-5 ${
              index === 4 ? "lg:col-span-2" : ""
            }`}
          >
            <div className="bg-white p-[5px] rounded-full w-fit mb-4 border border-gray-200">
              <Image src={service.image} alt={service.title} width={60} height={60} />
            </div>
            <h3 className="text-2xl font-bold mb-2 text-start">{service.title}</h3>
            <p className="text-sm text-[#B3B3B3] text-start">{service.desc}</p>
          </BaseCard>
        ))}
      </div>
    </section>
  )
}

export default ServicesSec
