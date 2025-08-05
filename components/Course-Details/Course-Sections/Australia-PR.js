// import React from "react";
// import { IoBagRemoveSharp } from "react-icons/io5";

// const AustraliaPR = () => {
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

// export default AustraliaPR;



import React from "react";
import { IoBagRemoveSharp } from "react-icons/io5";

const AustraliaPR = () => {
  return (
    <>
      <div className="d-flex align-items-center gap-3">
        <h5><IoBagRemoveSharp size={24} /></h5>
        <h5>Post-Study Work Rights and Permanent Residency (PR) Opportunities</h5>
      </div>

      <div>
        <h6 className="fw-bold">Post-Study Work Visa:</h6>
        <ul>
          <li>
            Graduates may be eligible for the <strong>Temporary Graduate Visa (Subclass 485)</strong>, allowing them to work in Australia for 2 to 4 years depending on their qualifications and study location.
          </li>
        </ul>
      </div>

      <div>
        <h6 className="fw-bold">Permanent Residency Pathways:</h6>
        <ul>
          <li>
            <strong>Skilled Independent Visa (Subclass 189):</strong> For individuals with occupations on the skilled occupation list.
          </li>
          <li>
            <strong>Skilled Nominated Visa (Subclass 190):</strong> Requires nomination by an Australian state or territory.
          </li>
          <li>
            <strong>Skilled Work Regional (Provisional) Visa (Subclass 491):</strong> For skilled workers willing to live and work in regional areas. (<a className="text-primary" href="https://en.wikipedia.org/wiki/Permanent_residency_(Australia)?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer">Wikipedia</a>)
          </li>
        </ul>
      </div>
    </>
  );
};

export default AustraliaPR;
