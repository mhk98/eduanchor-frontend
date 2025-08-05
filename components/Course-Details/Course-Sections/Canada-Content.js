import Link from "next/link";
import React from "react";
import { FaUniversity } from "react-icons/fa";

const CanadaContent = ({ checkMatchCourses }) => {
  return (
    <>
      <div className="rbt-course-feature-inner">
      <div className="d-flex align-items-center gap-3 mt-4">
            <h5><FaUniversity /></h5>
            <h5>Renowned Universities</h5>
          </div>

          <ul className="mt-2">
            <li>University of Toronto</li>
            <li>McGill University</li>
            <li>University of British Columbia (UBC)</li>
            <li>University of Alberta</li>
            <li>University of Waterloo</li>
            <li>McMaster University</li>
            <li>Western University</li>
            <li>Queen’s University</li>
            <li>Simon Fraser University</li>
            <li>York University</li>
          </ul>

          <p className="mt-3">
            These institutions are recognized globally for their academic excellence and research contributions.
          </p>
 
      </div>
    </>
  );
};

export default CanadaContent;
