// import Link from "next/link";
// import React from "react";
// import { FaUniversity } from "react-icons/fa";

// const NetherlandContent = ({ checkMatchCourses }) => {
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

// export default NetherlandContent;



import Link from "next/link";
import React from "react";
import { FaUniversity } from "react-icons/fa";

const NetherlandContent = ({ checkMatchCourses }) => {
  return (
    <>
      <div className="rbt-course-feature-inner">
        <div className="d-flex align-items-center gap-3">
          <h5><FaUniversity /></h5>
          <h5>Renowned Universities</h5>
        </div>

        <p>Some of the top universities in the Netherlands include:</p>

        <ul>
          <li>Delft University of Technology (TU Delft)</li>
          <li>University of Amsterdam (UvA)</li>
          <li>Eindhoven University of Technology (TU/e)</li>
          <li>Leiden University</li>
          <li>Utrecht University</li>
          <li>Wageningen University & Research</li>
          <li>Erasmus University Rotterdam</li>
          <li>Vrije Universiteit Amsterdam (VU Amsterdam)</li>
          <li>Maastricht University</li>
          <li>Radboud University</li>
        </ul>

        <p>
          These institutions are globally recognized for their research output, innovative teaching, and international outlook.
        </p>
      </div>
    </>
  );
};

export default NetherlandContent;
