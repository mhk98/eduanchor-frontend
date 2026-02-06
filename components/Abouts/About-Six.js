import Image from "next/image";
import Link from "next/link";
import Typed from "typed.js";
import { useEffect, useState } from "react";

const AboutSix = ({ btnClass, btnText }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch banner data from API
  useEffect(() => {
    const fetchBanner = async () => {
      try {
        const response = await fetch(
          "https://server.eaconsultancy.info/api/v1/workstation",
        );
        const data = await response.json();
        // Assuming the API returns an array, take the first banner
        setItems(data?.data);
      } catch (error) {
        console.error("Error fetching banner:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBanner();
  }, []);

  // Initialize Typed.js
  useEffect(() => {
    if (!items) return;

    const typeInstance = new Typed(".typed-text", {
      strings: ["Mission.", "Vision.", "Planning."],
      typeSpeed: 80,
      backSpeed: 60,
      startDelay: 200,
      loop: true,
      showCursor: true,
      cursorChar: "|",
    });

    return () => typeInstance.destroy();
  }, [items]);

  if (loading) return <p className="text-center py-10">Loading items...</p>;
  if (!items) return <p className="text-center py-10">No items data found.</p>;

  return (
    <>
      {items && (
        <div className="row g-5 align-items-center">
          <div className="col-lg-6">
            <div className="content">
              <Image
                src={`https://server.eaconsultancy.info/${items.image}`}
                width={638}
                height={410}
                alt="About Images"
              />
            </div>
          </div>
          {/* <div
              className="col-lg-6"
              data-sal="slide-up"
              data-sal-duration="700"
            >
              <div className="inner pl--50 pl_sm--5">
                <div className="section-title text-start">
                  <span className="subtitle bg-primary-opacity">
                    {data.tag}
                  </span>
                  <h2 className="title">{data.title}</h2>
                  <p className="description mt--20">
                    <strong>{data.strong}</strong> {data.desc}
                  </p>
                  <div className="read-more-btn mt--40">
                    <Link className={`rbt-btn ${btnClass}`} href="#">
                      <span data-text={`${btnText}`}>{btnText}</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div> */}
        </div>
      )}
    </>
  );
};

export default AboutSix;
