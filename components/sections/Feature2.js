
import Link from "next/link"

export default function Feature2() {
	return (
		<>

			<section className="widget-feature pd-main relative">
				<img src="/assets/images/page/shape5.png" alt="image" className="feature-shape" />
				<div className="tf-container">
					<div className="row z-index3 relative">
						<div className="col-md-5">
							<div className="image-feature-wrap relative ">
								<div className="image-feature relative overflow-hidden">
									<img src="/assets/images/page/explore2.jpg" alt="image" className="image" />
									<img src="/assets/images/page/shape5.1.png" alt="image" className="shape-image" />
								</div>
								<div className="exploring flex-five center">
									<span className="font-yes text-white ">Never stop
										Exploring</span>
								</div>
							</div>
						</div>
						<div className="col-md-7">
							<div className="content-feature-wrap">
								<div className="mb-40">
									<span className="sub-title-heading text-main font-yes fs-28-46 wow fadeInUp animated">Explore
										the
										world</span>
									<h2 className="title-heading mb-18 wow fadeInUp animated">Great opportunity for <br />
										<span className="text-gray font-yes">adventure</span> &amp; travels
									</h2>
									<p className="des-heading wow fadeInUp animated">Welcome to our Print 128 website!
										We are a professional
										and reliable printing
										company that offers a wide range of printing services to</p>
								</div>
								<div className="feature-list-wrap">
									<div className="feature-list">
										<div className="feature-list-iteam flex-three">
											<div className="icon flex-five">
												<i className="icon-fire-2" />
											</div>
											<h6><Link href="#">Family Camping</Link></h6>
										</div>
										<div className="feature-list-iteam flex-three">
											<div className="icon flex-five">
												<i className="icon-Group-21" />
											</div>
											<h6><Link href="#">Luxury Cabin</Link></h6>
										</div>
										<div className="feature-list-iteam flex-three">
											<div className="icon flex-five">
												<i className="icon-Group-3" />
											</div>
											<h6><Link href="#">Excellent support</Link></h6>
										</div>
										<div className="feature-list-iteam flex-three">
											<div className="icon flex-five">
												<i className="icon-flexibility-1-1" />
											</div>
											<h6><Link href="#">Ultimate flexibility</Link></h6>
										</div>
										<div className="feature-list-iteam flex-three">
											<div className="icon flex-five">
												<i className="icon-high-quality-1" />
											</div>
											<h6><Link href="#">Quality at our core</Link></h6>
										</div>
										<div className="feature-list-iteam flex-three">
											<div className="icon flex-five">
												<i className="icon-coins-1" />
											</div>
											<h6><Link href="#">Cost Friendly Tour</Link></h6>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
