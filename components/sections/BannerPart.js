'use client'
import { useState } from 'react'
import ModalVideo from 'react-modal-video'
import "@/node_modules/react-modal-video/css/modal-video.css"
import Link from "next/link"

export default function BannerPart() {
	const [isOpen, setOpen] = useState(false)
	return (
		<>

			<section className="banner-part ">
				<div className="tf-container ">
					<div className="row ">
						<div className="col-lg-12">
							<div className="mb-30  center" style={{ marginTop: '100px' }}>
								<span className="sub-title-heading text-main font-yes fs-28-46 wow fadeInUp animated">Explore the Wonders of Sri Lanka</span>
								<h2 className="title-heading wow fadeInUp animated">Tailored Packages for Global Travelers</h2>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-md-4 wow fadeInUp animated " data-wow-delay="0.1s">
							<div className="banner-part-item booking-style-1 relative bg-part-gray overflow-hidden">
								<div className="content relative z-index3">
									<span className="text-main sale-up mb-10">Experience Paradise</span>
									<Link href="#" className="font-yes title"> Exclusive <br /> Getaways</Link>
									<Link href="#" className="tour1 btn-booking mt-27">Book Now <i className="icon-arrow-right" /></Link>
								</div>
								<img src="/assets/images/explore/ex-pl-1.png" alt="image" className="mask-banner-part" />
								<span className="price-banner-part flex-five center">From $99</span>
								<img src="/assets/images/explore/mask-banner-part.png" alt="image" className="mask-banner-bottom" />
							</div>
						</div>
						<div className="col-md-4 wow fadeInUp animated " data-wow-delay="0.2s">
							<div className="banner-part-item booking-style-2 relative bg-part-gray overflow-hidden">
								<div className="content relative z-index3">
									<span className="text-main sale-up font-yes">Unforgettable Adventures</span>
									<Link href="#" className="title"> Discover Sri Lanka</Link>
									<p className="text-main mb-30">Flexible bookings available</p>
									<Link href="#" className="tour1 btn-booking ">Book Now <i className="icon-arrow-right" /></Link>
								</div>
								<img src="/assets/images/explore/ex-pl2.jpg" alt="image" className="mask-banner-part" />
								<img src="/assets/images/explore/shape1.png" alt="image" className="banner-part-shape1" />
								<img src="/assets/images/explore/shape2.png" alt="image" className="banner-part-shape2" />
								<img src="/assets/images/explore/mask-banner-part.png" alt="image" className="mask-banner-bottom" />
								<div className="video-wrap">
									<a onClick={() => setOpen(true)} className="widget-icon-video widget-videos flex-five z-index3">
										<i className="icon-Polygon-4" />
									</a>
								</div>
							</div>
						</div>
						<div className="col-md-4 wow fadeInUp animated " data-wow-delay="0.3s">
							<div className="banner-part-item booking-style-3 relative bg-part-blue overflow-hidden">
								<div className="content z-index3 relative">
									<span className="text-main sale-up ">Worldwide Welcome</span>
									<Link href="#" className="title"> Your Dream Vacation Awaits!</Link>
									<p className="text-main mb-30">Special Discounts for Early Bookings</p>
									<Link href="#" className="tour1 btn-booking ">Book Now <i className="icon-arrow-right" /></Link>
								</div>
								<img src="/assets/images/explore/ex-pl-3.jpg" alt="image" className="mask-banner-part" />
								<img src="/assets/images/explore/shape3.png" alt="image" className="banner-part-shape1" />
								<img src="/assets/images/explore/mask-banner-part.png" alt="image" className="mask-banner-bottom" />
							</div>
						</div>
					</div>
				</div>
			</section>
			<ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="zAkCYdNGKpU" onClose={() => setOpen(false)} />
		</>
	)
}
