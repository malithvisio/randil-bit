'use client'
import { useState } from "react";
import Layout from "@/components/layout/Layout"
import BrandLogoSlider from "@/components/slider/BrandLogoSlider"
import Link from "next/link"
export default function TermsCondition() {
	const [isTab, setIsTab] = useState(1)
    const handleTab = (i) => {
        setIsTab(i)
    }
	return (
		<>

			<Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Terms & Condition">
				<div>
					<section className="terms-condition">
						<div className="tf-container">
							<div className="row">
								<div className="col-lg-12">
									<div className="d-flex align-items-start tab-terms-condition">
										<div className="nav flex-column nav-pills bg-1" id="v-pills-tab" role="tablist" aria-orientation="vertical">
											<button className={isTab == 1 ? "nav-link active" : "nav-link"}  onClick={() => handleTab(1)} id="v-pills-bookings-prices-tab" data-bs-toggle="pill" data-bs-target="#v-pills-bookings-prices" type="button" role="tab" aria-controls="v-pills-bookings-prices" aria-selected="true">Bookings &amp; Prices</button>
											<button className={isTab == 2 ? "nav-link active" : "nav-link"}  onClick={() => handleTab(2)} id="v-pills-payment-tab" data-bs-toggle="pill" data-bs-target="#v-pills-payment" type="button" role="tab" aria-controls="v-pills-payment" aria-selected="false">Payments, Refunds &amp;
												Credits</button>
											<button className={isTab == 3 ? "nav-link active" : "nav-link"}  onClick={() => handleTab(3)} id="v-pills-changes-tab" data-bs-toggle="pill" data-bs-target="#v-pills-changes" type="button" role="tab" aria-controls="v-pills-changes" aria-selected="false">Changes</button>
											<button className={isTab == 4 ? "nav-link active" : "nav-link"}  onClick={() => handleTab(4)} id="v-pills-cancellations-tab" data-bs-toggle="pill" data-bs-target="#v-pills-cancellations" type="button" role="tab" aria-controls="v-pills-cancellations" aria-selected="false">Cancellations</button>
											<button className={isTab == 5 ? "nav-link active" : "nav-link"}  onClick={() => handleTab(5)} id="v-pills-services-tab" data-bs-toggle="pill" data-bs-target="#v-pills-services" type="button" role="tab" aria-controls="v-pills-services" aria-selected="false">Included
												Services</button>
											<button className={isTab == 6 ? "nav-link active" : "nav-link"}  onClick={() => handleTab(6)} id="v-pills-trip-tab" data-bs-toggle="pill" data-bs-target="#v-pills-trip" type="button" role="tab" aria-controls="v-pills-trip" aria-selected="false">Trip Operation</button>
											<button className={isTab == 7 ? "nav-link active" : "nav-link"}  onClick={() => handleTab(7)} id="v-pills-participation-tab" data-bs-toggle="pill" data-bs-target="#v-pills-participation" type="button" role="tab" aria-controls="v-pills-participation" aria-selected="false">Participation</button>
											<button className={isTab == 8 ? "nav-link active" : "nav-link"}  onClick={() => handleTab(8)} id="v-pills-passports-tab" data-bs-toggle="pill" data-bs-target="#v-pills-passports" type="button" role="tab" aria-controls="v-pills-passports" aria-selected="false">Passports, Visas &amp;
												Entry Require</button>
											<button className={isTab == 9 ? "nav-link active" : "nav-link"}  onClick={() => handleTab(9)} id="v-pills-privacy-tab" data-bs-toggle="pill" data-bs-target="#v-pills-privacy" type="button" role="tab" aria-controls="v-pills-privacy" aria-selected="false">Your Information &amp;
												Privacy</button>
											<button className={isTab == 10 ? "nav-link active" : "nav-link"}  onClick={() => handleTab(10)} id="v-pills-miscellanea-tab" data-bs-toggle="pill" data-bs-target="#v-pills-miscellanea" type="button" role="tab" aria-controls="v-pills-miscellanea" aria-selected="false">Miscellanea</button>
										</div>
										<div className="tab-content" id="v-pills-tabContent">
											<div className={isTab == 1 ? "tab-pane fade show active" : "tab-pane fade"} id="v-pills-bookings-prices" role="tabpanel" aria-labelledby="v-pills-bookings-prices-tab" tabIndex={0}>
												<div className="content mb-50">
													<h3 className="title-ter">1.Cancellation and Changes</h3>
													<span className="des">Description:</span>
													<p className="text mb-25"> a ) Occasionally it may be deemed necessary to
														make changes to your holiday and the Company reserves
														the right to do so at any time, and you will be notified of any
														changes at the earliest possible opportunity.
														If a major change to your tour is necessary, providing it does not
														arise from circumstances beyond the
														Company’s control, you may choose (i) to accept the change of
														arrangements (ii) to purchase another
														holiday from us or (iii) to cancel your holiday. Compensation may be
														payable in cases of major change as
														detailed below.
													</p>
													<p className="text mb-32"> b) No compensation will be payable for minor
														changes. Minor changes include minimal changes to departure
														and arrival times, changes to the type of aircraft used and
														restaurant and accommodation changes to a
														comparable or superior standard.
													</p>
													<p className="text"> a) Compensation will not be paid for changes or
														cancellations caused by Acts of God (Force Majeure), war,
														threat of war, riot, civil strike, industrial dispute, terrorist
														activity, natural or man-made disaster, fire, technical
														problems to transport, closure or congestion of airports, strikes or
														other industrial action, adverse weather
														conditions or any other event beyond the Company’s control. It is
														essential that you take out adequate
														travel insurance.
													</p>
												</div>
												<div className="content">
													<h3 className="title-ter">1.Cancellation by You</h3>
													<span className="des">Description:</span>
													<p className="text mb-25"> a ) Occasionally it may be deemed necessary to
														make changes to your holiday and the Company reserves
														the right to do so at any time, and you will be notified of any
														changes at the earliest possible opportunity.
														If a major change to your tour is necessary, providing it does not
														arise from circumstances beyond the
														Company’s control, you may choose (i) to accept the change of
														arrangements (ii) to purchase another
														holiday from us or (iii) to cancel your holiday. Compensation may be
														payable in cases of major change as
														detailed below.
													</p>
													<ul className="list-term mb-30">
														<li>
															<span>30 days or more 50% of Deposit</span>
														</li>
														<li>
															<span>15 – 30 days 100% of Deposit</span>
														</li>
														<li>
															<span>8 – 15 days 80% of Tour Cost</span>
														</li>
														<li>
															<span>1 – 7 days 100% of Tour Cost</span>
														</li>
													</ul>
													<p className="text"> b) No compensation will be payable for minor changes.
														Minor changes include minimal changes to departure
														and arrival times, changes to the type of aircraft used and
														restaurant and accommodation changes to a
														comparable or superior standard.
													</p>
												</div>
											</div>
											<div className={isTab == 2 ? "tab-pane fade show active" : "tab-pane fade"} id="v-pills-payment" role="tabpanel" aria-labelledby="v-pills-payment-tab" tabIndex={0}>
												<div className="content mb-50">
													<h3 className="title-ter">1.Cancellation and Changes</h3>
													<span className="des">Description:</span>
													<p className="text mb-25"> a ) Occasionally it may be deemed necessary to
														make changes to your holiday and the Company reserves
														the right to do so at any time, and you will be notified of any
														changes at the earliest possible opportunity.
														If a major change to your tour is necessary, providing it does not
														arise from circumstances beyond the
														Company’s control, you may choose (i) to accept the change of
														arrangements (ii) to purchase another
														holiday from us or (iii) to cancel your holiday. Compensation may be
														payable in cases of major change as
														detailed below.
													</p>
													<p className="text mb-32"> b) No compensation will be payable for minor
														changes. Minor changes include minimal changes to departure
														and arrival times, changes to the type of aircraft used and
														restaurant and accommodation changes to a
														comparable or superior standard.
													</p>
													<p className="text"> a) Compensation will not be paid for changes or
														cancellations caused by Acts of God (Force Majeure), war,
														threat of war, riot, civil strike, industrial dispute, terrorist
														activity, natural or man-made disaster, fire, technical
														problems to transport, closure or congestion of airports, strikes or
														other industrial action, adverse weather
														conditions or any other event beyond the Company’s control. It is
														essential that you take out adequate
														travel insurance.
													</p>
												</div>
												<div className="content">
													<h3 className="title-ter">1.Cancellation by You</h3>
													<span className="des">Description:</span>
													<p className="text mb-25"> a ) Occasionally it may be deemed necessary to
														make changes to your holiday and the Company reserves
														the right to do so at any time, and you will be notified of any
														changes at the earliest possible opportunity.
														If a major change to your tour is necessary, providing it does not
														arise from circumstances beyond the
														Company’s control, you may choose (i) to accept the change of
														arrangements (ii) to purchase another
														holiday from us or (iii) to cancel your holiday. Compensation may be
														payable in cases of major change as
														detailed below.
													</p>
													<ul className="list-term mb-30">
														<li>
															<span>30 days or more 50% of Deposit</span>
														</li>
														<li>
															<span>15 – 30 days 100% of Deposit</span>
														</li>
														<li>
															<span>8 – 15 days 80% of Tour Cost</span>
														</li>
														<li>
															<span>1 – 7 days 100% of Tour Cost</span>
														</li>
													</ul>
													<p className="text"> b) No compensation will be payable for minor changes.
														Minor changes include minimal changes to departure
														and arrival times, changes to the type of aircraft used and
														restaurant and accommodation changes to a
														comparable or superior standard.
													</p>
												</div>
											</div>
											<div className={isTab == 3 ? "tab-pane fade show active" : "tab-pane fade"} id="v-pills-changes" role="tabpanel" aria-labelledby="v-pills-changes-tab" tabIndex={0}>
												<div className="content mb-50">
													<h3 className="title-ter">1.Cancellation and Changes</h3>
													<span className="des">Description:</span>
													<p className="text mb-25"> a ) Occasionally it may be deemed necessary to
														make changes to your holiday and the Company reserves
														the right to do so at any time, and you will be notified of any
														changes at the earliest possible opportunity.
														If a major change to your tour is necessary, providing it does not
														arise from circumstances beyond the
														Company’s control, you may choose (i) to accept the change of
														arrangements (ii) to purchase another
														holiday from us or (iii) to cancel your holiday. Compensation may be
														payable in cases of major change as
														detailed below.
													</p>
													<p className="text mb-32"> b) No compensation will be payable for minor
														changes. Minor changes include minimal changes to departure
														and arrival times, changes to the type of aircraft used and
														restaurant and accommodation changes to a
														comparable or superior standard.
													</p>
													<p className="text"> a) Compensation will not be paid for changes or
														cancellations caused by Acts of God (Force Majeure), war,
														threat of war, riot, civil strike, industrial dispute, terrorist
														activity, natural or man-made disaster, fire, technical
														problems to transport, closure or congestion of airports, strikes or
														other industrial action, adverse weather
														conditions or any other event beyond the Company’s control. It is
														essential that you take out adequate
														travel insurance.
													</p>
												</div>
												<div className="content">
													<h3 className="title-ter">1.Cancellation by You</h3>
													<span className="des">Description:</span>
													<p className="text mb-25"> a ) Occasionally it may be deemed necessary to
														make changes to your holiday and the Company reserves
														the right to do so at any time, and you will be notified of any
														changes at the earliest possible opportunity.
														If a major change to your tour is necessary, providing it does not
														arise from circumstances beyond the
														Company’s control, you may choose (i) to accept the change of
														arrangements (ii) to purchase another
														holiday from us or (iii) to cancel your holiday. Compensation may be
														payable in cases of major change as
														detailed below.
													</p>
													<ul className="list-term mb-30">
														<li>
															<span>30 days or more 50% of Deposit</span>
														</li>
														<li>
															<span>15 – 30 days 100% of Deposit</span>
														</li>
														<li>
															<span>8 – 15 days 80% of Tour Cost</span>
														</li>
														<li>
															<span>1 – 7 days 100% of Tour Cost</span>
														</li>
													</ul>
													<p className="text"> b) No compensation will be payable for minor changes.
														Minor changes include minimal changes to departure
														and arrival times, changes to the type of aircraft used and
														restaurant and accommodation changes to a
														comparable or superior standard.
													</p>
												</div>
											</div>
											<div className={isTab == 4 ? "tab-pane fade show active" : "tab-pane fade"} id="v-pills-cancellations" role="tabpanel" aria-labelledby="v-pills-cancellations-tab" tabIndex={0}>
												<div className="content mb-50">
													<h3 className="title-ter">1.Cancellation and Changes</h3>
													<span className="des">Description:</span>
													<p className="text mb-25"> a ) Occasionally it may be deemed necessary to
														make changes to your holiday and the Company reserves
														the right to do so at any time, and you will be notified of any
														changes at the earliest possible opportunity.
														If a major change to your tour is necessary, providing it does not
														arise from circumstances beyond the
														Company’s control, you may choose (i) to accept the change of
														arrangements (ii) to purchase another
														holiday from us or (iii) to cancel your holiday. Compensation may be
														payable in cases of major change as
														detailed below.
													</p>
													<p className="text mb-32"> b) No compensation will be payable for minor
														changes. Minor changes include minimal changes to departure
														and arrival times, changes to the type of aircraft used and
														restaurant and accommodation changes to a
														comparable or superior standard.
													</p>
													<p className="text"> a) Compensation will not be paid for changes or
														cancellations caused by Acts of God (Force Majeure), war,
														threat of war, riot, civil strike, industrial dispute, terrorist
														activity, natural or man-made disaster, fire, technical
														problems to transport, closure or congestion of airports, strikes or
														other industrial action, adverse weather
														conditions or any other event beyond the Company’s control. It is
														essential that you take out adequate
														travel insurance.
													</p>
												</div>
												<div className="content">
													<h3 className="title-ter">1.Cancellation by You</h3>
													<span className="des">Description:</span>
													<p className="text mb-25"> a ) Occasionally it may be deemed necessary to
														make changes to your holiday and the Company reserves
														the right to do so at any time, and you will be notified of any
														changes at the earliest possible opportunity.
														If a major change to your tour is necessary, providing it does not
														arise from circumstances beyond the
														Company’s control, you may choose (i) to accept the change of
														arrangements (ii) to purchase another
														holiday from us or (iii) to cancel your holiday. Compensation may be
														payable in cases of major change as
														detailed below.
													</p>
													<ul className="list-term mb-30">
														<li>
															<span>30 days or more 50% of Deposit</span>
														</li>
														<li>
															<span>15 – 30 days 100% of Deposit</span>
														</li>
														<li>
															<span>8 – 15 days 80% of Tour Cost</span>
														</li>
														<li>
															<span>1 – 7 days 100% of Tour Cost</span>
														</li>
													</ul>
													<p className="text"> b) No compensation will be payable for minor changes.
														Minor changes include minimal changes to departure
														and arrival times, changes to the type of aircraft used and
														restaurant and accommodation changes to a
														comparable or superior standard.
													</p>
												</div>
											</div>
											<div className={isTab == 5 ? "tab-pane fade show active" : "tab-pane fade"} id="v-pills-services" role="tabpanel" aria-labelledby="v-pills-services-tab" tabIndex={0}>
												<div className="content mb-50">
													<h3 className="title-ter">1.Cancellation and Changes</h3>
													<span className="des">Description:</span>
													<p className="text mb-25"> a ) Occasionally it may be deemed necessary to
														make changes to your holiday and the Company reserves
														the right to do so at any time, and you will be notified of any
														changes at the earliest possible opportunity.
														If a major change to your tour is necessary, providing it does not
														arise from circumstances beyond the
														Company’s control, you may choose (i) to accept the change of
														arrangements (ii) to purchase another
														holiday from us or (iii) to cancel your holiday. Compensation may be
														payable in cases of major change as
														detailed below.
													</p>
													<p className="text mb-32"> b) No compensation will be payable for minor
														changes. Minor changes include minimal changes to departure
														and arrival times, changes to the type of aircraft used and
														restaurant and accommodation changes to a
														comparable or superior standard.
													</p>
													<p className="text"> a) Compensation will not be paid for changes or
														cancellations caused by Acts of God (Force Majeure), war,
														threat of war, riot, civil strike, industrial dispute, terrorist
														activity, natural or man-made disaster, fire, technical
														problems to transport, closure or congestion of airports, strikes or
														other industrial action, adverse weather
														conditions or any other event beyond the Company’s control. It is
														essential that you take out adequate
														travel insurance.
													</p>
												</div>
												<div className="content">
													<h3 className="title-ter">1.Cancellation by You</h3>
													<span className="des">Description:</span>
													<p className="text mb-25"> a ) Occasionally it may be deemed necessary to
														make changes to your holiday and the Company reserves
														the right to do so at any time, and you will be notified of any
														changes at the earliest possible opportunity.
														If a major change to your tour is necessary, providing it does not
														arise from circumstances beyond the
														Company’s control, you may choose (i) to accept the change of
														arrangements (ii) to purchase another
														holiday from us or (iii) to cancel your holiday. Compensation may be
														payable in cases of major change as
														detailed below.
													</p>
													<ul className="list-term mb-30">
														<li>
															<span>30 days or more 50% of Deposit</span>
														</li>
														<li>
															<span>15 – 30 days 100% of Deposit</span>
														</li>
														<li>
															<span>8 – 15 days 80% of Tour Cost</span>
														</li>
														<li>
															<span>1 – 7 days 100% of Tour Cost</span>
														</li>
													</ul>
													<p className="text"> b) No compensation will be payable for minor changes.
														Minor changes include minimal changes to departure
														and arrival times, changes to the type of aircraft used and
														restaurant and accommodation changes to a
														comparable or superior standard.
													</p>
												</div>
											</div>
											<div className={isTab == 6 ? "tab-pane fade show active" : "tab-pane fade"} id="v-pills-trip" role="tabpanel" aria-labelledby="v-pills-trip-tab" tabIndex={0}>
												<div className="content mb-50">
													<h3 className="title-ter">1.Cancellation and Changes</h3>
													<span className="des">Description:</span>
													<p className="text mb-25"> a ) Occasionally it may be deemed necessary to
														make changes to your holiday and the Company reserves
														the right to do so at any time, and you will be notified of any
														changes at the earliest possible opportunity.
														If a major change to your tour is necessary, providing it does not
														arise from circumstances beyond the
														Company’s control, you may choose (i) to accept the change of
														arrangements (ii) to purchase another
														holiday from us or (iii) to cancel your holiday. Compensation may be
														payable in cases of major change as
														detailed below.
													</p>
													<p className="text mb-32"> b) No compensation will be payable for minor
														changes. Minor changes include minimal changes to departure
														and arrival times, changes to the type of aircraft used and
														restaurant and accommodation changes to a
														comparable or superior standard.
													</p>
													<p className="text"> a) Compensation will not be paid for changes or
														cancellations caused by Acts of God (Force Majeure), war,
														threat of war, riot, civil strike, industrial dispute, terrorist
														activity, natural or man-made disaster, fire, technical
														problems to transport, closure or congestion of airports, strikes or
														other industrial action, adverse weather
														conditions or any other event beyond the Company’s control. It is
														essential that you take out adequate
														travel insurance.
													</p>
												</div>
												<div className="content">
													<h3 className="title-ter">1.Cancellation by You</h3>
													<span className="des">Description:</span>
													<p className="text mb-25"> a ) Occasionally it may be deemed necessary to
														make changes to your holiday and the Company reserves
														the right to do so at any time, and you will be notified of any
														changes at the earliest possible opportunity.
														If a major change to your tour is necessary, providing it does not
														arise from circumstances beyond the
														Company’s control, you may choose (i) to accept the change of
														arrangements (ii) to purchase another
														holiday from us or (iii) to cancel your holiday. Compensation may be
														payable in cases of major change as
														detailed below.
													</p>
													<ul className="list-term mb-30">
														<li>
															<span>30 days or more 50% of Deposit</span>
														</li>
														<li>
															<span>15 – 30 days 100% of Deposit</span>
														</li>
														<li>
															<span>8 – 15 days 80% of Tour Cost</span>
														</li>
														<li>
															<span>1 – 7 days 100% of Tour Cost</span>
														</li>
													</ul>
													<p className="text"> b) No compensation will be payable for minor changes.
														Minor changes include minimal changes to departure
														and arrival times, changes to the type of aircraft used and
														restaurant and accommodation changes to a
														comparable or superior standard.
													</p>
												</div>
											</div>
											<div className={isTab == 7 ? "tab-pane fade show active" : "tab-pane fade"} id="v-pills-participation" role="tabpanel" aria-labelledby="v-pills-participation-tab" tabIndex={0}>
												<div className="content mb-50">
													<h3 className="title-ter">1.Cancellation and Changes</h3>
													<span className="des">Description:</span>
													<p className="text mb-25"> a ) Occasionally it may be deemed necessary to
														make changes to your holiday and the Company reserves
														the right to do so at any time, and you will be notified of any
														changes at the earliest possible opportunity.
														If a major change to your tour is necessary, providing it does not
														arise from circumstances beyond the
														Company’s control, you may choose (i) to accept the change of
														arrangements (ii) to purchase another
														holiday from us or (iii) to cancel your holiday. Compensation may be
														payable in cases of major change as
														detailed below.
													</p>
													<p className="text mb-32"> b) No compensation will be payable for minor
														changes. Minor changes include minimal changes to departure
														and arrival times, changes to the type of aircraft used and
														restaurant and accommodation changes to a
														comparable or superior standard.
													</p>
													<p className="text"> a) Compensation will not be paid for changes or
														cancellations caused by Acts of God (Force Majeure), war,
														threat of war, riot, civil strike, industrial dispute, terrorist
														activity, natural or man-made disaster, fire, technical
														problems to transport, closure or congestion of airports, strikes or
														other industrial action, adverse weather
														conditions or any other event beyond the Company’s control. It is
														essential that you take out adequate
														travel insurance.
													</p>
												</div>
												<div className="content">
													<h3 className="title-ter">1.Cancellation by You</h3>
													<span className="des">Description:</span>
													<p className="text mb-25"> a ) Occasionally it may be deemed necessary to
														make changes to your holiday and the Company reserves
														the right to do so at any time, and you will be notified of any
														changes at the earliest possible opportunity.
														If a major change to your tour is necessary, providing it does not
														arise from circumstances beyond the
														Company’s control, you may choose (i) to accept the change of
														arrangements (ii) to purchase another
														holiday from us or (iii) to cancel your holiday. Compensation may be
														payable in cases of major change as
														detailed below.
													</p>
													<ul className="list-term mb-30">
														<li>
															<span>30 days or more 50% of Deposit</span>
														</li>
														<li>
															<span>15 – 30 days 100% of Deposit</span>
														</li>
														<li>
															<span>8 – 15 days 80% of Tour Cost</span>
														</li>
														<li>
															<span>1 – 7 days 100% of Tour Cost</span>
														</li>
													</ul>
													<p className="text"> b) No compensation will be payable for minor changes.
														Minor changes include minimal changes to departure
														and arrival times, changes to the type of aircraft used and
														restaurant and accommodation changes to a
														comparable or superior standard.
													</p>
												</div>
											</div>
											<div className={isTab == 8 ? "tab-pane fade show active" : "tab-pane fade"} id="v-pills-passports" role="tabpanel" aria-labelledby="v-pills-passports-tab" tabIndex={0}>
												<div className="content mb-50">
													<h3 className="title-ter">1.Cancellation and Changes</h3>
													<span className="des">Description:</span>
													<p className="text mb-25"> a ) Occasionally it may be deemed necessary to
														make changes to your holiday and the Company reserves
														the right to do so at any time, and you will be notified of any
														changes at the earliest possible opportunity.
														If a major change to your tour is necessary, providing it does not
														arise from circumstances beyond the
														Company’s control, you may choose (i) to accept the change of
														arrangements (ii) to purchase another
														holiday from us or (iii) to cancel your holiday. Compensation may be
														payable in cases of major change as
														detailed below.
													</p>
													<p className="text mb-32"> b) No compensation will be payable for minor
														changes. Minor changes include minimal changes to departure
														and arrival times, changes to the type of aircraft used and
														restaurant and accommodation changes to a
														comparable or superior standard.
													</p>
													<p className="text"> a) Compensation will not be paid for changes or
														cancellations caused by Acts of God (Force Majeure), war,
														threat of war, riot, civil strike, industrial dispute, terrorist
														activity, natural or man-made disaster, fire, technical
														problems to transport, closure or congestion of airports, strikes or
														other industrial action, adverse weather
														conditions or any other event beyond the Company’s control. It is
														essential that you take out adequate
														travel insurance.
													</p>
												</div>
												<div className="content">
													<h3 className="title-ter">1.Cancellation by You</h3>
													<span className="des">Description:</span>
													<p className="text mb-25"> a ) Occasionally it may be deemed necessary to
														make changes to your holiday and the Company reserves
														the right to do so at any time, and you will be notified of any
														changes at the earliest possible opportunity.
														If a major change to your tour is necessary, providing it does not
														arise from circumstances beyond the
														Company’s control, you may choose (i) to accept the change of
														arrangements (ii) to purchase another
														holiday from us or (iii) to cancel your holiday. Compensation may be
														payable in cases of major change as
														detailed below.
													</p>
													<ul className="list-term mb-30">
														<li>
															<span>30 days or more 50% of Deposit</span>
														</li>
														<li>
															<span>15 – 30 days 100% of Deposit</span>
														</li>
														<li>
															<span>8 – 15 days 80% of Tour Cost</span>
														</li>
														<li>
															<span>1 – 7 days 100% of Tour Cost</span>
														</li>
													</ul>
													<p className="text"> b) No compensation will be payable for minor changes.
														Minor changes include minimal changes to departure
														and arrival times, changes to the type of aircraft used and
														restaurant and accommodation changes to a
														comparable or superior standard.
													</p>
												</div>
											</div>
											<div className={isTab == 9 ? "tab-pane fade show active" : "tab-pane fade"} id="v-pills-privacy" role="tabpanel" aria-labelledby="v-pills-privacy-tab" tabIndex={0}>
												<div className="content mb-50">
													<h3 className="title-ter">1.Cancellation and Changes</h3>
													<span className="des">Description:</span>
													<p className="text mb-25"> a ) Occasionally it may be deemed necessary to
														make changes to your holiday and the Company reserves
														the right to do so at any time, and you will be notified of any
														changes at the earliest possible opportunity.
														If a major change to your tour is necessary, providing it does not
														arise from circumstances beyond the
														Company’s control, you may choose (i) to accept the change of
														arrangements (ii) to purchase another
														holiday from us or (iii) to cancel your holiday. Compensation may be
														payable in cases of major change as
														detailed below.
													</p>
													<p className="text mb-32"> b) No compensation will be payable for minor
														changes. Minor changes include minimal changes to departure
														and arrival times, changes to the type of aircraft used and
														restaurant and accommodation changes to a
														comparable or superior standard.
													</p>
													<p className="text"> a) Compensation will not be paid for changes or
														cancellations caused by Acts of God (Force Majeure), war,
														threat of war, riot, civil strike, industrial dispute, terrorist
														activity, natural or man-made disaster, fire, technical
														problems to transport, closure or congestion of airports, strikes or
														other industrial action, adverse weather
														conditions or any other event beyond the Company’s control. It is
														essential that you take out adequate
														travel insurance.
													</p>
												</div>
												<div className="content">
													<h3 className="title-ter">1.Cancellation by You</h3>
													<span className="des">Description:</span>
													<p className="text mb-25"> a ) Occasionally it may be deemed necessary to
														make changes to your holiday and the Company reserves
														the right to do so at any time, and you will be notified of any
														changes at the earliest possible opportunity.
														If a major change to your tour is necessary, providing it does not
														arise from circumstances beyond the
														Company’s control, you may choose (i) to accept the change of
														arrangements (ii) to purchase another
														holiday from us or (iii) to cancel your holiday. Compensation may be
														payable in cases of major change as
														detailed below.
													</p>
													<ul className="list-term mb-30">
														<li>
															<span>30 days or more 50% of Deposit</span>
														</li>
														<li>
															<span>15 – 30 days 100% of Deposit</span>
														</li>
														<li>
															<span>8 – 15 days 80% of Tour Cost</span>
														</li>
														<li>
															<span>1 – 7 days 100% of Tour Cost</span>
														</li>
													</ul>
													<p className="text"> b) No compensation will be payable for minor changes.
														Minor changes include minimal changes to departure
														and arrival times, changes to the type of aircraft used and
														restaurant and accommodation changes to a
														comparable or superior standard.
													</p>
												</div>
											</div>
											<div className={isTab == 120 ? "tab-pane fade show active" : "tab-pane fade"} id="v-pills-miscellanea" role="tabpanel" aria-labelledby="v-pills-miscellanea-tab" tabIndex={0}>
												<div className="content mb-50">
													<h3 className="title-ter">1.Cancellation and Changes</h3>
													<span className="des">Description:</span>
													<p className="text mb-25"> a ) Occasionally it may be deemed necessary to
														make changes to your holiday and the Company reserves
														the right to do so at any time, and you will be notified of any
														changes at the earliest possible opportunity.
														If a major change to your tour is necessary, providing it does not
														arise from circumstances beyond the
														Company’s control, you may choose (i) to accept the change of
														arrangements (ii) to purchase another
														holiday from us or (iii) to cancel your holiday. Compensation may be
														payable in cases of major change as
														detailed below.
													</p>
													<p className="text mb-32"> b) No compensation will be payable for minor
														changes. Minor changes include minimal changes to departure
														and arrival times, changes to the type of aircraft used and
														restaurant and accommodation changes to a
														comparable or superior standard.
													</p>
													<p className="text"> a) Compensation will not be paid for changes or
														cancellations caused by Acts of God (Force Majeure), war,
														threat of war, riot, civil strike, industrial dispute, terrorist
														activity, natural or man-made disaster, fire, technical
														problems to transport, closure or congestion of airports, strikes or
														other industrial action, adverse weather
														conditions or any other event beyond the Company’s control. It is
														essential that you take out adequate
														travel insurance.
													</p>
												</div>
												<div className="content">
													<h3 className="title-ter">1.Cancellation by You</h3>
													<span className="des">Description:</span>
													<p className="text mb-25"> a ) Occasionally it may be deemed necessary to
														make changes to your holiday and the Company reserves
														the right to do so at any time, and you will be notified of any
														changes at the earliest possible opportunity.
														If a major change to your tour is necessary, providing it does not
														arise from circumstances beyond the
														Company’s control, you may choose (i) to accept the change of
														arrangements (ii) to purchase another
														holiday from us or (iii) to cancel your holiday. Compensation may be
														payable in cases of major change as
														detailed below.
													</p>
													<ul className="list-term mb-30">
														<li>
															<span>30 days or more 50% of Deposit</span>
														</li>
														<li>
															<span>15 – 30 days 100% of Deposit</span>
														</li>
														<li>
															<span>8 – 15 days 80% of Tour Cost</span>
														</li>
														<li>
															<span>1 – 7 days 100% of Tour Cost</span>
														</li>
													</ul>
													<p className="text"> b) No compensation will be payable for minor changes.
														Minor changes include minimal changes to departure
														and arrival times, changes to the type of aircraft used and
														restaurant and accommodation changes to a
														comparable or superior standard.
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
					<section className="brand-logo-widget bg-1">
						<div className="tf-container">
							<div className="row">
								<div className="col-lg-12">
								<BrandLogoSlider />
								</div>
							</div>
						</div>
					</section>
					<section className="mb--93 bg-1">
						<div className="tf-container">
							<div className="callt-to-action flex-two z-index3 relative">
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