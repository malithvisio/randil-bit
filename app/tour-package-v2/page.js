'use client'
import RangeSlider from "@/components/elements/RangeSlider"
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from "react"
export default function TourPackageV2() {
	const [isTab, setIsTab] = useState(1)
	const handleTab = (i) => {
		setIsTab(i)
	}
	const [isToggled, setToggled] = useState(false)
	const handleToggle = () => setToggled(!isToggled)
	return (
		<>

			<Layout headerStyle={2} footerStyle={2} breadcrumbTitle="Best Tour Packages" imgbg={"/assets/images/page/tour-package.jpg"}>
				<div>
					<div className="mt--82 z-index3 relative">
						<div className="tf-container">
							<div className="row">
								<div className="col-lg-12">
									<div className="search-form-widget-slider relative">
										<form action="/" id="search-form-slider">
											<div className="flex wd-search">
												<div className="form-group flex">
													<i className="icon-18" />
													<div className="search-bar-group">
														<label>Destination</label>
														<select className="nice-select" tabIndex={0}>
															<option data-value className="option selected">Melborn ,Australia
															</option>
															<option data-value="hanoi" className="option">HaNoi ,Vietnam</option>
															<option data-value="tolyo" className="option">Tokyo , Janpan</option>
															<option data-value="korea" className="option">Seoul , Korea</option>
														</select>
													</div>
												</div>
												<div className="form-group flex">
													<i className="icon-hiking-1-1 " />
													<div className="search-bar-group">
														<label>Type</label>
														<select className="nice-select" tabIndex={0}>
															<option data-value className="option selected">Booking Type</option>
															<option data-value="booking" className="option">Booking Type</option>
															<option data-value="booking" className="option">Booking Type</option>
															<option data-value="booking" className="option">Booking Type</option>
														</select>
													</div>
												</div>
												<div className="form-group flex">
													<i className=" icon-time-left " />
													<div className="search-bar-group">
														<label>Duration</label>
														<select className="nice-select" tabIndex={0}>
															<option data-value className="option selected">2-4 days tour</option>
															<option data-value="booking" className="option">3-6 days tour</option>
															<option data-value="booking" className="option">4-8 days tour</option>
															<option data-value="booking" className="option">5-10 days tour</option>
														</select>
													</div>
												</div>
												<div className="form-group flex">
													<i className="icon-user" />
													<div className="search-bar-group">
														<label>Guests</label>
														<input type="text" defaultValue={0} />
													</div>
												</div>
												<div className="form-group flex-two">
													<div className="icon-icon-filter" onClick={handleToggle}>
														<i className="icon-14" />
													</div>
													<Link href="#" className="btn-search"><i className="icon-Vector5" />Search</Link>
												</div>
											</div>
											<div className={`wd-search-form ${isToggled ? 'show' : ''}`}>
												<div className="input-group-grid">
													<fieldset className="group-select relative ">
														<label>Filter By Price</label>
														<div className="widget widget-price ">
															<RangeSlider title="Filter By Price" />
														</div>
													</fieldset>
													<fieldset className="group-select relative input-npd ">
														<div className="search-bar-group relative">
															<label>0</label>
															<select className="nice-select" tabIndex={0}>
																<option data-value className="option selected focus">Language
																</option>
																<option data-value="language1" className="option">Japan</option>
																<option data-value="language2" className="option">Vietnames</option>
																<option data-value="language3" className="option">Korea</option>
															</select>
														</div>
													</fieldset>
													<fieldset className="group-select relative input-npd ">
														<div className="search-bar-group relative">
															<label>Any</label>
															<select className="nice-select" tabIndex={0}>
																<option data-value className="option selected focus">Month
																</option>
																<option data-value="month1" className="option">1 Month</option>
																<option data-value="month2" className="option">2 Month</option>
																<option data-value="month3" className="option">3 Month</option>
															</select>
														</div>
													</fieldset>
													<fieldset className="group-select relative input-npd">
														<div className="search-bar-group relative">
															<label>Any</label>
															<select className="nice-select" tabIndex={0}>
																<option data-value className="option selected focus">Duration
																</option>
																<option data-value="duration1" className="option">10-15 day</option>
																<option data-value="duration2" className="option">15-30 day</option>
																<option data-value="duration3" className="option">20-30 day</option>
															</select>
														</div>
													</fieldset>
													<div className="group-check-box-wrap">
														<div className="checkbox">
															<input id="check4" type="checkbox" name="check" defaultValue="check" />
															<label htmlFor="check4">Accepts Credit Cards</label>
														</div>
														<div className="checkbox">
															<input id="check5" type="checkbox" name="check" defaultValue="check" />
															<label htmlFor="check5">Car Parking</label>
														</div>
													</div>
													<div className="group-check-box-wrap">
														<div className="checkbox">
															<input id="check6" type="checkbox" name="check" defaultValue="check" />
															<label htmlFor="check6">Free Coupons</label>
														</div>
														<div className="checkbox">
															<input id="check7" type="checkbox" name="check" defaultValue="check" />
															<label htmlFor="check7">Laundry Service</label>
														</div>
													</div>
													<div className="group-check-box-wrap">
														<div className="checkbox">
															<input id="check8" type="checkbox" name="check" defaultValue="check" />
															<label htmlFor="check8">Outdoor Seating</label>
														</div>
														<div className="checkbox">
															<input id="check9" type="checkbox" name="check" defaultValue="check" />
															<label htmlFor="check9">Reservations</label>
														</div>
													</div>
													<div className="group-check-box-wrap">
														<div className="checkbox">
															<input id="check10" type="checkbox" name="check" defaultValue="check" />
															<label htmlFor="check10">Restaurant</label>
														</div>
														<div className="checkbox">
															<input id="check11" type="checkbox" name="check" defaultValue="check" />
															<label htmlFor="check11">Smoking Allowed</label>
														</div>
													</div>
												</div>
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* Widget Select Form */}
					{/* Widget archieve tour */}
					<section className="archieve-tour">
						<div className="tf-container">
							<div className="row">
								<div className="col-lg-4">
									<form action="/" className="sider-bar-tour-package">
										<div className="widget-filter mb-40">
											<h6 className="title-tour">Search by Filter</h6>
											<div className="group-select-wrap">
												<fieldset className="group-select relative mb-22">
													<i className="icon-Vector-8" />
													<div className="search-bar-group relative">
														<label>Destination</label>
														<select className="nice-select" tabIndex={0}>

															<option data-value className="option selected focus">Tokyo</option>
															<option data-value="hongkong" className="option">Hong Kong</option>
															<option data-value="taiwan" className="option">Taiwan</option>
															<option data-value="hanoi" className="option">Ha Noi</option>
															<option data-value="seoul" className="option">Seoul</option>

														</select>
													</div>
												</fieldset>
												<fieldset className="group-select relative mb-22">
													<i className="icon-Vector-22" />
													<div className="search-bar-group relative">
														<label>Activities</label>
														<select className="nice-select" tabIndex={0}>

															<option data-value className="option selected focus">Booking Type
															</option>
															<option data-value="4seat" className="option">4 Seat</option>
															<option data-value="7seat" className="option">7 Seat</option>
															<option data-value="12seat" className="option">12 Seat</option>
															<option data-value="32seat" className="option">32 Seat</option>

														</select>
													</div>
												</fieldset>
												<fieldset className="group-select relative mb-22">
													<i className="icon-Group-111" />
													<div className="search-bar-group relative">
														<label>Date</label>
														<select className="nice-select" tabIndex={0}>

															<option data-value className="option selected focus">Date From
															</option>
															<option data-value="3-5day" className="option">3-5 day</option>
															<option data-value="5-7day" className="option">5-7 day</option>
															<option data-value="7-12day" className="option">7-12 day</option>

														</select>
													</div>
												</fieldset>
												<fieldset className="group-select relative mb-22">
													<i className="icon-user" />
													<div className="search-bar-group relative">
														<label>0</label>
														<select className="nice-select" tabIndex={0}>

															<option data-value className="option selected focus">Guests</option>
															<option data-value="guests5" className="option">5 Guests</option>
															<option data-value="guests10" className="option">10 Guests</option>
															<option data-value="guests15" className="option">15 Guests</option>

														</select>
													</div>
												</fieldset>
												<fieldset className="group-select relative mb-40">
													<h6 className="title-tour">Filter By Price</h6>
													<div className="widget widget-price ">
														<RangeSlider title="Filter By Price" />
													</div>
												</fieldset>
												<fieldset className="group-select relative input-npd mb-22">
													<div className="search-bar-group relative">
														<label>0</label>
														<select className="nice-select" tabIndex={0}>

															<option data-value className="option selected focus">Language
															</option>
															<option data-value="chinese" className="option">Chinese</option>
															<option data-value="japanese" className="option">Japanese</option>
															<option data-value="russian" className="option">Russian</option>

														</select>
													</div>
												</fieldset>
												<fieldset className="group-select relative input-npd mb-22">
													<div className="search-bar-group relative">
														<label>Any</label>
														<select className="nice-select" tabIndex={0}>

															<option data-value className="option selected focus">Month</option>
															<option data-value="month1" className="option">1 Month</option>
															<option data-value="month2" className="option">2 Month</option>
															<option data-value="month3" className="option">3 Month</option>

														</select>
													</div>
												</fieldset >
												<fieldset className="group-select relative input-npd">
													<div className="search-bar-group relative">
														<label>Any</label>
														<select className="nice-select" tabIndex={0}>

															<option data-value className="option selected focus">Duration
															</option>
															<option data-value="duration15" className="option">15 day</option>
															<option data-value="duration20" className="option">20 day</option>
															<option data-value="duration30" className="option">30 day</option>

														</select>
													</div>
												</fieldset >
											</div >
										</div >
										<div className="widget-filter mb-40">
											<h6 className="title-tour">Search by Filter</h6>
											<div className="group-check-box-wrap">
												<div className="checkbox">
													<input id="check" type="checkbox" name="check" defaultValue="check" />
													<label htmlFor="check">10+</label>
												</div>
												<div className="checkbox">
													<input id="check1" type="checkbox" name="check" defaultValue="check" />
													<label htmlFor="check1">12+</label>
												</div>
												<div className="checkbox">
													<input id="check2" type="checkbox" name="check" defaultValue="check" />
													<label htmlFor="check2">15+</label>
												</div>
												<div className="checkbox">
													<input id="check3" type="checkbox" name="check" defaultValue="check" />
													<label htmlFor="check3">Adults</label>
												</div>
											</div>
										</div>
										<div className="widget-filter mb-40">
											<h6 className="title-tour">Search by Filter</h6>
											<div className="group-check-box-wrap">
												<div className="checkbox">
													<input id="check4-bar" type="checkbox" name="check" defaultValue="check" />
													<label htmlFor="check4-bar">Accepts Credit Cards</label>
												</div>
												<div className="checkbox">
													<input id="check5-bar" type="checkbox" name="check" defaultValue="check" />
													<label htmlFor="check5-bar">Car Parking</label>
												</div>
												<div className="checkbox">
													<input id="check6-bar" type="checkbox" name="check" defaultValue="check" />
													<label htmlFor="check6-bar">Free Coupons</label>
												</div>
												<div className="checkbox">
													<input id="check7-bar" type="checkbox" name="check" defaultValue="check" />
													<label htmlFor="check7-bar">Laundry Service</label>
												</div>
												<div className="checkbox">
													<input id="check8-bar" type="checkbox" name="check" defaultValue="check" />
													<label htmlFor="check8-bar">Outdoor Seating</label>
												</div>
												<div className="checkbox">
													<input id="check9-bar" type="checkbox" name="check" defaultValue="check" />
													<label htmlFor="check9-bar">Reservations</label>
												</div>
												<div className="checkbox">
													<input id="check10-bar" type="checkbox" name="check" defaultValue="check" />
													<label htmlFor="check10-bar">Restaurant</label>
												</div>
												<div className="checkbox">
													<input id="check11-bar" type="checkbox" name="check" defaultValue="check" />
													<label htmlFor="check11-bar">Smoking Allowed</label>
												</div>
											</div>
										</div>
										<div className="widget-filter-content">
											<div className="z-index3 relative">
												<span className="text-main">This Week only</span>
												<h4 className="title text-white">Enjoy 50% Off</h4>
												<p className="text-main">&amp; Free cancelation</p>
												<Link href="#" className="booking-now">Booking Now <i className="icon-Vector2" /></Link>
											</div>
										</div>
									</form >
								</div >
								<div className="col-lg-8 listing-list-car-wrap">
									<form action="/" className="tf-my-listing mb-37">
										<div className="row align-center">
											<div className="col-sm-5">
												<p className="showing">Showing <span className="text-main">12</span> of 21 Results
												</p>
											</div>
											<div className="col-sm-7 group-bar-wrap flex-six">
												<div className="listing-all-wrap">
													<div className="flex-three">
														<div className="group-select-recently">
															<select className="nice-select" tabIndex={0}>
																<option>Price</option>
																<option>New</option>
																<option>Recently Added </option>

															</select>
														</div>
														<div className="toolbar-list">
															<div className="form-group" onClick={() => handleTab(1)}>
																<a className={`btn-display-listing-grid ${isTab === 1 ? "active" : ""}`}>
																	<i className="icon-list" />
																</a>
															</div>
															<div className="form-group" onClick={() => handleTab(2)}>
																<a className={`btn-display-listing-list ${isTab === 2 ? "active" : ""}`}>
																	<i className="icon-Group-1000001297" />
																</a>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</form>
									<div className={`listing-list-car-grid mb-60 ${isTab === 1 ? "listing-list-car-list" : ""}`}>
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
												<span className="map"><i className="icon-Vector4" />United States USA</span>
												<h3 className="title-tour-list"><Link href="/tour-single">Days and 6 nights
													From Moscow</Link>
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
												<span className="map"><i className="icon-Vector4" />United States USA</span>
												<h3 className="title-tour-list"><Link href="/tour-single">Days and 6 nights
													From Moscow</Link>
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
												<span className="map"><i className="icon-Vector4" />United States USA</span>
												<h3 className="title-tour-list"><Link href="/tour-single">Days and 6 nights
													From Moscow</Link>
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
												<span className="map"><i className="icon-Vector4" />United States USA</span>
												<h3 className="title-tour-list"><Link href="/tour-single">Days and 6 nights
													From Moscow</Link>
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
										<div className="tour-listing box-sd">
											<Link href="/tour-single" className="tour-listing-image">
												<div className="badge-top flex-two">
													<span className="feature">Featured</span>
													<div className="badge-media flex-five">
														<span className="media"><i className="icon-Group-1000002909" />5</span>
														<span className="media"><i className="icon-Group-1000002910" />2</span>
													</div>
												</div>
												<img src="/assets/images/travel-list/5.jpg" alt="Image Listing" />
											</Link>
											<div className="tour-listing-content">
												<span className="map"><i className="icon-Vector4" />United States USA</span>
												<h3 className="title-tour-list"><Link href="/tour-single">Days and 6 nights
													From Moscow</Link>
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
										<div className="tour-listing box-sd">
											<Link href="/tour-single" className="tour-listing-image">
												<div className="badge-top flex-two">
													<span className="feature">Featured</span>
													<div className="badge-media flex-five">
														<span className="media"><i className="icon-Group-1000002909" />5</span>
														<span className="media"><i className="icon-Group-1000002910" />2</span>
													</div>
												</div>
												<img src="/assets/images/travel-list/6.jpg" alt="Image Listing" />
											</Link>
											<div className="tour-listing-content">
												<span className="map"><i className="icon-Vector4" />United States USA</span>
												<h3 className="title-tour-list"><Link href="/tour-single">Days and 6 nights
													From Moscow</Link>
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
									<div className="row">
										<div className="col-md-12 ">
											<ul className="tf-pagination flex-three">
												<li>
													<Link className="pages-link" href="#"> <i className="icon-29" /></Link>
												</li>
												<li>
													<Link className="pages-link" href="#">1</Link>
												</li>
												<li className="pages-item active" aria-current="page">
													<Link className="pages-link" href="#">2</Link>
												</li>
												<li><Link className="pages-link" href="#">3</Link></li>
												<li>
													<Link className="pages-link" href="#"><i className=" icon--1" /></Link>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div >
						</div >
					</section >
					{/* Widget archieve tour */}
					< section className="mb--93" >
						<div className="tf-container">
							<div className="callt-to-action flex-two">
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
					</section >
				</div >

			</Layout >
		</>
	)
}