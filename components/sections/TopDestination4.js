'use client'
import { useState } from "react";
import Link from "next/link"

export default function TopDestination4() {
	const [isTab, setIsTab] = useState(1)
    const handleTab = (i) => {
        setIsTab(i)
    }
	return (
		<>

			<section className="top-destination bg-1">
				<div className="tf-container">
					<div className="row">
						<div className="lg-12 mb-10">
							<span className="sub-title-heading text-main font-yes fs-28-46 wow fadeInUp animated " data-wow-delay="0.1s">Explore the world</span>
							<h2 className="title-heading wow fadeInUp animated " data-wow-delay="0.1s">We Provide Top
								<span className="text-gray font-yes">Destination</span>
							</h2>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-12">
							<ul className="nav tab-top-destination mb-43 " id="pills-tab" role="tablist">
								<li className="nav-item"  onClick={() => handleTab(1)}>
									<button className={isTab == 1 ? "nav-link active" : "nav-link"} id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true"><i className="icon-Hiking" />Hiking &amp; Trekking</button>
								</li>
								<li className="nav-item"  onClick={() => handleTab(2)}>
									<button className={isTab == 2 ? "nav-link active" : "nav-link"} id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false"><i className="icon-Hiking" />River criuses</button>
								</li>
								<li className="nav-item"  onClick={() => handleTab(3)}>
									<button className={isTab == 3 ? "nav-link active" : "nav-link"} id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false"><i className="icon-Hiking" />Explore Europe</button>
								</li>
								<li className="nav-item"  onClick={() => handleTab(4)}>
									<button className={isTab == 4 ? "nav-link active" : "nav-link"} id="pills-disabled-tab" data-bs-toggle="pill" data-bs-target="#pills-disabled" type="button" role="tab" aria-controls="pills-disabled" aria-selected="false"><i className="icon-Hiking" />Wild Safari</button>
								</li>
							</ul>
							<div className="tab-content" id="pills-tabContent">
								<div className={isTab == 1 ? "tab-pane fade show active" : "tab-pane fade"} id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabIndex={0}>
									<div className="destination-grid-6">
										<div className="destination-style1 wow fadeInUp animated " data-wow-delay="0.1s">
											<Link href="/single-destination" className="image mb-10 relative">
												<img src="/assets/images/explore/7.jpg" alt="" />
												<img src="/assets/images/explore/mask-des.png" alt="Image" className="mask-ab" />
											</Link>
											<h6 className="tittle center"><Link href="/single-destination">North
												America</Link></h6>
										</div>
										<div className="destination-style1 wow fadeInUp animated " data-wow-delay="0.2s">
											<Link href="/single-destination" className="image mb-10 relative">
												<img src="/assets/images/explore/8.jpg" alt="Image" />
												<img src="/assets/images/explore/mask-des.png" alt="Image" className="mask-ab" />
											</Link>
											<h6 className="tittle center"><Link href="/single-destination">Sweden</Link>
											</h6>
										</div>
										<div className="destination-style1 wow fadeInUp animated " data-wow-delay="0.3s">
											<Link href="/single-destination" className="image mb-10 relative">
												<img src="/assets/images/explore/9.jpg" alt="Image" />
												<img src="/assets/images/explore/mask-des.png" alt="Image" className="mask-ab" />
											</Link>
											<h6 className="tittle center"><Link href="/single-destination">Swizarland</Link></h6>
										</div>
										<div className="destination-style1 wow fadeInUp animated " data-wow-delay="0.4s">
											<Link href="/single-destination" className="image mb-10 relative">
												<img src="/assets/images/explore/10.jpg" alt="Image" />
												<img src="/assets/images/explore/mask-des.png" alt="Image" className="mask-ab" />
											</Link>
											<h6 className="tittle center"><Link href="/single-destination">Canada</Link>
											</h6>
										</div>
										<div className="destination-style1 wow fadeInUp animated " data-wow-delay="0.5s">
											<Link href="/single-destination" className="image mb-10 relative">
												<img src="/assets/images/explore/11.jpg" alt="Image" />
												<img src="/assets/images/explore/mask-des.png" alt="Image" className="mask-ab" />
											</Link>
											<h6 className="tittle center"><Link href="/single-destination">North
												America</Link></h6>
										</div>
										<div className="destination-style1 wow fadeInUp animated " data-wow-delay="0.6s">
											<Link href="/single-destination" className="image mb-10 relative">
												<img src="/assets/images/explore/12.jpg" alt="Image" />
												<img src="/assets/images/explore/mask-des.png" alt="Image" className="mask-ab" />
											</Link>
											<h6 className="tittle center"><Link href="/single-destination">North
												America</Link></h6>
										</div>
									</div>
								</div>
								<div className={isTab == 2 ? "tab-pane fade show active" : "tab-pane fade"} id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabIndex={0}>
									<div className="destination-grid-6">
										<div className="destination-style1">
											<Link href="/single-destination" className="image mb-10 relative">
												<img src="/assets/images/explore/7.jpg" alt="" />
												<img src="/assets/images/explore/mask-des.png" alt="Image" className="mask-ab" />
											</Link>
											<h6 className="tittle center"><Link href="/single-destination">North
												America</Link></h6>
										</div>
										<div className="destination-style1">
											<Link href="/single-destination" className="image mb-10 relative">
												<img src="/assets/images/explore/8.jpg" alt="Image" />
												<img src="/assets/images/explore/mask-des.png" alt="Image" className="mask-ab" />
											</Link>
											<h6 className="tittle center"><Link href="/single-destination">Sweden</Link>
											</h6>
										</div>
										<div className="destination-style1">
											<Link href="/single-destination" className="image mb-10 relative">
												<img src="/assets/images/explore/9.jpg" alt="Image" />
												<img src="/assets/images/explore/mask-des.png" alt="Image" className="mask-ab" />
											</Link>
											<h6 className="tittle center"><Link href="/single-destination">Swizarland</Link></h6>
										</div>
										<div className="destination-style1">
											<Link href="/single-destination" className="image mb-10 relative">
												<img src="/assets/images/explore/10.jpg" alt="Image" />
												<img src="/assets/images/explore/mask-des.png" alt="Image" className="mask-ab" />
											</Link>
											<h6 className="tittle center"><Link href="/single-destination">Canada</Link>
											</h6>
										</div>
										<div className="destination-style1">
											<Link href="/single-destination" className="image mb-10 relative">
												<img src="/assets/images/explore/11.jpg" alt="Image" />
												<img src="/assets/images/explore/mask-des.png" alt="Image" className="mask-ab" />
											</Link>
											<h6 className="tittle center"><Link href="/single-destination">North
												America</Link></h6>
										</div>
										<div className="destination-style1">
											<Link href="/single-destination" className="image mb-10 relative">
												<img src="/assets/images/explore/12.jpg" alt="Image" />
												<img src="/assets/images/explore/mask-des.png" alt="Image" className="mask-ab" />
											</Link>
											<h6 className="tittle center"><Link href="/single-destination">North
												America</Link></h6>
										</div>
									</div>
								</div>
								<div className={isTab == 3 ? "tab-pane fade show active" : "tab-pane fade"} id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabIndex={0}>
									<div className="destination-grid-6">
										<div className="destination-style1">
											<Link href="/single-destination" className="image mb-10 relative">
												<img src="/assets/images/explore/7.jpg" alt="" />
												<img src="/assets/images/explore/mask-des.png" alt="Image" className="mask-ab" />
											</Link>
											<h6 className="tittle center"><Link href="/single-destination">North
												America</Link></h6>
										</div>
										<div className="destination-style1">
											<Link href="/single-destination" className="image mb-10 relative">
												<img src="/assets/images/explore/8.jpg" alt="Image" />
												<img src="/assets/images/explore/mask-des.png" alt="Image" className="mask-ab" />
											</Link>
											<h6 className="tittle center"><Link href="/single-destination">Sweden</Link>
											</h6>
										</div>
										<div className="destination-style1">
											<Link href="/single-destination" className="image mb-10 relative">
												<img src="/assets/images/explore/9.jpg" alt="Image" />
												<img src="/assets/images/explore/mask-des.png" alt="Image" className="mask-ab" />
											</Link>
											<h6 className="tittle center"><Link href="/single-destination">Swizarland</Link></h6>
										</div>
										<div className="destination-style1">
											<Link href="/single-destination" className="image mb-10 relative">
												<img src="/assets/images/explore/10.jpg" alt="Image" />
												<img src="/assets/images/explore/mask-des.png" alt="Image" className="mask-ab" />
											</Link>
											<h6 className="tittle center"><Link href="/single-destination">Canada</Link>
											</h6>
										</div>
										<div className="destination-style1">
											<Link href="/single-destination" className="image mb-10 relative">
												<img src="/assets/images/explore/11.jpg" alt="Image" />
												<img src="/assets/images/explore/mask-des.png" alt="Image" className="mask-ab" />
											</Link>
											<h6 className="tittle center"><Link href="/single-destination">North
												America</Link></h6>
										</div>
										<div className="destination-style1">
											<Link href="/single-destination" className="image mb-10 relative">
												<img src="/assets/images/explore/12.jpg" alt="Image" />
												<img src="/assets/images/explore/mask-des.png" alt="Image" className="mask-ab" />
											</Link>
											<h6 className="tittle center"><Link href="/single-destination">North
												America</Link></h6>
										</div>
									</div>
								</div>
								<div className={isTab == 4 ? "tab-pane fade show active" : "tab-pane fade"} id="pills-disabled" role="tabpanel" aria-labelledby="pills-disabled-tab" tabIndex={0}>
									<div className="destination-grid-6">
										<div className="destination-style1">
											<Link href="/single-destination" className="image mb-10 relative">
												<img src="/assets/images/explore/7.jpg" alt="" />
												<img src="/assets/images/explore/mask-des.png" alt="Image" className="mask-ab" />
											</Link>
											<h6 className="tittle center"><Link href="/single-destination">North
												America</Link></h6>
										</div>
										<div className="destination-style1">
											<Link href="/single-destination" className="image mb-10 relative">
												<img src="/assets/images/explore/8.jpg" alt="Image" />
												<img src="/assets/images/explore/mask-des.png" alt="Image" className="mask-ab" />
											</Link>
											<h6 className="tittle center"><Link href="/single-destination">Sweden</Link>
											</h6>
										</div>
										<div className="destination-style1">
											<Link href="/single-destination" className="image mb-10 relative">
												<img src="/assets/images/explore/9.jpg" alt="Image" />
												<img src="/assets/images/explore/mask-des.png" alt="Image" className="mask-ab" />
											</Link>
											<h6 className="tittle center"><Link href="/single-destination">Swizarland</Link></h6>
										</div>
										<div className="destination-style1">
											<Link href="/single-destination" className="image mb-10 relative">
												<img src="/assets/images/explore/10.jpg" alt="Image" />
												<img src="/assets/images/explore/mask-des.png" alt="Image" className="mask-ab" />
											</Link>
											<h6 className="tittle center"><Link href="/single-destination">Canada</Link>
											</h6>
										</div>
										<div className="destination-style1">
											<Link href="/single-destination" className="image mb-10 relative">
												<img src="/assets/images/explore/11.jpg" alt="Image" />
												<img src="/assets/images/explore/mask-des.png" alt="Image" className="mask-ab" />
											</Link>
											<h6 className="tittle center"><Link href="/single-destination">North
												America</Link></h6>
										</div>
										<div className="destination-style1">
											<Link href="/single-destination" className="image mb-10 relative">
												<img src="/assets/images/explore/12.jpg" alt="Image" />
												<img src="/assets/images/explore/mask-des.png" alt="Image" className="mask-ab" />
											</Link>
											<h6 className="tittle center"><Link href="/single-destination">North
												America</Link></h6>
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
