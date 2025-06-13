'use client'
import { useState } from 'react';

export default function Faq() {
	const [isAccordion, setIsAccordion] = useState(1)
	const handleAccordion = (key) => {
		setIsAccordion(prevState => prevState === key ? null : key)
	}
	return (
		<>

			<section className="widget-faq pd-main">
				<div className="tf-container">
					<div className="row">
						<div className="col-md-6">
							<div className="image-faq">
								<img src="/assets/images/page/travel_facebook.png" alt="image" />
							</div>
						</div>
						<div className="col-md-6">
							<div className="content-faq">
								<div className="mb-50">
									<span className="sub-title-heading text-main font-yes fs-28-46 wow fadeInUp animated">Explore
										the
										world</span>
									<h2 className="title-heading wow fadeInUp animated">Enjoy the travel Easily</h2>
								</div>
								<div className="accordion faq-list" id="accordionExample">
									<div className="accordion-item">
										<h2 className="accordion-header">
											<button className={isAccordion == 1 ? "accordion-button" : "accordion-button collapsed"} onClick={() => handleAccordion (1)}>
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
											<button className={isAccordion == 2 ? "accordion-button" : "accordion-button collapsed"} onClick={() => handleAccordion (2)}>
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
											<button className={isAccordion == 3 ? "accordion-button" : "accordion-button collapsed"} onClick={() => handleAccordion (3)}>
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
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
