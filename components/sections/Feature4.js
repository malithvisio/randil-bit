
import Link from "next/link"

export default function Feature4() {
	return (
		<>

			<section className="widget-feature3 bg-1">
				<div className="tf-container">
					<div className="row al-i-end mb-22">
						<div className="col-md-6">
							<span className="sub-title-heading text-main font-yes fs-28-46 wow fadeInUp animated">Populer
								Activities</span>
							<h2 className="title-heading wow fadeInUp animated">Extras features</h2>
						</div>
						<div className="col-md-6 wow fadeInUp animated">
							<p className="des">Welcome to our Print 128 website! We are a professional and reliable
								printing
								company that offers a wide range of printing services to</p>
						</div>
					</div>
					<div className="row">
						<div className=" col-lg-4">
							<div className="image-feature3">
								<div className="image-feature relative">
									<img src="/assets/images/feature/ft1.jpg" alt="image" />
									<span className="text font-yes text-white">Never stop Exploring</span>
								</div>
							</div>
						</div>
						<div className="col-lg-8 box-feature-wrap">
							<div className="row">
								<div className="col-md-6 mb-32 wow fadeInUp animated " data-wow-delay="0.1s">
									<div className="tf-icon-box icon-box-style2 flex relative">
										<div className="icon">
											<i className="icon-Travel_insurance" />
										</div>
										<div className="content">
											<h6 className="title-icon"><Link href="#">Safety first always</Link></h6>
											<p className="des-icon">Welcome to our Print 128 web
												company that offers a wide </p>
										</div>
									</div>
								</div>
								<div className="col-md-6 mb-32 wow fadeInUp animated " data-wow-delay="0.2s">
									<div className="tf-icon-box icon-box-style2 flex relative">
										<div className="icon">
											<i className="icon-plane-1-1" />
										</div>
										<div className="content">
											<h6 className="title-icon"><Link href="#">Trusted travel guide</Link></h6>
											<p className="des-icon">Welcome to our Print 128 web
												company that offers a wide </p>
										</div>
									</div>
								</div>
								<div className="col-md-6 mb-32 wow fadeInUp animated " data-wow-delay="0.3s">
									<div className="tf-icon-box icon-box-style2 flex relative">
										<div className="icon">
											<i className="icon-destination" />
										</div>
										<div className="content">
											<h6 className="title-icon"><Link href="#">Pesonalized Trips</Link></h6>
											<p className="des-icon">Welcome to our Print 128 web
												company that offers a wide </p>
										</div>
									</div>
								</div>
								<div className="col-md-6 mb-32 wow fadeInUp animated " data-wow-delay="0.4s">
									<div className="tf-icon-box icon-box-style2 flex relative">
										<div className="icon">
											<i className="icon-climbing-1-1" />
										</div>
										<div className="content">
											<h6 className="title-icon"><Link href="#">Adventure &amp; Climbing</Link></h6>
											<p className="des-icon">Welcome to our Print 128 web
												company that offers a wide </p>
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
