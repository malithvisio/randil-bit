

'use client'
import Link from "next/link"
import { useState } from "react"
import { TypeAnimation } from "react-type-animation"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import RangeSlider from "../elements/RangeSlider"

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

export default function Slider2() {
	const [isToggled, setToggled] = useState(false)
	const handleToggle = () => setToggled(!isToggled)
	return (
			<section className=" relative overflow-hidden">
				<div className="slider-home2-image">
					<div className="row">
						<div className="col-lg-12">
							<div className="slider-home2">
								<Swiper {...swiperOptions} className="swiper mySwiper">
									<div className="swiper-wrapper">
										<SwiperSlide className="swiper-slide">
											<img src="/assets/images/slide/slide1.jpg" className="image-slider-home2 relative" alt="Image slider" />
										</SwiperSlide>
										<SwiperSlide className="swiper-slide">
											<img src="/assets/images/slide/slide2.jpg" className="image-slider-home2 relative" alt="Image slider" />
										</SwiperSlide>
									</div>
									<div className="swiper-button-next next-slider2" />
									<div className="swiper-button-prev prev-slider2" />
								</Swiper>
							</div>
						</div>
						{/* /.main-banner-wrapper */}
					</div>
				</div>
				<div className="slider-home2-content">
				
					<div className="tf-container">
						<div className="row">
							<div className="col-lg-12 center relative z-index3">
								<img src="/assets/images/page/mask-bcrumb.png" alt="Image" className="mask-slide2-flan" />
								<span className="sub-title text-main font-yes fs-28-46 wow fadeInUp animated">Discover Sri Lanka</span>
								<h1 className="banner-text title-slide text-white mb-45 wow fadeInUp animated">Experience
									<span className="animationtext clip text-main font-yes text-main">
										<span className="cd-words-wrapper">
											<TypeAnimation
												 sequence={[
													' Nature',
													1000,
													' Culture',
													1000,
													' Adventure',
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
									&amp; <br />with Randil Lanka Tours
								</h1>
								
								<div className="tour-list wow fadeInUp animated">
                                <ul className="flex-five">
                                    <li>
                                        <i className="icon-Vector-5" />
                                        <span>Personalized Travel Experiences</span>
                                    </li>
                                    <li>
                                        <i className="icon-Vector-5" />
                                        <span>Expert Local Guides</span>
                                    </li>
                                    <li>
                                        <i className="icon-Vector-5" />
                                        <span>Unforgettable Adventures</span>
                                    </li>
                                </ul>
                            </div>
							</div>
						</div>
					</div>
				</div>
			</section>
		
	)
}
