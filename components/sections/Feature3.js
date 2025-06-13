
import Link from "next/link"

export default function Feature3() {
	return (
		<>

			<section className="widget-feature2">
				<div className="tf-container full">
					<div className="row">
						<div className="col-md-12 col-xl-5 relative ">
							<div className="image-feature2 relative overflow-hidden">
								<img src="/assets/images/page/travelling.jpg" alt="" />
								<img src="/assets/images/page/mask-cta.png" alt="image" className="mask-ft-bottom" />
								<img src="/assets/images/page/mask-ft-right.png" alt="image" className="mask-ft-right" />
							</div>
							<div className="exploring flex-five center">
								<span className="font-yes text-white ">Never stop
									Exploring</span>
							</div>
						</div>
						<div className="col-md-12 col-xl-7">
							<div className="content-feature2">
								<div className="mb-60">
									<span className="sub-title-heading text-main font-yes fs-28-46 wow fadeInUp animated">Explore
										the
										world</span>
									<h2 className="title-heading mb-18 wow fadeInUp animated">Why you Choose us for
										<span className="text-gray font-yes">adventure</span> &amp; travelling </h2>
									<p className="des wow fadeInUp animated">Welcome to our Print 128 website! We are a
										professional and
										reliable printing
										company that offers a wide range of printing services to</p>
								</div>
								<div className="row">
									<div className="col-md-6">
										<div className="cheackmark flex mb-70">
											<div className="icon flex-five">
												<i className="icon-plane-1" />
											</div>
											<div className="content">
												<h5 className="mb-15 wow fadeInUp animated"><Link href="#">Safety first always</Link></h5>
												<p className="des wow fadeInUp animated">Welcome to our Print 128 web
													company that offers a wide </p>
											</div>
										</div>
										<div className="cheackmark flex">
											<div className="icon flex-five">
												<i className="icon-hiking-1-1" />
											</div>
											<div className="content">
												<h5 className="mb-15 wow fadeInUp animated"><Link href="#">Adventure &amp; Climbing</Link></h5>
												<p className="des wow fadeInUp animated">Welcome to our Print 128 web
													company that offers a wide </p>
											</div>
										</div>
									</div>
									<div className="col-md-6">
										<div className="cheackmark flex mb-70">
											<div className="icon flex-five">
												<i className="icon-price-tag-1" />
											</div>
											<div className="content">
												<h5 className="mb-15 wow fadeInUp animated"><Link href="#">Low price &amp; friendly</Link></h5>
												<p className="des wow fadeInUp animated">Welcome to our Print 128 web
													company that offers a wide </p>
											</div>
										</div>
										<div className="cheackmark flex">
											<div className="icon flex-five">
												<i className="icon-guide-1-1" />
											</div>
											<div className="content">
												<h5 className="mb-15 wow fadeInUp animated"><Link href="#">Trusted travel guide</Link></h5>
												<p className="des wow fadeInUp animated">Welcome to our Print 128 web
													company that offers a wide </p>
											</div>
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
