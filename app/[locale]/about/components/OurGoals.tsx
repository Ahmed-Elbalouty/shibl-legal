"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getAllData } from "@/services/ApiHandler";

interface Feature {
  icon: string;
  value: string;
}
interface GoalsInfo {
  title: string;
  description: string;
  image: string;
  icon: string;
  features: Feature[];
}

interface Section {
  type: string;
  title: string;
  description: string;
  image: string;
  icon: string;
  is_active: boolean;
  features?: Feature[];
}

interface ApiResponse {
  data: {
    sections: Section[];
  };
}

function OurGoals() {
  // const t = useTranslations();
  const [goalsData, setgoalsData] = useState<GoalsInfo | null>(null);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const fetchGoalsData = async () => {
      try {
        const data: ApiResponse = await getAllData();

        const goalsSection = data.data.sections.find(
          (section) => section.type === "goals"
        );

        console.log(data, "Data fetched successfully");
        console.log(goalsSection, "Found contact_info section");

        if (goalsSection) {
          setgoalsData({
            title: goalsSection.title,
            description: goalsSection.description,
            image: goalsSection.image,
            icon: goalsSection.icon,
            features: goalsSection.features ?? [],
          });
        } else {
          setError("Goals section not found");
        }
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : "Failed to load data";
        setError(errorMessage);
      }
    };

    fetchGoalsData();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  if (!goalsData) {
    return <div>Loading...</div>;
  }
  return (
    <section className="p-mobileSecPadding md:p-sectionPadding">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div
          data-aos="fade-left"
          className="relative min-h-[240px] overflow-hidden rounded-3xl bg-[#FCFAF8] bg-[url('@/assets/images/about/bg-one.png')] bg-cover bg-center md:col-span-1 md:h-auto"
        >
          <Image
            src={goalsData.image}
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
            <Image
              src={goalsData.icon}
              width={32}
              height={32}
              alt="Main Icon"
            />
          </div>
          <div className="pb-5">
            <h2 className="text-2xl font-medium">{goalsData.title}</h2>
            <p className="text-sm font-medium text-[#808080]">
              {goalsData.description}
            </p>
          </div>
          <ul className="text-secondary-color my-3 grid list-disc grid-cols-1 gap-4 pl-5 font-medium md:grid-cols-2">
            {goalsData.features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2">
                <Image
                  src={feature.icon}
                  alt={`feature-icon-${index}`}
                  width={24}
                  height={24}
                />
                <span>{feature.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default OurGoals;
