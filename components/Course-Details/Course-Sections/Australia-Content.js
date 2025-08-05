import Link from "next/link";
import React from "react";
import { FaUniversity } from "react-icons/fa";

const AustraliaContent = ({ checkMatchCourses }) => {
  return (
    <>
      <div className="rbt-course-feature-inner">
        <div className="d-flex align-items-center gap-3">
          <h5><FaUniversity /></h5>
          <h5>Renowned Universities</h5>
        </div>

        <p>Some of Australia's top universities include:</p>

        <ul>
          <li>University of Melbourne</li>
          <li>Australian National University (ANU)</li>
          <li>University of Sydney</li>
          <li>University of Queensland (UQ)</li>
          <li>University of New South Wales (UNSW Sydney)</li>
          <li>Monash University</li>
          <li>University of Western Australia (UWA)</li>
          <li>University of Adelaide</li>
          <li>University of Technology Sydney (UTS)</li>
          <li>Macquarie University</li>
        </ul>

        <p>These institutions are recognized globally for their academic excellence and research contributions.</p>
      </div>
    </>
  );
};

export default AustraliaContent;
