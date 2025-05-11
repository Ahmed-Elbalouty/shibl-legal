"use client";
import Image from "next/image";
import { getAllData } from "@/services/ApiHandler";
import { useEffect, useState } from "react";

function OurVision() {
  interface VisionInfo {
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

  const [visionData, setVisionData] = useState<VisionInfo | null>(null);

  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchVisionData = async () => {
      try {
        const data: ApiResponse = await getAllData();

        const visionSection = data.data.sections.find(
          (section) => section.type === "our_vision"
        );

        console.log(data, "Data fetched successfully");
        console.log(visionSection, "Found contact_info section");

        if (visionSection) {
          setVisionData({
            title: visionSection.title,
            description: visionSection.description,
            image: visionSection.image,
            icon: visionSection.icon,
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

    fetchVisionData();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  if (!visionData) {
    return <div>Loading...</div>;
  }
  return (
    <section className="px-mobileSecPadding py-sectionPadding md:px-sectionPadding flex items-center justify-center">
      <div className="relative flex flex-col items-center">
        <Image
          data-aos="fade-left"
          src={visionData.image}
          layout="responsive"
          width={450}
          height={450}
          className="w-[300px] sm:w-[400px] md:w-[550px]"
          alt="vision Image"
        />
        <p
          data-aos="fade-right"
          className="relative top-[-100px] max-w-[300px] rounded-xl bg-white/70 px-5 py-3 shadow-[0px_4px_16px_0px_#0000000F] backdrop-blur-[42px] md:left-[-30%] md:max-w-[400px] lg:top-[-150px]"
        >
          {visionData.description}
        </p>
      </div>
    </section>
  );
}

export default OurVision;
