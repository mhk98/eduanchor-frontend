// import BackToTop from "./backToTop";
// import HomePage from "./01-main-demo/page";

// export const metadata = {
//   title: "Home - Online Courses & Education NEXTJS14 Template",
//   description: "Online Courses & Education NEXTJS14 Template",
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
  title: "Home - Online Courses & Education NEXTJS14 Template",
  description: "Online Courses & Education NEXTJS14 Template",
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
