import BackToTop from "@/app/backToTop";
import AboutUsPage from "./(about-us-02)/index";

export const metadata = {
  title: "Our Expert Team – Trusted Study Abroad Consultants | EA Consultancy",
  description:
    "Meet the experienced and dedicated team behind EA Consultancy. Our expert study abroad consultants provide personalized guidance, transparent support, and successful visa solutions for international students.",
};
const AboutUsLayout = () => {
  return (
    <>
      <AboutUsPage />
      <BackToTop />
    </>
  );
};

export default AboutUsLayout;
