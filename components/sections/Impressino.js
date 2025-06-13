import CounterNumber from "../elements/CounterNumber"


export default function Impressino() {
	return (
		<>

			<section className="impressino relative overflow-hidden">
				<img src="/assets/images/page/mask-counter.png" alt="image" className="mask-impression" />
				<div className="tf-container">
					<div className="row z-index3 relative">
						<div className="col-md-6">
							<div className="impressino-counter">
								<div className="counter-item center tf-countto">
									<span>Satsified Clients</span>
									<div className="number-counter plus" data-to={250} data-speed={2000} data-waypoint-active="yes"><CounterNumber count={250} /></div>
								</div>
								<div className="counter-item center tf-countto">
									<span>Total Rent cars</span>
									<div className="number-counter number" data-to={1538} data-speed={2000} data-waypoint-active="yes"><CounterNumber count={1538} /></div>
								</div>
								<div className="counter-item center tf-countto">
									<span>Years of build</span>
									<div className="number-counter number plus" data-to={28} data-speed={2000} data-waypoint-active="yes"><CounterNumber count={28} /></div>
								</div>
								<div className="counter-item center tf-countto">
									<span>Total Tourist</span>
									<div className="number-counter number kare" data-to={386} data-speed={2000} data-waypoint-active="yes"><CounterNumber count={386} /></div>
								</div>
								<div className="icon-fly">
									<i className="icon-Vector-1" />
								</div>
							</div>
						</div>
						<div className="col-md-6">
							<div className="mt-impressino">
								<span className="sub-title-heading text-main font-yes fs-28-46 wow fadeInUp animated">Populer
									Activities</span>
								<h2 className="title-heading text-white wow fadeInUp animated">Company Impression</h2>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
