// import HomePageLayout from "./(main-demo)";
// import { getAllPostsMeta } from "@/mdx";

// export const metadata = {
//   title: "Histudy - Online Courses & Education NEXTJS14 Template",
//   description: "Online Courses & Education NEXTJS14 Template",
// };

// const HomePage = async () => {
//   const blog = await getAllPostsMeta();
//   return (
//     <>
//       <HomePageLayout getBlog={blog} />
//     </>
//   );
// };

// export default HomePage;

import HomePageLayout from "./(main-demo)";
import { getAllPostsMeta } from "@/mdx";

export const metadata = {
  title: "Histudy - Online Courses & Education NEXTJS14 Template",
  description: "Online Courses & Education NEXTJS14 Template",
};

const HomePage = async () => {
  const blog = await getAllPostsMeta();

  const [
    bannerRes,
    featureRes,
    aboutUsRes,
    countryRes,
    requirementsRes,
    requirementRes,
    customizeRes,
    feedbackRes,
    contactRes,
  ] = await Promise.all([
    fetch("https://server.eaconsultancy.org/api/v1/banner", {
      cache: "no-store",
    }),
    fetch("https://server.eaconsultancy.org/api/v1/feature", {
      cache: "no-store",
    }),
    fetch("https://server.eaconsultancy.org/api/v1/aboutUs", {
      cache: "no-store",
    }),
    fetch("https://server.eaconsultancy.org/api/v1/country", {
      cache: "no-store",
    }),
    fetch("https://server.eaconsultancy.org/api/v1/requirements", {
      cache: "no-store",
    }),
    fetch("https://server.eaconsultancy.org/api/v1/requirement", {
      cache: "no-store",
    }),
    fetch("https://server.eaconsultancy.org/api/v1/customize", {
      cache: "no-store",
    }),
    fetch("https://server.eaconsultancy.org/api/v1/feedback", {
      cache: "no-store",
    }),
    fetch("https://server.eaconsultancy.org/api/v1/contact", {
      cache: "no-store",
    }),
  ]);

  const [
    bannerData,
    featureData,
    aboutUsData,
    countryData,
    requirementsData,
    requirementData,
    customizeData,
    feedbackData,
    contactData,
  ] = await Promise.all([
    bannerRes.json(),
    featureRes.json(),
    aboutUsRes.json(),
    countryRes.json(),
    requirementsRes.json(),
    requirementRes.json(),
    customizeRes.json(),
    feedbackRes.json(),
    contactRes.json(),
  ]);

  return (
    <HomePageLayout
      getBlog={blog}
      bannerData={bannerData}
      featureData={featureData}
      aboutUsData={aboutUsData}
      countryData={countryData}
      requirementsData={requirementsData}
      requirementData={requirementData}
      customizeData={customizeData}
      feedbackData={feedbackData}
      contactData={contactData}
    />
  );
};

export default HomePage;
