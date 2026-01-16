// "use client";

// import React, { useEffect } from "react";
// import Script from "next/script";
// import "bootstrap/scss/bootstrap.scss";
// import "../public/scss/default/euclid-circulara.scss";

// // ========= Plugins CSS START =========
// import "../node_modules/sal.js/dist/sal.css";
// import "../public/css/plugins/fontawesome.min.css";
// import "../public/css/plugins/feather.css";
// import "../public/css/plugins/odometer.css";
// import "../public/css/plugins/animation.css";
// import "../public/css/plugins/euclid-circulara.css";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/effect-cards";
// import "swiper/css/free-mode";
// import "swiper/css/thumbs";
// // ========= Plugins CSS END =========

// import "../public/scss/styles.scss";

// export default function RootLayout({ children }) {
//   useEffect(() => {
//     require("bootstrap/dist/js/bootstrap.bundle.min.js");
//   }, []);
//   return (
//     <html lang="en" dir="ltr">
//       <body className="" suppressHydrationWarning={true}>
//         {/* Facebook Pixel Script */}
//         <Script
//           id="fb-pixel-script"
//           strategy="afterInteractive"
//           dangerouslySetInnerHTML={{
//             __html: `
//               !function(f,b,e,v,n,t,s)
//               {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
//               n.callMethod.apply(n,arguments):n.queue.push(arguments)};
//               if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
//               n.queue=[];t=b.createElement(e);t.async=!0;
//               t.src=v;s=b.getElementsByTagName(e)[0];
//               s.parentNode.insertBefore(t,s)}(window, document,'script',
//               'https://connect.facebook.net/en_US/fbevents.js');
//               fbq('init', '${process.env.FB_PIXEL_ID}');
//               fbq('track', 'PageView');
//             `,
//           }}
//         />
//         <noscript>
//           <img
//             height="1"
//             width="1"
//             style={{ display: "none" }}
//             src={`https://www.facebook.com/tr?id=${process.env.FB_PIXEL_ID}&ev=PageView&noscript=1`}
//           />
//         </noscript>

//         {children}
//       </body>
//     </html>
//   );
// }

"use client";

import React, { useEffect } from "react";
import "bootstrap/scss/bootstrap.scss";
import "../public/scss/default/euclid-circulara.scss";

// ========= Plugins CSS START =========
import "../node_modules/sal.js/dist/sal.css";
import "../public/css/plugins/fontawesome.min.css";
import "../public/css/plugins/feather.css";
import "../public/css/plugins/odometer.css";
import "../public/css/plugins/animation.css";
import "../public/css/plugins/euclid-circulara.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-cards";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
// ========= Plugins CSS END =========

import "../public/scss/styles.scss";

export default function RootLayout({ children }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  // const pixelId = process.env.NEXT_PUBLIC_FB_PIXEL_ID;

  return (
    <html lang="en" dir="ltr">
      <body suppressHydrationWarning={true}>
        {/* Facebook Pixel Script */}
        {/* {pixelId && (
          <Script
            id="fb-pixel-script"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '${pixelId}');
        fbq('track', 'PageView');
      `,
            }}
          />
        )}

        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src={`https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1`}
          />
        </noscript> */}

        {children}
      </body>
    </html>
  );
}
