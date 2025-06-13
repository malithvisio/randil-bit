'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 2,
    spaceBetween: 30,
    speed: 1500,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        500: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 2,
        },
    },
};

const testimonials = [
    {
        name: "John Doe",
        job: "Travel Enthusiast",
        image: null,
        feedback: "Randil Lanka Tours provided an unforgettable experience! The guides were knowledgeable, and the itinerary was perfectly planned. Highly recommend!",
    },
    {
        name: "Jane Smith",
        job: "Adventure Seeker",
        image: null, // No image available
        feedback: "I had the best time exploring Sri Lanka with Randil Lanka Tours. The team was professional, and the service was exceptional. Can't wait to come back!",
    },
    {
        name: "Michael Brown",
        job: "Photographer",
        image: null,
        feedback: "Sri Lanka's beauty was captured perfectly thanks to Randil Lanka Tours. Their attention to detail and personalized service made the trip amazing.",
    },
    {
        name: "Emily Davis",
        job: "Solo Traveler",
        image: null, // No image available
        feedback: "Traveling solo can be daunting, but Randil Lanka Tours made me feel safe and welcomed. The experience was beyond my expectations!",
    },
];

export default function Testimonial2() {
    return (
        <>
            <section className="pd-main bg-1">
                <div className="tf-container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="center m0-auto w-text-heading mb-40">
                                <span className="sub-title-heading text-main fs-28-46 font-yes wow fadeInUp animated">
                                    Explore the world
                                </span>
                                <h2 className="title-heading wow fadeInUp animated">
                                    What Our Clients Say About <span className="text-gray font-yes">Randil Lanka Tours</span>
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 relative">
                            <Swiper {...swiperOptions} className="swiper testimonialSwiper overflow-hidden pb-60">
                                <div className="swiper-wrapper">
                                    {testimonials.map((testimonial, index) => (
                                        <SwiperSlide key={index}>
                                            <div className="widget-testimonial-style2 relative">
                                                <div className="flex-two mb-25">
                                                    <div className="flex-three">
                                                        <div className="image">
                                                            {testimonial.image ? (
                                                                <img
                                                                    src={testimonial.image}
                                                                    alt={`Image of ${testimonial.name}`}
                                                                />
                                                            ) : (
                                                                <div className="avatar-placeholder">
                                                                    {testimonial.name.charAt(0)}
                                                                </div>
                                                            )}
                                                        </div>
                                                        <div className="profile">
                                                            <h5 className="name">{testimonial.name}</h5>
                                                        </div>
                                                    </div>
                                                    <div className="icon-tes flex-five">
                                                        <i className="icon-Layer_x0020_1" />
                                                    </div>
                                                </div>
                                                <p className="des">{testimonial.feedback}</p>
                                                <img
                                                    src="/assets/images/testimonial/mask.png"
                                                    className="mask-tes"
                                                    alt="Mask"
                                                />
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </div>
                                <div className="swiper-pagination" />
                            </Swiper>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}