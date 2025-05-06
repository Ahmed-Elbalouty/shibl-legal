type PageBgProps = {
  imgSrc: string;
  title: string;
  desc: string;
};

function PageBg({ imgSrc, title, desc }: PageBgProps) {
  return (
    <section
      className="relative top-0 min-h-[90%] w-full bg-cover bg-center px-[48px] pb-[120px] pt-[120px]"
      style={{ backgroundImage: `url(${imgSrc})` }}
    >
      <div
        data-aos="fade-left"
        className="flex w-full flex-col items-center gap-2 text-center text-white"
      >
        <h2 className="text-4xl font-[700] lg:max-w-[600px] xl:max-w-[700px]">
          {title}
        </h2>
        <p className="text-[16px] font-[400] text-[#E5E5E5] md:text-xl lg:max-w-[600px] xl:max-w-[700px]">
          {desc}
        </p>
      </div>
    </section>
  );
}

export default PageBg;
