
import Link from "next/link"

export default function MobieApp() {
	return (
		<>

			<section className="widget-mobie-app">
				<div className="tf-container">
					<div className="mobie-app overflow-hidden">
						<div className="row">
							<div className="col-md-6">
								<div className="mobie-app-image relative">
									<div className="mb-32">
										<span className="sub-title-heading text-main fs-28-46 font-yes wow fadeInUp animated ">Explore
											the
											world</span>
										<h2 className="title-heading text-white wow fadeInUp animated">20% offer for
											online 1st app booking
										</h2>
										<p className="des text-white wow fadeInUp animated">Welcome to our Print 128
											website! company that</p>
									</div>
									<div className="flex-three mobie-wrap wow fadeInUp animated">
										<Link href="#"><img src="/assets/images/page/apple.png" alt="image" /></Link>
										<Link href="#"><img src="/assets/images/page/adroid.png" alt="image" /></Link>
									</div>
									<div className="qr-code">
										<span className="mb-10">Or scan QR Code</span>
										<img src="/assets/images/page/qr.jpg" alt="image" />
									</div>
								</div>
							</div>
							<div className="col-md-6">
								<div className="mobie-app-content relative text-end">
									<img src="/assets/images/page/mask-mobie.png" alt="image" className="mask-mobie" />
									<img src="/assets/images/page/phone.png" alt="image" className="phone" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
