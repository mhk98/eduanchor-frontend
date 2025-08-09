import BackToTop from "@/app/backToTop";
import ApplyNowPage from "./(apply-now)";

export const metadata = {
  title: "Admission Guide - Online Courses & Education NEXTJS14 Template",
  description: "Online Courses & Education NEXTJS14 Template",
};

const ApplyNowLayout = () => {
  return (
    <>
      <ApplyNowPage />

      <BackToTop />
    </>
  );
};

export default ApplyNowLayout;
