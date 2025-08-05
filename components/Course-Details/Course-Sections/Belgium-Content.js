// import Link from "next/link";
// import React from "react";
// import { FaUniversity } from "react-icons/fa";

// const BelgiumContent = ({ checkMatchCourses }) => {
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

// export default BelgiumContent;


import Link from "next/link";
import React from "react";
import { FaUniversity } from "react-icons/fa";

const BelgiumContent = ({ checkMatchCourses }) => {
  return (
    <>
      <div className="rbt-course-feature-inner">
        <div className="d-flex align-items-center gap-3">
          <h5><FaUniversity /></h5>
          <h5>Renowned Universities</h5>
        </div>

        <p>Some of Belgium's top universities include:</p>

        <ul>
          <li>KU Leuven</li>
          <li>Ghent University</li>
          <li>Université catholique de Louvain (UCLouvain)</li>
          <li>University of Antwerp</li>
          <li>Université Libre de Bruxelles (ULB)</li>
          <li>Vrije Universiteit Brussel (VUB)</li>
          <li>University of Liège</li>
        </ul>

        <p>These institutions are recognized globally for their academic excellence and research contributions.</p>
      </div>
    </>
  );
};

export default BelgiumContent;
