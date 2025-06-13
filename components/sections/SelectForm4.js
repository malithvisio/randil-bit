'use client'
import Link from "next/link"
import { useState } from "react"
import RangeSlider from "../elements/RangeSlider"

export default function SelectForm4() {
	const [isToggled, setToggled] = useState(false)
	const handleToggle = () => setToggled(!isToggled)
	return (
		<>

			<div className="mt--50 z-index4 relative wow fadeInUp animated relative">
				<div className="tf-container">
					<div className="row">
						<div className="col-lg-12">
							<div className="search-form-widget-slider bg-white relative">
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
		</>
	)
}
