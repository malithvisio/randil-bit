'use client'
import "@/node_modules/react-modal-video/css/modal-video.css"
import Link from "next/link"
import { useState } from 'react'
import ModalVideo from 'react-modal-video'
import { TypeAnimation } from 'react-type-animation'

export default function Slider5() {
	const [isOpen, setOpen] = useState(false)
	return (
		<>

			<section className="slider-home5 relative">
				<div className="tf-container">
					<div className="row relative z-index3">
						<div className="col-lg-7">
							<div className="content-slide-home5 relative">
								<span className="sub-title text-second font-yes fs-28-46 wow fadeInUp animated">Explore
									the world</span>
								<h1 className="title-slide text-white mb-32 wow fadeInUp animated">
									<span className="animationtext clip text-main">
										<span className="cd-words-wrapper">
											<TypeAnimation
												sequence={[
													' Camping',
													1000,
													' Travel',
													1000,
												]}
												wrapper="span"
												speed={50}
												style={{ display: 'inline-block', marginLeft: "15px" }}
												repeat={Infinity}
												className="item-text is-visible ms-3">
											</TypeAnimation>
										</span>
									</span>&amp; <br />adventure camping
								</h1>
								<p className="des text-white mb-45 wow fadeInUp animated">Welcome to our Print 128
									website! We are a
									professional and reliable printing
									company that offers a wide range of printing services to
								</p>
								<img src="/assets/images/slide/mask-h5-2.svg" alt="image" className="image-svg2" />
								<div className="btn-group">
									<Link href="#" className="btn-main wow fadeInUp animated">
										<p className="btn-main-text">Let,s get started</p>
										<p className="iconer">
											<i className="icon-arrow-right" />
										</p>
									</Link>
									<div className="video-wrap wow fadeInUp animated">
										<a onClick={() => setOpen(true)} className="widget-icon-video flex-five widget-videos">
											<i className="icon-Polygon-4" />
										</a>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-5">
							<div className="image-slide-home5 relative">
								<img src="/assets/images/slide/slide5.jpg" alt="image" />
								<span className="text-white font-yes">Never stop <br /> Exploring</span>
								<img src="/assets/images/slide/mask-h5.svg" alt="" className="image-svg" />
							</div>
						</div>
					</div>
					<div className="mask-left" />
					<div className="mask-right" />
				</div>
			</section>
			<ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="JXMWOmuR1hU" onClose={() => setOpen(false)} />
		</>
	)
}
