"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import Layout from "@/components/layout/Layout";
import { oneDayTourPackages } from "@/components/data/packages";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import BookingForm from "../../packages/[id]/BookingForm";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function SingleDayTour() {
  const { id } = useParams();

  const currentTour = oneDayTourPackages.find((tour) => tour.id === id);

  if (!currentTour) {
    return (
      <Layout headerStyle={2} footerStyle={2}>
        <div className="tf-container">
          <div className="row">
            <div className="col-md-12 text-center py-5">
              <h2>Tour not found</h2>
              <p>Sorry, the tour you're looking for doesn't exist.</p>
              <Link href="/day-tours" className="btn btn-primary mt-3">
                Browse all day tours
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  // Create an array of 5 stars for display
  const starsArray = Array.from(
    { length: 5 },
    (_, index) => index < Math.round(currentTour.rating)
  );

  return (
    <Layout
      headerStyle={2}
      footerStyle={2}
      breadcrumbTitle={currentTour.title}
      imgbg={"/assets/images/page/day.jpg"}
    >
      <div className="tf-container">
        {/* Tour Details Section */}
        <section className="tour-details mb-60">
          <div className="row">
            {/* Main Content */}
            <div className="col-lg-8">
              <div className="tour-details-wrap">
                {/* Tour Header */}
                <div className="tour-details-header mb-40">
                  <h1 className="tour-title">{currentTour.title}</h1>
                  <div className="tour-meta-info d-flex align-items-center flex-wrap mb-20">
                    <div className="location mr-20">
                      <i className="icon-Vector4 mr-5"></i>
                      <span>{currentTour.location}</span>
                    </div>
                    <div className="duration mr-20">
                      <i className="icon-time-left mr-5"></i>
                      <span>{currentTour.duration}</span>
                    </div>
                    <div className="rating-wrap">
                      <div className="rating">
                        {starsArray.map((isFilled, index) => (
                          <i
                            key={index}
                            className={`icon-Star ${
                              isFilled ? "filled" : "empty"
                            }`}
                          ></i>
                        ))}
                      </div>
                      <span className="review-count">
                        ({currentTour.reviews} Reviews)
                      </span>
                    </div>
                  </div>
                </div>{" "}
                {/* Tour Images Slider */}
                <div className="tour-images mb-40">
                  <div className="tour-slider-container">
                    {currentTour.images && currentTour.images.length > 0 ? (
                      <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={0}
                        slidesPerView={1}
                        navigation={{
                          nextEl: ".swiper-button-next",
                          prevEl: ".swiper-button-prev",
                        }}
                        pagination={{
                          clickable: true,
                          dynamicBullets: true,
                        }}
                        autoplay={{
                          delay: 5000,
                          disableOnInteraction: false,
                        }}
                        loop={true}
                        className="tour-swiper"
                      >
                        {/* Use main image as first slide */}
                        <SwiperSlide>
                          <div className="swiper-image-container">
                            <img
                              src={currentTour.image}
                              alt={currentTour.title}
                              className="img-fluid rounded swiper-image"
                            />
                          </div>
                        </SwiperSlide>

                        {/* Add all images from the images array */}
                        {currentTour.images.map((img, index) => (
                          <SwiperSlide key={index}>
                            <div className="swiper-image-container">
                              <img
                                src={img}
                                alt={`${currentTour.title} - Image ${
                                  index + 1
                                }`}
                                className="img-fluid rounded swiper-image"
                              />
                            </div>
                          </SwiperSlide>
                        ))}

                        <div className="swiper-button-next"></div>
                        <div className="swiper-button-prev"></div>
                      </Swiper>
                    ) : (
                      // Fallback if no images available
                      <img
                        src={currentTour.image}
                        alt={currentTour.title}
                        className="img-fluid rounded main-image"
                        style={{
                          width: "100%",
                          maxHeight: "500px",
                          objectFit: "cover",
                        }}
                      />
                    )}
                  </div>
                </div>
                {/* Tour Description */}
                <div className="tour-description mb-40">
                  <h3 className="section-title mb-20">Tour Description</h3>
                  <p className="description">{currentTour.description}</p>
                </div>
                {/* Tour Inclusions & Exclusions */}
                <div className="tour-features mb-40">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="feature-box inclusions">
                        <h3 className="feature-title">Inclusions</h3>
                        <ul className="feature-list">
                          {currentTour.inclusions &&
                            currentTour.inclusions.map((item, index) => (
                              <li key={index}>
                                <i className="icon-check-circle"></i> {item}
                              </li>
                            ))}
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="feature-box exclusions">
                        <h3 className="feature-title">Exclusions</h3>
                        <ul className="feature-list">
                          {currentTour.exclusions &&
                            currentTour.exclusions.map((item, index) => (
                              <li key={index}>
                                <i className="icon-close-circle"></i> {item}
                              </li>
                            ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Tour Itinerary */}
                {currentTour.itinerary && (
                  <div className="tour-itinerary mb-40">
                    <h3 className="section-title mb-20">Tour Itinerary</h3>
                    <div className="itinerary-timeline">
                      {currentTour.itinerary.map((item, index) => (
                        <div key={index} className="timeline-item">
                          <div className="timeline-marker"></div>
                          <div className="timeline-content">
                            <h4 className="day-title">{item.title}</h4>
                            <p className="day-description">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-lg-4">
              <div className="tour-sidebar">
                {/* Booking Form */}
                {/* <br/>
                <div className="booking-form-wrap mb-40">
                  <h3 className="form-title">Book This Tour</h3>
                  <form className="booking-form">
                    <div className="form-group mb-20">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your Name"
                        required
                      />
                    </div>
                    <div className="form-group mb-20">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Your Email"
                        required
                      />
                    </div>
                    <div className="form-group mb-20">
                      <input
                        type="tel"
                        className="form-control"
                        placeholder="Phone Number"
                        required
                      />
                    </div>
                    <div className="form-group mb-20">
                      <input type="date" className="form-control" required />
                    </div>
                    <div className="form-group mb-20">
                      <select className="form-control" required>
                        <option value="">Number of People</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5+">5+</option>
                      </select>
                    </div>
                    <div className="form-group mb-30">
                      <textarea
                        className="form-control"
                        rows="3"
                        placeholder="Special Requirements"
                      ></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary w-100">
                      Book Now
                    </button>
                  </form>
                </div>{" "} */}
                <br/>
                 <BookingForm />
                {/* Other Day Tours */}
                <div className="sidebar-widget">
                  <h4 className="block-heading">Other Day Tours</h4>
                  <div className="recent-post-list">
                    {oneDayTourPackages
                      .filter((tour) => tour.id !== id)
                      .slice(0, 6)
                      .map((tour, index) => (
                        <div key={index} className="list-recent flex-three">
                          <Link
                            href={`/day-tours/${tour.id}`}
                            className="recent-image"
                          >
                            <img src={tour.image} alt={tour.title} />
                          </Link>
                          <div className="recent-info">
                            <h4 className="title">
                              <Link href={`/day-tours/${tour.id}`}>
                                {tour.title}
                              </Link>
                            </h4>
                            <div className="start">
                              {Array.from({ length: 5 }, (_, i) => (
                                <i
                                  key={i}
                                  className={`icon-Star ${
                                    i < Math.round(tour.rating) ? "" : "empty"
                                  }`}
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                  <div className="text-center mt-20">
                    <Link href="/day-tours" className="btn-outline">
                      View All Day Tours
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <style jsx>{`
        .tour-title {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 15px;
        }

        .tour-meta-info {
          color: #666;
          font-size: 1rem;
        }

        .mr-5 {
          margin-right: 5px;
        }

        .mr-20 {
          margin-right: 20px;
        }

        .mb-20 {
          margin-bottom: 20px;
        }

        .mb-40 {
          margin-bottom: 40px;
        }

        .mb-60 {
          margin-bottom: 60px;
        }

        .section-title {
          font-size: 1.8rem;
          font-weight: 600;
          position: relative;
          padding-bottom: 10px;
        }

        .section-title:after {
          content: "";
          position: absolute;
          left: 0;
          bottom: 0;
          width: 50px;
          height: 3px;
          background: #2563eb;
        }

        .feature-box {
          background: #f8f9fa;
          border-radius: 8px;
          padding: 20px;
          height: 100%;
        }

        .feature-title {
          font-size: 1.2rem;
          font-weight: 600;
          margin-bottom: 15px;
        }

        .feature-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .feature-list li {
          margin-bottom: 10px;
          display: flex;
          align-items: flex-start;
        }

        .feature-list li i {
          margin-right: 10px;
          margin-top: 3px;
        }

        .icon-check-circle {
          color: #10b981;
        }

        .icon-close-circle {
          color: #ef4444;
        }

        .booking-form-wrap {
          background: #fff;
          border-radius: 8px;
          box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
          padding: 25px;
        }

        .form-title {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 20px;
          text-align: center;
        }

        .form-control {
          border: 1px solid #e2e8f0;
          border-radius: 6px;
          padding: 12px 15px;
          width: 100%;
          font-size: 1rem;
        }

        .btn-primary {
          background: #2563eb;
          color: white;
          border: none;
          border-radius: 6px;
          padding: 12px 25px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .btn-primary:hover {
          background: #1d4ed8;
        }

        .btn-outline-primary {
          background: transparent;
          color: #2563eb;
          border: 1px solid #2563eb;
          border-radius: 6px;
          padding: 10px 20px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .btn-outline-primary:hover {
          background: #2563eb;
          color: white;
        }

        .other-tours-wrap {
          background: #fff;
          border-radius: 8px;
          box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
          padding: 25px;
        }

        .sidebar-title {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 20px;
          text-align: center;
        }

        .other-tours-list {
          margin-bottom: 20px;
        }

        .tour-item {
          margin-bottom: 15px;
        }

        .tour-link {
          display: flex;
          text-decoration: none;
          color: inherit;
          background: #f8f9fa;
          border-radius: 6px;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .tour-link:hover {
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }

        .tour-image {
          width: 80px;
          height: 80px;
          flex-shrink: 0;
        }

        .tour-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .tour-info {
          padding: 10px 15px;
          flex-grow: 1;
        }

        .tour-info h4 {
          font-size: 1rem;
          font-weight: 600;
          margin: 0 0 5px;
        }

        .tour-meta {
          display: flex;
          justify-content: space-between;
          font-size: 0.9rem;
          color: #666;
        }

        .itinerary-timeline {
          position: relative;
          padding-left: 30px;
        }

        .timeline-item {
          position: relative;
          padding-bottom: 30px;
        }

        .timeline-item:last-child {
          padding-bottom: 0;
        }

        .timeline-marker {
          position: absolute;
          top: 0;
          left: -30px;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: #2563eb;
          border: 3px solid white;
          box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.2);
        }

        .timeline-item:not(:last-child) .timeline-marker:after {
          content: "";
          position: absolute;
          top: 15px;
          left: 5px;
          width: 2px;
          height: calc(100% + 15px);
          background: #e5e7eb;
        }

        .day-title {
          font-size: 1.2rem;
          font-weight: 600;
          margin-bottom: 10px;
        }

        .day-description {
          margin: 0;
          color: #4b5563;
        }

        .rating .icon-Star {
          color: #facc15;
        }
        .rating .icon-Star.empty {
          color: #d1d5db;
        }

        /* Sidebar Widget Styles */
        .sidebar-widget {
          background: #fff;
          border-radius: 8px;
          box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
          padding: 25px;
          margin-bottom: 30px;
        }

        .block-heading {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 20px;
          text-align: center;
          position: relative;
          padding-bottom: 10px;
        }

        .block-heading:after {
          content: "";
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          bottom: 0;
          width: 50px;
          height: 3px;
          background: #2563eb;
        }

        .recent-post-list {
          margin-bottom: 20px;
        }

        .list-recent {
          display: flex;
          margin-bottom: 15px;
          background: #f8f9fa;
          border-radius: 8px;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .list-recent:hover {
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }

        .flex-three {
          display: flex;
          align-items: center;
        }

        .recent-image {
          width: 80px;
          height: 80px;
          flex-shrink: 0;
          overflow: hidden;
        }

        .recent-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .list-recent:hover .recent-image img {
          transform: scale(1.1);
        }

        .recent-info {
          padding: 10px 15px;
          flex-grow: 1;
        }

        .recent-info .title {
          font-size: 1rem;
          font-weight: 600;
          margin: 0 0 5px;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .recent-info .title a {
          color: #1e293b;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .recent-info .title a:hover {
          color: #2563eb;
        }

        .start {
          display: flex;
          gap: 3px;
        }

        .start .icon-Star {
          color: #facc15;
          font-size: 0.9rem;
        }

        .start .icon-Star.empty {
          color: #d1d5db;
        }

        .btn-outline {
          display: inline-block;
          background: transparent;
          color: #2563eb;
          border: 1px solid #2563eb;
          border-radius: 6px;
          padding: 10px 20px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
        }

        .btn-outline:hover {
          background: #2563eb;
          color: white;
        }

        @media (max-width: 767px) {
          .tour-title {
            font-size: 2rem;
          }

          .tour-meta-info {
            font-size: 0.9rem;
          }

          .section-title {
            font-size: 1.5rem;
          }

          .swiper-image-container {
            height: 300px;
          }

          .swiper-button-next,
          .swiper-button-prev {
            width: 35px;
            height: 35px;
          }

          .swiper-button-next:after,
          .swiper-button-prev:after {
            font-size: 16px;
          }
        }
      `}</style>
    </Layout>
  );
}
