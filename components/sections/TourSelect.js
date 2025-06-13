
import Link from "next/link"

export default function TourSelect() {
	return (
		<>

			<section className="tour-select">
				<div className="tf-container">
					<div className="row">
						<div className="col-lg-12">
							<div className="mb-30 center">
								<span className="sub-title-heading text-second font-yes fs-28-46 wow fadeInUp animated">Explore
									the
									world</span>
								<h2 className="title-heading wow fadeInUp animated">Tour <span className="booking-title"><span className="booking">Select<span className="dot" /></span></span> By Type
								</h2>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-12">
							<div className="box-tour-select-wrap mb--7em">
								<Link href="#" className="box-tour-select-item center wow fadeInUp animated " data-wow-delay="0.1s">
									<div className="icon">
										<i className="icon-tent-1" />
									</div>
									<div className="content relative">
										<div className="title">Adventure</div>
										<span className="tour">3 Tours</span>
										<p className="price">from 256$</p>
										<i className="icon-Group-1000002950" />
									</div>
								</Link>
								<Link href="#" className="box-tour-select-item center wow fadeInUp animated " data-wow-delay="0.2s">
									<div className="icon">
										<i className="icon-sunset-1" />
									</div>
									<div className="content relative">
										<div className="title">Sea Beatches</div>
										<span className="tour">3 Tours</span>
										<p className="price">from 256$</p>
										<i className="icon-Group-1000002950" />
									</div>
								</Link>
								<Link href="#" className="box-tour-select-item center wow fadeInUp animated " data-wow-delay="0.3s">
									<div className="icon">
										<i className="icon-Group-11" />
									</div>
									<div className="content relative">
										<div className="title">Boat Tours</div>
										<span className="tour">3 Tours</span>
										<p className="price">from 256$</p>
										<i className="icon-Group-1000002950" />
									</div>
								</Link>
								<Link href="#" className="box-tour-select-item center wow fadeInUp animated " data-wow-delay="0.4s">
									<div className="icon">
										<i className="icon-Group-2" />
									</div>
									<div className="content relative">
										<div className="title">City Toures</div>
										<span className="tour">3 Tours</span>
										<p className="price">from 256$</p>
										<i className="icon-Group-1000002950" />
									</div>
								</Link>
								<Link href="#" className="box-tour-select-item center wow fadeInUp animated " data-wow-delay="0.5s">
									<div className="icon">
										<i className="icon-Hiking" />
									</div>
									<div className="content relative">
										<div className="title">Hiking</div>
										<span className="tour">3 Tours</span>
										<p className="price">from 256$</p>
										<i className="icon-Group-1000002950" />
									</div>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
