// import BackToTop from "./backToTop";
// import HomePage from "./01-main-demo/page";

// export const metadata = {
//   title: "Home - We open the world for you, don't limit yourself, be borderless!",
//   description: "We open the world for you, don't limit yourself, be borderless!",
// };

// export default function Home() {
//   return (
//     <main>
//       <HomePage />
//       <BackToTop />
//     </main>
//   );
// }

import BackToTop from "./backToTop";
import HomePage from "./01-main-demo/page";

export const metadata = {
  title:
    "EA Consultancy – Study Abroad Experts | Free Counselling & Visa Support",
  description:
    "EA Consultancy helps students achieve their dreams of studying abroad with free counselling, transparent processing, university applications, and visa support for Europe, UK, USA, Canada & more. Start your international education journey today!",
};

export default async function Home() {
  // ৫টা API কলের জন্য Promise.all, এখানে ৩টা API দেওয়া আছে, তুমি চাইলে আরও যোগ করতে পারো

  return (
    <main>
      <HomePage />
      <BackToTop />
    </main>
  );
}
