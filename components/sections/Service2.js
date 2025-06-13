
import Link from "next/link"

export default function Service2() {
	return (
		<>

			<section className="widget-service-h5 relative pd-main">
				<div className="mask-home5" />
				<div className="tf-container">
					<div className="row al-i-end mb-40">
						<div className="col-md-7">
							<div className>
								<span className="sub-title-heading text-main fs-28-46 font-yes wow fadeInUp animated">Explore
									the world</span>
								<h2 className="title-heading wow fadeInUp animated">Great opportunity for <br /><span className="text-gray font-yes">adventure</span> &amp; travels</h2>
							</div>
						</div>
						<div className="col-md-5">
							<p className="wow fadeInUp animated">Pellentesque habitant morbi tristique senectus netus et
								malesuada
								fames ac turp egestas. Aliquam viverra arcu. Donec aliquet blandit
								enim feugiat mattis.
							</p>
						</div>
					</div>
					<div className="row">
						<div className="col-md-6 col-lg-3 wow fadeInUp animated " data-wow-delay="0.1s">
							<div className="tf-icon-box icon-box-style1 relative">
								<div className="icon">
									<i className="icon-adventures-1" />
								</div>
								<div className="content">
									<h4 className="title-icon"><Link href="#">Adventure Plan</Link></h4>
									<p className="des-icon">Pellentesque habitant morbi tristique senectus
										netus et
										malesuada fames ac</p>
									<Link href="#" className="icons-link">Booking Now <i className="icon-Path-77287-1" /></Link>
								</div>
							</div>
						</div>
						<div className="col-md-6 col-lg-3 wow fadeInUp animated " data-wow-delay="0.2s">
							<div className="tf-icon-box icon-box-style1 relative">
								<div className="icon">
									<i className="icon-fire-2" />
								</div>
								<div className="content">
									<h4 className="title-icon"><Link href="#">Secure Camping</Link></h4>
									<p className="des-icon">Pellentesque habitant morbi tristique senectus
										netus et
										malesuada fames ac</p>
									<Link href="#" className="icons-link">Booking Now <i className="icon-Path-77287-1" /></Link>
								</div>
							</div>
						</div>
						<div className="col-md-6 col-lg-3 wow fadeInUp animated " data-wow-delay="0.3s">
							<div className="tf-icon-box icon-box-style1 relative">
								<div className="icon">
									<svg width={69} height={55} viewBox="0 0 69 42" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M49.7274 35.8052H42.7663M49.7274 35.8052C49.7274 38.6871 52.0663 41.026 54.9482 41.026C57.83 41.026 60.1689 38.6871 60.1689 35.8052M49.7274 35.8052C49.7274 32.9234 52.0663 30.5845 54.9482 30.5845C57.83 30.5845 60.1689 32.9234 60.1689 35.8052M42.7663 35.8052H18.4026M42.7663 35.8052V11.4416M42.7663 35.8052H32.3247V11.4416H42.7663M42.7663 11.4416H53.2079L58.4287 21.8831M42.7663 11.4416H55.338C57.7152 11.4416 59.3928 9.1131 58.6445 6.8612L57.482 3.38068C57.0086 1.95714 55.6791 1 54.179 1H1V35.8052H7.96105M58.4287 21.8831L64.9407 24.4901C66.2633 25.0156 67.13 26.2999 67.13 27.72V32.3247C67.13 34.2494 65.5742 35.8052 63.6495 35.8052H60.1689M58.4287 21.8831H42.7663H32.3247M18.4026 35.8052C18.4026 38.6871 16.0637 41.026 13.1818 41.026C10.3 41.026 7.96105 38.6871 7.96105 35.8052M18.4026 35.8052C18.4026 32.9234 16.0637 30.5845 13.1818 30.5845C10.3 30.5845 7.96105 32.9234 7.96105 35.8052M7.96105 21.8831H25.3637V11.4416H7.96105V21.8831Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
									</svg>
								</div>
								<div className="content">
									<h4 className="title-icon"><Link href="#">Trailers &amp; RV Sports</Link></h4>
									<p className="des-icon">Pellentesque habitant morbi tristique senectus
										netus et
										malesuada fames ac</p>
									<Link href="#" className="icons-link">Booking Now <i className="icon-Path-77287-1" /></Link>
								</div>
							</div>
						</div>
						<div className="col-md-6 col-lg-3 wow fadeInUp animated " data-wow-delay="0.4s">
							<div className="tf-icon-box icon-box-style1 relative">
								<div className="icon">
									<i className="icon-adventures-1" />
								</div>
								<div className="content">
									<h4 className="title-icon"><Link href="#">Luxury cabin</Link></h4>
									<p className="des-icon">Pellentesque habitant morbi tristique senectus
										netus et
										malesuada fames ac</p>
									<Link href="#" className="icons-link">Booking Now <i className="icon-Path-77287-1" /></Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
