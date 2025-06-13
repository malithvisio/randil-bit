'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import Countdown from "../elements/Countdown"

const swiperOptions = {
	modules: [Autoplay, Pagination, Navigation],
	slidesPerView: 2,
	spaceBetween: 30,
	observer: true,
	observeParents: true,
	speed: 1500,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	breakpoints: {
		0: {
			slidesPerView: 1,
		},
		600: {
			slidesPerView: 2,
		},
	},
}

export default function OfferPackage() {
	const currentTime = new Date()
	return (
		<>

			<section className="offer-package pd-main bg-1 relative">
				<img src="/assets/images/page/feature.jpg" alt="image" className="feature-ofer" />
				<div className="tf-container">
					<div className="row align-center z-index3 relative">
						<div className="col-lg-5">
							<div className="content">
								<div className="mb-50">
									<span className="sub-title-heading text-main mb-15 fadeInUp wow">Explore the
										world</span>
									<h2 className="title-heading mb-32 fadeInUp wow">Amazing Featured Tour<span className="text-gray font-yes "> Package</span> the world</h2>
									<p className="des-heading fadeInUp wow">Welcome to our Print 128 website! We are a
										professional
										company that offers a wide range of printing</p>
								</div>
								<div className="inner-content flex-three">
									<div className="offer fadeInUp wow">
										<span className="number">25 <span>% off</span></span>
									</div>
									<p className="font-italic fadeInUp wow">Discover Great <span className="text-main">Discount</span>
										Deals Around the World</p>
								</div>
								<div className="count-dow-wrap flex-three mb-50">
									<div className="title-counters fadeInUp wow">
										<span>Hurry Up!</span>
										<p>Offer Ends in:</p>
									</div>
									<div className="count-down relative fadeInUp wow">
										<div className="featured-countdown">
											<Countdown endDateTime={currentTime.setDate(currentTime.getDate() + 2)} />
										</div>
									</div>
								</div>
								<div className="btn-wap fadeInUp wow">
									<Link href="#" className="btn-main">
										<p className="btn-main-text">Explore More</p>
										<p className="iconer">
											<i className="icon-arrow-right" />
										</p>
									</Link>
								</div>
							</div>
						</div>
						<div className="col-lg-7">
							<div className="relative on-week-swipper-wrap">
								<Swiper {...swiperOptions} className="swiper offer-package-swipper overflow-hidden relative">
									<div className="swiper-wrapper">
										<SwiperSlide>
											<div className="tour-listing">
												<Link href="/tour-single" className="tour-listing-image">
													<div className="badge-top flex-two">
														<span className="feature">Featured</span>
														<div className="badge-media flex-five">
															<span className="media"><i className="icon-Group-1000002909" />5</span>
															<span className="media"><i className="icon-Group-1000002910" />2</span>
														</div>
													</div>
													<img src="/assets/images/travel-list/15.jpg" alt="Image Listing" />
												</Link>
												<div className="tour-listing-content">
													<span className="tag-listing">Bestseller</span>
													<span className="map"><i className="icon-Vector4" />United States
														USA</span>
													<h3 className="title-tour-list"><Link href="/tour-single">Days and
														6 nights From
														Moscow</Link>
													</h3>
													<div className="review">
														<i className="icon-Star" />
														<i className="icon-Star" />
														<i className="icon-Star" />
														<i className="icon-Star" />
														<i className="icon-Star" />
														<span>(1 Review)</span>
													</div>
													<div className="icon-box flex-three">
														<div className="icons flex-three">
															<i className="icon-time-left" />
															<span>5 days</span>
														</div>
														<div className="icons flex-three">
															<svg width={21} height={16} viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M4.34766 4.79761C4.34766 2.94013 5.85346 1.43433 7.71094 1.43433C9.56841 1.43433 11.0742 2.94013 11.0742 4.79761C11.0742 6.65508 9.56841 8.16089 7.71094 8.16089C5.85346 8.16089 4.34766 6.65508 4.34766 4.79761Z" stroke="currentColor" strokeWidth="1.7" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
																<path d="M9.5977 15.1797H2.46098C1.34827 15.1797 0.558268 14.0954 0.898984 13.0362C1.80408 10.222 4.57804 8.18566 7.69301 8.18566C9.17897 8.18566 10.5566 8.64906 11.6895 9.43922" stroke="currentColor" strokeWidth="1.7" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
																<path d="M17.1035 15.1797V9.02734" stroke="currentColor" strokeWidth="1.7" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
																<path d="M20.1797 12.1035H14.0273" stroke="currentColor" strokeWidth="1.7" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
															</svg>
															<span>12 Person</span>
														</div>
													</div>
													<div className="flex-two">
														<div className="price-box flex-three">
															<p>From <span className="price-sale">$169.00</span></p>
															<span className="price">$199.00</span>
														</div>
														<div className="icon-bookmark">
															<i className="icon-Vector-151" />
														</div>
													</div>
												</div>
											</div>
										</SwiperSlide>
										<SwiperSlide>
											<div className="tour-listing">
												<Link href="/tour-single" className="tour-listing-image">
													<div className="badge-top flex-two">
														<span className="feature">Featured</span>
														<div className="badge-media flex-five">
															<span className="media"><i className="icon-Group-1000002909" />5</span>
															<span className="media"><i className="icon-Group-1000002910" />2</span>
														</div>
													</div>
													<img src="/assets/images/travel-list/16.jpg" alt="Image Listing" />
												</Link>
												<div className="tour-listing-content">
													<span className="tag-listing">Bestseller</span>
													<span className="map"><i className="icon-Vector4" />United States
														USA</span>
													<h3 className="title-tour-list"><Link href="/tour-single">Days and
														6 nights From
														Moscow</Link>
													</h3>
													<div className="review">
														<i className="icon-Star" />
														<i className="icon-Star" />
														<i className="icon-Star" />
														<i className="icon-Star" />
														<i className="icon-Star" />
														<span>(1 Review)</span>
													</div>
													<div className="icon-box flex-three">
														<div className="icons flex-three">
															<i className="icon-time-left" />
															<span>5 days</span>
														</div>
														<div className="icons flex-three">
															<svg width={21} height={16} viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M4.34766 4.79761C4.34766 2.94013 5.85346 1.43433 7.71094 1.43433C9.56841 1.43433 11.0742 2.94013 11.0742 4.79761C11.0742 6.65508 9.56841 8.16089 7.71094 8.16089C5.85346 8.16089 4.34766 6.65508 4.34766 4.79761Z" stroke="currentColor" strokeWidth="1.7" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
																<path d="M9.5977 15.1797H2.46098C1.34827 15.1797 0.558268 14.0954 0.898984 13.0362C1.80408 10.222 4.57804 8.18566 7.69301 8.18566C9.17897 8.18566 10.5566 8.64906 11.6895 9.43922" stroke="currentColor" strokeWidth="1.7" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
																<path d="M17.1035 15.1797V9.02734" stroke="currentColor" strokeWidth="1.7" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
																<path d="M20.1797 12.1035H14.0273" stroke="currentColor" strokeWidth="1.7" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
															</svg>
															<span>12 Person</span>
														</div>
													</div>
													<div className="flex-two">
														<div className="price-box flex-three">
															<p>From <span className="price-sale">$169.00</span></p>
															<span className="price">$199.00</span>
														</div>
														<div className="icon-bookmark">
															<i className="icon-Vector-151" />
														</div>
													</div>
												</div>
											</div>
										</SwiperSlide>
										<SwiperSlide>
											<div className="tour-listing">
												<Link href="/tour-single" className="tour-listing-image">
													<div className="badge-top flex-two">
														<span className="feature">Featured</span>
														<div className="badge-media flex-five">
															<span className="media"><i className="icon-Group-1000002909" />5</span>
															<span className="media"><i className="icon-Group-1000002910" />2</span>
														</div>
													</div>
													<img src="/assets/images/travel-list/17.jpg" alt="Image Listing" />
												</Link>
												<div className="tour-listing-content">
													<span className="tag-listing">Bestseller</span>
													<span className="map"><i className="icon-Vector4" />United States
														USA</span>
													<h3 className="title-tour-list"><Link href="/tour-single">Days and
														6 nights From
														Moscow</Link>
													</h3>
													<div className="review">
														<i className="icon-Star" />
														<i className="icon-Star" />
														<i className="icon-Star" />
														<i className="icon-Star" />
														<i className="icon-Star" />
														<span>(1 Review)</span>
													</div>
													<div className="icon-box flex-three">
														<div className="icons flex-three">
															<i className="icon-time-left" />
															<span>5 days</span>
														</div>
														<div className="icons flex-three">
															<svg width={21} height={16} viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M4.34766 4.79761C4.34766 2.94013 5.85346 1.43433 7.71094 1.43433C9.56841 1.43433 11.0742 2.94013 11.0742 4.79761C11.0742 6.65508 9.56841 8.16089 7.71094 8.16089C5.85346 8.16089 4.34766 6.65508 4.34766 4.79761Z" stroke="currentColor" strokeWidth="1.7" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
																<path d="M9.5977 15.1797H2.46098C1.34827 15.1797 0.558268 14.0954 0.898984 13.0362C1.80408 10.222 4.57804 8.18566 7.69301 8.18566C9.17897 8.18566 10.5566 8.64906 11.6895 9.43922" stroke="currentColor" strokeWidth="1.7" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
																<path d="M17.1035 15.1797V9.02734" stroke="currentColor" strokeWidth="1.7" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
																<path d="M20.1797 12.1035H14.0273" stroke="currentColor" strokeWidth="1.7" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
															</svg>
															<span>12 Person</span>
														</div>
													</div>
													<div className="flex-two">
														<div className="price-box flex-three">
															<p>From <span className="price-sale">$169.00</span></p>
															<span className="price">$199.00</span>
														</div>
														<div className="icon-bookmark">
															<i className="icon-Vector-151" />
														</div>
													</div>
												</div>
											</div>
										</SwiperSlide>
										<SwiperSlide>
											<div className="tour-listing">
												<Link href="/tour-single" className="tour-listing-image">
													<div className="badge-top flex-two">
														<span className="feature">Featured</span>
														<div className="badge-media flex-five">
															<span className="media"><i className="icon-Group-1000002909" />5</span>
															<span className="media"><i className="icon-Group-1000002910" />2</span>
														</div>
													</div>
													<img src="/assets/images/travel-list/18.jpg" alt="Image Listing" />
												</Link>
												<div className="tour-listing-content">
													<span className="tag-listing">Bestseller</span>
													<span className="map"><i className="icon-Vector4" />United States
														USA</span>
													<h3 className="title-tour-list"><Link href="/tour-single">Days and
														6 nights From
														Moscow</Link>
													</h3>
													<div className="review">
														<i className="icon-Star" />
														<i className="icon-Star" />
														<i className="icon-Star" />
														<i className="icon-Star" />
														<i className="icon-Star" />
														<span>(1 Review)</span>
													</div>
													<div className="icon-box flex-three">
														<div className="icons flex-three">
															<i className="icon-time-left" />
															<span>5 days</span>
														</div>
														<div className="icons flex-three">
															<svg width={21} height={16} viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M4.34766 4.79761C4.34766 2.94013 5.85346 1.43433 7.71094 1.43433C9.56841 1.43433 11.0742 2.94013 11.0742 4.79761C11.0742 6.65508 9.56841 8.16089 7.71094 8.16089C5.85346 8.16089 4.34766 6.65508 4.34766 4.79761Z" stroke="currentColor" strokeWidth="1.7" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
																<path d="M9.5977 15.1797H2.46098C1.34827 15.1797 0.558268 14.0954 0.898984 13.0362C1.80408 10.222 4.57804 8.18566 7.69301 8.18566C9.17897 8.18566 10.5566 8.64906 11.6895 9.43922" stroke="currentColor" strokeWidth="1.7" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
																<path d="M17.1035 15.1797V9.02734" stroke="currentColor" strokeWidth="1.7" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
																<path d="M20.1797 12.1035H14.0273" stroke="currentColor" strokeWidth="1.7" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
															</svg>
															<span>12 Person</span>
														</div>
													</div>
													<div className="flex-two">
														<div className="price-box flex-three">
															<p>From <span className="price-sale">$169.00</span></p>
															<span className="price">$199.00</span>
														</div>
														<div className="icon-bookmark">
															<i className="icon-Vector-151" />
														</div>
													</div>
												</div>
											</div>
										</SwiperSlide>
										<SwiperSlide>
											<div className="tour-listing">
												<Link href="/tour-single" className="tour-listing-image">
													<div className="badge-top flex-two">
														<span className="feature">Featured</span>
														<div className="badge-media flex-five">
															<span className="media"><i className="icon-Group-1000002909" />5</span>
															<span className="media"><i className="icon-Group-1000002910" />2</span>
														</div>
													</div>
													<img src="/assets/images/travel-list/15.jpg" alt="Image Listing" />
												</Link>
												<div className="tour-listing-content">
													<span className="tag-listing">Bestseller</span>
													<span className="map"><i className="icon-Vector4" />United States
														USA</span>
													<h3 className="title-tour-list"><Link href="/tour-single">Days and
														6 nights From
														Moscow</Link>
													</h3>
													<div className="review">
														<i className="icon-Star" />
														<i className="icon-Star" />
														<i className="icon-Star" />
														<i className="icon-Star" />
														<i className="icon-Star" />
														<span>(1 Review)</span>
													</div>
													<div className="icon-box flex-three">
														<div className="icons flex-three">
															<i className="icon-time-left" />
															<span>5 days</span>
														</div>
														<div className="icons flex-three">
															<svg width={21} height={16} viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M4.34766 4.79761C4.34766 2.94013 5.85346 1.43433 7.71094 1.43433C9.56841 1.43433 11.0742 2.94013 11.0742 4.79761C11.0742 6.65508 9.56841 8.16089 7.71094 8.16089C5.85346 8.16089 4.34766 6.65508 4.34766 4.79761Z" stroke="currentColor" strokeWidth="1.7" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
																<path d="M9.5977 15.1797H2.46098C1.34827 15.1797 0.558268 14.0954 0.898984 13.0362C1.80408 10.222 4.57804 8.18566 7.69301 8.18566C9.17897 8.18566 10.5566 8.64906 11.6895 9.43922" stroke="currentColor" strokeWidth="1.7" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
																<path d="M17.1035 15.1797V9.02734" stroke="currentColor" strokeWidth="1.7" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
																<path d="M20.1797 12.1035H14.0273" stroke="currentColor" strokeWidth="1.7" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
															</svg>
															<span>12 Person</span>
														</div>
													</div>
													<div className="flex-two">
														<div className="price-box flex-three">
															<p>From <span className="price-sale">$169.00</span></p>
															<span className="price">$199.00</span>
														</div>
														<div className="icon-bookmark">
															<i className="icon-Vector-151" />
														</div>
													</div>
												</div>
											</div>
										</SwiperSlide>
										<SwiperSlide>
											<div className="tour-listing">
												<Link href="/tour-single" className="tour-listing-image">
													<div className="badge-top flex-two">
														<span className="feature">Featured</span>
														<div className="badge-media flex-five">
															<span className="media"><i className="icon-Group-1000002909" />5</span>
															<span className="media"><i className="icon-Group-1000002910" />2</span>
														</div>
													</div>
													<img src="/assets/images/travel-list/16.jpg" alt="Image Listing" />
												</Link>
												<div className="tour-listing-content">
													<span className="tag-listing">Bestseller</span>
													<span className="map"><i className="icon-Vector4" />United States
														USA</span>
													<h3 className="title-tour-list"><Link href="/tour-single">Days and
														6 nights From
														Moscow</Link>
													</h3>
													<div className="review">
														<i className="icon-Star" />
														<i className="icon-Star" />
														<i className="icon-Star" />
														<i className="icon-Star" />
														<i className="icon-Star" />
														<span>(1 Review)</span>
													</div>
													<div className="icon-box flex-three">
														<div className="icons flex-three">
															<i className="icon-time-left" />
															<span>5 days</span>
														</div>
														<div className="icons flex-three">
															<svg width={21} height={16} viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M4.34766 4.79761C4.34766 2.94013 5.85346 1.43433 7.71094 1.43433C9.56841 1.43433 11.0742 2.94013 11.0742 4.79761C11.0742 6.65508 9.56841 8.16089 7.71094 8.16089C5.85346 8.16089 4.34766 6.65508 4.34766 4.79761Z" stroke="currentColor" strokeWidth="1.7" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
																<path d="M9.5977 15.1797H2.46098C1.34827 15.1797 0.558268 14.0954 0.898984 13.0362C1.80408 10.222 4.57804 8.18566 7.69301 8.18566C9.17897 8.18566 10.5566 8.64906 11.6895 9.43922" stroke="currentColor" strokeWidth="1.7" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
																<path d="M17.1035 15.1797V9.02734" stroke="currentColor" strokeWidth="1.7" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
																<path d="M20.1797 12.1035H14.0273" stroke="currentColor" strokeWidth="1.7" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
															</svg>
															<span>12 Person</span>
														</div>
													</div>
													<div className="flex-two">
														<div className="price-box flex-three">
															<p>From <span className="price-sale">$169.00</span></p>
															<span className="price">$199.00</span>
														</div>
														<div className="icon-bookmark">
															<i className="icon-Vector-151" />
														</div>
													</div>
												</div>
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
