'use client'
import { useState } from 'react'
import Layout from "@/components/layout/Layout"
import BrandLogoSlider from "@/components/slider/BrandLogoSlider"
import Link from "next/link"
export default function HelpCenter() {
	const [isAccordion, setIsAccordion] = useState(1)

	const handleAccordion = (key) => {
		setIsAccordion(prevState => prevState === key ? null : key)
	}
	return (
		<>

			<Layout headerStyle={1} footerStyle={1}>
				<div>
					<section className="header-search-faq bg-1">
						<div className="tf-container">
							<div className="row">
								<div className="col-lg-12">
									<div className="inner-header center">
										<h1 className="title">Hello, what can we help you find?</h1>
										<p className="des">Docly is a fully featured knowledge base theme for WordPress.</p>
										<form action="/" className="form-search-faq flex">
											<input type="search" placeholder="search what you want to know" />
											<button type="button"> <i className="icon-Vector5" /> Search</button>
										</form>
										<div className="flex-five tag-wrap">
											<span className="popular">Popular:</span>
											<ul className="tag-popular flex-five">
												<li>
													<span>Coding</span>
												</li>
												<li>
													<span>Traveling</span>
												</li>
												<li>
													<span>aeroplane</span>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
					<section className="inner-faq">
						<div className="tf-container">
							<div className="row">
								<div className="col-md-6">
									<div className="accordion faq-list" id="accordionExample">
										<div className="accordion-item">
											<h2 className="accordion-header">
												<button className={isAccordion == 1 ? "accordion-button" : "accordion-button collapsed"} onClick={() => handleAccordion(1)}>
													Identify complex problem &amp; resolve quickly
												</button>
											</h2>
											<div id="collapseOne" className={isAccordion == 1 ? "accordion-collapse relative collapse show" : "accordion-collapse relative collapse"} data-bs-parent="#accordionExample">
												<div className="accordion-body">
													Support reps often have to write summaries before handing professional
													guidebooks conversations over to teammates. With the summarization so sp
													feature, a support rep can now simply click reliable printing enjoy your
												</div>
												<div className="icon" />
											</div>
										</div>
										<div className="accordion-item">
											<h2 className="accordion-header">
												<button className={isAccordion == 2 ? "accordion-button" : "accordion-button collapsed"} onClick={() => handleAccordion(2)}>
													Conversation summarization
												</button>
											</h2>
											<div id="collapseTwo" className={isAccordion == 2 ? "accordion-collapse relative collapse show" : "accordion-collapse relative collapse"} data-bs-parent="#accordionExample">
												<div className="accordion-body">
													Support reps often have to write summaries before handing professional
													guidebooks conversations over to teammates. With the summarization so sp
													feature, a support rep can now simply click reliable printing enjoy your
												</div>
												<div className="icon" />
											</div>
										</div>
										<div className="accordion-item">
											<h2 className="accordion-header">
												<button className={isAccordion == 3 ? "accordion-button" : "accordion-button collapsed"} onClick={() => handleAccordion(3)}>
													Identify complex problem &amp; resolve quickly
												</button>
											</h2>
											<div id="collapseThree" className={isAccordion == 3 ? "accordion-collapse relative collapse show" : "accordion-collapse relative collapse"} data-bs-parent="#accordionExample">
												<div className="accordion-body">
													Support reps often have to write summaries before handing professional
													guidebooks conversations over to teammates. With the summarization so sp
													feature, a support rep can now simply click reliable printing enjoy your
												</div>
												<div className="icon" />
											</div>
										</div>
									</div>
								</div>
								<div className="col-md-6">
									<div className="accordion faq-list" id="accordionExample">
										<div className="accordion-item">
											<h2 className="accordion-header">
												<button className={isAccordion == 4 ? "accordion-button" : "accordion-button collapsed"} onClick={() => handleAccordion(4)}>
													Identify complex problem &amp; resolve quickly
												</button>
											</h2>
											<div id="collapseOne" className={isAccordion == 4 ? "accordion-collapse relative collapse show" : "accordion-collapse relative collapse"} data-bs-parent="#accordionExample">
												<div className="accordion-body">
													Support reps often have to write summaries before handing professional
													guidebooks conversations over to teammates. With the summarization so sp
													feature, a support rep can now simply click reliable printing enjoy your
												</div>
												<div className="icon" />
											</div>
										</div>
										<div className="accordion-item">
											<h2 className="accordion-header">
												<button className={isAccordion == 5 ? "accordion-button" : "accordion-button collapsed"} onClick={() => handleAccordion(5)}>
													Conversation summarization
												</button>
											</h2>
											<div id="collapseTwo" className={isAccordion == 5 ? "accordion-collapse relative collapse show" : "accordion-collapse relative collapse"} data-bs-parent="#accordionExample">
												<div className="accordion-body">
													Support reps often have to write summaries before handing professional
													guidebooks conversations over to teammates. With the summarization so sp
													feature, a support rep can now simply click reliable printing enjoy your
												</div>
												<div className="icon" />
											</div>
										</div>
										<div className="accordion-item">
											<h2 className="accordion-header">
												<button className={isAccordion == 6 ? "accordion-button" : "accordion-button collapsed"} onClick={() => handleAccordion(6)}>
													Identify complex problem &amp; resolve quickly
												</button>
											</h2>
											<div id="collapseThree" className={isAccordion == 6 ? "accordion-collapse relative collapse show" : "accordion-collapse relative collapse"} data-bs-parent="#accordionExample">
												<div className="accordion-body">
													Support reps often have to write summaries before handing professional
													guidebooks conversations over to teammates. With the summarization so sp
													feature, a support rep can now simply click reliable printing enjoy your
												</div>
												<div className="icon" />
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
								<div className="callt-to-action-content flex-Six">
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