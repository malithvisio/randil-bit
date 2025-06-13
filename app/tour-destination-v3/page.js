import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { sriLankaDestinations } from "@/components/destinations"
export default function TourDestinationV3() {
	// New array of 9 top Sri Lanka destinations
	

	return (
		<>
			<Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Tour Destination v3">
				<div>
					<section className="tour-destination pd-main">
						<div className="tf-container">
							<div className="row">
								{sriLankaDestinations.map(dest => (
									<div key={dest.id} className="col-sm-6 col-lg-3 mb-37">
										<div className="tf-widget-destination">
											<Link href="/single-destination" className="destination-imgae">
												<img src={dest.imgSrc} alt={dest.name} />
											</Link>
											<div className="destination-content">
												<span className="nation">{dest.name}</span>
												<div className="flex-two btn-destination">
													<h6 className="title">
														<Link href="/single-destination">More Info</Link>
													</h6>
													<Link href="/single-destination" className="flex-five btn-view">
														<i className="icon-Vector-32" />
													</Link>
												</div>
											</div>
										</div>
									</div>
								))}
							</div>
						</div>
					</section>
					<section className="mb--93">
						<div className="tf-container">
							<div className="callt-to-action flex-two">
								<div className="callt-to-action-content flex-three">
									<div className="image">
										<img src="/assets/images/page/ready.png" alt="Image" />
									</div>
									<div className="content">
										<h2 className="title-call">Ready to adventure and enjoy natural</h2>
										<p className="des">Lorem ipsum dolor sit amet, consectetur notted adipisicin</p>
									</div>
								</div>
								<img src="/assets/images/page/vector4.png" alt="" className="shape-ab" />
								<div className="callt-to-action-button">
									<Link href="#" className="get-call">Let,s get started</Link>
								</div>
							</div>
						</div>
					</section>
				</div>
			</Layout>
		</>
	)
}