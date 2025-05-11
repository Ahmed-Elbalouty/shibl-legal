"use client";
import Image from "next/image";
import bgimage from "@/assets/images/about/imagefour.png";
import { useEffect, useState } from "react";
import { getAllData } from "@/services/ApiHandler";
function CoreValues() {
  interface CoreInfo {
    title: string;
    description: string;
    image: string;
    icon: string;
  }

  interface Section {
    type: string;
    title: string;
    description: string;
    image: string;
    icon: string;
    is_active: boolean;
  }

  interface ApiResponse {
    data: {
      sections: Section[];
    };
  }

  const [coreData, setCoreData] = useState<CoreInfo | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCoreData = async () => {
      try {
        const data: ApiResponse = await getAllData();

        const coreSection = data.data.sections.find(
          (section) => section.type === "core_values"
        );

        console.log(data, "Data fetched successfully");
        console.log(coreSection, "Found contact_info section");

        if (coreSection) {
          setCoreData({
            title: coreSection.title,
            description: coreSection.description,
            image: coreSection.image,
            icon: coreSection.icon,
          });
        } else {
          setError("Goals Info section not found");
        }
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : "Failed to load data";
        setError(errorMessage);
      }
    };

    fetchCoreData();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  if (!coreData) {
    return <div>Loading...</div>;
  }
  return (
    <section
      data-aos="fade-right"
      className="px-mobileSecPadding py-sectionPadding md:px-sectionPadding flex w-full items-center justify-center"
    >
      <div className="relative flex w-[90%] flex-col items-center justify-center rounded-2xl bg-[#FCFAF8] px-6 py-10 text-center shadow-md">
        <Image src={coreData.icon} alt="Law Image" width={50} height={50} />
        <h2 className="my-2 text-2xl font-medium"> {coreData.title}</h2>

        <p className="text-sm font-medium text-[#808080]">
          {coreData.description}
          <Image
            src={bgimage}
            alt="BG Image"
            width={176}
            height={58}
            className="absolute right-0 top-0"
          />
        </p>
      </div>
    </section>
  );
}
export default CoreValues;
