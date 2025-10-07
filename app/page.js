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
    "Home - We open the world for you, don't limit yourself, be borderless!",
  description:
    "We open the world for you, don't limit yourself, be borderless!",
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
