// import React from "react";
// import { IoMdCheckbox } from "react-icons/io";

// const GermanyRequirements = () => {
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

// export default GermanyRequirements;


import React from "react";
import { IoMdCheckbox } from "react-icons/io";

const GermanyRequirements = () => {
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
            <li><span className="fw-bold">Academic Qualifications:</span> Higher Secondary Certificate (HSC) with a GPA of at least 4.00 out of 5.00.</li>
            <li><span className="fw-bold">Foundation Year:</span> Completion of one year of undergraduate studies at a recognized Bangladeshi university.</li>
            <li><span className="fw-bold">Language Proficiency:</span> IELTS score of 6.5 or higher for English-taught programs; B2 level proficiency in German for German-taught programs.</li>
            <li><span className="fw-bold">Study Gap:</span> A maximum study gap of 1.5 years is generally accepted. <span className="text-muted">(Sources: NWC Education, Career Paths)</span></li>
          </ul>
        </div>

        <div>
          <h6 className="fw-bold">Postgraduate Programs:</h6>
          <ul>
            <li><span className="fw-bold">Academic Qualifications:</span> Bachelor’s degree with a minimum CGPA of 3.0 out of 4.0.</li>
            <li><span className="fw-bold">Language Proficiency:</span> IELTS score of 6.5 or higher for English-taught programs; B2 level proficiency in German for German-taught programs.</li>
            <li><span className="fw-bold">Additional Requirements:</span> Some programs may require GRE or GMAT scores, letters of recommendation, and a statement of purpose.</li>
          </ul>
        </div>

        <p><span className="fw-bold">Note:</span> Specific requirements may vary by institution and program. It's essential to check individual university guidelines.</p>
      </div>
    </>
  );
};

export default GermanyRequirements;
