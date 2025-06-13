"use client";
import { useParams } from "next/navigation";
import { tourPackages, oneDayTourPackages } from "@/components/data/packages";
import { useState, useEffect } from "react";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import BookingForm from "./BookingForm";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import MapComponent from "@/components/MapComponent";


export default function TourSingle() {
  const [isTab, setIsTab] = useState(1);
  const [loading, setLoading] = useState(true);
  const handleTab = (i) => {
    setIsTab(i);
  };

  const { id } = useParams();
  const allPackages = [...tourPackages, ...oneDayTourPackages];
  const currentPackage = allPackages.find((pkg) => pkg.id === id);

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
    backgroundColor: "#e7e7e7",
  };

  if (!currentPackage && !loading) {
    return (
      <Layout headerStyle={1} footerStyle={1}>
        <p>Package not found.</p>
      </Layout>
    );
  }

  // Skeleton components
  const SkeletonImage = () => (
    <div
      style={{
        ...skeletonStyle,
        height: "550px",
        width: "100%",
        borderRadius: "8px",
      }}
    ></div>
  );

  const SkeletonText = ({ width, height = "20px", marginBottom = "10px" }) => (
    <div
      style={{
        ...skeletonStyle,
        width: width,
        height: height,
        marginBottom: marginBottom,
        borderRadius: "4px",
      }}
    ></div>
  );

  const SkeletonItineraryItem = () => (
    <div className="tour-planing-section flex">
      <div
        className="number-box flex-five"
        style={{
          ...skeletonStyle,
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          color: "transparent",
        }}
      >
        ....
      </div>
      <div className="content-box">
        <SkeletonText width="50%" height="24px" marginBottom="15px" />
        <SkeletonText width="100%" />
        <SkeletonText width="100%" />
        <SkeletonText width="90%" />
        <SkeletonText width="80%" marginBottom="20px" />
      </div>
    </div>
  );

  const SkeletonInclusion = () => (
    <li className="flex-three">
      <i className="icon-Vector-7" style={{ opacity: 0.4 }} />
      <SkeletonText width="90%" />
    </li>
  );

  const SkeletonRecentPackage = () => (
    <div className="list-recent flex-three">
      <div
        className="recent-image"
        style={{
          ...skeletonStyle,
          width: "70px",
          height: "70px",
          borderRadius: "4px",
        }}
      ></div>
      <div className="recent-info">
        <SkeletonText width="100%" height="18px" />
        <div className="start" style={{ opacity: 0.4 }}>
          <i className="icon-Star" />
          <i className="icon-Star" />
          <i className="icon-Star" />
          <i className="icon-Star" />
          <i className="icon-Star" />
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
      <Layout headerStyle={2} footerStyle={2}>
        <div>
          <section>
            <div className="tf-container full">
              <div className="row">
                <div className="col-md-12">
                  <img src="/assets/images/page/breakcrumb2.jpg" alt="image" />
                </div>
              </div>
            </div>
          </section>
          <section className="tour-single">
            <div className="tf-container">
              <div className="row">
                <div className="col-lg-12">
                  <ul
                    className="nav justify-content-between tab-tour-single"
                    id="pills-tab"
                    role="tablist"
                  >
                    <li className="nav-item" onClick={() => handleTab(1)}>
                      <button
                        className={isTab == 1 ? "nav-link active" : "nav-link"}
                        id="pills-information-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-information"
                        type="button"
                        role="tab"
                        aria-controls="pills-information"
                        aria-selected="true"
                      >
                        <i className="icon-Vector-51" /> Information
                      </button>
                    </li>
                    <li className="nav-item" onClick={() => handleTab(2)}>
                      <button
                        className={isTab == 2 ? "nav-link active" : "nav-link"}
                        id="pills-tour-planing-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-tour-planing"
                        type="button"
                        role="tab"
                        aria-controls="pills-tour-planing"
                        aria-selected="false"
                      >
                        <i className="icon-destination-2-1" /> Itinerary
                      </button>
                    </li>

                    <li className="nav-item" onClick={() => handleTab(3)}>
                      <button
                        className={isTab == 3 ? "nav-link active" : "nav-link"}
                        id="pills-location-share-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-location-share"
                        type="button"
                        role="tab"
                        aria-controls="pills-location-share"
                        aria-selected="false"
                      >
                        <i className="icon-map-1" /> Route
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row pd-main">
                <div className="col-lg-12">
                  <div className="tab-content" id="pills-tabContent">
                    <div
                      className={
                        isTab == 1
                          ? "tab-pane fade show active"
                          : "tab-pane fade"
                      }
                      id="pills-information"
                      role="tabpanel"
                      aria-labelledby="pills-information-tab"
                      tabIndex={0}
                    >
                      <div className="row ">
                        <div className="col-lg-8">
                          <div className="row mb-50">
                            <div className="col-lg-12">
                              <div className="inner-heading-wrap flex-two">
                                <div className="inner-heading">
                                  <span className="featuree">Featured</span>
                                  {loading ? (
                                    <SkeletonText
                                      width="80%"
                                      height="36px"
                                      marginBottom="15px"
                                    />
                                  ) : (
                                    <h2 className="title">
                                      {currentPackage.title}
                                    </h2>
                                  )}
                                  <ul className="flex-three list-wrap-heading">
                                    <li className="flex-three">
                                      <i className="icon-time-left" />
                                      {loading ? (
                                        <SkeletonText width="80px" />
                                      ) : (
                                        <span>{currentPackage.duration}</span>
                                      )}
                                    </li>
                                  </ul>
                                </div>
                                <div className="inner-price">
                                  <div className="flex-three">
                                    <div className="start">
                                      <i className="icon-Star" />
                                      <i className="icon-Star" />
                                      <i className="icon-Star" />
                                      <i className="icon-Star" />
                                      <i className="icon-Star" />
                                    </div>
                                    {loading ? (
                                      <SkeletonText width="30px" />
                                    ) : (
                                      <span className="review">
                                        {currentPackage.rating}
                                      </span>
                                    )}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="tour-listing-image mb-50">
                            {loading ? (
                              <SkeletonImage />
                            ) : (
                              <Swiper
                                modules={[Navigation, Pagination, Autoplay]}
                                spaceBetween={10}
                                slidesPerView={1}
                                autoplay={{
                                  delay: 2500,
                                  disableOnInteraction: false,
                                }}
                              >
                                {currentPackage.images.map((image, index) => (
                                  <SwiperSlide key={index}>
                                    <img
                                      src={image}
                                      className="d-block w-100"
                                      style={{
                                        height: "550px",
                                        objectFit: "cover",
                                      }}
                                      alt={`image${index + 1}`}
                                    />
                                  </SwiperSlide>
                                ))}
                              </Swiper>
                            )}
                          </div>
                          <div className="row ">
                            <div className="col-lg-12">
                              <div className="information-content-tour ">
                                <div className="description-wrap  mt-40 mb-40">
                                  <span className="description">
                                    Description:
                                  </span>
                                  {loading ? (
                                    <>
                                      <SkeletonText width="100%" />
                                      <SkeletonText width="100%" />
                                      <SkeletonText width="100%" />
                                      <SkeletonText width="95%" />
                                      <SkeletonText width="90%" />
                                    </>
                                  ) : (
                                    <p className="des">
                                      {currentPackage.description}
                                    </p>
                                  )}
                                </div>

                                <div className="expect-wrap mb-70">
                                  <div className="row">
                                    <div className="col-md-6">
                                      <h4 className="title mb-40">Included</h4>

                                      <ul className="listing-clude">
                                        {loading
                                          ? Array(5)
                                              .fill()
                                              .map((_, index) => (
                                                <SkeletonInclusion
                                                  key={index}
                                                />
                                              ))
                                          : currentPackage.inclusions.map(
                                              (inclusion, index) => (
                                                <li
                                                  className="flex-three"
                                                  key={index}
                                                >
                                                  <i className="icon-Vector-7" />
                                                  <p>{inclusion}</p>
                                                </li>
                                              )
                                            )}
                                      </ul>
                                    </div>
                                    <div className="col-md-6">
                                      <h4 className="title mb-40">Excluded</h4>

                                      <ul className="listing-clude">
                                        {loading
                                          ? Array(4)
                                              .fill()
                                              .map((_, index) => (
                                                <SkeletonInclusion
                                                  key={index}
                                                />
                                              ))
                                          : currentPackage.exclusions.map(
                                              (exclusion, index) => (
                                                <li
                                                  className="flex-three"
                                                  key={index}
                                                >
                                                  <i className="icon-Vector-7" />
                                                  <p>{exclusion}</p>
                                                </li>
                                              )
                                            )}
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="sidebar-widget">
                              <h6 className="block-heading">
                                Book With Confidence
                              </h6>
                              <ul className="category-confidence">
                                <li className="flex-three">
                                  <i className="icon-customer-service-1" />
                                  <span>Customer care available 24/7</span>
                                </li>
                                <li className="flex-three">
                                  <i className="icon-Vector-6" />
                                  <span>
                                    Hand-picked Tours &amp; Activities
                                  </span>
                                </li>
                                <li className="flex-three">
                                  <i className="icon-insurance-1" />
                                  <span>Free Travel Insureance</span>
                                </li>
                                <li className="flex-three">
                                  <i className="icon-price-tag-1-1" />
                                  <span>No-hassle best price guarantee</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="side-bar-right">
                            <BookingForm />

                            <div className="sidebar-widget">
                              <h4 className="block-heading">Recent Packages</h4>
                              <div className="recent-post-list">
                                {loading
                                  ? Array(3)
                                      .fill()
                                      .map((_, index) => (
                                        <SkeletonRecentPackage key={index} />
                                      ))
                                  : tourPackages
                                      .slice(0, 3)
                                      .map((pkg, index) => (
                                        <div
                                          className="list-recent flex-three"
                                          key={index}
                                        >
                                          <Link
                                            href={`/packages/${pkg.id}`}
                                            className="recent-image"
                                          >
                                            <img src={pkg.image} alt="Image" />
                                          </Link>
                                          <div className="recent-info">
                                            <h4 className="title">
                                              <Link
                                                href={`/packages/${pkg.id}`}
                                              >
                                                {pkg.title}
                                              </Link>
                                            </h4>
                                            <div className="start">
                                              <i className="icon-Star" />
                                              <i className="icon-Star" />
                                              <i className="icon-Star" />
                                              <i className="icon-Star" />
                                              <i className="icon-Star" />
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
                    <div
                      className={
                        isTab == 2
                          ? "tab-pane fade show active"
                          : "tab-pane fade"
                      }
                      id="pills-tour-planing"
                      role="tabpanel"
                      aria-labelledby="pills-tour-planing-tab"
                      tabIndex={0}
                    >
                      <div className="row">
                        <div className="col-lg-8">
                          <div className="planing-content-tour">
                            <h3 className="title-plan">Tour Plan :</h3>
                            {loading
                              ? Array(4)
                                  .fill()
                                  .map((_, index) => (
                                    <SkeletonItineraryItem key={index} />
                                  ))
                              : currentPackage.itinerary.map((plan, index) => (
                                  <div
                                    className="tour-planing-section flex"
                                    key={index}
                                  >
                                    <div className="number-box flex-five">
                                      Day: {plan.day}
                                    </div>
                                    <div className="content-box">
                                      <h5 className="title">{plan.title}</h5>
                                      <p className="des">{plan.description}</p>
                                      {plan.highlights.map((highlight, i) => (
                                        <p
                                          className="des"
                                          key={i}
                                          style={{
                                            display: "flex",
                                            alignItems: "center",
                                          }}
                                        >
                                          <span
                                            style={{
                                              width: "8px",
                                              height: "8px",
                                              backgroundColor: "green",
                                              borderRadius: "50%",
                                              marginRight: "8px",
                                            }}
                                          ></span>
                                          {highlight}
                                        </p>
                                      ))}
                                    </div>
                                  </div>
                                ))}
                          </div>
                          <div className="sidebar-widget">
                            <h6 className="block-heading">
                              Book With Confidence
                            </h6>
                            <ul className="category-confidence">
                              <li className="flex-three">
                                <i className="icon-customer-service-1" />
                                <span>Customer care available 24/7</span>
                              </li>
                              <li className="flex-three">
                                <i className="icon-Vector-6" />
                                <span>Hand-picked Tours &amp; Activities</span>
                              </li>
                              <li className="flex-three">
                                <i className="icon-insurance-1" />
                                <span>Free Travel Insureance</span>
                              </li>
                              <li className="flex-three">
                                <i className="icon-price-tag-1-1" />
                                <span>No-hassle best price guarantee</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="side-bar-right">
                            <BookingForm />

                            <div className="sidebar-widget">
                              <h4 className="block-heading">Recent Packages</h4>
                              <div className="recent-post-list">
                                {loading
                                  ? Array(3)
                                      .fill()
                                      .map((_, index) => (
                                        <SkeletonRecentPackage key={index} />
                                      ))
                                  : tourPackages
                                      .slice(0, 3)
                                      .map((pkg, index) => (
                                        <div
                                          className="list-recent flex-three"
                                          key={index}
                                        >
                                          <Link
                                            href={`/packages/${pkg.id}`}
                                            className="recent-image"
                                          >
                                            <img src={pkg.image} alt="Image" />
                                          </Link>
                                          <div className="recent-info">
                                            <h4 className="title">
                                              <Link
                                                href={`/packages/${pkg.id}`}
                                              >
                                                {pkg.title}
                                              </Link>
                                            </h4>
                                            <div className="start">
                                              <i className="icon-Star" />
                                              <i className="icon-Star" />
                                              <i className="icon-Star" />
                                              <i className="icon-Star" />
                                              <i className="icon-Star" />
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
                    <div
                      className={
                        isTab == 3
                          ? "tab-pane fade show active"
                          : "tab-pane fade"
                      }
                      id="pills-location-share"
                      role="tabpanel"
                      aria-labelledby="pills-location-share-tab"
                      tabIndex={0}
                    >
                      <div className="row">
                        <div className="col-lg-8">
                          <div className="localtion-content-tour">
                            <MapComponent destinations={currentPackage.destinations}  />
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="side-bar-right">
                            <BookingForm />
                            <div className="sidebar-widget">
                              <h6 className="block-heading">
                                Book With Confidence
                              </h6>
                              <ul className="category-confidence">
                                <li className="flex-three">
                                  <i className="icon-customer-service-1" />
                                  <span>Customer care available 24/7</span>
                                </li>
                                <li className="flex-three">
                                  <i className="icon-Vector-6" />
                                  <span>
                                    Hand-picked Tours &amp; Activities
                                  </span>
                                </li>
                                <li className="flex-three">
                                  <i className="icon-insurance-1" />
                                  <span>Free Travel Insureance</span>
                                </li>
                                <li className="flex-three">
                                  <i className="icon-price-tag-1-1" />
                                  <span>No-hassle best price guarantee</span>
                                </li>
                              </ul>
                            </div>
                            <div className="sidebar-widget">
                              <h4 className="block-heading">Recent Packages</h4>
                              <div className="recent-post-list">
                                {loading
                                  ? Array(3)
                                      .fill()
                                      .map((_, index) => (
                                        <SkeletonRecentPackage key={index} />
                                      ))
                                  : tourPackages
                                      .slice(0, 3)
                                      .map((pkg, index) => (
                                        <div
                                          className="list-recent flex-three"
                                          key={index}
                                        >
                                          <Link
                                            href={`/packages/${pkg.id}`}
                                            className="recent-image"
                                          >
                                            <img src={pkg.image} alt="Image" />
                                          </Link>
                                          <div className="recent-info">
                                            <h4 className="title">
                                              <Link
                                                href={`/packages/${pkg.id}`}
                                              >
                                                {pkg.title}
                                              </Link>
                                            </h4>
                                            <div className="start">
                                              <i className="icon-Star" />
                                              <i className="icon-Star" />
                                              <i className="icon-Star" />
                                              <i className="icon-Star" />
                                              <i className="icon-Star" />
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
