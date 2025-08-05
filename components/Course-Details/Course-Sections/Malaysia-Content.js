// import Link from "next/link";
// import React from "react";
// import { FaUniversity } from "react-icons/fa";

// const MalaysiaContent = ({ checkMatchCourses }) => {
//   return (
//     <>
//       <div className="rbt-course-feature-inner">
//       <div className="d-flex align-items-center gap-3">
//           <h5>< FaUniversity /></h5>
//           <h5>Renowned Universities</h5>
//           </div>

//         <p>Some of the top universities in the USA include:</p>
         
//           <ul>
//             <li>Harvard University</li>
//             <li>Massachusetts Institute of Technology (MIT)</li>
//             <li>Stanford University</li>
//             <li>University of California, Berkeley</li>
//             <li>California Institute of Technology (Caltech)</li>
//             <li>Princeton University</li>
//             <li>University of Chicago</li>
//             <li>Yale University</li>
//             <li>Columbia University</li>
//             <li>University of Pennsylvania</li>
//           </ul>
//         <p>These institutions are recognized globally for their academic excellence and research contributions.</p>
//       </div>
//     </>
//   );
// };

// export default MalaysiaContent;



import Link from "next/link";
import React from "react";
import { FaUniversity } from "react-icons/fa";

const MalaysiaContent = ({ checkMatchCourses }) => {
  return (
    <>
      <div className="rbt-course-feature-inner">
        <div className="d-flex align-items-center gap-3">
          <h5><FaUniversity /></h5>
          <h5>Renowned Universities</h5>
        </div>

        <p>Some of Malaysia's top universities include:</p>

        <ul>
          <li><strong>University of Malaya (UM)</strong> – Malaysia's oldest and highest-ranking university, known for research excellence.</li>
          <li><strong>Universiti Putra Malaysia (UPM)</strong> – Renowned for agriculture, engineering, and life sciences.</li>
          <li><strong>Universiti Kebangsaan Malaysia (UKM)</strong> – Offers a broad spectrum of programs with a strong research focus.</li>
          <li><strong>Universiti Teknologi Malaysia (UTM)</strong> – Specializes in engineering and technology programs.</li>
          <li><strong>Monash University Malaysia</strong> – The Malaysian campus of Australia's Monash University, offering globally recognized degrees.</li>
          <li><strong>Taylor's University</strong> – Known for hospitality, tourism, and business programs.</li>
        </ul>

        <p>These institutions are well-regarded for their academic strengths, industry relevance, and international collaborations.</p>
      </div>
    </>
  );
};

export default MalaysiaContent;
