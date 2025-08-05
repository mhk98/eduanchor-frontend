import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoDocumentTextOutline } from "react-icons/io5";

const Instructor = ({ checkMatchCourses }) => {
  return (
    <>
      {/* <div className="about-author border-0 pb--0 pt--0">
        <div className="section-title mb--30">
          <h4 className="rbt-title-style-3">{checkMatchCourses.title}</h4>
        </div>
        {checkMatchCourses.body.map((teacher, innerIndex) => (
          <div className="media align-items-center" key={innerIndex}>
            <div className="thumbnail">
              <Link href={`/profile/${teacher.id}`}>
                <Image
                  src={teacher.img}
                  width={250}
                  height={250}
                  alt="Author Images"
                />
              </Link>
            </div>
            <div className="media-body">
              <div className="author-info">
                <h5 className="title">
                  <Link
                    className="hover-flip-item-wrapper"
                    href={`/profile/${teacher.id}`}
                  >
                    {teacher.name}
                  </Link>
                </h5>
                <span className="b3 subtitle">{teacher.type}</span>
                <ul className="rbt-meta mb--20 mt--10">
                  <li>
                    <i className="fa fa-star color-warning"></i>
                    {teacher.ratingNumber} Reviews
                    <span className="rbt-badge-5 ml--5">
                      {teacher.star} Rating
                    </span>
                  </li>
                  <li>
                    <i className="feather-users"></i> {teacher.studentNumber}
                    Students
                  </li>
                  <li>
                    <Link href="#">
                      <i className="feather-video"></i> {teacher.course} Courses
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="content">
                <p className="description">{teacher.desc}</p>

                <ul className="social-icon social-default icon-naked justify-content-start">
                  {teacher.social.map((social, index) => (
                    <li key={index}>
                      <Link href={social.link}>
                        <i className={`feather-${social.icon}`}></i>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div> */}

      <div className="col-lg-12">
       
            <div className="d-flex align-items-center gap-3">
                        <h5>< IoDocumentTextOutline  size={24} /></h5>
                        <h5 className="">Visa Processing and Required Documents</h5>
                        </div>
                        <p><span className="fw-bold">Visa Type:</span> Study Permit(<a className="text-primary" href="https://www.mastersportal.com/visa-info/101-56/students-from-bangladesh-to-canada.html?utm_source=chatgpt.com">Masters Portal</a>)</p>
              
              <div>
                <h6 className="fw-bold">Application Steps:</h6>
              <ul>
                <li><span className="fw-bold">Obtain Admission:</span> CSecure an acceptance letter from a Designated Learning Institution (DLI).</li>
                <li><span className="fw-bold">Gather Documents:</span> Prepare necessary documents, including proof of funds and medical exams.</li>
                <li><span className="fw-bold">Apply Online:</span> Submit your application through the <a className="text-primary" href="https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit/apply.html">IRCC website</a>.</li>
                <li><span className="fw-bold">Biometrics:</span> Schedule and attend a biometrics appointment.</li>
                <li><span className="fw-bold">Medical Examination:</span> Undergo a medical exam by an IRCC-approved panel physician.</li>
                <li><span className="fw-bold">Wait for Decision:</span> Processing times vary; monitor your application status online. (<a className="text-primary" href="https://pfecglobal.com.bd/visa-requirements-for-studying-in-canada/?utm_source=chatgpt.com">pfecglobal.com.bd</a>, <a className="text-primary" href="https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit/apply.html?utm_source=chatgpt.com"> Canada.gc.ca</a>, <a className="text-primary" href="https://www.sangenbd.com/media/blog/canada-student-visa-processing-complete-guideline?utm_source=chatgpt.com">Sangen Edu Ltd</a>)</li>

              </ul>
              </div>
      
              <div>
                <h6 className="fw-bold">Required Documents:</h6>
              <ul>
                <li>Valid passport</li>
                <li>Letter of acceptance from a DLI</li>
                <li>Proof of financial support (e.g., bank statements, GIC)</li>
                <li>Passport-sized photographs</li>
                <li>Immigration forms (e.g., IMM 1294)</li>
                <li>Statement of Purpose (SOP)</li>
                <li>Medical exam confirmation</li>
                <li>Police clearance certificate</li>
                <li>English proficiency test results</li>
                <li>Biometrics receipt. (<a className="text-primary" href="https://www.aeccglobal.com/blog/canada-student-visa-documentation-checklist?utm_source=chatgpt.com">aecc</a>, <a className="text-primary" href="https://www.sangenbd.com/media/blog/canada-student-visa-processing-complete-guideline?utm_source=chatgpt.com"> Sangen Edu Ltd</a>, <a className="text-primary" href="https://gmc-studies.com/how-to-get-canadian-student-visa-from-bangladesh/?utm_source=chatgpt.com"> gmc-studies</a>, <a href="https://en.wikipedia.org/wiki/Visa_policy_of_Canada?utm_source=chatgpt.com"> Wikipedia</a>)</li>

                
              </ul>
              </div>

              <div>
                <h6 className="fw-bold">Application Fees:</h6>
              <ul>
                <li><span className="fw-bold">Study Permit Processing Fee:</span> CAD 150</li>
                <li><span className="fw-bold">Biometrics Fee:</span> CAD 85(<a className="text-primary" href="https://www.mastersportal.com/visa-info/101-56/students-from-bangladesh-to-canada.html?utm_source=chatgpt.com"> Masters Portal</a>)</li>      
              </ul>
              </div>

              <div>
                <h6 className="fw-bold">Embassy and Resources:</h6>
              <ul>
                <li><span className="fw-bold">IRCC Study Permit Application:</span><a className="text-primary" href="https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit/apply.html"> Apply Here</a></li>
                <li><span className="fw-bold">Document Checklist (IMM 5483):</span><a className="text-primary" href="https://www.canada.ca/en/immigration-refugees-citizenship/services/application/application-forms-guides/imm5483.html"> Download Checklist</a></li>      
              </ul>
              </div>
      
            </div>
    </>
  );
};

export default Instructor;
