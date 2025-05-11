"use client";
import Image from "next/image";
import BaseCard from "../base/BaseCard";
import Title from "../general/Title";
import { useEffect, useState } from "react";
import { getOurServicesData } from "@/services/ApiHandler";

interface Service {
  id: number;
  icon: string;
  background: string;
  title: string;
  description: string;
}

interface Banner {
  title: string;
  description: string;
  image: string;
  icon: string;
}

function OurServices() {
  const [services, setServices] = useState<Service[]>([]);
  const [banner, setBanner] = useState<Banner | null>(null);

  const fetchData = async () => {
    try {
      const res = await getOurServicesData();
      const data = res.data;
      setBanner(data.banner);
      setServices(data.our_services);
    } catch (error) {
      console.error("Error fetching services:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="px-mobileSecPadding py-sectionPadding md:px-sectionPadding">
      <Title title={banner?.title || ""} desc={banner?.description || ""} />

      <div
        className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
        data-aos="fade-right"
      >
        {services.map((service, index) => (
          <BaseCard
            key={service.id}
            className={`rounded-3xl bg-[#FCFAF8] p-5 ${
              index === 4 ? "lg:col-span-2" : ""
            }`}
          >
            <div className="mb-4 w-fit rounded-full border border-gray-200 bg-white p-[5px]">
              <Image
                src={service.icon}
                alt={service.title}
                width={60}
                height={60}
                className="size-[60px]"
              />
            </div>
            <h3 className="mb-2 text-start text-xl font-bold">
              {service.title}
            </h3>
            <p className="text-secondary-color text-start text-sm">
              {service.description}
            </p>
          </BaseCard>
        ))}
      </div>
    </section>
  );
}

export default OurServices;
