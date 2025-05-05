"use client";
import Image from "next/image";
import c1 from "@/assets/images/c1.png";
import c2 from "@/assets/images/c2.png";
import c3 from "@/assets/images/c3.png";
import { useTranslations } from "use-intl";

function BottomHero() {
  const t = useTranslations();
  return (
    <section className="my-[50px] flex items-center justify-center md:my-0">
      <div className="z-100 relative mx-[24px] flex w-full flex-col items-center justify-center gap-2 rounded-[24px] bg-secondary p-2 text-[#666666] md:top-[-50px] md:ml-auto md:mr-[45px] md:h-[104px] md:w-[90%] md:flex-row md:justify-between">
        {/* Item 1 */}
        <div className="flex items-center gap-3 p-3">
          <Image
            src={c1}
            alt="Alt"
            width={32}
            height={32}
            className="rounded-full bg-[#FCFAF8]"
          />
          <span className="font-[500]">{t(`BOTTOMHERO.team`)}</span>
        </div>

        {/* Divider */}
        <span className="hidden h-[40px] w-[1px] bg-[#c7c5c5] md:block"></span>
        <span className="block h-[1px] w-full bg-[#c7c5c5] px-5 md:hidden"></span>

        {/* Item 2 */}
        <div className="flex items-center gap-3 p-3">
          <Image
            src={c2}
            alt="Alt"
            width={32}
            height={32}
            className="rounded-full bg-[#FCFAF8]"
          />
          <span className="font-[500]">{t(`BOTTOMHERO.provenlegal`)}</span>
        </div>

        {/* Divider */}
        <span className="hidden h-[40px] w-[1px] bg-[#c7c5c5] md:block"></span>
        <span className="block h-[1px] w-full bg-[#c7c5c5] px-5 md:hidden"></span>

        {/* Item 3 */}
        <div className="flex items-center gap-3 p-3">
          <Image
            src={c3}
            alt="Alt"
            width={32}
            height={32}
            className="rounded-full bg-[#FCFAF8]"
          />
          <span className="font-[500]">{t(`BOTTOMHERO.experience`)}</span>
        </div>
      </div>
    </section>
  );
}

export default BottomHero;
