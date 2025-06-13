"use client"
import { useParams } from "next/navigation"
import Link from "next/link"
import Layout from "@/components/layout/Layout"
import { sriLankaDestinations } from "@/components/data/destinations"
export default function SingleDestination() {
const { id } = useParams()
	
	const currentdestination = sriLankaDestinations.find(dest => dest.id === id)
	
	if(!currentdestination) {
	  return (
		<Layout headerStyle={2} footerStyle={2}>
		  <p>Package not found.</p>
		</Layout>
	  )
	}
	return (
		<>

			<Layout headerStyle={2} footerStyle={2}>
				<div>
					<section>
						<div className="tf-container full">
							<div className="row">
								<div className="col-md-12">
									<img src="/assets/images/destination/beakcrumb.jpg" alt="" />
								</div>
							</div>
						</div>
					</section>
					<section className="pd-main">
						<div className="tf-container">
							<div className="row">
								<div className="col-md-8">
									<div className="single-destinaion-content">
										<div className="inner-haeder mb-50">
											
											<h2 className="title">{currentdestination.name}</h2>
											
										</div>
										<div className="description-wrap mb-40">
											<span className="description">Description:</span>
											<p className="des">Description It is a long established fact that a reader will be
												distrac by any websites look for ways mornings
												of spring prevent AdBlock from blocking annoying ads. As a result, we've
												focused on improving our funct
												so that we can overcome these anti-ad blocking attempts. Of course, you can
												help us continue improve our
												ad blocking ability by reporting any time you run into a website that won't
												allow you to block the readable
												content of a page when looking at its layout. It is a long established fact
											</p>
										</div>
										<div className=" image-wrap flex-three mb-40">
											<img src="/assets/images/page/des-single1.jpg" alt="image" />
											<img src="/assets/images/page/des-single2.jpg" alt="image" />
										</div>
										<div className="description-wrap mb-40">
											<span className="description">Description:</span>
											<p className="des mb-18">Description It is a long established fact that a reader
												will be distrac by any websites look for ways mornings
												of spring prevent AdBlock from blocking annoying ads. As a result, we've
												focused on improving our funct
												so that we can overcome these anti-ad blocking attempts. Of course, you can
												help us continue improve our
												ad blocking ability by reporting any time you run into a website that won't
												allow you to block the readable
												content of a page when looking at its layout. It is a long established fact
											</p>
											<ul className="listing-des">
												<li>
													<p>View the City Walls</p>
												</li>
												<li>
													<p>Hiking in the forest</p>
												</li>
												<li>
													<p>Discover the famous view point “The Lark”</p>
												</li>
												<li>
													<p>Sunset on the cruise</p>
												</li>
											</ul>
										</div>
										
									</div>
								</div>
								<div className="col-md-4">
									<div className="side-bar-right">
										
										<div className="sidebar-widget">
											<h4 className="block-heading">Recent News</h4>
											<div className="recent-post-list">
												<div className="list-recent flex-three">
													<Link href="/blog-details" className="recent-image">
														<img src="/assets/images/blog/re-blog1.jpg" alt="Image" />
													</Link>
													<div className="recent-info">
														<div className="start">
															<i className="icon-Star" />
															<i className="icon-Star" />
															<i className="icon-Star" />
															<i className="icon-Star" />
															<i className="icon-Star" />
														</div>
														<h4 className="title">
															<Link href="/blog-details">Walking the Amalfi Coast</Link>
														</h4>
														<p>From <span className="text-main">$129.00</span></p>
													</div>
												</div>
												<div className="list-recent flex-three">
													<Link href="/blog-details" className="recent-image">
														<img src="/assets/images/blog/re-blog2.jpg" alt="Image" />
													</Link>
													<div className="recent-info">
														<div className="start">
															<i className="icon-Star" />
															<i className="icon-Star" />
															<i className="icon-Star" />
															<i className="icon-Star" />
															<i className="icon-Star" />
														</div>
														<h4 className="title">
															<Link href="/blog-details">Walking the Amalfi Coast</Link>
														</h4>
														<p>From <span className="text-main">$129.00</span></p>
													</div>
												</div>
												<div className="list-recent flex-three">
													<Link href="/blog-details" className="recent-image">
														<img src="/assets/images/blog/re-blog3.jpg" alt="Image" />
													</Link>
													<div className="recent-info">
														<div className="start">
															<i className="icon-Star" />
															<i className="icon-Star" />
															<i className="icon-Star" />
															<i className="icon-Star" />
															<i className="icon-Star" />
														</div>
														<h4 className="title">
															<Link href="/blog-details">Walking the Amalfi Coast</Link>
														</h4>
														<p>From <span className="text-main">$129.00</span></p>
													</div>
												</div>
											</div>
										</div>
										
									</div>
								</div>
							</div>
						</div>
					</section>
					
				</div>

			</Layout>
		</>
	)
}