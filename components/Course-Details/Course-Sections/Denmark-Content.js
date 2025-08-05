// import Link from "next/link";
// import React from "react";
// import { FaUniversity } from "react-icons/fa";

// const DenmarkContent = ({ checkMatchCourses }) => {
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

// export default DenmarkContent;



import Link from "next/link";
import React from "react";
import { FaUniversity } from "react-icons/fa";

const DenmarkContent = ({ checkMatchCourses }) => {
  return (
    <>
      <div className="rbt-course-feature-inner">
        <div className="d-flex align-items-center gap-3">
          <h5><FaUniversity /></h5>
          <h5>Renowned Universities</h5>
        </div>

        <p>Some of Denmark's top universities include:</p>

        <ul>
          <li><strong>University of Copenhagen</strong> – Offers a broad spectrum of programs with a strong research focus.</li>
          <li><strong>Aarhus University</strong> – Known for its interdisciplinary approach and innovation.</li>
          <li><strong>Technical University of Denmark (DTU)</strong> – Specializes in engineering and technology programs.</li>
          <li><strong>Copenhagen Business School (CBS)</strong> – Renowned for business and economics studies.</li>
          <li><strong>Aalborg University</strong> – Focuses on problem-based learning and research.</li>
        </ul>

        <p>These institutions are recognized for their academic quality, research excellence, and innovative teaching methods.</p>
      </div>
    </>
  );
};

export default DenmarkContent;
