"use client";
import Image from "next/image";
import Link from "next/link";
import { useParallax } from "react-scroll-parallax";
import { usePathname } from "next/navigation";
import { FaRegHeart } from "react-icons/fa";
import { FiBook } from "react-icons/fi";
const AboutTwo = ({ data }) => {
  const pathname = usePathname();

  // const { ref: ref1, style: style1 } = useParallax({
  //   translateY: [0, -20],
  //   easing: "easeOutQuad",
  //   speed: 10,
  //   shouldAlwaysCompleteAnimation: true,
  // });

  // const { ref: ref2, style: style2 } = useParallax({
  //   translateY: [0, 20],
  //   easing: "easeOutQuad",
  //   speed: 10,
  //   shouldAlwaysCompleteAnimation: true,
  // });

  // const { ref: ref3, style: style3 } = useParallax({
  //   translateY: [0, 20],
  //   easing: "easeOutQuad",
  //   speed: 10,
  //   shouldAlwaysCompleteAnimation: true,
  // });

  const AboutData = data?.data;

  console.log("AboutData:", AboutData);
  return (
    <>
      {AboutData &&
        AboutData?.map((data, index) => (
          <div className="row g-5 align-items-center" key={index}>
            <div className="col-lg-6">
              <div className="thumbnail-wrapper">
                <div className="thumbnail-wrapper">
                  {/* <div
                    className={`thumbnail image-1`}
                    ref={ref1}
                    style={style1}
                  >
                    <Image
                      src={`https://server.eaconsultancy.info/${data.image1}`}
                      width={366}
                      height={490}
                      alt="Education Images"
                    />
                  </div>
                  <div
                    className={`thumbnail image-2`}
                    ref={ref2}
                    style={style2}
                  >
                    <Image
                      src={`https://server.eaconsultancy.info/${data.image2}`}
                      width={308}
                      height={250}
                      alt="Education Images"
                    />
                  </div>
                  <div
                    className={`thumbnail image-3`}
                    ref={ref3}
                    style={style3}
                  >
                    <Image
                      src={`https://server.eaconsultancy.info/${data.image3}`}
                      width={405}
                      height={490}
                      alt="Education Images"
                    />
                  </div> */}

                  <div className="thumbnail image-1">
                    <Image
                      src={`https://server.eaconsultancy.info/${data.image1}`}
                      width={366}
                      height={490}
                      alt="Education Images"
                    />
                  </div>

                  <div className="thumbnail image-2">
                    <Image
                      src={`https://server.eaconsultancy.info/${data.image2}`}
                      width={308}
                      height={250}
                      alt="Education Images"
                    />
                  </div>

                  <div className="thumbnail image-3">
                    <Image
                      src={`https://server.eaconsultancy.info/${data.image3}`}
                      width={405}
                      height={490}
                      alt="Education Images"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="inner pl--50 pl_sm--0 pl_md--0">
                <div className="section-title text-start">
                  {/* <span className="subtitle bg-coral-opacity">{data.tag}</span> */}
                  <h2 className="title">{data.title}</h2>
                </div>

                <p className="description mt--30">{data.text}</p>

                <div className="rbt-feature-wrapper mt--20 ml_dec_20">
                  <div
                    className="rbt-feature feature-style-2 rbt-radius"
                    key={data.id}
                  >
                    <div
                      className={`icon ${
                        // item.isPrimary
                        // "bg-primary-opacity"
                        "bg-pink-opacity"
                      }`}
                    >
                      {/* <i className={item.icon}></i> */}
                      <FaRegHeart size={25} />
                    </div>
                    <div className="feature-content">
                      <h6 className="feature-title">{data.subTitle1}</h6>
                      <p className="feature-description">{data.subText1}</p>
                    </div>
                  </div>
                </div>
                <div className="rbt-feature-wrapper mt--20 ml_dec_20">
                  <div
                    className="rbt-feature feature-style-2 rbt-radius"
                    key={data.id}
                  >
                    <div
                      className={`icon ${
                        // item.isPrimary
                        "bg-primary-opacity"
                        // : "bg-pink-opacity"
                      }`}
                    >
                      <FiBook size={25} />
                    </div>
                    <div className="feature-content">
                      <h6 className="feature-title">{data.subTitle2}</h6>
                      <p className="feature-description">{data.subText2}</p>
                    </div>
                  </div>
                </div>

                {pathname === "/17-online-academy" ? (
                  ""
                ) : (
                  <div className="about-btn mt--40">
                    <Link
                      className="rbt-btn btn-gradient hover-icon-reverse"
                      href="#"
                    >
                      <span className="icon-reverse-wrapper">
                        <span className="btn-text">More About Us</span>
                        <span className="btn-icon">
                          <i className="feather-arrow-right"></i>
                        </span>
                        <span className="btn-icon">
                          <i className="feather-arrow-right"></i>
                        </span>
                      </span>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default AboutTwo;
