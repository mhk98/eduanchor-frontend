// import Link from "next/link";
// import React from "react";
// import { FaUniversity } from "react-icons/fa";

// const GermanyContent = ({ checkMatchCourses }) => {
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

// export default GermanyContent;


import Link from "next/link";
import React from "react";
import { FaUniversity } from "react-icons/fa";

const GermanyContent = ({ checkMatchCourses }) => {
  return (
    <>
      <div className="rbt-course-feature-inner">
        <div className="d-flex align-items-center gap-3">
          <h5><FaUniversity /></h5>
          <h5>Renowned Universities</h5>
        </div>

        <p>Some of Germany's top universities include:</p>

        <ul>
          <li>Technical University of Munich (TUM)</li>
          <li>Ludwig Maximilian University of Munich (LMU Munich)</li>
          <li>Heidelberg University</li>
          <li>Humboldt University of Berlin</li>
          <li>University of Bonn</li>
          <li>RWTH Aachen University</li>
          <li>University of Freiburg</li>
          <li>Goethe University Frankfurt</li>
          <li>University of Cologne</li>
          <li>University of Göttingen</li>
        </ul>

        <p>
          These institutions are recognized globally for their academic excellence and research contributions.{" "}
          <span className="text-muted">(Sources: Reddit, Masters Portal, Times Higher Education)</span>
        </p>
      </div>
    </>
  );
};

export default GermanyContent;
