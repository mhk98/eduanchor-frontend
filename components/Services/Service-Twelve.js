import Image from "next/image";
import Link from "next/link";

const ServiceTwelve = ({ data }) => {
  const serviceData = data?.data;

  if (!serviceData || serviceData.length === 0) return null;

  return (
    <div className="container">
      {/* Optional Section Title */}
      {serviceData[0]?.sectionTitle && (
        <div className="row mb--60">
          <div className="col-12 text-center">
            <div className="section-title">
              <h2 className="title">{serviceData[0].sectionTitle}</h2>
            </div>
          </div>
        </div>
      )}

      <div className="row row--15 mt_dec--30">
        {serviceData.map((item, index) => (
          <div
            className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 mt--30"
            key={index}
          >
            <div className="service-card service-card-6 h-100">
              <div className="inner">
                <div className="icon mb-3">
                  <Image
                    src={item.img}
                    width={60}
                    height={60}
                    alt={item.title || "Service Icon"}
                  />
                </div>
                <div className="content">
                  <h6 className="title">
                    <Link href="#">{item.title}</Link>
                  </h6>
                  <p className="description">{item.text}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceTwelve;
