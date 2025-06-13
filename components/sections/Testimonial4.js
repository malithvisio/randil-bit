'use client'
import { useState } from 'react'
import 'swiper/css/free-mode'
import 'swiper/css/thumbs'
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'



export default function Testimonial4() {
	const [thumbsSwiper, setThumbsSwiper] = useState(null)

	// Swiper options for the main slider
	const mainSwiperOptions = {
		spaceBetween: 10,
		speed: 1500,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
		pagination: {
			el: ".swiper-pagination",
			type: "fraction",
		},
		thumbs: { swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null },
		modules: [FreeMode, Navigation, Thumbs],
		className: "mySwiper2"
	}

	// Swiper options for the thumbnail slider
	const thumbnailSwiperOptions = {
		slidesPerView: 3,
		freeMode: true,
		watchSlidesProgress: true,
		pagination: {
			el: ".swiper-pagination",
			type: "fraction",
		},
		modules: [FreeMode, Navigation, Thumbs],
		className: "mySwiper"
	}
	return (
		<>

			<section className="testimonial-section-h4 bg-1">
				<div className="tf-container full">
					<div className="row">
						<div className="col-md-7">
							<div className="content">
								<div className="mb-30">
									<span className="sub-title-heading text-main fs-28-46 font-yes  wow fadeInUp animated">Explore
										the
										world</span>
									<h2 className="title-heading  wow fadeInUp animated">Our Clients Amazing <span className="font-yes text-gray">Feedback</span> Here</h2>
								</div>
								<Swiper {...mainSwiperOptions} className="swiper mySwiper222 overflow-hidden relative">
									<div className="swiper-wrapper">
										<SwiperSlide>
											<div className="widget-testimonial-style5">
												<p className="des">Denouncing <span className="text-main">pleasure</span>
													and praising pain was born and I will
													give you a complete account of the system, and expound
													the actual teachings of the great explorer of truth the
													master builder Denouncing pleasure and praising pain
													Denouncing pleasure and praising pain
												</p>
												<div className="flex-two">
													<div className="flex-three relative">
														<div className="image-avata">
															<img src="/assets/images/testimonial/avt4-3.jpg" alt="image" />
														</div>
														<div className="content-testimonial">
															<h6 className="title">Cameron Williamson</h6>
															<span className="job">Medical Worker</span>
														</div>
													</div>
													<div className="start">
														<i className="icon-Star" />
														<i className="icon-Star" />
														<i className="icon-Star" />
														<i className="icon-Star" />
														<i className="icon-Star" />
													</div>
												</div>
											</div>
										</SwiperSlide>
										<SwiperSlide>
											<div className="widget-testimonial-style5">
												<p className="des">Denouncing <span className="text-main">pleasure</span>
													and praising pain was born and I will
													give you a complete account of the system, and expound
													the actual teachings of the great explorer of truth the
													master builder Denouncing pleasure and praising pain
													Denouncing pleasure and praising pain
												</p>
												<div className="flex-two">
													<div className="flex-three relative">
														<div className="image-avata">
															<img src="/assets/images/testimonial/avt4-4.jpg" alt="image" />
														</div>
														<div className="content-testimonial">
															<h6 className="title">Cameron Williamson</h6>
															<span className="job">Medical Worker</span>
														</div>
													</div>
													<div className="start">
														<i className="icon-Star" />
														<i className="icon-Star" />
														<i className="icon-Star" />
														<i className="icon-Star" />
														<i className="icon-Star" />
													</div>
												</div>
											</div>
										</SwiperSlide>
										<SwiperSlide>
											<div className="widget-testimonial-style5">
												<p className="des">Denouncing <span className="text-main">pleasure</span>
													and praising pain was born and I will
													give you a complete account of the system, and expound
													the actual teachings of the great explorer of truth the
													master builder Denouncing pleasure and praising pain
													Denouncing pleasure and praising pain
												</p>
												<div className="flex-two">
													<div className="flex-three relative">
														<div className="image-avata">
															<img src="/assets/images/testimonial/avt4-5.jpg" alt="image" />
														</div>
														<div className="content-testimonial">
															<h6 className="title">Cameron Williamson</h6>
															<span className="job">Medical Worker</span>
														</div>
													</div>
													<div className="start">
														<i className="icon-Star" />
														<i className="icon-Star" />
														<i className="icon-Star" />
														<i className="icon-Star" />
														<i className="icon-Star" />
													</div>
												</div>
											</div>
										</SwiperSlide>
									</div>
								</Swiper>
							</div>
						</div>
						<div className="col-md-5">
							<div className="gallery-testimonial-h4 relative">
								<Swiper {...thumbnailSwiperOptions} onSwiper={setThumbsSwiper} thumbsslider className="swiper mySwiperGalllery overflow-hidden">
									<div className="swiper-pagination" />
									<div className="swiper-wrapper">
										<SwiperSlide>
											<div className="image">
												<img src="/assets/images/testimonial/avt4-3.jpg" alt="image" />
											</div>
										</SwiperSlide>
										<SwiperSlide>
											<div className="image">
												<img src="/assets/images/testimonial/avt4-4.jpg" alt="image" />
											</div>
										</SwiperSlide>
										<SwiperSlide>
											<div className="image">
												<img src="/assets/images/testimonial/avt4-5.jpg" alt="image" />
											</div>
										</SwiperSlide>
									</div>
								</Swiper>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
