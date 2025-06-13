
import LayoutAdmin from "@/components/layout/LayoutAdmin"
export default function AddTour() {

	return (
		<>

			<LayoutAdmin headerStyle={1} footerStyle={1}>
				<section className="profile-dashboard">
					<div className="inner-header mb-40">
						<h3 className="title">Add Tour</h3>
						<p className="des">There are many variations of passages of Lorem Ipsum</p>
					</div>
					<form action="/" id="form-add-tour" className="form-add-tour">
						<div className="widget-dash-board pr-256 mb-75">
							<h4 className="title-add-tour mb-30">1. information</h4>
							<div className="grid-input-2 mb-45">
								<div className="input-wrap">
									<label>Enter your tittle</label>
									<input type="text" placeholder="Switzerland city tour" />
								</div>
								<div className="input-wrap">
									<label>Enter your tittle</label>
									<select className="nice-select" tabIndex={0}>
										<option data-value className="option selected focus">Catagory</option>
										<option data-value="category 1" className="option">Catagory 1</option>
										<option data-value="category 2" className="option">Catagory 2</option>
										<option data-value="category 3" className="option">Catagory 3</option>
									</select>
								</div>
							</div>
							<div className="input-wrap mb-45">
								<label>Enter Keyword</label>
								<input type="text" placeholder="Keyword" />
							</div>
							<div className="input-wrap mb-45">
								<label>Description</label>
								<textarea name="description" rows={12} cols={50} placeholder="Write content" defaultValue={""} />
							</div>
							<div className="input-wrap">
								<label>Upload Photo</label>
								<div className="upload-image-add-car mb-30">
									<div className="upload-image">
										<label htmlFor="photoLoad" className="uploadLabel">
											<i className="icon-Group-10" />
											<span>Add a Photo</span>
											<input type="file" id="photoLoad" className="photoLoad" accept="image/*" />
										</label>
									</div>
									<div className="upload-image">
										<label htmlFor="photoLoad1" className="uploadLabel">
											<i className="icon-Group-10" />
											<span>Add a Photo</span>
											<input type="file" id="photoLoad1" className="photoLoad" accept="image/*" />
										</label>
									</div>
									<div className="upload-image">
										<label htmlFor="photoLoad2" className="uploadLabel">
											<i className="icon-Group-10" />
											<span>Add a Photo</span>
											<input type="file" id="photoLoad2" className="photoLoad" accept="image/*" />
										</label>
									</div>
									<div className="upload-image">
										<label htmlFor="photoLoad3" className="uploadLabel">
											<i className="icon-Group-10" />
											<span>Add a Photo</span>
											<input type="file" id="photoLoad3" className="photoLoad" accept="image/*" />
										</label>
									</div>
								</div>
								<p><span className="text-main">*</span>Supported <span className="text-main">Png</span> &amp;
									Jpg Not more than 2 Mb</p>
							</div>
						</div>
						<div className="widget-dash-board pr-256 mb-75">
							<h4 className="title-add-tour mb-30">2. Tour Planing</h4>
							<div className="input-wrap mb-45">
								<div className="flex-two mb-70">
									<input type="text" placeholder="Enter Tittle" />
									<div className="icon-delete-title flex-five">
										<i className="icon-delete-1" />
									</div>
								</div>
								<textarea className="textarea-tinymce" name="area" defaultValue={""} />
							</div>
							<div className="input-wrap text-end">
								<button type="button" className="button-add"> <i className="icon-uniE914" />Add</button>
							</div>
						</div>
						<div className="widget-dash-board pr-256 mb-75">
							<h4 className="title-add-tour mb-30">2. Location</h4>
							<div className="grid-input-2 mb-45">
								<div className="input-wrap">
									<label>Select City</label>
									<select className="nice-select" tabIndex={0}>
											<option data-value className="option selected focus">London</option>
											<option data-value="tokyo" className="option">Tokyo</option>
											<option data-value="hanoi" className="option">Ha noi</option>
											<option data-value="taiwan" className="option">Taiwan</option>
									</select>
								</div>
								<div className="input-wrap">
									<label>Select State</label>
									<select className="nice-select" tabIndex={0}>
											<option data-value className="option selected focus">state</option>
											<option data-value="category 1" className="option">state 1</option>
											<option data-value="category 2" className="option">state 2</option>
											<option data-value="category 3" className="option">state 3</option>
									</select>
								</div>
							</div>
							<div className="input-wrap mb-40">
								<label>Address Details</label>
								<div className="flex-two ">
									<input type="text" placeholder="2464 Royal Ln. Mesa, New Jersey 45463" />
									<div className="icon-delete-title flex-five">
										<i className="icon-Vector5" />
									</div>
								</div>
							</div>
							<div className="input-wrap mb-40">
								<div className="map3 relative">
									<div id="map3" />
								</div>
							</div>
							<div className="grid-input-2 mb-45">
								<div className="input-wrap">
									<label>Zip Code</label>
									<input type="text" placeholder={3462} />
								</div>
								<div className="input-wrap">
									<label>Country</label>
									<input type="text" placeholder="United Kingdom" />
								</div>
							</div>
							<div className="input-wrap ">
								<button type="button" className="button-add"> Save changes </button>
							</div>
						</div>
						<div className="widget-dash-board pr-256 mb-75">
							<h4 className="title-add-tour mb-30">2. What’s Include?</h4>
							<div className="row mb-60">
								<div className="col-lg-3">
									<div className="checkbox">
										<input id="check" type="checkbox" name="check" defaultValue="check" />
										<label htmlFor="check">Laundry Service</label>
									</div>
									<div className="checkbox">
										<input id="check1" type="checkbox" name="check" defaultValue="check" />
										<label htmlFor="check1">Food &amp; Drinks</label>
									</div>
									<div className="checkbox">
										<input id="check2" type="checkbox" name="check" defaultValue="check" />
										<label htmlFor="check2">Swimming Pool</label>
									</div>
									<div className="checkbox">
										<input id="check3" type="checkbox" name="check" defaultValue="check" />
										<label htmlFor="check3">Alarm System</label>
									</div>
									<div className="checkbox">
										<input id="check4" type="checkbox" name="check" defaultValue="check" />
										<label htmlFor="check4">Navigation</label>
									</div>
									<div className="checkbox">
										<input id="check5" type="checkbox" name="check" defaultValue="check" />
										<label htmlFor="check5">Window Coverings</label>
									</div>
								</div>
								<div className="col-lg-3">
									<div className="checkbox">
										<input id="conditioning" type="checkbox" name="check" defaultValue="check" />
										<label htmlFor="conditioning">Air Conditioning</label>
									</div>
									<div className="checkbox">
										<input id="microwave" type="checkbox" name="check" defaultValue="check" />
										<label htmlFor="microwave">Microwave</label>
									</div>
									<div className="checkbox">
										<input id="outdoor" type="checkbox" name="check" defaultValue="check" />
										<label htmlFor="outdoor">Outdoor Shower</label>
									</div>
									<div className="checkbox">
										<input id="alarm" type="checkbox" name="check" defaultValue="check" />
										<label htmlFor="alarm">Alarm System</label>
									</div>
									<div className="checkbox">
										<input id="navigation" type="checkbox" name="check" defaultValue="check" />
										<label htmlFor="navigation">Navigation</label>
									</div>
									<div className="checkbox">
										<input id="covering" type="checkbox" name="check" defaultValue="check" />
										<label htmlFor="covering">Window Covering</label>
									</div>
								</div>
								<div className="col-lg-3">
									<div className="checkbox">
										<input id="check13" type="checkbox" name="check" defaultValue="check" />
										<label htmlFor="check13">Laundry Service</label>
									</div>
									<div className="checkbox">
										<input id="check88" type="checkbox" name="check" defaultValue="check" />
										<label htmlFor="check88">Food &amp; Drinks</label>
									</div>
									<div className="checkbox">
										<input id="check99" type="checkbox" name="check" defaultValue="check" />
										<label htmlFor="check99">Swimming Pool</label>
									</div>
									<div className="checkbox">
										<input id="check43" type="checkbox" name="check" defaultValue="check" />
										<label htmlFor="check43">Alarm System</label>
									</div>
									<div className="checkbox">
										<input id="check53" type="checkbox" name="check" defaultValue="check" />
										<label htmlFor="check53">Navigation</label>
									</div>
									<div className="checkbox">
										<input id="check63" type="checkbox" name="check" defaultValue="check" />
										<label htmlFor="check63">Window Coverings</label>
									</div>
								</div>
								<div className="col-lg-3">
									<div className="checkbox">
										<input id="check41" type="checkbox" name="check" defaultValue="check" />
										<label htmlFor="check41">Laundry Service</label>
									</div>
									<div className="checkbox">
										<input id="check42" type="checkbox" name="check" defaultValue="check" />
										<label htmlFor="check42">Food &amp; Drinks</label>
									</div>
									<div className="checkbox">
										<input id="check77" type="checkbox" name="check" defaultValue="check" />
										<label htmlFor="check77">Swimming Pool</label>
									</div>
									<div className="checkbox">
										<input id="check66" type="checkbox" name="check" defaultValue="check" />
										<label htmlFor="check66">Alarm System</label>
									</div>
									<div className="checkbox">
										<input id="check44" type="checkbox" name="check" defaultValue="check" />
										<label htmlFor="check44">Navigation</label>
									</div>
									<div className="checkbox">
										<input id="check54" type="checkbox" name="check" defaultValue="check" />
										<label htmlFor="check54">Window Coverings</label>
									</div>
								</div>
							</div>
							<div className="input-wrap ">
								<button type="button" className="button-add"> Save changes </button>
							</div>
						</div>
						<div className="widget-dash-board pr-256 mb-75">
							<h4 className="title-add-tour mb-30">3. Pricing</h4>
							<div className="grid-input-2 mb-45">
								<div className="input-wrap">
									<label>Tour Price</label>
									<input type="text" placeholder="$3215" />
								</div>
								<div className="input-wrap">
									<label>Tour Price</label>
									<input type="text" placeholder="$3215" />
								</div>
							</div>
							<div className="input-wrap">
								<label>Extra Price</label>
								<div className="flex-two mb-32">
									<div className="grid-input-3">
										<input type="text" placeholder="Add Service Per Booking" />
										<input type="text" placeholder="Description" />
										<input type="text" placeholder="$27" />
									</div>
									<div className="icon-delete-price">
										<i className="icon-delete-1" />
									</div>
								</div>
								<div className="flex-two">
									<div className="grid-input-3">
										<input type="text" placeholder="Add Service Per Booking" />
										<input type="text" placeholder="Description" />
										<input type="text" placeholder="$27" />
									</div>
									<div className="icon-delete-price">
										<i className="icon-delete-1" />
									</div>
								</div>
							</div>
						</div>
						<div className="widget-dash-board pr-256">
							<h4 className="title-add-tour mb-30">3. Tour date &amp; Time</h4>
							<div className="grid-input-2 mb-25">
								<div className="input-wrap">
									<label>Tour duration</label>
									<select className="nice-select" tabIndex={0}>
											<option data-value className="option selected focus">2-4 days tour</option>
											<option data-value="3-6" className="option">3-6 days tour</option>
											<option data-value="4-8" className="option">4-8 days tour</option>
											<option data-value="5-10" className="option">5-10 days tour</option>
									</select>
								</div>
								<div className="input-wrap">
									<label>Start date</label>
									<input type="date" />
								</div>
							</div>
							<div className="grid-input-2 mb-45">
								<div className="input-wrap">
									<label>Return Date</label>
									<input type="date" />
								</div>
								<div className="input-wrap">
								</div>
							</div>
							<div className="input-wrap">
								<button type="button" className="button-add"> Save changes</button>
							</div>
						</div>
					</form>
				</section>

			</LayoutAdmin>
		</>
	)
}