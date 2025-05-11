"use client";
import Image from "next/image";

interface Feature {
  id: number;
  value: string;
  icon: string;
  is_active: boolean;
}

function BottomHero({ data }: { data: Feature[] }) {
  return (
    <section className="my-[3rem] flex items-center justify-center md:my-0">
      <div className="z-100 relative mx-[1.5px] flex w-full flex-col items-center justify-center rounded-3xl bg-secondary p-2 text-[#666666] md:top-[-50px] md:ml-auto md:mr-[45px] md:h-[104px] md:w-[90%] md:flex-row">
        {data.map((feature, index) => (
          <div
            key={feature.id}
            className="flex flex-col items-center md:flex-row md:gap-3"
          >
            <div className="flex items-center gap-3 p-3">
              <Image
                src={feature.icon}
                alt={`Feature ${index + 1}`}
                width={32}
                height={32}
                className="rounded-full bg-[#FCFAF8]"
              />
              <span className="font-medium text-center md:text-start">
                {feature.value}
              </span>
            </div>

            {index < data.length - 1 && (
              <>
                <span className="hidden h-[40px] w-[1px] bg-[#c7c5c5] md:block"></span>
                <span className="block h-[1px] w-[100%] bg-[#c7c5c5] md:hidden mx-auto"></span>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default BottomHero;
