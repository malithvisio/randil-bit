'use client'
import Link from "next/link"
import { useState } from "react"

export default function Adventure() {
	const [isTab, setIsTab] = useState(1)
	const handleTab = (i) => {
		setIsTab(i)
	}
	return (
		<>

			<section className="widget-adventure">
				<div className="tf-container">
					<div className="row">
						<div className="col-lg-12">
							<div className="mb-40">
								<span className="sub-title-heading text-main mb-15 fadeInUp wow">Explore the
									world</span>
								<h2 className="title-heading fadeInUp wow">Adventures for everyone</h2>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-12">
							<div className="adventure-content">
								<nav className="mb-40 adventure-scroll">
									<div className="nav nav-justified nav-tabs-adventure" id="nav-tab" role="tablist">
										<li className={isTab == 1 ? "nav-link flex-three active" : "nav-link flex-three"} onClick={() => handleTab(1)}>
											<i className="icon-Group1" />
											<span>Hiking &amp; Tracking</span>
										</li>
										<li className={isTab == 2 ? "nav-link flex-three active" : "nav-link flex-three"} onClick={() => handleTab(2)}>
											<i className="icon-river-1" />
											<span>River Cruises</span>
										</li>
										<li className={isTab == 3 ? "nav-link flex-three active" : "nav-link flex-three"} onClick={() => handleTab(3)}>
											<i className="icon-adventure-1" />
											<span>Adventure Tour</span>
										</li>
										<li className={isTab == 4 ? "nav-link flex-three active" : "nav-link flex-three"} onClick={() => handleTab(4)}>
											<i className="icon-deer-1" />
											<span>Animals plant</span>
										</li>
									</div>
								</nav>
								<div className="tab-content" id="nav-tabContent">
									<div className={isTab == 1 ? "tab-pane fade show active" : "tab-pane fade"} id="nav-hiking" role="tabpanel" tabIndex={0}>
										<div className="row">
											<div className="col-6 col-sm-6 col-lg-3">
												<div className="tf-adventure flex-three mb-43">
													<Link href="/tour-single" className="adventure-image">
														<img src="/assets/images/tour/tour1.jpg" alt="" />
													</Link>
													<div className="adventure-image">
														<span className="tour-ad">(3 Tour)</span>
														<h6 className="title-ad"><Link href="/tour-single">Switzerland</Link></h6>
														<p className="price-ad text-main">$169.00</p>
													</div>
												</div>
											</div>
											<div className="col-6 col-sm-6 col-lg-3">
												<div className="tf-adventure flex-three mb-43">
													<Link href="/tour-single" className="adventure-image">
														<img src="/assets/images/tour/tour2.jpg" alt="" />
													</Link>
													<div className="adventure-image">
														<span className="tour-ad">(3 Tour)</span>
														<h6 className="title-ad"><Link href="/tour-single">Switzerland</Link></h6>
														<p className="price-ad text-main">$169.00</p>
													</div>
												</div>
											</div>
											<div className="col-6 col-sm-6 col-lg-3">
												<div className="tf-adventure flex-three mb-43">
													<Link href="/tour-single" className="adventure-image">
														<img src="/assets/images/tour/tour3.jpg" alt="" />
													</Link>
													<div className="adventure-image">
														<span className="tour-ad">(3 Tour)</span>
														<h6 className="title-ad"><Link href="/tour-single">Switzerland</Link></h6>
														<p className="price-ad text-main">$169.00</p>
													</div>
												</div>
											</div>
											<div className="col-6 col-sm-6 col-lg-3">
												<div className="tf-adventure flex-three mb-43">
													<Link href="/tour-single" className="adventure-image">
														<img src="/assets/images/tour/tour4.jpg" alt="" />
													</Link>
													<div className="adventure-image">
														<span className="tour-ad">(3 Tour)</span>
														<h6 className="title-ad"><Link href="/tour-single">Switzerland</Link></h6>
														<p className="price-ad text-main">$169.00</p>
													</div>
												</div>
											</div>
											<div className="col-6 col-sm-6 col-lg-3">
												<div className="tf-adventure flex-three mb-43">
													<Link href="/tour-single" className="adventure-image">
														<img src="/assets/images/tour/tour5.jpg" alt="" />
													</Link>
													<div className="adventure-image">
														<span className="tour-ad">(3 Tour)</span>
														<h6 className="title-ad"><Link href="/tour-single">Switzerland</Link></h6>
														<p className="price-ad text-main">$169.00</p>
													</div>
												</div>
											</div>
											<div className="col-6 col-sm-6 col-lg-3">
												<div className="tf-adventure flex-three mb-43">
													<Link href="/tour-single" className="adventure-image">
														<img src="/assets/images/tour/tour6.jpg" alt="" />
													</Link>
													<div className="adventure-image">
														<span className="tour-ad">(3 Tour)</span>
														<h6 className="title-ad"><Link href="/tour-single">Switzerland</Link></h6>
														<p className="price-ad text-main">$169.00</p>
													</div>
												</div>
											</div>
											<div className="col-6 col-sm-6 col-lg-3">
												<div className="tf-adventure flex-three mb-43">
													<Link href="/tour-single" className="adventure-image">
														<img src="/assets/images/tour/tour7.jpg" alt="" />
													</Link>
													<div className="adventure-image">
														<span className="tour-ad">(3 Tour)</span>
														<h6 className="title-ad"><Link href="/tour-single">Switzerland</Link></h6>
														<p className="price-ad text-main">$169.00</p>
													</div>
												</div>
											</div>
											<div className="col-6 col-sm-6 col-lg-3">
												<div className="tf-adventure flex-three mb-43">
													<Link href="/tour-single" className="adventure-image">
														<img src="/assets/images/tour/tour8.jpg" alt="" />
													</Link>
													<div className="adventure-image">
														<span className="tour-ad">(3 Tour)</span>
														<h6 className="title-ad"><Link href="/tour-single">Switzerland</Link></h6>
														<p className="price-ad text-main">$169.00</p>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className={isTab == 2 ? "tab-pane fade show active" : "tab-pane fade"} id="nav-river" role="tabpanel" tabIndex={0}>
										<div className="row">
											<div className="col-6 col-sm-6 col-lg-3">
												<div className="tf-adventure flex-three mb-43">
													<Link href="/tour-single" className="adventure-image">
														<img src="/assets/images/tour/tour1.jpg" alt="" />
													</Link>
													<div className="adventure-image">
														<span className="tour-ad">(3 Tour)</span>
														<h6 className="title-ad"><Link href="/tour-single">Switzerland</Link></h6>
														<p className="price-ad text-main">$169.00</p>
													</div>
												</div>
											</div>
											<div className="col-6 col-sm-6 col-lg-3">
												<div className="tf-adventure flex-three mb-43">
													<Link href="/tour-single" className="adventure-image">
														<img src="/assets/images/tour/tour2.jpg" alt="" />
													</Link>
													<div className="adventure-image">
														<span className="tour-ad">(3 Tour)</span>
														<h6 className="title-ad"><Link href="/tour-single">Switzerland</Link></h6>
														<p className="price-ad text-main">$169.00</p>
													</div>
												</div>
											</div>
											<div className="col-6 col-sm-6 col-lg-3">
												<div className="tf-adventure flex-three mb-43">
													<Link href="/tour-single" className="adventure-image">
														<img src="/assets/images/tour/tour3.jpg" alt="" />
													</Link>
													<div className="adventure-image">
														<span className="tour-ad">(3 Tour)</span>
														<h6 className="title-ad"><Link href="/tour-single">Switzerland</Link></h6>
														<p className="price-ad text-main">$169.00</p>
													</div>
												</div>
											</div>
											<div className="col-6 col-sm-6 col-lg-3">
												<div className="tf-adventure flex-three mb-43">
													<Link href="/tour-single" className="adventure-image">
														<img src="/assets/images/tour/tour4.jpg" alt="" />
													</Link>
													<div className="adventure-image">
														<span className="tour-ad">(3 Tour)</span>
														<h6 className="title-ad"><Link href="/tour-single">Switzerland</Link></h6>
														<p className="price-ad text-main">$169.00</p>
													</div>
												</div>
											</div>
											<div className="col-6 col-sm-6 col-lg-3">
												<div className="tf-adventure flex-three mb-43">
													<Link href="/tour-single" className="adventure-image">
														<img src="/assets/images/tour/tour5.jpg" alt="" />
													</Link>
													<div className="adventure-image">
														<span className="tour-ad">(3 Tour)</span>
														<h6 className="title-ad"><Link href="/tour-single">Switzerland</Link></h6>
														<p className="price-ad text-main">$169.00</p>
													</div>
												</div>
											</div>
											<div className="col-6 col-sm-6 col-lg-3">
												<div className="tf-adventure flex-three mb-43">
													<Link href="/tour-single" className="adventure-image">
														<img src="/assets/images/tour/tour6.jpg" alt="" />
													</Link>
													<div className="adventure-image">
														<span className="tour-ad">(3 Tour)</span>
														<h6 className="title-ad"><Link href="/tour-single">Switzerland</Link></h6>
														<p className="price-ad text-main">$169.00</p>
													</div>
												</div>
											</div>
											<div className="col-6 col-sm-6 col-lg-3">
												<div className="tf-adventure flex-three mb-43">
													<Link href="/tour-single" className="adventure-image">
														<img src="/assets/images/tour/tour7.jpg" alt="" />
													</Link>
													<div className="adventure-image">
														<span className="tour-ad">(3 Tour)</span>
														<h6 className="title-ad"><Link href="/tour-single">Switzerland</Link></h6>
														<p className="price-ad text-main">$169.00</p>
													</div>
												</div>
											</div>
											<div className="col-6 col-sm-6 col-lg-3">
												<div className="tf-adventure flex-three mb-43">
													<Link href="/tour-single" className="adventure-image">
														<img src="/assets/images/tour/tour8.jpg" alt="" />
													</Link>
													<div className="adventure-image">
														<span className="tour-ad">(3 Tour)</span>
														<h6 className="title-ad"><Link href="/tour-single">Switzerland</Link></h6>
														<p className="price-ad text-main">$169.00</p>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className={isTab == 3 ? "tab-pane fade show active" : "tab-pane fade"} id="nav-adventure" role="tabpanel" tabIndex={0}>
										<div className="row">
											<div className="col-6 col-sm-6 col-lg-3">
												<div className="tf-adventure flex-three mb-43">
													<Link href="/tour-single" className="adventure-image">
														<img src="/assets/images/tour/tour1.jpg" alt="" />
													</Link>
													<div className="adventure-image">
														<span className="tour-ad">(3 Tour)</span>
														<h6 className="title-ad"><Link href="/tour-single">Switzerland</Link></h6>
														<p className="price-ad text-main">$169.00</p>
													</div>
												</div>
											</div>
											<div className="col-6 col-sm-6 col-lg-3">
												<div className="tf-adventure flex-three mb-43">
													<Link href="/tour-single" className="adventure-image">
														<img src="/assets/images/tour/tour2.jpg" alt="" />
													</Link>
													<div className="adventure-image">
														<span className="tour-ad">(3 Tour)</span>
														<h6 className="title-ad"><Link href="/tour-single">Switzerland</Link></h6>
														<p className="price-ad text-main">$169.00</p>
													</div>
												</div>
											</div>
											<div className="col-6 col-sm-6 col-lg-3">
												<div className="tf-adventure flex-three mb-43">
													<Link href="/tour-single" className="adventure-image">
														<img src="/assets/images/tour/tour3.jpg" alt="" />
													</Link>
													<div className="adventure-image">
														<span className="tour-ad">(3 Tour)</span>
														<h6 className="title-ad"><Link href="/tour-single">Switzerland</Link></h6>
														<p className="price-ad text-main">$169.00</p>
													</div>
												</div>
											</div>
											<div className="col-6 col-sm-6 col-lg-3">
												<div className="tf-adventure flex-three mb-43">
													<Link href="/tour-single" className="adventure-image">
														<img src="/assets/images/tour/tour4.jpg" alt="" />
													</Link>
													<div className="adventure-image">
														<span className="tour-ad">(3 Tour)</span>
														<h6 className="title-ad"><Link href="/tour-single">Switzerland</Link></h6>
														<p className="price-ad text-main">$169.00</p>
													</div>
												</div>
											</div>
											<div className="col-6 col-sm-6 col-lg-3">
												<div className="tf-adventure flex-three mb-43">
													<Link href="/tour-single" className="adventure-image">
														<img src="/assets/images/tour/tour5.jpg" alt="" />
													</Link>
													<div className="adventure-image">
														<span className="tour-ad">(3 Tour)</span>
														<h6 className="title-ad"><Link href="/tour-single">Switzerland</Link></h6>
														<p className="price-ad text-main">$169.00</p>
													</div>
												</div>
											</div>
											<div className="col-6 col-sm-6 col-lg-3">
												<div className="tf-adventure flex-three mb-43">
													<Link href="/tour-single" className="adventure-image">
														<img src="/assets/images/tour/tour6.jpg" alt="" />
													</Link>
													<div className="adventure-image">
														<span className="tour-ad">(3 Tour)</span>
														<h6 className="title-ad"><Link href="/tour-single">Switzerland</Link></h6>
														<p className="price-ad text-main">$169.00</p>
													</div>
												</div>
											</div>
											<div className="col-6 col-sm-6 col-lg-3">
												<div className="tf-adventure flex-three mb-43">
													<Link href="/tour-single" className="adventure-image">
														<img src="/assets/images/tour/tour7.jpg" alt="" />
													</Link>
													<div className="adventure-image">
														<span className="tour-ad">(3 Tour)</span>
														<h6 className="title-ad"><Link href="/tour-single">Switzerland</Link></h6>
														<p className="price-ad text-main">$169.00</p>
													</div>
												</div>
											</div>
											<div className="col-6 col-sm-6 col-lg-3">
												<div className="tf-adventure flex-three mb-43">
													<Link href="/tour-single" className="adventure-image">
														<img src="/assets/images/tour/tour8.jpg" alt="" />
													</Link>
													<div className="adventure-image">
														<span className="tour-ad">(3 Tour)</span>
														<h6 className="title-ad"><Link href="/tour-single">Switzerland</Link></h6>
														<p className="price-ad text-main">$169.00</p>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className={isTab == 4 ? "tab-pane fade show active" : "tab-pane fade"} id="nav-animals" role="tabpanel" tabIndex={0}>
										<div className="row">
											<div className="col-6 col-sm-6 col-lg-3">
												<div className="tf-adventure flex-three mb-43">
													<Link href="/tour-single" className="adventure-image">
														<img src="/assets/images/tour/tour1.jpg" alt="" />
													</Link>
													<div className="adventure-image">
														<span className="tour-ad">(3 Tour)</span>
														<h6 className="title-ad"><Link href="/tour-single">Switzerland</Link></h6>
														<p className="price-ad text-main">$169.00</p>
													</div>
												</div>
											</div>
											<div className="col-6 col-sm-6 col-lg-3">
												<div className="tf-adventure flex-three mb-43">
													<Link href="/tour-single" className="adventure-image">
														<img src="/assets/images/tour/tour2.jpg" alt="" />
													</Link>
													<div className="adventure-image">
														<span className="tour-ad">(3 Tour)</span>
														<h6 className="title-ad"><Link href="/tour-single">Switzerland</Link></h6>
														<p className="price-ad text-main">$169.00</p>
													</div>
												</div>
											</div>
											<div className="col-6 col-sm-6 col-lg-3">
												<div className="tf-adventure flex-three mb-43">
													<Link href="/tour-single" className="adventure-image">
														<img src="/assets/images/tour/tour3.jpg" alt="" />
													</Link>
													<div className="adventure-image">
														<span className="tour-ad">(3 Tour)</span>
														<h6 className="title-ad"><Link href="/tour-single">Switzerland</Link></h6>
														<p className="price-ad text-main">$169.00</p>
													</div>
												</div>
											</div>
											<div className="col-6 col-sm-6 col-lg-3">
												<div className="tf-adventure flex-three mb-43">
													<Link href="/tour-single" className="adventure-image">
														<img src="/assets/images/tour/tour4.jpg" alt="" />
													</Link>
													<div className="adventure-image">
														<span className="tour-ad">(3 Tour)</span>
														<h6 className="title-ad"><Link href="/tour-single">Switzerland</Link></h6>
														<p className="price-ad text-main">$169.00</p>
													</div>
												</div>
											</div>
											<div className="col-6 col-sm-6 col-lg-3">
												<div className="tf-adventure flex-three mb-43">
													<Link href="/tour-single" className="adventure-image">
														<img src="/assets/images/tour/tour5.jpg" alt="" />
													</Link>
													<div className="adventure-image">
														<span className="tour-ad">(3 Tour)</span>
														<h6 className="title-ad"><Link href="/tour-single">Switzerland</Link></h6>
														<p className="price-ad text-main">$169.00</p>
													</div>
												</div>
											</div>
											<div className="col-6 col-sm-6 col-lg-3">
												<div className="tf-adventure flex-three mb-43">
													<Link href="/tour-single" className="adventure-image">
														<img src="/assets/images/tour/tour6.jpg" alt="" />
													</Link>
													<div className="adventure-image">
														<span className="tour-ad">(3 Tour)</span>
														<h6 className="title-ad"><Link href="/tour-single">Switzerland</Link></h6>
														<p className="price-ad text-main">$169.00</p>
													</div>
												</div>
											</div>
											<div className="col-6 col-sm-6 col-lg-3">
												<div className="tf-adventure flex-three mb-43">
													<Link href="/tour-single" className="adventure-image">
														<img src="/assets/images/tour/tour7.jpg" alt="" />
													</Link>
													<div className="adventure-image">
														<span className="tour-ad">(3 Tour)</span>
														<h6 className="title-ad"><Link href="/tour-single">Switzerland</Link></h6>
														<p className="price-ad text-main">$169.00</p>
													</div>
												</div>
											</div>
											<div className="col-6 col-sm-6 col-lg-3">
												<div className="tf-adventure flex-three mb-43">
													<Link href="/tour-single" className="adventure-image">
														<img src="/assets/images/tour/tour8.jpg" alt="" />
													</Link>
													<div className="adventure-image">
														<span className="tour-ad">(3 Tour)</span>
														<h6 className="title-ad"><Link href="/tour-single">Switzerland</Link></h6>
														<p className="price-ad text-main">$169.00</p>
													</div>
												</div>
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
