
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function TourDestinationV2() {

	return (
		<>

			<Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Tour Destination v2">
				<div>
					<section className="tour-destination pd-main">
						<div className="tf-container">
							<div className="row">
								<div className="col-md-5 mb-37">
									<Link href="/single-destination" className="destination-style relative">
										<span className="tour">3 tours</span>
										<img src="/assets/images/tour/1.jpg" alt="" />
										<div className="destination-content">
											<div className="travel font-yes text-white">Travel to</div>
											<p className="text-white">Switzerland</p>
										</div>
									</Link>
								</div>
								<div className="col-md-4 mb-37">
									<Link href="/single-destination" className="destination-style relative">
										<span className="tour">3 tours</span>
										<img src="/assets/images/tour/2.jpg" alt="" />
										<div className="destination-content">
											<div className="travel font-yes text-white">Travel to</div>
											<p className="text-white">Australia</p>
										</div>
									</Link>
								</div>
								<div className="col-md-3 mb-37">
									<Link href="/single-destination" className="destination-style relative">
										<span className="tour">3 tours</span>
										<img src="/assets/images/tour/3.jpg" alt="" />
										<div className="destination-content">
											<div className="travel font-yes text-white">Travel to</div>
											<p className="text-white">London</p>
										</div>
									</Link>
								</div>
								<div className="col-md-3 mb-37">
									<Link href="/single-destination" className="destination-style relative">
										<span className="tour">3 tours</span>
										<img src="/assets/images/tour/4.jpg" alt="" />
										<div className="destination-content">
											<div className="travel font-yes text-white">Travel to</div>
											<p className="text-white">Afghanistan</p>
										</div>
									</Link>
								</div>
								<div className="col-md-5 mb-37">
									<Link href="/single-destination" className="destination-style relative">
										<span className="tour">3 tours</span>
										<img src="/assets/images/tour/5.jpg" alt="" />
										<div className="destination-content">
											<div className="travel font-yes text-white">Travel to</div>
											<p className="text-white">Morocco</p>
										</div>
									</Link>
								</div>
								<div className="col-md-4 mb-37">
									<Link href="/single-destination" className="destination-style relative">
										<span className="tour">3 tours</span>
										<img src="/assets/images/tour/6.jpg" alt="" />
										<div className="destination-content">
											<div className="travel font-yes text-white">Travel to</div>
											<p className="text-white">Singapore</p>
										</div>
									</Link>
								</div>
							</div>
						</div>
					</section>
					{/* Widget Tour Destination v1 */}
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