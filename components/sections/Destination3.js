
import Link from "next/link"

export default function Destination3() {
	return (
		<>

			<section className="widget-destination1">
				<div className="tf-container">
					<div className="row">
						<div className="col-lg-12">
							<div className="mb-50 center">
								<span className="sub-title-heading text-main font-yes fs-28-46 wow fadeInUp animated">Explore
									the world</span>
								<h2 className="title-heading wow fadeInUp animated">Popular Destinations</h2>
							</div>
						</div>
					</div>
					<div className="row mb--25em">
						<div className="col-md-7 col-lg-5 mb-30 wow fadeInUp animated " data-wow-delay="0.1s">
							<Link href="/single-destination" className="destination-style relative">
								<span className="tour">3 tours</span>
								<img src="/assets/images/tour/1.jpg" alt="" />
								<div className="destination-content">
									<div className="travel font-yes text-white">Travel to</div>
									<p className="text-white">Switzerland</p>
								</div>
							</Link>
						</div>
						<div className="col-md-5 col-lg-4 mb-30 wow fadeInUp animated " data-wow-delay="0.2s">
							<Link href="/single-destination" className="destination-style relative">
								<span className="tour">3 tours</span>
								<img src="/assets/images/tour/2.jpg" alt="" />
								<div className="destination-content">
									<div className="travel font-yes text-white">Travel to</div>
									<p className="text-white">Australia</p>
								</div>
							</Link>
						</div>
						<div className="col-md-5 col-lg-3 mb-30 wow fadeInUp animated " data-wow-delay="0.3s">
							<Link href="/single-destination" className="destination-style relative">
								<span className="tour">3 tours</span>
								<img src="/assets/images/tour/3.jpg" alt="" />
								<div className="destination-content">
									<div className="travel font-yes text-white">Travel to</div>
									<p className="text-white">London</p>
								</div>
							</Link>
						</div>
						<div className="col-md-7 col-lg-3 mb-30 wow fadeInUp animated " data-wow-delay="0.4s">
							<Link href="/single-destination" className="destination-style relative">
								<span className="tour">3 tours</span>
								<img src="/assets/images/tour/4.jpg" alt="" />
								<div className="destination-content">
									<div className="travel font-yes text-white">Travel to</div>
									<p className="text-white">Afghanistan</p>
								</div>
							</Link>
						</div>
						<div className="col-md-7 col-lg-5 mb-30 wow fadeInUp animated " data-wow-delay="0.5s">
							<Link href="/single-destination" className="destination-style relative">
								<span className="tour">3 tours</span>
								<img src="/assets/images/tour/5.jpg" alt="" />
								<div className="destination-content">
									<div className="travel font-yes text-white">Travel to</div>
									<p className="text-white">Morocco</p>
								</div>
							</Link>
						</div>
						<div className="col-md-5 col-lg-4 mb-30 wow fadeInUp animated " data-wow-delay="0.6s">
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
		</>
	)
}
