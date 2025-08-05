// import React from "react";
// import { IoBagRemoveSharp } from "react-icons/io5";

// const NetherlandPR = () => {
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

// export default NetherlandPR;



import React from "react";
import { IoBagRemoveSharp } from "react-icons/io5";

const NetherlandPR = () => {
  return (
    <>
      <div className="d-flex align-items-center gap-3">
        <h5><IoBagRemoveSharp size={24} /></h5>
        <h5>Post-Study Work Rights and Permanent Residency (PR) Opportunities</h5>
      </div>

      <div>
        <h6 className="fw-bold">Post-Study Work Rights:</h6>
        <ul>
          <li>
            After graduation, international students can apply for an orientation year (zoekjaar) permit, allowing them to stay in the Netherlands for up to 12 months to seek employment.
          </li>
          <li>
            During this period, graduates can work in any job without a work permit.
          </li>
        </ul>
      </div>

      <div>
        <h6 className="fw-bold">Permanent Residency (PR):</h6>
        <ul>
          <li>
            After five years of continuous legal residence in the Netherlands, individuals may apply for permanent residency, provided they meet integration and language requirements.
          </li>
          <li>
            Holding a stable job and demonstrating social integration can strengthen the PR application.
          </li>
        </ul>
      </div>
    </>
  );
};

export default NetherlandPR;
