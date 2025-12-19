import BackToTop from "@/app/backToTop";
import AdmissionGuidePage from "./(admission-guide)";

export const metadata = {
  title:
    "Our Services – Study Abroad Counselling, Admissions & Visa Support | EA Consultancy",
  description:
    "EA Consultancy offers complete study abroad services including counselling, admissions and visa support for UK, Europe, Canada, USA and other top destinations worldwide.",
};

const AdmissionGuideLayout = () => {
  return (
    <>
      <AdmissionGuidePage />

      <BackToTop />
    </>
  );
};

export default AdmissionGuideLayout;
