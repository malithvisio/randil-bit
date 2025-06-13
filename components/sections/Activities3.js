'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
	modules: [Autoplay, Pagination, Navigation],
	slidesPerView: 4,
    spaceBetween: 30,
    observer: true,
    speed: 1500,
    observeParents: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        500: {
            slidesPerView: 2,
        },
        767: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 4,
        },
    },
}
import Link from "next/link"

export default function Activities3() {
	return (
		<>

			<section className="populer-activities-section bg-1">
				<div className="tf-container">
					<div className="row">
						<div className="col-lg-12">
							<div className="mb-30 center">
								<span className="sub-title-heading text-main font-yes fs-28-46 wow fadeInUp animated">Populer
									Activities</span>
								<h2 className="title-heading wow fadeInUp animated">Explore Real Adventure</h2>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-12 relative populer-activities-slide">
							<Swiper {...swiperOptions} className="swiper populer-activities overflow-hidden">
								<div className="swiper-wrapper">
									<SwiperSlide>
										<div className="tf-widget-populer">
											<div className="image relative">
												<img src="/assets/images/image-box/imb1.jpg" alt="Image" />
												<img src="/assets/images/image-box/mask-box.png" alt="Image" className="mask-populer" />
											</div>
											<div className="content relative center">
												<div className="icon flex-five">
													<i className="icon-Group" />
												</div>
												<h5 className="title-populer mb-18"><Link href="#">Couple camping</Link></h5>
												<p className="des-populer">Welcome to our Print 128 website company that
													offers</p>
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="tf-widget-populer">
											<div className="image relative">
												<img src="/assets/images/image-box/imb2.jpg" alt="Image" />
												<img src="/assets/images/image-box/mask-box.png" alt="Image" className="mask-populer" />
											</div>
											<div className="content relative center">
												<div className="icon flex-five">
													<i className="icon-Group-1" />
												</div>
												<h5 className="title-populer mb-18"><Link href="#">Trailers and rv
													spots</Link></h5>
												<p className="des-populer">Welcome to our Print 128 website company that
													offers</p>
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="tf-widget-populer">
											<div className="image relative">
												<img src="/assets/images/image-box/imb3.jpg" alt="Image" />
												<img src="/assets/images/image-box/mask-box.png" alt="Image" className="mask-populer" />
											</div>
											<div className="content relative center">
												<div className="icon flex-five">
													<i className="icon-bicyclist-1" />
												</div>
												<h5 className="title-populer mb-18"><Link href="#">Mountain Biking</Link></h5>
												<p className="des-populer">Welcome to our Print 128 website company that
													offers</p>
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="tf-widget-populer">
											<div className="image relative">
												<img src="/assets/images/image-box/imb4.jpg" alt="Image" />
												<img src="/assets/images/image-box/mask-box.png" alt="Image" className="mask-populer" />
											</div>
											<div className="content relative center">
												<div className="icon flex-five">
													<i className="icon-fishing-2" />
												</div>
												<h5 className="title-populer mb-18"><Link href="#">Fishing &amp; Swimming</Link>
												</h5>
												<p className="des-populer">Welcome to our Print 128 website company that
													offers</p>
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="tf-widget-populer">
											<div className="image relative">
												<img src="/assets/images/image-box/imb1.jpg" alt="Image" />
												<img src="/assets/images/image-box/mask-box.png" alt="Image" className="mask-populer" />
											</div>
											<div className="content relative center">
												<div className="icon flex-five">
													<i className="icon-Group" />
												</div>
												<h5 className="title-populer mb-18"><Link href="#">Couple camping</Link></h5>
												<p className="des-populer">Welcome to our Print 128 website company that
													offers</p>
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="tf-widget-populer">
											<div className="image relative">
												<img src="/assets/images/image-box/imb2.jpg" alt="Image" />
												<img src="/assets/images/image-box/mask-box.png" alt="Image" className="mask-populer" />
											</div>
											<div className="content relative center">
												<div className="icon flex-five">
													<i className="icon-Group-1" />
												</div>
												<h5 className="title-populer mb-18"><Link href="#">Trailers and rv
													spots</Link></h5>
												<p className="des-populer">Welcome to our Print 128 website company that
													offers</p>
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="tf-widget-populer">
											<div className="image relative">
												<img src="/assets/images/image-box/imb3.jpg" alt="Image" />
												<img src="/assets/images/image-box/mask-box.png" alt="Image" className="mask-populer" />
											</div>
											<div className="content relative center">
												<div className="icon flex-five">
													<i className="icon-bicyclist-1" />
												</div>
												<h5 className="title-populer mb-18"><Link href="#">Mountain Biking</Link></h5>
												<p className="des-populer">Welcome to our Print 128 website company that
													offers</p>
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="tf-widget-populer">
											<div className="image relative">
												<img src="/assets/images/image-box/imb4.jpg" alt="Image" />
												<img src="/assets/images/image-box/mask-box.png" alt="Image" className="mask-populer" />
											</div>
											<div className="content relative center">
												<div className="icon flex-five">
													<i className="icon-fishing-2" />
												</div>
												<h5 className="title-populer mb-18"><Link href="#">Fishing &amp; Swimming</Link>
												</h5>
												<p className="des-populer">Welcome to our Print 128 website company that
													offers</p>
											</div>
										</div>
									</SwiperSlide>
								</div>
							</Swiper>
							<div className="swiper-button-next" />
							<div className="swiper-button-prev" />
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
