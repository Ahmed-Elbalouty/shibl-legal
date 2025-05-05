type PageBgProps = {
  imgSrc: string;
  title: string;
  desc: string;
};

function PageBg({ imgSrc, title, desc }: PageBgProps) {
  return (
    <section
      className="bg-cover bg-center min-h-[90%] w-full pt-[120px] pb-[120px] px-[48px] relative top-0"
      style={{ backgroundImage: `url(${imgSrc})` }}
    >
      <div data-aos="fade-left" className="text-center text-white flex flex-col w-full items-center gap-2">
        <h2 className="text-4xl font-[700] lg:max-w-[600px] xl:max-w-[700px]">{title}</h2>
        <p className="text-[#E5E5E5] font-[400] text-[16px] md:text-[20px] lg:max-w-[600px] xl:max-w-[700px]">{desc}</p>
      </div>
    </section>
  );
}

export default PageBg;
