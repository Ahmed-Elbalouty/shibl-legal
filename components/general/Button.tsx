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
        background: 'linear-gradient(264.73deg, #CC966A 4.98%, #D39A6B 93.5%)',
      }}
      className="pt-2 pb-2 pr-3 pl-3 rounded-[40px] flex gap-1 items-center mt-4"
    >
      <span className="font-[400] text-[14px] md:text-[17px] text-white">{buttonText}</span>
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
