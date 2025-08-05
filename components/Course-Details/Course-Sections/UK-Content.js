// import Link from "next/link";
// import React from "react";
// import { FaUniversity } from "react-icons/fa";

// const UKContent = ({ checkMatchCourses }) => {
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

// export default UKContent;



import Link from "next/link";
import React from "react";
import { FaUniversity } from "react-icons/fa";

const UKContent = ({ checkMatchCourses }) => {
  return (
    <>
      <div className="rbt-course-feature-inner">
        <div className="d-flex align-items-center gap-3">
          <h5><FaUniversity /></h5>
          <h5>Renowned Universities</h5>
        </div>

        <p>Some of the UK's top universities include:</p>

        <ul>
          <li>
            <strong>University of Oxford</strong> – Renowned for its rigorous academic programs and historic legacy.
          </li>
          <li>
            <strong>University of Cambridge</strong> – Known for excellence in research and teaching.
          </li>
          <li>
            <strong>Imperial College London</strong> – Specializes in science, engineering, medicine, and business.
          </li>
          <li>
            <strong>London School of Economics and Political Science (LSE)</strong> – Focuses on social sciences and economics.
          </li>
          <li>
            <strong>University College London (UCL)</strong> – Offers a wide range of programs across various disciplines.
          </li>
        </ul>

        <p>These institutions are globally recognized for their academic excellence and innovative research.</p>
      </div>
    </>
  );
};

export default UKContent;
