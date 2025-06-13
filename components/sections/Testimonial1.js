'use client'
import { useState } from 'react'
import 'swiper/css/free-mode'
import 'swiper/css/thumbs'
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

export default function Testimonial1() {
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
		modules: [FreeMode, Navigation, Thumbs],
		className: "mySwiper"
	}
	return (
		<>

			<section className="widget-testimonial-style01">
				<div className="tf-container">
					<div className="row">
						<div className="col-md-5 relative">
							<div className="image-box-tesimonial box-testimonial1 wow fadeInLeft animated " data-wow-delay="0.1s">
								<img src="/assets/images/page/testimonial1.jpg" alt="" />
							</div>
							<div className="image-box-tesimonial box-testimonial2 wow fadeInUp animated " data-wow-delay="0.3s">
								<img src="/assets/images/page/testimonial2.jpg" alt="" />
							</div>
						</div>
						<div className="col-md-7">
							<div className="widget-testimonial overflow-hidden ">
								<Swiper {...mainSwiperOptions} className="swiper mySwiper2">
									<div className="swiper-wrapper">
										<SwiperSlide className="swiper-slide">
											<div className="testimonial-content relative">
												<div className="profile mb-15">
													<h3 className="name">Piter Bowman</h3>
													<span className="job">Business CEO</span>
												</div>
												<p className="tes">Leverage agile frameworks to provide a robust
													synopsis for high level overviews. Iterative in
													approaches to corporate strategy data foster go
													to collaborative thinking.
												</p>
												<span className="line" />
												<div className="icon-tes flex-five">
													<i className="icon-Group-1000002944" />
												</div>
											</div>
										</SwiperSlide>
										<SwiperSlide className="swiper-slide">
											<div className="testimonial-content relative">
												<div className="profile mb-15">
													<h3 className="name">Piter Bowman</h3>
													<span className="job">Business CEO</span>
												</div>
												<p className="tes">Leverage agile frameworks to provide a robust
													synopsis for high level overviews. Iterative in
													approaches to corporate strategy data foster go
													to collaborative thinking.
												</p>
												<span className="line" />
												<div className="icon-tes flex-five">
													<i className="icon-Group-1000002944" />
												</div>
											</div>
										</SwiperSlide>
										<SwiperSlide className="swiper-slide">
											<div className="testimonial-content relative">
												<div className="profile mb-15">
													<h3 className="name">Piter Bowman</h3>
													<span className="job">Business CEO</span>
												</div>
												<p className="tes">Leverage agile frameworks to provide a robust
													synopsis for high level overviews. Iterative in
													approaches to corporate strategy data foster go
													to collaborative thinking.
												</p>
												<span className="line" />
												<div className="icon-tes flex-five">
													<i className="icon-Group-1000002944" />
												</div>
											</div>
										</SwiperSlide>
									</div>
								</Swiper>
								<Swiper {...thumbnailSwiperOptions} onSwiper={setThumbsSwiper} className="swiper testimonial-image">
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
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
