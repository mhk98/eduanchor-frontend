import Image from "next/image";
import Link from "next/link";

const ServiceNine = ({ data }) => {
  const bgClasses = ["card-bg-1", "card-bg-2", "card-bg-3", "card-bg-4"];

  const serviceData = data?.data;

  return (
    // <div className="container">
    //   {serviceData && (
    //     <>
    //       <div className="row mb--60">
    //         <div className="col-lg-12">
    //           <div className="section-title text-center">
    //             <h2 className="title">Our Services</h2>
    //           </div>
    //         </div>
    //       </div>

    //       <div className="row row--15 mt_dec--30">
    //         {serviceData.map((item, index) => (
    //           <div
    //             className="col-12 col-sm-6 col-md-4 col-lg-3 mt--30"
    //             key={index}
    //           >
    //             <div className="rbt-flipbox h-100">
    //               <div
    //                 className={`rbt-flipbox-wrap rbt-service rbt-service-1 card-bg-1`}
    //               >
    //                 {/* Front Face */}
    //                 <div className="rbt-flipbox-front rbt-flipbox-face inner">
    //                   <div className="icon">
    //                     {item.image ? (
    //                       <Image
    //                         src={`https://server.eaconsultancy.info/${item.image}`}
    //                         width={55}
    //                         height={55}
    //                         alt="card-icon"
    //                       />
    //                     ) : (
    //                       <div
    //                         style={{
    //                           width: 55,
    //                           height: 55,
    //                           background: "#ccc",
    //                         }}
    //                       />
    //                     )}
    //                   </div>
    //                   <div className="content">
    //                     <h5 className="title">
    //                       <Link href="#">{item.name}</Link>
    //                     </h5>
    //                     <p>{item.text}</p>
    //                     <Link className="rbt-btn-link stretched-link" href="#">
    //                       Learn More<i className="feather-arrow-right"></i>
    //                     </Link>
    //                   </div>
    //                 </div>

    //                 {/* Back Face */}
    //                 <div className="rbt-flipbox-back rbt-flipbox-face inner">
    //                   <ul className="rbt-list-style-3 color-white">
    //                     <li>
    //                       <p className="fs-4">
    //                         Requirements: {item.requirements}
    //                       </p>
    //                     </li>
    //                     <li>
    //                       <p className="fs-4">Programs: {item.programs}</p>
    //                     </li>
    //                     <li>
    //                       <p className="fs-4">IELTS: {item.IELTS}</p>
    //                     </li>
    //                     <li>
    //                       <p className="fs-4">Solvency: {item.solvency}</p>
    //                     </li>
    //                     <li>
    //                       <p className="fs-4">
    //                         Processing Time: {item.processing}
    //                       </p>
    //                     </li>
    //                     <li>
    //                       <p className="fs-4">
    //                         Scholarships: {item.scholarships}
    //                       </p>
    //                     </li>
    //                   </ul>
    //                   <Link
    //                     className="rbt-btn rbt-switch-btn btn-white btn-sm mt-3"
    //                     href="#"
    //                   >
    //                     <span data-text="Learn More">Learn More</span>
    //                   </Link>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         ))}
    //       </div>
    //     </>
    //   )}
    // </div>

    <>
      <div className="container">
        <div className="row mb--60">
          <div className="col-lg-12">
            <div className="section-title text-center">
              {/* <h2 className="title">Our Services</h2> */}
            </div>
          </div>
        </div>

        <div className="row row--15 mt_dec--30">
          {serviceData &&
            serviceData.map((item, index) => (
              <div
                className="col-12 col-sm-6 col-md-4 col-lg-3 mt--30"
                key={index}
              >
                <div className="rbt-flipbox h-100">
                  <div
                    className={`rbt-flipbox-wrap rbt-service rbt-service-1 ${
                      bgClasses[index % bgClasses.length]
                    }`}
                  >
                    {/* Front Side */}
                    <div className="rbt-flipbox-front rbt-flipbox-face inner">
                      <div className="icon mb-3">
                        <Image
                          src={`https://server.eaconsultancy.info/${item.image}`}
                          width={55}
                          height={55}
                          alt="card-icon"
                        />
                      </div>
                      <div className="content">
                        <h5 className="title">
                          <Link href="#">{item.name}</Link>
                        </h5>
                        <p>{item.text}</p>
                        <Link
                          className="rbt-btn-link stretched-link"
                          href={`/${item.country}`}
                        >
                          Learn More <i className="feather-arrow-right"></i>
                        </Link>
                      </div>
                    </div>

                    {/* Back Side */}
                    <div className="rbt-flipbox-back rbt-flipbox-face inner">
                      <ul className="rbt-list-style-3 color-white">
                        <li>
                          <p className="fs-4">
                            <strong>Requirements:</strong> {item.requirements}
                          </p>
                        </li>
                        <li>
                          <p className="fs-4">
                            <strong>Programs:</strong> {item.programs}
                          </p>
                        </li>
                        <li>
                          <p className="fs-4">
                            <strong>IELTS:</strong> {item.IELTS}
                          </p>
                        </li>
                        <li>
                          <p className="fs-4">
                            <strong>Solvency:</strong> {item.solvency}
                          </p>
                        </li>
                        <li>
                          <p className="fs-4">
                            <strong>Processing Time:</strong> {item.processing}
                          </p>
                        </li>
                        <li>
                          <p className="fs-4">
                            <strong>Scholarships:</strong> {item.scholarships}
                          </p>
                        </li>
                      </ul>
                      <Link
                        className="rbt-btn rbt-switch-btn btn-white btn-sm mt-3"
                        href={`/${item.country}`}
                      >
                        <span data-text="Learn More">Learn More</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default ServiceNine;
