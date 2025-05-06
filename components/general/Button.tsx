import Image from "next/image";
import arrow from "@/assets/images/arrow-left.png";
import { useLocale } from "next-intl";

interface ButtonProps {
  buttonText: string;
}

function Button({ buttonText }: ButtonProps) {
  const locale = useLocale();
  const isEnglish = locale === "en";

  return (
    <button
      data-aos="fade-left"
      style={{
        background: "linear-gradient(264.73deg, #CC966A 4.98%, #D39A6B 93.5%)",
      }}
      className="mt-4 flex items-center gap-1 rounded-[2.5rem] pb-2 pl-3 pr-3 pt-2"
    >
      <span className="text-sm text-white md:text-[17px]">{buttonText}</span>
      <span>
        <Image
          src={arrow}
          alt="Left Arrow"
          width={24}
          height={24}
          className={isEnglish ? "rotate-180" : ""}
        />
      </span>
    </button>
  );
}

export default Button;
