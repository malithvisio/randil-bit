
import Link from "next/link"

export default function Feature6() {
	return (
		<>

			<section className="widget-feature pd-main relative bg-1">
				<div className="tf-container w-1456 z-index3 relative">
					<div className="row">
						<div className="col-lg-12">
							<div className="center m0-auto w-text-heading mb-40">
								<span className="sub-title-heading text-main fs-28-46 font-yes wow fadeInUp animated">Explore
									the world</span>
								<h2 className="title-heading wow fadeInUp animated">Amazing Featured Tour <span className="text-gray font-yes">Package</span> the world</h2>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-12">
							<ul className="nav justify-content-center tab-list mb-37" id="myTab" role="tablist">
								<li className="nav-item" role="presentation">
									<button className="nav-link active" id="new-york-tab" data-bs-toggle="tab" data-bs-target="#new-york-tab-pane" type="button" role="tab" aria-controls="new-york-tab-pane" aria-selected="true">New York</button>
								</li>
								<li className="nav-item" role="presentation">
									<button className="nav-link" id="london-tab" data-bs-toggle="tab" data-bs-target="#london-tab-pane" type="button" role="tab" aria-controls="london-tab-pane" aria-selected="false">London</button>
								</li>
								<li className="nav-item" role="presentation">
									<button className="nav-link" id="tokyo-tab" data-bs-toggle="tab" data-bs-target="#tokyo-tab-pane" type="button" role="tab" aria-controls="tokyo-tab-pane" aria-selected="false">Tokyo</button>
								</li>
								<li className="nav-item" role="presentation">
									<button className="nav-link" id="los-angelas-tab" data-bs-toggle="tab" data-bs-target="#los-angelas-tab-pane" type="button" role="tab" aria-controls="los-angelas-tab-pane" aria-selected="false">Los
										Angelas</button>
								</li>
								<li className="nav-item" role="presentation">
									<button className="nav-link" id="manila-tab" data-bs-toggle="tab" data-bs-target="#manila-tab-pane" type="button" role="tab" aria-controls="manila-tab-pane" aria-selected="false">Manila</button>
								</li>
							</ul>
							<div className="tab-content" id="myTabContent">
								<div className="tab-pane fade show active" id="new-york-tab-pane" role="tabpanel" aria-labelledby="new-york-tab" tabIndex={0}>
									<div className="row">
										<div className="col-sm-6 col-lg-3 wow fadeInUp animated " data-wow-delay="0.1s">
											<div className="tour-listing box-sd">
												<Link href="/tour-single" className="tour-listing-image">
													<div className="badge-top flex-two">
														<span className="feature">Featured</span>
														<div className="badge-media flex-five">
															<span className="media"><i className="icon-Group-1000002909" />5</span>
															<span className="media"><i className="icon-Group-1000002910" />2</span>
														</div>
													</div>
													<img src="/assets/images/travel-list/1.jpg" alt="Image Listing" />
												</Link>
												<div className="tour-listing-content">
													<span className="tag-listing">Bestseller</span>
													<span className="map"><i className="icon-Vector4" />United States
														USA</span>
													<h3 className="title-tour-list"><Link href="/tour-single">Days and
														6 nights From
														Moscow</Link>
													</h3>
													<div className="review">
														<i className="icon-Star" />
														<i className="icon-Star" />
														<i className="icon-Star" />
														<i className="icon-Star" />
														<i className="icon-Star" />
														<span>(1 Review)</span>
													</div>
													<div className="icon-box flex-three">
														<div className="icons flex-three">
															<i className="icon-time-left" />
															<span>5 days</span>
														</div>
														<div className="icons flex-three">
															<svg width={21} height={16} viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M4.34766 4.79761C4.34766 2.94013 5.85346 1.43433 7.71094 1.43433C9.56841 1.43433 11.0742 2.94013 11.0742 4.79761C11.0742 6.65508 9.56841 8.16089 7.71094 8.16089C5.85346 8.16089 4.34766 6.65508 4.34766 4.79761Z" stroke="currentColor" strokeWidth="1.7" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
																<path d="M9.5977 15.1797H2.46098C1.34827 15.1797 0.558268 14.0954 0.898984 13.0362C1.80408 10.222 4.57804 8.18566 7.69301 8.18566C9.17897 8.18566 10.5566 8.64906 11.6895 9.43922" stroke="currentColor" strokeWidth="1.7" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
																<path d="M17.1035 15.1797V9.02734" stroke="currentColor" strokeWidth="1.7" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
																<path d="M20.1797 12.1035H14.0273" stroke="currentColor" strokeWidth="1.7" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
															</svg>
															<span>12 Person</span>
														</div>
													</div>
													<div className="flex-two">
														<div className="price-box flex-three">
															<p>From <span className="price-sale">$169.00</span></p>
															<span className="price">$199.00</span>
														</div>
														<div className="icon-bookmark">
															<i className="icon-Vector-151" />
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="col-sm-6 col-lg-3 wow fadeInUp animated " data-wow-delay="0.2s">
											<div className="tour-listing box-sd">
												<Link href="/tour-single" className="tour-listing-image">
													<div className="badge-top flex-two">
														<span className="feature">Featured</span>
														<div className="badge-media flex-five">
															<span className="media"><i className="icon-Group-1000002909" />5</span>
															<span className="media"><i className="icon-Group-1000002910" />2</span>
														</div>
													</div>
													<img src="/assets/images/travel-list/2.jpg" alt="Image Listing" />
												</Link>
												<div className="tour-listing-content">
													<span className="tag-listing">Trending</span>
													<span className="map"><i className="icon-Vector4" />United States
														USA</span>
													<h3 className="title-tour-list"><Link href="/tour-single">Days and
														6 nights From
														Moscow</Link>
													</h3>
													<div className="review">
														<i className="icon-Star" />
														<i className="icon-Star" />
														<i className="icon-Star" />
														<i className="icon-Star" />
														<i className="icon-Star" />
														<span>(1 Review)</span>
													</div>
													<div className="icon-box flex-three">
														<div className="icons flex-three">
															<i className="icon-time-left" />
															<span>5 days</span>
														</div>
														<div className="icons flex-three">
															<svg width={21} height={16} viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M4.34766 4.79761C4.34766 2.94013 5.85346 1.43433 7.71094 1.43433C9.56841 1.43433 11.0742 2.94013 11.0742 4.79761C11.0742 6.65508 9.56841 8.16089 7.71094 8.16089C5.85346 8.16089 4.34766 6.65508 4.34766 4.79761Z" stroke="currentColor" strokeWidth="1.7" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
																<path d="M9.5977 15.1797H2.46098C1.34827 15.1797 0.558268 14.0954 0.898984 13.0362C1.80408 10.222 4.57804 8.18566 7.69301 8.18566C9.17897 8.18566 10.5566 8.64906 11.6895 9.43922" stroke="currentColor" strokeWidth="1.7" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
																<path d="M17.1035 15.1797V9.02734" stroke="currentColor" strokeWidth="1.7" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
																<path d="M20.1797 12.1035H14.0273" stroke="currentColor" strokeWidth="1.7" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
															</svg>
															<span>12 Person</span>
														</div>
													</div>
													<div className="flex-two">
														<div className="price-box flex-three">
															<p>From <span className="price-sale">$169.00</span></p>
															<span className="price">$199.00</span>
														</div>
														<div className="icon-bookmark">
															<i className="icon-Vector-151" />
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="col-sm-6 col-lg-3 wow fadeInUp animated " data-wow-delay="0.3s">
											<div className="tour-listing box-sd">
												<Link href="/tour-single" className="tour-listing-image">
													<div className="badge-top flex-two">
														<span className="feature">Featured</span>
														<div className="badge-media flex-five">
															<span className="media"><i className="icon-Group-1000002909" />5</span>
															<span className="media"><i className="icon-Group-1000002910" />2</span>
														</div>
													</div>
													<img src="/assets/images/travel-list/3.jpg" alt="Image Listing" />
												</Link>
												<div className="tour-listing-content">
													<span className="tag-listing">Hot sell</span>
													<span className="map"><i className="icon-Vector4" />United States
														USA</span>
													<h3 className="title-tour-list"><Link href="/tour-single">Days and
														6 nights From
														Moscow</Link>
													</h3>
													<div className="review">
														<i className="icon-Star" />
														<i className="icon-Star" />
														<i className="icon-Star" />
														<i className="icon-Star" />
														<i className="icon-Star" />
														<span>(1 Review)</span>
													</div>
													<div className="icon-box flex-three">
														<div className="icons flex-three">
															<i className="icon-time-left" />
															<span>5 days</span>
														</div>
														<div className="icons flex-three">
															<svg width={21} height={16} viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M4.34766 4.79761C4.34766 2.94013 5.85346 1.43433 7.71094 1.43433C9.56841 1.43433 11.0742 2.94013 11.0742 4.79761C11.0742 6.65508 9.56841 8.16089 7.71094 8.16089C5.85346 8.16089 4.34766 6.65508 4.34766 4.79761Z" stroke="currentColor" strokeWidth="1.7" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
																<path d="M9.5977 15.1797H2.46098C1.34827 15.1797 0.558268 14.0954 0.898984 13.0362C1.80408 10.222 4.57804 8.18566 7.69301 8.18566C9.17897 8.18566 10.5566 8.64906 11.6895 9.43922" stroke="currentColor" strokeWidth="1.7" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
																<path d="M17.1035 15.1797V9.02734" stroke="#4DA528" strokeWidth="1.7" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
																<path d="M20.1797 12.1035H14.0273" stroke="#4DA528" strokeWidth="1.7" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
															</svg>
															<span>12 Person</span>
														</div>
													</div>
													<div className="flex-two">
														<div className="price-box flex-three">
															<p>From <span className="price-sale">$169.00</span></p>
															<span className="price">$199.00</span>
														</div>
														<div className="icon-bookmark">
															<i className="icon-Vector-151" />
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="col-sm-6 col-lg-3 wow fadeInUp animated " data-wow-delay="0.4s">
											<div className="tour-listing box-sd">
												<Link href="/tour-single" className="tour-listing-image">
													<div className="badge-top flex-two">
														<span className="feature">Featured</span>
														<div className="badge-media flex-five">
															<span className="media"><i className="icon-Group-1000002909" />5</span>
															<span className="media"><i className="icon-Group-1000002910" />2</span>
														</div>
													</div>
													<img src="/assets/images/travel-list/4.jpg" alt="Image Listing" />
												</Link>
												<div className="tour-listing-content">
													<span className="tag-listing">Bestseller</span>
													<span className="map"><i className="icon-Vector4" />United States
														USA</span>
													<h3 className="title-tour-list"><Link href="/tour-single">Days and
														6 nights From
														Moscow</Link>
													</h3>
													<div className="review">
														<i className="icon-Star" />
														<i className="icon-Star" />
														<i className="icon-Star" />
														<i className="icon-Star" />
														<i className="icon-Star" />
														<span>(1 Review)</span>
													</div>
													<div className="icon-box flex-three">
														<div className="icons flex-three">
															<i className="icon-time-left" />
															<span>5 days</span>
														</div>
														<div className="icons flex-three">
															<svg width={21} height={16} viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M4.34766 4.79761C4.34766 2.94013 5.85346 1.43433 7.71094 1.43433C9.56841 1.43433 11.0742 2.94013 11.0742 4.79761C11.0742 6.65508 9.56841 8.16089 7.71094 8.16089C5.85346 8.16089 4.34766 6.65508 4.34766 4.79761Z" stroke="#4DA528" strokeWidth="1.7" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
																<path d="M9.5977 15.1797H2.46098C1.34827 15.1797 0.558268 14.0954 0.898984 13.0362C1.80408 10.222 4.57804 8.18566 7.69301 8.18566C9.17897 8.18566 10.5566 8.64906 11.6895 9.43922" stroke="#4DA528" strokeWidth="1.7" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
																<path d="M17.1035 15.1797V9.02734" stroke="#4DA528" strokeWidth="1.7" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
																<path d="M20.1797 12.1035H14.0273" stroke="#4DA528" strokeWidth="1.7" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
															</svg>
															<span>12 Person</span>
														</div>
													</div>
													<div className="flex-two">
														<div className="price-box flex-three">
															<p>From <span className="price-sale">$169.00</span></p>
															<span className="price">$199.00</span>
														</div>
														<div className="icon-bookmark">
															<i className="icon-Vector-151" />
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="row">
										<div className="col-lg-12 center mt-44">
											<Link href="/archieve-tour" className="btn-main">
												<p className="btn-main-text">View all tour </p>
												<p className="iconer">
													<i className="icon-13" />
												</p>
											</Link>
										</div>
									</div>
								</div>
								<div className="tab-pane fade" id="london-tab-pane" role="tabpanel" tabIndex={0}>
									<div className="row">
										<div className="col-sm-6 col-lg-3">
											<div className="tour-listing box-sd">
												<Link href="/tour-single" className="tour-listing-image">
													<div className="badge-top flex-two">
														<span className="feature">Featured</span>
														<div className="badge-media flex-five">
															<span className="media"><i className="icon-Group-1000002909" />5</span>
															<span className="media"><i className="icon-Group-1000002910" />2</span>
														</div>
													</div>
													<img src="/assets/images/travel-list/1.jpg" alt="Image Listing" />
												</Link>
												<div className="tour-listing-content">
													<span className="tag-listing">Bestseller</span>
													<span className="map"><i className="icon-Vector4" />United States
														USA</span>
													<h3 className="title-tour-list"><Link href="/tour-single">Days and
														6 nights From
														Moscow</Link>
													</h3>
													<div className="review">
														<i className="icon-Star" />
														<i className="icon-Star" />
														<i className="icon-Star" />
														<i className="icon-Star" />
														<i className="icon-Star" />
														<span>(1 Review)</span>
													</div>
													<div className="icon-box flex-three">
														<div className="icons flex-three">
															<i className="icon-time-left" />
															<span>5 days</span>
														</div>
														<div className="icons flex-three">
															<svg width={21} height={16} viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M4.34766 4.79761C4.34766 2.94013 5.85346 1.43433 7.71094 1.43433C9.56841 1.43433 11.0742 2.94013 11.0742 4.79761C11.0742 6.65508 9.56841 8.16089 7.71094 8.16089C5.85346 8.16089 4.34766 6.65508 4.34766 4.79761Z" stroke="currentColor" strokeWidth="1.7" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
																<path d="M9.5977 15.1797H2.46098C1.34827 15.1797 0.558268 14.0954 0.898984 13.0362C1.80408 10.222 4.57804 8.18566 7.69301 8.18566C9.17897 8.18566 10.5566 8.64906 11.6895 9.43922" stroke="currentColor" strokeWidth="1.7" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
																<path d="M17.1035 15.1797V9.02734" stroke="currentColor" strokeWidth="1.7" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
																<path d="M20.1797 12.1035H14.0273" stroke="currentColor" strokeWidth="1.7" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
															</svg>
															<span>12 Person</span>
														</div>
													</div>
													<div className="flex-two">
														<div className="price-box flex-three">
															<p>From <span className="price-sale">$169.00</span></p>
															<span className="price">$199.00</span>
														</div>
														<div className="icon-bookmark">
															<i className="icon-Vector-151" />
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="col-sm-6 col-lg-3">
											<div className="tour-listing box-sd">
												<Link href="/tour-single" className="tour-listing-image">
													<div className="badge-top flex-two">
														<span className="feature">Featured</span>
														<div className="badge-media flex-five">
															<span className="media"><i className="icon-Group-1000002909" />5</span>
															<span className="media"><i className="icon-Group-1000002910" />2</span>
														</div>
													</div>
													<img src="/assets/images/travel-list/2.jpg" alt="Image Listing" />
												</Link>
												<div className="tour-listing-content">
													<span className="tag-listing">Trending</span>
													<span className="map"><i className="icon-Vector4" />United States
														USA</span>
													<h3 className="title-tour-list"><Link href="/tour-single">Days and
														6 nights From
														Moscow</Link>
													</h3>
													<div className="review">
														<i className="icon-Star" />
														<i className="icon-Star" />
														<i className="icon-Star" />
														<i className="icon-Star" />
														<i className="icon-Star" />
														<span>(1 Review)</span>
													</div>
													<div className="icon-box flex-three">
														<div className="icons flex-three">
															<i className="icon-time-left" />
															<span>5 days</span>
														</div>
														<div className="icons flex-three">
															<svg width={21} height={16} viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M4.34766 4.79761C4.34766 2.94013 5.85346 1.43433 7.71094 1.43433C9.56841 1.43433 11.0742 2.94013 11.0742 4.79761C11.0742 6.65508 9.56841 8.16089 7.71094 8.16089C5.85346 8.16089 4.34766 6.65508 4.34766 4.79761Z" stroke="currentColor" strokeWidth="1.7" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
																<path d="M9.5977 15.1797H2.46098C1.34827 15.1797 0.558268 14.0954 0.898984 13.0362C1.80408 10.222 4.57804 8.18566 7.69301 8.18566C9.17897 8.18566 10.5566 8.64906 11.6895 9.43922" stroke="currentColor" strokeWidth="1.7" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
																<path d="M17.1035 15.1797V9.02734" stroke="currentColor" strokeWidth="1.7" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
																<path d="M20.1797 12.1035H14.0273" stroke="currentColor" strokeWidth="1.7" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
															</svg>
															<span>12 Person</span>
														</div>
													</div>
													<div className="flex-two">
														<div className="price-box flex-three">
															<p>From <span className="price-sale">$169.00</span></p>
															<span className="price">$199.00</span>
														</div>
														<div className="icon-bookmark">
															<i className="icon-Vector-151" />
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="col-sm-6 col-lg-3">
											<div className="tour-listing box-sd">
												<Link href="/tour-single" className="tour-listing-image">
													<div className="badge-top flex-two">
														<span className="feature">Featured</span>
														<div className="badge-media flex-five">
															<span className="media"><i className="icon-Group-1000002909" />5</span>
															<span className="media"><i className="icon-Group-1000002910" />2</span>
														</div>
													</div>
													<img src="/assets/images/travel-list/3.jpg" alt="Image Listing" />
												</Link>
												<div className="tour-listing-content">
													<span className="tag-listing">Hot sell</span>
													<span className="map"><i className="icon-Vector4" />United States
														USA</span>
													<h3 className="title-tour-list"><Link href="/tour-single">Days and
														6 nights From
														Moscow</Link>
													</h3>
													<div className="review">
														<i className="icon-Star" />
														<i className="icon-Star" />
														<i className="icon-Star" />
														<i className="icon-Star" />
														<i className="icon-Star" />
														<span>(1 Review)</span>
													</div>
													<div className="icon-box flex-three">
														<div className="icons flex-three">
															<i className="icon-time-left" />
															<span>5 days</span>
														</div>
														<div className="icons flex-three">
															<svg width={21} height={16} viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M4.34766 4.79761C4.34766 2.94013 5.85346 1.43433 7.71094 1.43433C9.56841 1.43433 11.0742 2.94013 11.0742 4.79761C11.0742 6.65508 9.56841 8.16089 7.71094 8.16089C5.85346 8.16089 4.34766 6.65508 4.34766 4.79761Z" stroke="currentColor" strokeWidth="1.7" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
																<path d="M9.5977 15.1797H2.46098C1.34827 15.1797 0.558268 14.0954 0.898984 13.0362C1.80408 10.222 4.57804 8.18566 7.69301 8.18566C9.17897 8.18566 10.5566 8.64906 11.6895 9.43922" stroke="currentColor" strokeWidth="1.7" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
																<path d="M17.1035 15.1797V9.02734" stroke="#4DA528" strokeWidth="1.7" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
																<path d="M20.1797 12.1035H14.0273" stroke="#4DA528" strokeWidth="1.7" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
															</svg>
															<span>12 Person</span>
														</div>
													</div>
													<div className="flex-two">
														<div className="price-box flex-three">
															<p>From <span className="price-sale">$169.00</span></p>
															<span className="price">$199.00</span>
														</div>
														<div className="icon-bookmark">
															<i className="icon-Vector-151" />
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="col-sm-6 col-lg-3">
											<div className="tour-listing box-sd">
												<Link href="/tour-single" className="tour-listing-image">
													<div className="badge-top flex-two">
														<span className="feature">Featured</span>
														<div className="badge-media flex-five">
															<span className="media"><i className="icon-Group-1000002909" />5</span>
															<span className="media"><i className="icon-Group-1000002910" />2</span>
														</div>
													</div>
													<img src="/assets/images/travel-list/4.jpg" alt="Image Listing" />
												</Link>
												<div className="tour-listing-content">
													<span className="tag-listing">Bestseller</span>
													<span className="map"><i className="icon-Vector4" />United States
														USA</span>
													<h3 className="title-tour-list"><Link href="/tour-single">Days and
														6 nights From
														Moscow</Link>
													</h3>
													<div className="review">
														<i className="icon-Star" />
														<i className="icon-Star" />
														<i className="icon-Star" />
														<i className="icon-Star" />
														<i className="icon-Star" />
														<span>(1 Review)</span>
													</div>
													<div className="icon-box flex-three">
														<div className="icons flex-three">
															<i className="icon-time-left" />
															<span>5 days</span>
														</div>
														<div className="icons flex-three">
															<svg width={21} height={16} viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M4.34766 4.79761C4.34766 2.94013 5.85346 1.43433 7.71094 1.43433C9.56841 1.43433 11.0742 2.94013 11.0742 4.79761C11.0742 6.65508 9.56841 8.16089 7.71094 8.16089C5.85346 8.16089 4.34766 6.65508 4.34766 4.79761Z" stroke="#4DA528" strokeWidth="1.7" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
																<path d="M9.5977 15.1797H2.46098C1.34827 15.1797 0.558268 14.0954 0.898984 13.0362C1.80408 10.222 4.57804 8.18566 7.69301 8.18566C9.17897 8.18566 10.5566 8.64906 11.6895 9.43922" stroke="#4DA528" strokeWidth="1.7" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
																<path d="M17.1035 15.1797V9.02734" stroke="#4DA528" strokeWidth="1.7" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
																<path d="M20.1797 12.1035H14.0273" stroke="#4DA528" strokeWidth="1.7" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
															</svg>
															<span>12 Person</span>
														</div>
													</div>
													<div className="flex-two">
														<div className="price-box flex-three">
															<p>From <span className="price-sale">$169.00</span></p>
															<span className="price">$199.00</span>
														</div>
														<div className="icon-bookmark">
															<i className="icon-Vector-151" />
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="row">
										<div className="col-lg-12 center mt-44">
											<Link href="/archieve-tour" className="btn-main">
												<p className="btn-main-text">View all tour </p>
												<p className="iconer">
													<i className="icon-13" />
												</p>
											</Link>
										</div>
									</div>
								</div>
								<div className="tab-pane fade" id="tokyo-tab-pane" role="tabpanel" tabIndex={0}>
									<div className="row">
										<div className="col-sm-6 col-lg-3">
											<div className="tour-listing box-sd">
												<Link href="/tour-single" className="tour-listing-image">
													<div className="badge-top flex-two">
														<span className="feature">Featured</span>
														<div className="badge-media flex-five">
															<span className="media"><i className="icon-Group-1000002909" />5</span>
															<span className="media"><i className="icon-Group-1000002910" />2</span>
														</div>
													</div>
													<img src="/assets/images/travel-list/1.jpg" alt="Image Listing" />
												</Link>
												<div className="tour-listing-content">
													<span className="tag-listing">Bestseller</span>
													<span className="map"><i className="icon-Vector4" />United States
														USA</span>
													<h3 className="title-tour-list"><Link href="/tour-single">Days and
														6 nights From
														Moscow</Link>
													</h3>
													<div className="review">
														<i className="icon-Star" />
														<i className="icon-Star" />
														<i className="icon-Star" />
														<i className="icon-Star" />
														<i className="icon-Star" />
														<span>(1 Review)</span>
													</div>
													<div className="icon-box flex-three">
														<div className="icons flex-three">
															<i className="icon-time-left" />
															<span>5 days</span>
														</div>
														<div className="icons flex-three">
															<svg width={21} height={16} viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M4.34766 4.79761C4.34766 2.94013 5.85346 1.43433 7.71094 1.43433C9.56841 1.43433 11.0742 2.94013 11.0742 4.79761C11.0742 6.65508 9.56841 8.16089 7.71094 8.16089C5.85346 8.16089 4.34766 6.65508 4.34766 4.79761Z" stroke="currentColor" strokeWidth="1.7" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
																<path d="M9.5977 15.1797H2.46098C1.34827 15.1797 0.558268 14.0954 0.898984 13.0362C1.80408 10.222 4.57804 8.18566 7.69301 8.18566C9.17897 8.18566 10.5566 8.64906 11.6895 9.43922" stroke="currentColor" strokeWidth="1.7" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
																<path d="M17.1035 15.1797V9.02734" stroke="currentColor" strokeWidth="1.7" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
																<path d="M20.1797 12.1035H14.0273" stroke="currentColor" strokeWidth="1.7" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
															</svg>
															<span>12 Person</span>
														</div>
													</div>
													<div className="flex-two">
														<div className="price-box flex-three">
															<p>From <span className="price-sale">$169.00</span></p>
															<span className="price">$199.00</span>
														</div>
														<div className="icon-bookmark">
															<i className="icon-Vector-151" />
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="col-sm-6 col-lg-3">
											<div className="tour-listing box-sd">
												<Link href="/tour-single" className="tour-listing-image">
													<div className="badge-top flex-two">
														<span className="feature">Featured</span>
														<div className="badge-media flex-five">
															<span className="media"><i className="icon-Group-1000002909" />5</span>
															<span className="media"><i className="icon-Group-1000002910" />2</span>
														</div>
													</div>
													<img src="/assets/images/travel-list/2.jpg" alt="Image Listing" />
												</Link>
												<div className="tour-listing-content">
													<span className="tag-listing">Trending</span>
													<span className="map"><i className="icon-Vector4" />United States
														USA</span>
													<h3 className="title-tour-list"><Link href="/tour-single">Days and
														6 nights From
														Moscow</Link>
													</h3>
													<div className="review">
														<i className="icon-Star" />
														<i className="icon-Star" />
														<i className="icon-Star" />
														<i className="icon-Star" />
														<i className="icon-Star" />
														<span>(1 Review)</span>
													</div>
													<div className="icon-box flex-three">
														<div className="icons flex-three">
															<i className="icon-time-left" />
															<span>5 days</span>
														</div>
														<div className="icons flex-three">
															<svg width={21} height={16} viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M4.34766 4.79761C4.34766 2.94013 5.85346 1.43433 7.71094 1.43433C9.56841 1.43433 11.0742 2.94013 11.0742 4.79761C11.0742 6.65508 9.56841 8.16089 7.71094 8.16089C5.85346 8.16089 4.34766 6.65508 4.34766 4.79761Z" stroke="currentColor" strokeWidth="1.7" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
																<path d="M9.5977 15.1797H2.46098C1.34827 15.1797 0.558268 14.0954 0.898984 13.0362C1.80408 10.222 4.57804 8.18566 7.69301 8.18566C9.17897 8.18566 10.5566 8.64906 11.6895 9.43922" stroke="currentColor" strokeWidth="1.7" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
																<path d="M17.1035 15.1797V9.02734" stroke="currentColor" strokeWidth="1.7" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
																<path d="M20.1797 12.1035H14.0273" stroke="currentColor" strokeWidth="1.7" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
															</svg>
															<span>12 Person</span>
														</div>
													</div>
													<div className="flex-two">
														<div className="price-box flex-three">
															<p>From <span className="price-sale">$169.00</span></p>
															<span className="price">$199.00</span>
														</div>
														<div className="icon-bookmark">
															<i className="icon-Vector-151" />
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="col-sm-6 col-lg-3">
											<div className="tour-listing box-sd">
												<Link href="/tour-single" className="tour-listing-image">
													<div className="badge-top flex-two">
														<span className="feature">Featured</span>
														<div className="badge-media flex-five">
															<span className="media"><i className="icon-Group-1000002909" />5</span>
															<span className="media"><i className="icon-Group-1000002910" />2</span>
														</div>
													</div>
													<img src="/assets/images/travel-list/3.jpg" alt="Image Listing" />
												</Link>
												<div className="tour-listing-content">
													<span className="tag-listing">Hot sell</span>
													<span className="map"><i className="icon-Vector4" />United States
														USA</span>
													<h3 className="title-tour-list"><Link href="/tour-single">Days and
														6 nights From
														Moscow</Link>
													</h3>
													<div className="review">
														<i className="icon-Star" />
														<i className="icon-Star" />
														<i className="icon-Star" />
														<i className="icon-Star" />
														<i className="icon-Star" />
														<span>(1 Review)</span>
													</div>
													<div className="icon-box flex-three">
														<div className="icons flex-three">
															<i className="icon-time-left" />
															<span>5 days</span>
														</div>
														<div className="icons flex-three">
															<svg width={21} height={16} viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M4.34766 4.79761C4.34766 2.94013 5.85346 1.43433 7.71094 1.43433C9.56841 1.43433 11.0742 2.94013 11.0742 4.79761C11.0742 6.65508 9.56841 8.16089 7.71094 8.16089C5.85346 8.16089 4.34766 6.65508 4.34766 4.79761Z" stroke="currentColor" strokeWidth="1.7" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
																<path d="M9.5977 15.1797H2.46098C1.34827 15.1797 0.558268 14.0954 0.898984 13.0362C1.80408 10.222 4.57804 8.18566 7.69301 8.18566C9.17897 8.18566 10.5566 8.64906 11.6895 9.43922" stroke="currentColor" strokeWidth="1.7" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
																<path d="M17.1035 15.1797V9.02734" stroke="#4DA528" strokeWidth="1.7" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
																<path d="M20.1797 12.1035H14.0273" stroke="#4DA528" strokeWidth="1.7" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
															</svg>
															<span>12 Person</span>
														</div>
													</div>
													<div className="flex-two">
														<div className="price-box flex-three">
															<p>From <span className="price-sale">$169.00</span></p>
															<span className="price">$199.00</span>
														</div>
														<div className="icon-bookmark">
															<i className="icon-Vector-151" />
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="col-sm-6 col-lg-3">
											<div className="tour-listing box-sd">
												<Link href="/tour-single" className="tour-listing-image">
													<div className="badge-top flex-two">
														<span className="feature">Featured</span>
														<div className="badge-media flex-five">
															<span className="media"><i className="icon-Group-1000002909" />5</span>
															<span className="media"><i className="icon-Group-1000002910" />2</span>
														</div>
													</div>
													<img src="/assets/images/travel-list/4.jpg" alt="Image Listing" />
												</Link>
												<div className="tour-listing-content">
													<span className="tag-listing">Bestseller</span>
													<span className="map"><i className="icon-Vector4" />United States
														USA</span>
													<h3 className="title-tour-list"><Link href="/tour-single">Days and
														6 nights From
														Moscow</Link>
													</h3>
													<div className="review">
														<i className="icon-Star" />
														<i className="icon-Star" />
														<i className="icon-Star" />
														<i className="icon-Star" />
														<i className="icon-Star" />
														<span>(1 Review)</span>
													</div>
													<div className="icon-box flex-three">
														<div className="icons flex-three">
															<i className="icon-time-left" />
															<span>5 days</span>
														</div>
														<div className="icons flex-three">
															<svg width={21} height={16} viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M4.34766 4.79761C4.34766 2.94013 5.85346 1.43433 7.71094 1.43433C9.56841 1.43433 11.0742 2.94013 11.0742 4.79761C11.0742 6.65508 9.56841 8.16089 7.71094 8.16089C5.85346 8.16089 4.34766 6.65508 4.34766 4.79761Z" stroke="#4DA528" strokeWidth="1.7" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
																<path d="M9.5977 15.1797H2.46098C1.34827 15.1797 0.558268 14.0954 0.898984 13.0362C1.80408 10.222 4.57804 8.18566 7.69301 8.18566C9.17897 8.18566 10.5566 8.64906 11.6895 9.43922" stroke="#4DA528" strokeWidth="1.7" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
																<path d="M17.1035 15.1797V9.02734" stroke="#4DA528" strokeWidth="1.7" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
																<path d="M20.1797 12.1035H14.0273" stroke="#4DA528" strokeWidth="1.7" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
															</svg>
															<span>12 Person</span>
														</div>
													</div>
													<div className="flex-two">
														<div className="price-box flex-three">
															<p>From <span className="price-sale">$169.00</span></p>
															<span className="price">$199.00</span>
														</div>
														<div className="icon-bookmark">
															<i className="icon-Vector-151" />
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="row">
										<div className="col-lg-12 center mt-44">
											<Link href="/archieve-tour" className="btn-main">
												<p className="btn-main-text">View all tour </p>
												<p className="iconer">
													<i className="icon-13" />
												</p>
											</Link>
										</div>
									</div>
								</div>
								<div className="tab-pane fade" id="los-angelas-tab-pane" role="tabpanel" tabIndex={0}>
									<div className="row">
										<div className="col-sm-6 col-lg-3">
											<div className="tour-listing box-sd">
												<Link href="/tour-single" className="tour-listing-image">
													<div className="badge-top flex-two">
														<span className="feature">Featured</span>
														<div className="badge-media flex-five">
															<span className="media"><i className="icon-Group-1000002909" />5</span>
															<span className="media"><i className="icon-Group-1000002910" />2</span>
														</div>
													</div>
													<img src="/assets/images/travel-list/1.jpg" alt="Image Listing" />
												</Link>
												<div className="tour-listing-content">
													<span className="tag-listing">Bestseller</span>
													<span className="map"><i className="icon-Vector4" />United States
														USA</span>
													<h3 className="title-tour-list"><Link href="/tour-single">Days and
														6 nights From
														Moscow</Link>
													</h3>
													<div className="review">
														<i className="icon-Star" />
														<i className="icon-Star" />
														<i className="icon-Star" />
														<i className="icon-Star" />
														<i className="icon-Star" />
														<span>(1 Review)</span>
													</div>
													<div className="icon-box flex-three">
														<div className="icons flex-three">
															<i className="icon-time-left" />
															<span>5 days</span>
														</div>
														<div className="icons flex-three">
															<svg width={21} height={16} viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M4.34766 4.79761C4.34766 2.94013 5.85346 1.43433 7.71094 1.43433C9.56841 1.43433 11.0742 2.94013 11.0742 4.79761C11.0742 6.65508 9.56841 8.16089 7.71094 8.16089C5.85346 8.16089 4.34766 6.65508 4.34766 4.79761Z" stroke="currentColor" strokeWidth="1.7" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
																<path d="M9.5977 15.1797H2.46098C1.34827 15.1797 0.558268 14.0954 0.898984 13.0362C1.80408 10.222 4.57804 8.18566 7.69301 8.18566C9.17897 8.18566 10.5566 8.64906 11.6895 9.43922" stroke="currentColor" strokeWidth="1.7" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
																<path d="M17.1035 15.1797V9.02734" stroke="currentColor" strokeWidth="1.7" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
																<path d="M20.1797 12.1035H14.0273" stroke="currentColor" strokeWidth="1.7" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
															</svg>
															<span>12 Person</span>
														</div>
													</div>
													<div className="flex-two">
														<div className="price-box flex-three">
															<p>From <span className="price-sale">$169.00</span></p>
															<span className="price">$199.00</span>
														</div>
														<div className="icon-bookmark">
															<i className="icon-Vector-151" />
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="col-sm-6 col-lg-3">
											<div className="tour-listing box-sd">
												<Link href="/tour-single" className="tour-listing-image">
													<div className="badge-top flex-two">
														<span className="feature">Featured</span>
														<div className="badge-media flex-five">
															<span className="media"><i className="icon-Group-1000002909" />5</span>
															<span className="media"><i className="icon-Group-1000002910" />2</span>
														</div>
													</div>
													<img src="/assets/images/travel-list/2.jpg" alt="Image Listing" />
												</Link>
												<div className="tour-listing-content">
													<span className="tag-listing">Trending</span>
													<span className="map"><i className="icon-Vector4" />United States
														USA</span>
													<h3 className="title-tour-list"><Link href="/tour-single">Days and
														6 nights From
														Moscow</Link>
													</h3>
													<div className="review">
														<i className="icon-Star" />
														<i className="icon-Star" />
														<i className="icon-Star" />
														<i className="icon-Star" />
														<i className="icon-Star" />
														<span>(1 Review)</span>
													</div>
													<div className="icon-box flex-three">
														<div className="icons flex-three">
															<i className="icon-time-left" />
															<span>5 days</span>
														</div>
														<div className="icons flex-three">
															<svg width={21} height={16} viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M4.34766 4.79761C4.34766 2.94013 5.85346 1.43433 7.71094 1.43433C9.56841 1.43433 11.0742 2.94013 11.0742 4.79761C11.0742 6.65508 9.56841 8.16089 7.71094 8.16089C5.85346 8.16089 4.34766 6.65508 4.34766 4.79761Z" stroke="currentColor" strokeWidth="1.7" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
																<path d="M9.5977 15.1797H2.46098C1.34827 15.1797 0.558268 14.0954 0.898984 13.0362C1.80408 10.222 4.57804 8.18566 7.69301 8.18566C9.17897 8.18566 10.5566 8.64906 11.6895 9.43922" stroke="currentColor" strokeWidth="1.7" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
																<path d="M17.1035 15.1797V9.02734" stroke="currentColor" strokeWidth="1.7" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
																<path d="M20.1797 12.1035H14.0273" stroke="currentColor" strokeWidth="1.7" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
															</svg>
															<span>12 Person</span>
														</div>
													</div>
													<div className="flex-two">
														<div className="price-box flex-three">
															<p>From <span className="price-sale">$169.00</span></p>
															<span className="price">$199.00</span>
														</div>
														<div className="icon-bookmark">
															<i className="icon-Vector-151" />
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="col-sm-6 col-lg-3">
											<div className="tour-listing box-sd">
												<Link href="/tour-single" className="tour-listing-image">
													<div className="badge-top flex-two">
														<span className="feature">Featured</span>
														<div className="badge-media flex-five">
															<span className="media"><i className="icon-Group-1000002909" />5</span>
															<span className="media"><i className="icon-Group-1000002910" />2</span>
														</div>
													</div>
													<img src="/assets/images/travel-list/3.jpg" alt="Image Listing" />
												</Link>
												<div className="tour-listing-content">
													<span className="tag-listing">Hot sell</span>
													<span className="map"><i className="icon-Vector4" />United States
														USA</span>
													<h3 className="title-tour-list"><Link href="/tour-single">Days and
														6 nights From
														Moscow</Link>
													</h3>
													<div className="review">
														<i className="icon-Star" />
														<i className="icon-Star" />
														<i className="icon-Star" />
														<i className="icon-Star" />
														<i className="icon-Star" />
														<span>(1 Review)</span>
													</div>
													<div className="icon-box flex-three">
														<div className="icons flex-three">
															<i className="icon-time-left" />
															<span>5 days</span>
														</div>
														<div className="icons flex-three">
															<svg width={21} height={16} viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M4.34766 4.79761C4.34766 2.94013 5.85346 1.43433 7.71094 1.43433C9.56841 1.43433 11.0742 2.94013 11.0742 4.79761C11.0742 6.65508 9.56841 8.16089 7.71094 8.16089C5.85346 8.16089 4.34766 6.65508 4.34766 4.79761Z" stroke="currentColor" strokeWidth="1.7" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
																<path d="M9.5977 15.1797H2.46098C1.34827 15.1797 0.558268 14.0954 0.898984 13.0362C1.80408 10.222 4.57804 8.18566 7.69301 8.18566C9.17897 8.18566 10.5566 8.64906 11.6895 9.43922" stroke="currentColor" strokeWidth="1.7" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
																<path d="M17.1035 15.1797V9.02734" stroke="#4DA528" strokeWidth="1.7" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
																<path d="M20.1797 12.1035H14.0273" stroke="#4DA528" strokeWidth="1.7" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
															</svg>
															<span>12 Person</span>
														</div>
													</div>
													<div className="flex-two">
														<div className="price-box flex-three">
															<p>From <span className="price-sale">$169.00</span></p>
															<span className="price">$199.00</span>
														</div>
														<div className="icon-bookmark">
															<i className="icon-Vector-151" />
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="col-sm-6 col-lg-3">
											<div className="tour-listing box-sd">
												<Link href="/tour-single" className="tour-listing-image">
													<div className="badge-top flex-two">
														<span className="feature">Featured</span>
														<div className="badge-media flex-five">
															<span className="media"><i className="icon-Group-1000002909" />5</span>
															<span className="media"><i className="icon-Group-1000002910" />2</span>
														</div>
													</div>
													<img src="/assets/images/travel-list/4.jpg" alt="Image Listing" />
												</Link>
												<div className="tour-listing-content">
													<span className="tag-listing">Bestseller</span>
													<span className="map"><i className="icon-Vector4" />United States
														USA</span>
													<h3 className="title-tour-list"><Link href="/tour-single">Days and
														6 nights From
														Moscow</Link>
													</h3>
													<div className="review">
														<i className="icon-Star" />
														<i className="icon-Star" />
														<i className="icon-Star" />
														<i className="icon-Star" />
														<i className="icon-Star" />
														<span>(1 Review)</span>
													</div>
													<div className="icon-box flex-three">
														<div className="icons flex-three">
															<i className="icon-time-left" />
															<span>5 days</span>
														</div>
														<div className="icons flex-three">
															<svg width={21} height={16} viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M4.34766 4.79761C4.34766 2.94013 5.85346 1.43433 7.71094 1.43433C9.56841 1.43433 11.0742 2.94013 11.0742 4.79761C11.0742 6.65508 9.56841 8.16089 7.71094 8.16089C5.85346 8.16089 4.34766 6.65508 4.34766 4.79761Z" stroke="#4DA528" strokeWidth="1.7" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
																<path d="M9.5977 15.1797H2.46098C1.34827 15.1797 0.558268 14.0954 0.898984 13.0362C1.80408 10.222 4.57804 8.18566 7.69301 8.18566C9.17897 8.18566 10.5566 8.64906 11.6895 9.43922" stroke="#4DA528" strokeWidth="1.7" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
																<path d="M17.1035 15.1797V9.02734" stroke="#4DA528" strokeWidth="1.7" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
																<path d="M20.1797 12.1035H14.0273" stroke="#4DA528" strokeWidth="1.7" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
															</svg>
															<span>12 Person</span>
														</div>
													</div>
													<div className="flex-two">
														<div className="price-box flex-three">
															<p>From <span className="price-sale">$169.00</span></p>
															<span className="price">$199.00</span>
														</div>
														<div className="icon-bookmark">
															<i className="icon-Vector-151" />
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="row">
										<div className="col-lg-12 center mt-44">
											<Link href="/archieve-tour" className="btn-main">
												<p className="btn-main-text">View all tour </p>
												<p className="iconer">
													<i className="icon-13" />
												</p>
											</Link>
										</div>
									</div>
								</div>
								<div className="tab-pane fade" id="manila-tab-pane" role="tabpanel" tabIndex={0}>
									<div className="row">
										<div className="col-sm-6 col-lg-3">
											<div className="tour-listing box-sd">
												<Link href="/tour-single" className="tour-listing-image">
													<div className="badge-top flex-two">
														<span className="feature">Featured</span>
														<div className="badge-media flex-five">
															<span className="media"><i className="icon-Group-1000002909" />5</span>
															<span className="media"><i className="icon-Group-1000002910" />2</span>
														</div>
													</div>
													<img src="/assets/images/travel-list/1.jpg" alt="Image Listing" />
												</Link>
												<div className="tour-listing-content">
													<span className="tag-listing">Bestseller</span>
													<span className="map"><i className="icon-Vector4" />United States
														USA</span>
													<h3 className="title-tour-list"><Link href="/tour-single">Days and
														6 nights From
														Moscow</Link>
													</h3>
													<div className="review">
														<i className="icon-Star" />
														<i className="icon-Star" />
														<i className="icon-Star" />
														<i className="icon-Star" />
														<i className="icon-Star" />
														<span>(1 Review)</span>
													</div>
													<div className="icon-box flex-three">
														<div className="icons flex-three">
															<i className="icon-time-left" />
															<span>5 days</span>
														</div>
														<div className="icons flex-three">
															<svg width={21} height={16} viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M4.34766 4.79761C4.34766 2.94013 5.85346 1.43433 7.71094 1.43433C9.56841 1.43433 11.0742 2.94013 11.0742 4.79761C11.0742 6.65508 9.56841 8.16089 7.71094 8.16089C5.85346 8.16089 4.34766 6.65508 4.34766 4.79761Z" stroke="currentColor" strokeWidth="1.7" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
																<path d="M9.5977 15.1797H2.46098C1.34827 15.1797 0.558268 14.0954 0.898984 13.0362C1.80408 10.222 4.57804 8.18566 7.69301 8.18566C9.17897 8.18566 10.5566 8.64906 11.6895 9.43922" stroke="currentColor" strokeWidth="1.7" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
																<path d="M17.1035 15.1797V9.02734" stroke="currentColor" strokeWidth="1.7" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
																<path d="M20.1797 12.1035H14.0273" stroke="currentColor" strokeWidth="1.7" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
															</svg>
															<span>12 Person</span>
														</div>
													</div>
													<div className="flex-two">
														<div className="price-box flex-three">
															<p>From <span className="price-sale">$169.00</span></p>
															<span className="price">$199.00</span>
														</div>
														<div className="icon-bookmark">
															<i className="icon-Vector-151" />
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="col-sm-6 col-lg-3">
											<div className="tour-listing box-sd">
												<Link href="/tour-single" className="tour-listing-image">
													<div className="badge-top flex-two">
														<span className="feature">Featured</span>
														<div className="badge-media flex-five">
															<span className="media"><i className="icon-Group-1000002909" />5</span>
															<span className="media"><i className="icon-Group-1000002910" />2</span>
														</div>
													</div>
													<img src="/assets/images/travel-list/2.jpg" alt="Image Listing" />
												</Link>
												<div className="tour-listing-content">
													<span className="tag-listing">Trending</span>
													<span className="map"><i className="icon-Vector4" />United States
														USA</span>
													<h3 className="title-tour-list"><Link href="/tour-single">Days and
														6 nights From
														Moscow</Link>
													</h3>
													<div className="review">
														<i className="icon-Star" />
														<i className="icon-Star" />
														<i className="icon-Star" />
														<i className="icon-Star" />
														<i className="icon-Star" />
														<span>(1 Review)</span>
													</div>
													<div className="icon-box flex-three">
														<div className="icons flex-three">
															<i className="icon-time-left" />
															<span>5 days</span>
														</div>
														<div className="icons flex-three">
															<svg width={21} height={16} viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M4.34766 4.79761C4.34766 2.94013 5.85346 1.43433 7.71094 1.43433C9.56841 1.43433 11.0742 2.94013 11.0742 4.79761C11.0742 6.65508 9.56841 8.16089 7.71094 8.16089C5.85346 8.16089 4.34766 6.65508 4.34766 4.79761Z" stroke="currentColor" strokeWidth="1.7" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
																<path d="M9.5977 15.1797H2.46098C1.34827 15.1797 0.558268 14.0954 0.898984 13.0362C1.80408 10.222 4.57804 8.18566 7.69301 8.18566C9.17897 8.18566 10.5566 8.64906 11.6895 9.43922" stroke="currentColor" strokeWidth="1.7" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
																<path d="M17.1035 15.1797V9.02734" stroke="currentColor" strokeWidth="1.7" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
																<path d="M20.1797 12.1035H14.0273" stroke="currentColor" strokeWidth="1.7" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
															</svg>
															<span>12 Person</span>
														</div>
													</div>
													<div className="flex-two">
														<div className="price-box flex-three">
															<p>From <span className="price-sale">$169.00</span></p>
															<span className="price">$199.00</span>
														</div>
														<div className="icon-bookmark">
															<i className="icon-Vector-151" />
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="col-sm-6 col-lg-3">
											<div className="tour-listing box-sd">
												<Link href="/tour-single" className="tour-listing-image">
													<div className="badge-top flex-two">
														<span className="feature">Featured</span>
														<div className="badge-media flex-five">
															<span className="media"><i className="icon-Group-1000002909" />5</span>
															<span className="media"><i className="icon-Group-1000002910" />2</span>
														</div>
													</div>
													<img src="/assets/images/travel-list/3.jpg" alt="Image Listing" />
												</Link>
												<div className="tour-listing-content">
													<span className="tag-listing">Hot sell</span>
													<span className="map"><i className="icon-Vector4" />United States
														USA</span>
													<h3 className="title-tour-list"><Link href="/tour-single">Days and
														6 nights From
														Moscow</Link>
													</h3>
													<div className="review">
														<i className="icon-Star" />
														<i className="icon-Star" />
														<i className="icon-Star" />
														<i className="icon-Star" />
														<i className="icon-Star" />
														<span>(1 Review)</span>
													</div>
													<div className="icon-box flex-three">
														<div className="icons flex-three">
															<i className="icon-time-left" />
															<span>5 days</span>
														</div>
														<div className="icons flex-three">
															<svg width={21} height={16} viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M4.34766 4.79761C4.34766 2.94013 5.85346 1.43433 7.71094 1.43433C9.56841 1.43433 11.0742 2.94013 11.0742 4.79761C11.0742 6.65508 9.56841 8.16089 7.71094 8.16089C5.85346 8.16089 4.34766 6.65508 4.34766 4.79761Z" stroke="currentColor" strokeWidth="1.7" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
																<path d="M9.5977 15.1797H2.46098C1.34827 15.1797 0.558268 14.0954 0.898984 13.0362C1.80408 10.222 4.57804 8.18566 7.69301 8.18566C9.17897 8.18566 10.5566 8.64906 11.6895 9.43922" stroke="currentColor" strokeWidth="1.7" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
																<path d="M17.1035 15.1797V9.02734" stroke="#4DA528" strokeWidth="1.7" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
																<path d="M20.1797 12.1035H14.0273" stroke="#4DA528" strokeWidth="1.7" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
															</svg>
															<span>12 Person</span>
														</div>
													</div>
													<div className="flex-two">
														<div className="price-box flex-three">
															<p>From <span className="price-sale">$169.00</span></p>
															<span className="price">$199.00</span>
														</div>
														<div className="icon-bookmark">
															<i className="icon-Vector-151" />
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="col-sm-6 col-lg-3">
											<div className="tour-listing box-sd">
												<Link href="/tour-single" className="tour-listing-image">
													<div className="badge-top flex-two">
														<span className="feature">Featured</span>
														<div className="badge-media flex-five">
															<span className="media"><i className="icon-Group-1000002909" />5</span>
															<span className="media"><i className="icon-Group-1000002910" />2</span>
														</div>
													</div>
													<img src="/assets/images/travel-list/4.jpg" alt="Image Listing" />
												</Link>
												<div className="tour-listing-content">
													<span className="tag-listing">Bestseller</span>
													<span className="map"><i className="icon-Vector4" />United States
														USA</span>
													<h3 className="title-tour-list"><Link href="/tour-single">Days and
														6 nights From
														Moscow</Link>
													</h3>
													<div className="review">
														<i className="icon-Star" />
														<i className="icon-Star" />
														<i className="icon-Star" />
														<i className="icon-Star" />
														<i className="icon-Star" />
														<span>(1 Review)</span>
													</div>
													<div className="icon-box flex-three">
														<div className="icons flex-three">
															<i className="icon-time-left" />
															<span>5 days</span>
														</div>
														<div className="icons flex-three">
															<svg width={21} height={16} viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M4.34766 4.79761C4.34766 2.94013 5.85346 1.43433 7.71094 1.43433C9.56841 1.43433 11.0742 2.94013 11.0742 4.79761C11.0742 6.65508 9.56841 8.16089 7.71094 8.16089C5.85346 8.16089 4.34766 6.65508 4.34766 4.79761Z" stroke="#4DA528" strokeWidth="1.7" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
																<path d="M9.5977 15.1797H2.46098C1.34827 15.1797 0.558268 14.0954 0.898984 13.0362C1.80408 10.222 4.57804 8.18566 7.69301 8.18566C9.17897 8.18566 10.5566 8.64906 11.6895 9.43922" stroke="#4DA528" strokeWidth="1.7" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
																<path d="M17.1035 15.1797V9.02734" stroke="#4DA528" strokeWidth="1.7" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
																<path d="M20.1797 12.1035H14.0273" stroke="#4DA528" strokeWidth="1.7" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
															</svg>
															<span>12 Person</span>
														</div>
													</div>
													<div className="flex-two">
														<div className="price-box flex-three">
															<p>From <span className="price-sale">$169.00</span></p>
															<span className="price">$199.00</span>
														</div>
														<div className="icon-bookmark">
															<i className="icon-Vector-151" />
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="row">
										<div className="col-lg-12 center mt-44">
											<Link href="/archieve-tour" className="btn-main">
												<p className="btn-main-text">View all tour </p>
												<p className="iconer">
													<i className="icon-13" />
												</p>
											</Link>
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
