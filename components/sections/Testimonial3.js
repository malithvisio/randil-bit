'use client'
import { useState } from 'react'
import 'swiper/css/free-mode'
import 'swiper/css/thumbs'
import { FreeMode, Navigation, Pagination, Thumbs } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

export default function Testimonial3() {
	const [thumbsSwiper, setThumbsSwiper] = useState(null)

	// Swiper options for the main slider
	const mainSwiperOptions = {
		speed: 1500,
		spaceBetween: 30,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
		thumbs: { swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null },
		modules: [FreeMode, Navigation, Thumbs],
	}

	// Swiper options for the thumbnail slider
	const thumbnailSwiperOptions = {
		spaceBetween: 22,
		slidesPerView: 3,
		freeMode: true,
		watchSlidesProgress: true,
		modules: [FreeMode, Navigation, Thumbs, Pagination],
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
	}
	return (
		<>

			<section className="widget-tes-style2 bg-1 ">
				<div className="tf-container">
					<div className="col-lg-12">
						<div className="widget-testimonial widget-testimonial-style3 overflow-hidden ">
							<Swiper {...mainSwiperOptions} className="swiper mySwiper3">
								<div className="swiper-wrapper">
									<SwiperSlide>
										<div className="testimonial-content center relative">
											<div className="profile mb-30">
												<h3 className="name">Piter Bowman</h3>
												<span className="job">Business CEO</span>
											</div>
											<p className="tes">“I ordered 2 of the multi coloured hydrangea plants
												very well packaged and very healthy looking
												no flowers but will hopefully come next year.”
											</p>
											<span className="line" />
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="testimonial-content center">
											<div className="profile mb-30">
												<h3 className="name">Piter Bowman</h3>
												<span className="job">Business CEO</span>
											</div>
											<p className="tes">“I ordered 2 of the multi coloured hydrangea plants
												very well packaged and very healthy looking
												no flowers but will hopefully come next year.”
											</p>
											<span className="line" />
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="testimonial-content center">
											<div className="profile mb-30">
												<h3 className="name">Piter Bowman</h3>
												<span className="job">Business CEO</span>
											</div>
											<p className="tes">“I ordered 2 of the multi coloured hydrangea plants
												very well packaged and very healthy looking
												no flowers but will hopefully come next year.”
											</p>
											<span className="line" />
										</div>
									</SwiperSlide>
								</div>
							</Swiper>
							<Swiper {...thumbnailSwiperOptions} onSwiper={setThumbsSwiper} className="testimonial-image2">
								<div className="swiper-wrapper">
									<SwiperSlide className="swiper-slide avata">
										<img src="/assets/images/avata/9.jpg" alt="Image Testimonial" />
									</SwiperSlide>
									<SwiperSlide className="swiper-slide avata">
										<img src="/assets/images/avata/7.jpg" alt="Image Testimonial" />
									</SwiperSlide>
									<SwiperSlide className="swiper-slide avata">
										<img src="/assets/images/avata/8.jpg" alt="Image Testimonial" />
									</SwiperSlide>
								</div>
							</Swiper>
							<div className="start center mt-35 ">
								<i className="icon-Star" />
								<i className="icon-Star" />
								<i className="icon-Star" />
								<i className="icon-Star" />
								<i className="icon-Star" />
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
