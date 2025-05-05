import Image from "next/image";
import icon1 from "@/assets/images/why-1.png";
import icon2 from "@/assets/images/why-2.png";
import icon3 from "@/assets/images/why-3.png";
import icon4 from "@/assets/images/why-4.png";
import Title from "../general/Title";
import Button from "../general/Button";
import { useTranslations } from "next-intl";
import LocalePath from "../LocalePath";

const stats = [
  { icon: icon1, textKey: "WHYUS.textone", count: "200+" },
  { icon: icon2, textKey: "WHYUS.texttwo", count: "200+" },
  { icon: icon3, textKey: "WHYUS.textthree", count: "200+" },
  { icon: icon4, textKey: "WHYUS.textfour", count: "200+" },
];

function WhyUs() {
  const t = useTranslations();

  return (
    <section className="flex w-full justify-center py-10">
      <div className="flex w-[90%] flex-col items-center rounded-[40px] bg-[url('@/assets/images/why-us.png')] bg-cover bg-center px-6 py-10 text-center md:px-[72px]">
        <Title
          title={t("WHYUS.title")}
          className="py-2 text-white"
          desc={t("WHYUS.desc")}
        />

        <div
          data-aos="fade-up"
          className="mb-4 mt-6 grid w-full grid-cols-1 gap-6 text-primary sm:grid-cols-2 md:grid-cols-4"
        >
          {stats.map((item, index) => (
            <div key={index} className="relative flex flex-col items-center">
              <h3 className="relative text-4xl font-bold">
                {item.count}
                <Image
                  src={item.icon}
                  alt="Icon"
                  width={40}
                  height={40}
                  className="absolute right-[-20px] top-[.5rem]"
                />
              </h3>
              <span className="relative mt-2 text-sm">{t(item.textKey)}</span>
            </div>
          ))}
        </div>
        <LocalePath href="/faq">
          <Button buttonText={t("WHYUS.textbtn")} />
        </LocalePath>
      </div>
    </section>
  );
}

export default WhyUs;
