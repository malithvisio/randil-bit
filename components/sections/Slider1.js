
'use client'
import Link from "next/link"
import { TypeAnimation } from "react-type-animation"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
	modules: [Autoplay, Pagination, Navigation],
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	slidesPerView: 1,

	autoplay: {
		delay: 6000,
		disableOnInteraction: false,
	},
}
export default function Slider1() {
	return (
		<>

			<section className="slider relative">
				<Swiper {...swiperOptions} className="swiper mySwiper">
					<div className="swiper-wrapper">
						<SwiperSlide className="slider-home1 relative overflow-hidden swiper-slide">
							<div className="silider-image">
								<img src="/assets/images/slide/slide1.jpg" alt="Image" className="image-slide" />
								<img src="/assets/images/slide/mask-slide.png" alt="Image" className="mask-slide" />
								<img src="/assets/images/slide/mask-fly.png" alt="Image" className="mask-flane" />
								<div className="booking-title tf-anime-rorate">
									<p className="booking">Booking</p>
									<span />
								</div>
							</div>
							<div className="slider-content">
								<div className="tf-container">
									<div className="row">
										<div className="col-lg-8">
											<span className="sub-title text-main font-yes fs-28-46 fadeInDown wow">Explore
												the
												world</span>
											<h1 className="title-slide text-white mb-32 fadeInDown wow">Tour Travel &amp;
												adventure
												<span className="animationtext clip text-main">
													<span className="cd-words-wrapper">
														<TypeAnimation
															sequence={[
																' Camping',
																1000,
																' Explore',
																1000,
															]}
															wrapper="span"
															speed={50}
															style={{ display: 'inline-block', marginLeft: "15px" }}
															repeat={Infinity}
															className="item-text is-visible ms-3">
														</TypeAnimation>
													</span>
												</span>
											</h1>
											<p className="des text-white mb-45 fadeInDown wow">Welcome to our Print 128
												website! We are
												a
												professional and reliable printing
												company that offers a wide range of printing services to
											</p>
											<div className="btn-group">
												<Link href="#" className="btn-main fadeInDown wow">
													<p className="btn-main-text">Let,s get started</p>
													<p className="iconer">
														<i className="icon-arrow-right" />
													</p>
												</Link>
												<Link href="#" className="btn-w-wa fadeInDown wow">Who we are <i className="icon-Group-13" /></Link>
											</div>
										</div>
									</div>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide className="slider-home1 relative overflow-hidden swiper-slide">
							<div className="silider-image">
								<img src="/assets/images/slide/slide1.jpg" alt="Image" className="image-slide" />
								<img src="/assets/images/slide/mask-slide.png" alt="Image" className="mask-slide" />
								<img src="/assets/images/slide/mask-fly.png" alt="Image" className="mask-flane" />
								<div className="booking-title tf-anime-rorate">
									<p className="booking">Booking</p>
									<span />
								</div>
							</div>
							<div className="slider-content">
								<div className="tf-container">
									<div className="row">
										<div className="col-lg-8">
											<span className="sub-title text-main font-yes fs-28-46 fadeInDown wow">Explore
												the
												world</span>
											<h1 className="title-slide text-white mb-32 fadeInDown wow">Tour Travel &amp;
												adventure
												<span className="animationtext clip text-main">
													<span className="cd-words-wrapper">
														<TypeAnimation
															sequence={[
																' Camping',
																1000,
																' Explore',
																1000,
															]}
															wrapper="span"
															speed={50}
															style={{ display: 'inline-block', marginLeft: "15px" }}
															repeat={Infinity}
															className="item-text is-visible ms-3">
														</TypeAnimation>
													</span>
												</span>
											</h1>
											<p className="des text-white mb-45 fadeInDown wow">Welcome to our Print 128
												website! We are
												a
												professional and reliable printing
												company that offers a wide range of printing services to
											</p>
											<div className="btn-group">
												<Link href="#" className="btn-main fadeInDown wow">
													<p className="btn-main-text">Let,s get started</p>
													<p className="iconer">
														<i className="icon-arrow-right" />
													</p>
												</Link>
												<Link href="#" className="btn-w-wa fadeInDown wow">Who we are <i className="icon-Group-13" /></Link>
											</div>
										</div>
									</div>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide className="slider-home1 relative overflow-hidden swiper-slide">
							<div className="silider-image">
								<img src="/assets/images/slide/slide1.jpg" alt="Image" className="image-slide" />
								<img src="/assets/images/slide/mask-slide.png" alt="Image" className="mask-slide" />
								<img src="/assets/images/slide/mask-fly.png" alt="Image" className="mask-flane" />
								<div className="booking-title tf-anime-rorate">
									<p className="booking">Booking</p>
									<span />
								</div>
							</div>
							<div className="slider-content">
								<div className="tf-container">
									<div className="row">
										<div className="col-lg-8">
											<span className="sub-title text-main font-yes fs-28-46 fadeInDown wow">Explore
												the
												world</span>
											<h1 className="title-slide text-white mb-32 fadeInDown wow">Tour Travel &amp;
												adventure
												<span className="animationtext clip text-main">
													<span className="cd-words-wrapper">
														<TypeAnimation
															sequence={[
																' Camping',
																1000,
																' Explore',
																1000,
															]}
															wrapper="span"
															speed={50}
															style={{ display: 'inline-block', marginLeft: "15px" }}
															repeat={Infinity}
															className="item-text is-visible ms-3">
														</TypeAnimation>
													</span>
												</span>
											</h1>
											<p className="des text-white mb-45 fadeInDown wow">Welcome to our Print 128
												website! We are
												a
												professional and reliable printing
												company that offers a wide range of printing services to
											</p>
											<div className="btn-group">
												<Link href="#" className="btn-main fadeInDown wow">
													<p className="btn-main-text">Let,s get started</p>
													<p className="iconer">
														<i className="icon-arrow-right" />
													</p>
												</Link>
												<Link href="#" className="btn-w-wa fadeInDown wow">Who we are <i className="icon-Group-13" /></Link>
											</div>
										</div>
									</div>
								</div>
							</div>
						</SwiperSlide>
					</div>
					<div className="btn-nex-prev">
						<div className="swiper-button-next  next-home1" />
						<div className="swiper-button-prev  prev-home1" />
					</div>
				</Swiper>
			</section>
		</>
	)
}
