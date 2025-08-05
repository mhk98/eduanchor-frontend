import React from "react";
import { IoMdCheckbox } from "react-icons/io";

const AustraliaRequirements = () => {
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
            <li><span className="fw-bold">Academic Qualifications:</span> Higher Secondary Certificate (HSC) or equivalent.</li>
            <li><span className="fw-bold">English Proficiency:</span> IELTS (minimum 6.0 overall, no band less than 5.5) or equivalent scores in TOEFL iBT, PTE Academic, or Cambridge English: Advanced.</li>
            <li><span className="fw-bold">Additional Requirements:</span> Some programs may require specific subject prerequisites or portfolios. (<a className="text-primary" href="https://en.wikipedia.org/wiki/Education_in_Australia">Wikipedia</a>)</li>
          </ul>
        </div>

        <div>
          <h6 className="fw-bold">Postgraduate Programs:</h6>
          <ul>
            <li><span className="fw-bold">Academic Qualifications:</span> Bachelor’s degree from a recognized institution.</li>
            <li><span className="fw-bold">English Proficiency:</span> IELTS (minimum 6.5 overall, no band less than 6.0) or equivalent scores in TOEFL iBT, PTE Academic, or Cambridge English: Advanced.</li>
            <li><span className="fw-bold">Additional Requirements:</span> May include relevant work experience, research proposals, or portfolios, depending on the program.</li>
          </ul>
        </div>

        <p><span className="fw-bold">Note:</span> Specific requirements may vary by institution and program. It's essential to check individual university guidelines.</p>
      </div>
    </>
  );
};

export default AustraliaRequirements;
