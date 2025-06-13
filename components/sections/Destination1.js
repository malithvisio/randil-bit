
import Link from "next/link"

export default function Destination1() {
	return (
		<>

			<section className="widget-destination">
				<div className="tf-container">
					<div className="row">
						<div className="col-lg-12">
							<div className="center m0-auto w-text-heading mb-40">
								<span className="sub-title-heading text-main mb-15 fadeInUp wow">Explore the
									world</span>
								<h2 className="title-heading fadeInUp wow">We provide top tourist destinations</h2>
							</div>
						</div>
					</div>
					<div className="grid-three-destination">
						<div className="tf-widget-destination wow fadeInUp animated " data-wow-delay="0.1s">
							<Link href="/single-destination" className="destination-imgae">
								<span className="tour">3 tours</span>
								<img src="/assets/images/destination/list.jpg" alt="" />
							</Link>
							<div className="destination-content">
								<span className="nation">Switzerland</span>
								<div className="flex-two btn-destination">
									<h6 className="title"><Link href="/single-destination">View all tours</Link></h6>
									<Link href="/single-destination" className="flex-five btn-view">
										<i className="icon-Vector-32" />
									</Link>
								</div>
							</div>
						</div>
						<div className="tf-widget-destination wow fadeInUp animated " data-wow-delay="0.2s">
							<Link href="/single-destination" className="destination-imgae">
								<span className="tour">7 tours</span>
								<img src="/assets/images/destination/list1.jpg" alt="" />
							</Link>
							<div className="destination-content">
								<span className="nation">Thailand</span>
								<div className="flex-two btn-destination">
									<h6 className="title"><Link href="/single-destination">View all tours</Link></h6>
									<Link href="/single-destination" className="flex-five btn-view">
										<i className="icon-Vector-32" />
									</Link>
								</div>
							</div>
						</div>
						<div className="tf-widget-destination wow fadeInUp animated " data-wow-delay="0.3s">
							<Link href="/single-destination" className="destination-imgae">
								<span className="tour">9 tours</span>
								<img src="/assets/images/destination/list2.jpg" alt="" />
							</Link>
							<div className="destination-content">
								<span className="nation">united kingdom</span>
								<div className="flex-two btn-destination">
									<h6 className="title"><Link href="/single-destination">View all tours</Link></h6>
									<Link href="/single-destination" className="flex-five btn-view">
										<i className="icon-Vector-32" />
									</Link>
								</div>
							</div>
						</div>
						<div className="tf-widget-destination wow fadeInUp animated " data-wow-delay="0.4s">
							<Link href="/single-destination" className="destination-imgae">
								<span className="tour">4 tours</span>
								<img src="/assets/images/destination/list3.jpg" alt="" />
							</Link>
							<div className="destination-content">
								<span className="nation">Hongkong</span>
								<div className="flex-two btn-destination">
									<h6 className="title"><Link href="/single-destination">View all tours</Link></h6>
									<Link href="/single-destination" className="flex-five btn-view">
										<i className="icon-Vector-32" />
									</Link>
								</div>
							</div>
						</div>
						<div className="tf-widget-destination wow fadeInUp animated " data-wow-delay="0.5s">
							<Link href="/single-destination" className="destination-imgae">
								<span className="tour">3 tours</span>
								<img src="/assets/images/destination/list4.jpg" alt="" />
							</Link>
							<div className="destination-content">
								<span className="nation">Sri lanka</span>
								<div className="flex-two btn-destination">
									<h6 className="title"><Link href="/single-destination">View all tours</Link></h6>
									<Link href="/single-destination" className="flex-five btn-view">
										<i className="icon-Vector-32" />
									</Link>
								</div>
							</div>
						</div>
						<div className="tf-widget-destination wow fadeInUp animated " data-wow-delay="0.6s">
							<Link href="/single-destination" className="destination-imgae">
								<span className="tour">3 tours</span>
								<img src="/assets/images/destination/list.jpg" alt="" />
							</Link>
							<div className="destination-content">
								<span className="nation">Singapore</span>
								<div className="flex-two btn-destination">
									<h6 className="title"><Link href="/single-destination">View all tours</Link></h6>
									<Link href="/single-destination" className="flex-five btn-view">
										<i className="icon-Vector-32" />
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
