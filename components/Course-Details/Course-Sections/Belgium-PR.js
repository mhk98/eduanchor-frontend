// import React from "react";
// import { IoBagRemoveSharp } from "react-icons/io5";

// const BelgiumPR = () => {
//   return (
//     <>
//       <div className="d-flex align-items-center gap-3">
//       <h5>< IoBagRemoveSharp  size={24} /></h5>
//       <h5>Post-Study Work Rights and Permanent Residency (PR) Opportunities</h5>                              
//       </div>

//       <div>
//           <h6 className="fw-bold">Post-Graduation Work Permit (PGWP):</h6>
//         <ul>
//           <li>Allows graduates to work in Canada for up to 3 years, depending on the length of the study program.</li>
//          <li>Provides valuable Canadian work experience, which is beneficial when applying for PR.(<a className="text-primary" href="https://www.sangenbd.com/media/blog/canada-student-visa-processing-complete-guideline?utm_source=chatgpt.com">Sangen Edu Ltd</a>)</li>
//         </ul>
//         </div>

//       <div>
//           <h6 className="fw-bold">Permanent Residency Pathways:</h6>
//         <ul>
//           <li><span className="fw-bold">Canadian Experience Class (CEC):</span> For individuals with Canadian work experience.</li>
//           <li><span className="fw-bold">Provincial Nominee Program (PNP):</span> For those nominated by a Canadian province or territory.</li>
//           <li><span className="fw-bold">Express Entry:</span> A points-based system considering factors like age, education, work experience, and language proficiency.</li>

//        </ul>
//         </div>
//     </>
//   );
// };

// export default BelgiumPR;




import React from "react";
import { IoBagRemoveSharp } from "react-icons/io5";

const BelgiumPR = () => {
  return (
    <>
      <div className="d-flex align-items-center gap-3">
        <h5><IoBagRemoveSharp size={24} /></h5>
        <h5>Post-Study Work Rights and Permanent Residency (PR) Opportunities</h5>
      </div>

      <div>
        <h6 className="fw-bold">Post-Graduation Work Rights:</h6>
        <ul>
          <li>International students can apply for a 12-month residence permit extension to search for a job or start a business after graduation.</li>
          <li>This extension is non-renewable and must be applied for before the current student residence permit expires.</li>
          <li>During this period, graduates can work without a separate work permit under specific conditions. (<a className="text-primary" href="https://www.studyinbelgium.be/en/living-in-belgium/after-your-studies?utm_source=chatgpt.com">Study in Belgium</a>)</li>
        </ul>
      </div>

      <div>
        <h6 className="fw-bold">Permanent Residency Pathways:</h6>
        <ul>
          <li><span className="fw-bold">Single Permit for Work:</span> After securing a job, graduates can apply for a Single Permit that combines residence and work authorization.</li>
          <li><span className="fw-bold">Long-Term Residence:</span> After 5 years of legal and uninterrupted stay in Belgium, individuals may apply for long-term residency status in the EU.</li>
          <li><span className="fw-bold">Belgian Permanent Residency:</span> After legally residing in Belgium for at least 5 years and meeting integration and language requirements, one can apply for Belgian permanent residency.</li>
          <li><span className="fw-bold">Path to Citizenship:</span> After 5 years of uninterrupted legal stay and integration (language proficiency, economic participation), it is possible to apply for Belgian citizenship.</li>
        </ul>
      </div>
    </>
  );
};

export default BelgiumPR;
