"use client";
import Image from "next/image";
import Title from "../general/Title";
import arrow from "@/assets/images/arrow-left.png";
import { useLocale, useTranslations } from "next-intl";
import LocalePath from "../LocalePath";
import { useEffect, useState } from "react";
import { getWhyUsData } from "@/services/ApiHandler";

interface Feature {
  id: number;
  icon: string;
  key: string;
  value: string;
}

interface WhyUsItem {
  id: number;
  type: string;
  title: string;
  description: string;
  image: string;
  icon: string;
  is_active: boolean;
  features: Feature[];
}

function WhyUs() {
  const t = useTranslations();
  const locale = useLocale();
  const isEnglish = locale === "en";

  const [features, setFeatures] = useState<Feature[]>([]);
  const [description, setDescription] = useState<string>("");
  const [title, setTitle] = useState<string>("");

  const fetchData = async () => {
    try {
      const res = await getWhyUsData();
      const data: WhyUsItem = res.data[0];
      setFeatures(data.features);
      setDescription(data.description);
      setTitle(data.title);
    } catch (error) {
      console.log("fetchData error:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="flex w-full justify-center py-10">
      <div className="flex w-[90%] flex-col items-center rounded-[2.5rem] bg-[url('@/assets/images/why-us.png')] bg-cover bg-center px-6 py-10 text-center md:px-[4.5rem]">
        <Title title={title} className="py-2 text-white" desc={description} />

        <div
          data-aos="fade-up"
          className="mb-4 mt-6 grid w-full grid-cols-1 gap-6 text-primary sm:grid-cols-2 md:grid-cols-4"
        >
          {features.map((item) => (
            <div key={item.id} className="relative flex flex-col items-center">
              <h3 className="relative text-4xl font-bold">
                +{item.value}
                <Image
                  src={item.icon}
                  alt="Icon"
                  width={25}
                  height={25}
                  className="absolute right-[-20px] top-[20px]"
                />
              </h3>
              <span className="relative mt-2 text-sm">{item.key}</span>
            </div>
          ))}
        </div>

        <LocalePath href="/contact">
          <button
            data-aos="fade-left"
            style={{
              background:
                "linear-gradient(264.73deg, #CC966A 4.98%, #D39A6B 93.5%)",
            }}
            className="mt-4 flex items-center gap-1 rounded-[2.5rem] pb-2 pl-3 pr-3 pt-2"
          >
            <span className="text-sm text-white md:text-[17px]">
              {t("ABOUTUS.textbtn")}
            </span>
            <span>
              <Image
                src={arrow}
                alt="Left Arrow"
                className={`${isEnglish ? "rotate-180" : ""} size-[24px]`}
              />
            </span>
          </button>
        </LocalePath>
      </div>
    </section>
  );
}

export default WhyUs;
