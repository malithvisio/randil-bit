'use client'
import { useState } from 'react'
import ModalVideo from 'react-modal-video'
import "@/node_modules/react-modal-video/css/modal-video.css"
import Link from "next/link"

export default function Discount() {
	const [isOpen, setOpen] = useState(false)
	return (
		<>

			<section className="discount-h5">
				<div className="tf-container">
					<div className="row mb-30">
						<div className="col-md-12">
							<div className="center">
								<span className="sub-title-heading text-main fs-28-46 font-yes wow fadeInUp animated">Populer
									Activities</span>
								<h2 className="title-heading wow fadeInUp animated">Explore <span className="text-main font-yes">Real</span>
									Discount</h2>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-md-6 col-lg-3 wow fadeInUp animated " data-wow-delay="0.1s">
							<div className="banner-part-item booking-style-1 relative  overflow-hidden">
								<span className="text-main sale-up mb-10">Save up to 25%</span>
								<Link href="#" className="font-yes title"> Special Discount Offering</Link>
								<Link href="#" className="tour1 btn-booking mt-27">Booking Now <i className="icon-arrow-right" /></Link>
								<div className="image-wrap relative">
									<img src="/assets/images/explore/ex-pl-1.png" alt="image" className="mask-banner-part" />
									<span className="price-banner-part flex-five center">From 99$</span>
								</div>
							</div>
						</div>
						<div className="col-md-6 col-lg-3 wow fadeInUp animated " data-wow-delay="0.2s">
							<div className="banner-part-item booking-style-2 relative bg-part-gray overflow-hidden">
								<span className="text-main sale-up">This Week only</span>
								<Link href="#" className="title"> Enjoy 50% Off</Link>
								<p className="text-main mb-37 text-free">&amp; Free cancelation</p>
								<Link href="#" className="tour1 btn-booking ">Booking Now <i className="icon-arrow-right" /></Link>
								<div className="image-wrap relative">
									<img src="/assets/images/explore/ex-pl2.jpg" alt="image" className="mask-banner-part" />
									<img src="/assets/images/explore/shape1.png" alt="image" className="banner-part-shape1" />
									<img src="/assets/images/explore/shape2.png" alt="image" className="banner-part-shape2" />
									<div className="video-wrap">
										<a onClick={() => setOpen(true)} className="widget-icon-video flex-five widget-videos">
											<i className="icon-Polygon-4" />
										</a>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-6 col-lg-3 wow fadeInUp animated " data-wow-delay="0.3s">
							<div className="banner-part-item booking-style-3 relative bg-part-blue overflow-hidden">
								<span className="text-main sale-up ">Australia Attraction</span>
								<Link href="#" className="title"> The best, for less!</Link>
								<p className="text-main mb-30">10% Off today</p>
								<Link href="#" className="tour1 btn-booking ">Booking Now <i className="icon-arrow-right" /></Link>
								<div className="image-wrap relative">
									<img src="/assets/images/explore/ex-pl-3.jpg" alt="image" className="mask-banner-part" />
									<img src="/assets/images/explore/shape3.png" alt="image" className="banner-part-shape1" />
								</div>
							</div>
						</div>
						<div className="col-md-6 col-lg-3 wow fadeInUp animated " data-wow-delay="0.4s">
							<div className="banner-part-item booking-style-1 relative  overflow-hidden">
								<span className="text-main sale-up mb-10">Save up to 25%</span>
								<Link href="#" className="font-yes title"> Special Discount Offering</Link>
								<Link href="#" className="tour1 btn-booking mt-27">Booking Now <i className="icon-arrow-right" /></Link>
								<div className="image-wrap relative">
									<img src="/assets/images/page/mask-conter-h5.png" alt="image" className="mask-banner-part2" />
									<span className="price-banner-part flex-five center">From 99$</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="JXMWOmuR1hU" onClose={() => setOpen(false)} />
		</>
	)
}
