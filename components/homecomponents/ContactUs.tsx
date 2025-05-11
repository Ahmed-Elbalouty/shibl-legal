"use client";
import Image from "next/image";
import Title from "../general/Title";
import call from "@/assets/images/call.png";
import sms from "@/assets/images/sms.png";
import clock from "@/assets/images/clock.png";
import location from "@/assets/images/location.png";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { getAllData } from "@/services/ApiHandler";

interface ContactInfo {
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

function ContactUs() {
  const t = useTranslations();
  const [contactData, setContactData] = useState<ContactInfo | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchContactData = async () => {
      try {
        const data: ApiResponse = await getAllData();

        const contactSection = data.data.sections.find(
          (section) => section.type === "contact_info"
        );

        console.log(data, "Data fetched successfully");
        console.log(contactSection, "Found contact_info section");

        if (contactSection) {
          setContactData({
            title: contactSection.title,
            description: contactSection.description,
            image: contactSection.image,
            icon: contactSection.icon,
          });
        } else {
          setError("Contact info section not found");
        }
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : "Failed to load data";
        setError(errorMessage);
      }
    };

    fetchContactData();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  if (!contactData) {
    return <div>Loading...</div>;
  }

  return (
    <section className="px-mobileSecPadding py-sectionPadding md:px-sectionPadding">
      <Title
        className="items-center text-center lg:items-start lg:text-start"
        title={contactData.title}
        desc={contactData.description}
      />

      <div className="flex flex-col items-center justify-between pt-5 lg:flex-row">
        <div className="mx-auto flex flex-col items-center justify-center gap-6 text-center lg:max-w-[550px] xl:max-w-[721px]">
          <div className="flex flex-col gap-2" data-aos="fade-left">
            <h2 className="text-2xl font-bold lg:text-4xl">
              {t("CONTACTUS.SheblLegal")}
            </h2>
            <span className="text-[#B3B3B3]">{t("CONTACTUS.trusted")}</span>
          </div>

          <div
            className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2"
            data-aos="fade-right"
          >
            {[
              { icon: sms, value: "Sheblforlawfirm@gmail.com" },
              { icon: call, value: "+966 18637 1873" },
              { icon: clock, value: t("CONTACTUS.time") },
              { icon: location, value: t("CONTACTUS.location") },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-4 rounded-[2rem] bg-white p-4"
              >
                <Image
                  src={item.icon}
                  alt={item.value}
                  className="size-[24px]"
                />
                <div>
                  <p className="text-[#333333]">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right-side Image */}
        <Image
          src={contactData.image}
          alt="Contact Image"
          width={420}
          height={283}
          className="mt-5 lg:mt-0 lg:block"
        />
      </div>
    </section>
  );
}

export default ContactUs;
