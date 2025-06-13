
import Link from "next/link"

export default function Slider3() {
	return (
		<>

			<section className="overflow-hidden">
				<div className="slider-home3 flex">
					<div className="slider-home3-content">
						<span className="sub-title font-yes text-second fs-28-46 wow fadeInUp animated">Explore the
							world</span>
						<h1 className="title-slide  mb-40 wow fadeInUp animated">Tour
							<span className="booking-title">
								<span className="booking">Travel<span className="dot" /></span>
							</span>
							&amp; adventure camping
						</h1>
						<p className="des mb-45 wow fadeInUp animated">Welcome to our Print 128 website! We are
							a
							professional and reliable printing
							company that offers a wide range of printing services to
						</p>
						<div className="btn-group">
							<Link href="#" className="btn-main wow fadeInUp animated">
								<p className="btn-main-text">Let,s get started</p>
								<p className="iconer">
									<i className="icon-arrow-right" />
								</p>
							</Link>
							<Link href="#" className="btn-w-wa text-black wow fadeInUp animated">Who we are <i className="icon-Group-13" /></Link>
						</div>
					</div>
					<div className="slider-home3-image">
						<img src="/assets/images/slide/slide3.jpg" alt="" />
					</div>
				</div>
			</section>
		</>
	)
}
