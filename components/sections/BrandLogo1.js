import BrandLogoSlider from "../slider/BrandLogoSlider"


export default function BrandLogo1() {
	return (
		<>

			<section className="relative">
				<div className="tf-container">
					<div className="row">
						<div className="col-lg-12 relative center line-brand-logo mt-20">
							<div className="line" />
							<p className="line-text">We’ve been mentioned in Below Brands</p>
						</div>
						<div className="col-lg-12 widget-brand-logo">
						<BrandLogoSlider />
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
