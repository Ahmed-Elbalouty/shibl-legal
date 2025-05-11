// import BottomHero from "@/components/homecomponents/BottomHero";
import HeroSection from "@/components/homecomponents/HeroSection";
import AboutUs from "@/components/homecomponents/AboutUs";
// import { getHomeData } from "@/services/ApiHandler";
import WhyUs from "@/components/homecomponents/WhyUs";
import OurServices from "@/components/homecomponents/OurServices";
import ContactUs from "@/components/homecomponents/ContactUs";
import CommonQuestions from "@/components/homecomponents/CommonQuestions";

export default async function HomePage() {
  // const data: HomeType = await getHomeData();

  return (
    // data && (
    <>
      <HeroSection />
      <AboutUs />
      <WhyUs />
      <OurServices />
      <CommonQuestions />
      <ContactUs />
    </>
    // )
  );
}
