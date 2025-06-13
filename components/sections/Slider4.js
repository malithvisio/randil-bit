'use client'
import "@/node_modules/react-modal-video/css/modal-video.css"
import Link from "next/link"
import { useState } from 'react'
import ModalVideo from 'react-modal-video'
import { TypeAnimation } from 'react-type-animation'

export default function Slider4() {
	const [isOpen, setOpen] = useState(false)
	return (
		<>

			<section className="slider-home4 relative">
				<div className="tf-container">
					<div className="row ">
						<div className="col-10 col-xl-7">
							<div className="home4-content z-index3">
								<span className="sub-title font-yes text-second fs-28-46 wow fadeInUp animated">Explore
									the world</span>
								<h1 className="title-slide text-white mb-40 wow fadeInUp animated">Adventure
									<span className="animationtext clip text-main">
										<span className="cd-words-wrapper">
											<TypeAnimation
												sequence={[
													' Tour',
													1000,
													' Trip',
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
									Camping start With Us
								</h1>
								<div className="btn-group">
									<Link href="#" className="btn-main wow fadeInUp animated">
										<p className="btn-main-text">Let,s get started</p>
										<p className="iconer">
											<i className="icon-arrow-right" />
										</p>
									</Link>
									<Link href="#" className="btn-w-wa text-main wow fadeInUp animated">Beautiful Places
										Arround the World.</Link>
								</div>
							</div>
						</div>
						<div className="col-2 col-xl-5 relative">
							<div className="video-wrap">
								<a onClick={() => setOpen(true)} className="widget-icon-video widget-videos flex-five z-index3">
									<i className="icon-Polygon-4" />
								</a>
							</div>
						</div>
					</div>
					<div className="mask-slider">
						<img src="/assets/images/slide/mask-home4.png" alt="Image" className="mask-slider1" />
					</div>
				</div>
			</section>
			<ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="JXMWOmuR1hU" onClose={() => setOpen(false)} />
		</>
	)
}
