import Image from "next/image";
import Link from "next/link";
import { RiGraduationCapLine } from "react-icons/ri";
const ServiceNine = ({ data }) => {
  console.log("data", data?.data);

  const serviceData = data?.data;

  return (
    <>
      {serviceData &&
        serviceData?.map((data, index) => (
          <div className="container" key={index}>
            <div className="row mb--60">
              <div className="col-lg-12">
                <div className="section-title text-center">
                  {/* <h2 className="title">{data.name}</h2> */}
                </div>
              </div>
            </div>

            <div className="row row--15 mt_dec--30">
              <div className="col-xl-3 col-md-6 col-sm-6 col-12 mt--30">
                <div className="rbt-flipbox">
                  <div
                    className={`rbt-flipbox-wrap rbt-service rbt-service-1 ${
                      // item.bgOne
                      //   ?
                      "card-bg-1"
                      // : "" || item.bgTwo
                      // ? "card-bg-2"
                      // : "" || item.bgThree
                      // ? "card-bg-3"
                      // : "" || item.bgFour
                      // ? "card-bg-4"
                    }`}
                  >
                    <div className="rbt-flipbox-front rbt-flipbox-face inner">
                      <div className="icon">
                        <Image
                          src={`https://server.eaconsultancy.info/${data.image}`}
                          width={55}
                          height={55}
                          alt="card-icon"
                        />
                      </div>
                      <div className="content">
                        <h5 className="title">
                          <Link href="#">{data.name}</Link>
                        </h5>
                        <p>{data.text}</p>
                        <Link className="rbt-btn-link stretched-link" href="#">
                          Learn More<i className="feather-arrow-right"></i>
                        </Link>
                      </div>
                    </div>
                    <div className="rbt-flipbox-back rbt-flipbox-face inner">
                      <ul className="rbt-list-style-3 color-white">
                        <li className="d-flex align-items-center gap-2">
                          <p>Requirements: {data.requirements}</p>
                        </li>
                        <li className="d-flex align-items-center gap-2">
                          <p>Programs: {data.programs}</p>
                        </li>
                        <li className="d-flex align-items-center gap-2">
                          <p>IELTS: {data.IELTS}</p>
                        </li>
                        <li className="d-flex align-items-center gap-2">
                          <p>Solvency: {data.solvency}</p>
                        </li>
                        <li className="d-flex align-items-center gap-2">
                          <p>Processing Time: {data.processing}</p>
                        </li>
                        <li className="d-flex align-items-center gap-2">
                          <p>Scholarships: {data.scholarships}</p>
                        </li>
                      </ul>
                      <Link
                        className="rbt-btn rbt-switch-btn btn-white btn-sm mt-3"
                        href="#"
                      >
                        <span data-text="Learn More">Learn More</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default ServiceNine;
