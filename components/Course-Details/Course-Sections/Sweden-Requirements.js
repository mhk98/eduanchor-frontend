// import React from "react";
// import { IoMdCheckbox } from "react-icons/io";

// const SwedenRequirements = () => {
//   return (
//     <>
//       <div className="col-lg-12">
 
//       <div className="d-flex align-items-center gap-3">
//                   <h5>< IoMdCheckbox color="green" size={24} /></h5>
//                   <h5 className="">Admission Requirements for Bangladeshi Students</h5>
//                   </div>
        
//         <div>
//           <h6 className="fw-bold">Undergraduate Programs:</h6>
//         <ul>
//           <li><span className="fw-bold">Academic Qualifications:</span> Completion of Higher Secondary Certificate (HSC) or equivalent.</li>
//           <li><span className="fw-bold">English Proficiency:</span> IELTS (minimum 6.5) or TOEFL iBT (minimum 80).</li>
//           <li><span className="fw-bold">Additional Requirements:</span> Some programs may require SAT scores or specific subject prerequisites.</li>
//         </ul>
//         </div>

//         <div>
//           <h6 className="fw-bold">Graduate Programs:</h6>
//         <ul>
//           <li><span className="fw-bold">Academic Qualifications:</span> Bachelor’s degree from a recognized institution.</li>
//           <li><span className="fw-bold">English Proficiency:</span> IELTS (minimum 6.5 overall, no band less than 6.0) or TOEFL iBT (minimum 90).</li>
//           <li><span className="fw-bold">Additional Requirements:</span> GRE or GMAT scores (depending on the program), letters of recommendation, and a statement of purpose.</li>
//         </ul>
//         </div>

//         <p><span className="fw-bold">Note:</span> Requirements may vary by institution and program. It's essential to check specific university guidelines.</p>
//       </div>
//     </>
//   );
// };

// export default SwedenRequirements;



import React from "react";
import { IoMdCheckbox } from "react-icons/io";

const SwedenRequirements = () => {
  return (
    <>
      <div className="col-lg-12">
        <div className="d-flex align-items-center gap-3">
          <h5><IoMdCheckbox color="green" size={24} /></h5>
          <h5 className="">Admission Requirements for Bangladeshi Students</h5>
        </div>

        <div>
          <h6 className="fw-bold">Undergraduate Programs:</h6>
          <ul>
            <li>
              <span className="fw-bold">Academic Qualifications:</span> Higher Secondary Certificate (HSC) with strong academic performance.
            </li>
            <li>
              <span className="fw-bold">Language Proficiency:</span> IELTS score of 6.0 or higher, with no section below 5.5.
            </li>
            <li>
              <span className="fw-bold">Additional Requirements:</span> Specific subject prerequisites depending on the chosen program.
            </li>
          </ul>
        </div>

        <div>
          <h6 className="fw-bold">Postgraduate Programs:</h6>
          <ul>
            <li>
              <span className="fw-bold">Academic Qualifications:</span> Bachelor’s degree from a recognized institution with a minimum CGPA as specified by the university.
            </li>
            <li>
              <span className="fw-bold">Language Proficiency:</span> IELTS score of 6.5 or higher, with no section below 5.5.
            </li>
            <li>
              <span className="fw-bold">Additional Requirements:</span> May include letters of recommendation, a statement of purpose, and relevant work experience, depending on the program.
            </li>
          </ul>
        </div>

        <p>
          <span className="fw-bold">Note:</span> Requirements may vary by institution and program. Always verify with the specific university’s admission guidelines.
        </p>
      </div>
    </>
  );
};

export default SwedenRequirements;
