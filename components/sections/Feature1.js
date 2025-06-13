"use client";
import Link from "next/link";
import { tourPackages } from "../data/packages";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Feature1() {
  const [loading, setLoading] = useState(true);

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

  // Skeleton loader for package cards
  const PackageSkeleton = () => (
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
            width: "100%",
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

        .swiper-button-next,
        .swiper-button-prev {
          background-color: #4da528;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          color: #333;
        }

        .swiper-button-next:after,
        .swiper-button-prev:after {
          font-size: 18px;
        }

        .swiper-pagination-bullet-active {
          background-color: #007aff;
        }

        .swiper-container {
          padding-bottom: 50px;
        }
      `}</style>

      <section className="widget-feature overflow-hidden pd-main relative">
        <div className="bg-ab-feature bg-1">
          <img src="/assets/images/page/bg-feature.png" alt="" />
        </div>
        <div className="tf-container w-1456 z-index3 relative">
          <div className="row">
            <div className="col-lg-12">
              <div className="center m0-auto w-text-heading mb-40">
                <span className="sub-title-heading text-main fs-28-46 font-yes wow fadeInUp animated">
                  Explore the world
                </span>
                <h2 className="title-heading wow fadeInUp animated">
                  Amazing Featured Tour{" "}
                  <span className="text-gray font-yes">Packages</span> in Sri
                  Lanka
                </h2>
              </div>
            </div>
          </div>
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
                  {loading ? (
                    <Swiper
                      modules={[Navigation, Pagination, Autoplay]}
                      spaceBetween={20}
                      slidesPerView={1}
                      navigation
                      pagination={{ clickable: true }}
                      breakpoints={{
                        640: {
                          slidesPerView: 1,
                          spaceBetween: 20,
                        },
                        768: {
                          slidesPerView: 2,
                          spaceBetween: 20,
                        },
                        1024: {
                          slidesPerView: 3,
                          spaceBetween: 20,
                        },
                        1280: {
                          slidesPerView: 4,
                          spaceBetween: 20,
                        },
                      }}
                    >
                      {[...Array(4)].map((_, index) => (
                        <SwiperSlide key={index}>
                          <PackageSkeleton />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  ) : (
                    <Swiper
                      modules={[Navigation, Pagination, Autoplay]}
                      spaceBetween={20}
                      slidesPerView={1}
                      navigation
                      pagination={{ clickable: true }}
                      autoplay={{
                        delay: 3500,
                        disableOnInteraction: false,
                      }}
                      breakpoints={{
                        640: {
                          slidesPerView: 1,
                          spaceBetween: 20,
                        },
                        768: {
                          slidesPerView: 2,
                          spaceBetween: 20,
                        },
                        1024: {
                          slidesPerView: 3,
                          spaceBetween: 20,
                        },
                        1280: {
                          slidesPerView: 4,
                          spaceBetween: 20,
                        },
                      }}
                    >
                      {tourPackages.map((tour, index) => (
                        <SwiperSlide key={tour.id}>
                          <div className="tour-listing box-sd">
                            <Link
                              href={`/packages/${tour.id}`}
                              className="tour-listing-image"
                            >
                              <div className="badge-top flex-two">
                                <span className="feature">Featured</span>
                                <div className="badge-media flex-five">
                                  <span className="media">
                                    <i className="icon-Group-1000002909" />
                                    {tour.rating}
                                  </span>
                                  <span className="media">
                                    <i className="icon-Group-1000002910" />
                                    {tour.reviews}
                                  </span>
                                </div>
                              </div>
                              <img
                                src={tour.image}
                                alt={tour.title}
                                style={{
                                  width: "100%",
                                  height: "240px",
                                  objectFit: "cover",
                                }}
                              />
                            </Link>
                            <div className="tour-listing-content" style={{marginBottom:"50px"}}>
                              <span className="tag-listing">Bestseller</span>
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
                                {Array.from({ length: tour.rating }, (_, i) => (
                                  <i key={i} className="icon-Star" />
                                ))}
                                <span>({tour.reviews} Reviews)</span>
                              </div>
                              <div className="icon-box flex-three" >
                                <div className="icons flex-three">
                                  <i className="icon-time-left" />
                                  <span>{tour.days}D/{tour.nights}N</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  )}
                  <div className="row">
                    <div className="col-lg-12 center mt-44">
                      <Link href="/packages" className="btn-main">
                        <p className="btn-main-text">View all tour</p>
                        <p className="iconer">
                          <i className="icon-13" />
                        </p>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
