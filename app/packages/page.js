"use client";
import RangeSlider from "@/components/elements/RangeSlider";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useState, useEffect } from "react";
import { tourPackages } from "@/components/data/packages";

export default function TourPackageV4() {
  const [isToggled, setToggled] = useState(false);
  const [loading, setLoading] = useState(true);
  const handleToggle = () => setToggled(!isToggled);

  // Simulate loading delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // CSS for skeleton animation
  const skeletonStyle = {
    animation: "pulse 1.5s infinite ease-in-out",
  };

  // Skeleton loader for package cards
  const PackageSkeleton = () => (
    <div className="col-md-6 col-lg-3">
      <div className="tour-listing box-sd">
        <div className="tour-listing-image">
          <div className="badge-top flex-two">
            <span
              className="feature"
              style={{
                backgroundColor: "#e7e7e7",
                color: "transparent",
                ...skeletonStyle,
              }}
            >
              ........
            </span>
          </div>
          <div
            className="skeleton-img"
            style={{
              width: "310px",
              height: "240px",
              backgroundColor: "#e7e7e7",
              ...skeletonStyle,
            }}
          ></div>
        </div>
        <div className="tour-listing-content">
          <span
            className="tag-listing"
            style={{
              backgroundColor: "#e7e7e7",
              color: "transparent",
              ...skeletonStyle,
            }}
          >
            ........
          </span>
          <span
            className="map"
            style={{
              backgroundColor: "#e7e7e7",
              width: "70%",
              height: "20px",
              display: "block",
              marginTop: "10px",
              color: "transparent",
              ...skeletonStyle,
            }}
          >
            ........
          </span>
          <h3 className="title-tour-list">
            <div
              style={{
                backgroundColor: "#e7e7e7",
                width: "100%",
                height: "25px",
                marginTop: "10px",
                color: "transparent",
                ...skeletonStyle,
              }}
            >
              ........
            </div>
          </h3>
          <div
            className="review"
            style={{
              backgroundColor: "#e7e7e7",
              width: "60%",
              height: "20px",
              marginTop: "10px",
              color: "transparent",
              ...skeletonStyle,
            }}
          >
            ........
          </div>
          <div className="icon-box flex-three">
            <div
              className="icons flex-three"
              style={{
                backgroundColor: "#e7e7e7",
                width: "50%",
                height: "20px",
                marginTop: "10px",
                color: "transparent",
                ...skeletonStyle,
              }}
            >
              ........
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <style jsx global>{`
        @keyframes pulse {
          0% {
            opacity: 0.6;
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0.6;
          }
        }
      `}</style>
      <Layout
        headerStyle={2}
        footerStyle={2}
        breadcrumbTitle="Best Tour Packages"
        imgbg={"/assets/images/page/tour-package.jpg"}
      >
        <div>
          <section className="archieve-tour">
            <div className="tf-container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="tab-content" id="myTabContent">
                    <div
                      className="tab-pane fade show active"
                      id="new-york-tab-pane"
                      role="tabpanel"
                      aria-labelledby="new-york-tab"
                      tabIndex={0}
                    >
                      <div className="row">
                        {loading
                          ? // Show skeleton loaders while loading
                            [...Array(8)].map((_, index) => (
                              <PackageSkeleton key={index} />
                            ))
                          : // Show actual tour packages when loaded
                            tourPackages.map((tour, index) => (
                              <div
                                key={tour.id}
                                className={`col-md-6 col-lg-3 wow fadeInUp animated`}
                                data-wow-delay={`${0.1 * (index + 1)}s`}
                              >
                                <div className="tour-listing box-sd">
                                  <Link
                                    href={`/packages/${tour.id}`}
                                    className="tour-listing-image"
                                  >
                                    <div className="badge-top flex-two">
                                      <span className="feature">Featured</span>
                                    </div>
                                    <img
                                      src={tour.image}
                                      alt={tour.title}
                                      style={{
                                        width: "310px",
                                        height: "240px",
                                      }}
                                    />
                                  </Link>
                                  <div className="tour-listing-content">
                                    <span className="tag-listing">
                                      Bestseller
                                    </span>
                                    <span className="map">
                                      <i className="icon-Vector4" />
                                      {tour.location}
                                    </span>
                                    <h3 className="title-tour-list">
                                      <Link href={`/packages/${tour.id}`}>
                                        {tour.title}
                                      </Link>
                                    </h3>
                                    <div className="review">
                                      {Array.from(
                                        { length: tour.rating },
                                        (_, i) => (
                                          <i key={i} className="icon-Star" />
                                        )
                                      )}
                                      <span>({tour.reviews} Reviews)</span>
                                    </div>
                                    <div className="icon-box flex-three">
                                      <div className="icons flex-three">
                                        <i className="icon-time-left" />
                                        <span>
                                          {tour.days}D / {tour.nights}N
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
}
