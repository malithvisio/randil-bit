import Gallery2 from "@/components/elements/Gallery"
import Link from "next/link"

export default function Footer1() {
	return (
		<>

			<footer className="footer footer-style1">
				<div className="tf-container">
					<div className="footer-main">
						<div className="footer-logo">
							<div className="logo-footer">
								<img src="/assets/images/logo2.png" alt="" />
							</div>
							<p className="des-footer">The world’s first and largest digital market
								for crypto collectibles and non-fungible
							</p>
							<ul className="footer-info">
								<li className="flex-three">
									<i className="icon-noun-mail-5780740-1" />
									<p>Info@webmail.com</p>
								</li>
								<li className="flex-three">
									<i className="icon-Group-9" />
									<p>684 555-0102 490</p>
								</li>
								<li className="flex-three">
									<i className="icon-Layer-19" />
									<p>6391 Elgin St. Celina, NYC 10299</p>
								</li>
							</ul>
						</div>
						<div className="footer-service">
							<h5 className="title">Services Req</h5>
							<ul className="footer-menu">
								<li>
									<Link href="/about-us">About Us</Link>
								</li>
								<li>
									<Link href="/gallery">Gallery</Link>
								</li>
								<li>
									<Link href="/team">Our Team</Link>
								</li>
								<li>
									<Link href="/blog">Blog Insights</Link>
								</li>
								<li>
									<Link href="/contact/">Contact</Link>
								</li>
							</ul>
						</div>
						<div className="footer-gallery">
							<h5 className="title">Gallery</h5>
							<Gallery2 />
						</div>
						<div className="footer-newsletter">
							<h5 className="title">Newsletter</h5>
							<form action="/" id="footer-form">
								<div className="input-wrap flex-three">
									<input type="email" placeholder="Enter Email Adress" />
									<button type="submit"><i className="icon-paper-plane" /></button>
								</div>
								<div className="check-form flex-three">
									<i className="icon-Vector-121" />
									<p>I agree to all your terms and policies</p>
								</div>
							</form>
							<ul className="social-ft flex-three">
								<li>
									<Link href="#">
										<i className="icon-icon-2" />
									</Link>
								</li>
								<li>
									<Link href="#">
										<i className="icon-x" />
									</Link>
								</li>
								<li>
									<Link href="#">
										<i className="icon-8" />
									</Link>
								</li>
								<li>
									<Link href="#">
										<i className="icon-2" />
									</Link>
								</li>
							</ul>
						</div>
					</div>
					<div className="row footer-bottom">
						<div className="col-md-6">
							<p className="copy-right">Copyright © 2024 by <Link href="#" className="text-main">Themesflat.</Link> All
								Rights Reserved</p>
						</div>
						<div className="col-md-6">
							<ul className="social flex-six">
								<li>
									<Link href="#">
										<i className="icon-icon-2" />
									</Link>
								</li>
								<li>
									<Link href="#">
										<i className="icon-x" />
									</Link>
								</li>
								<li>
									<Link href="#">
										<i className="icon-icon_03" />
									</Link>
								</li>
								<li>
									<Link href="#">
										<i className="icon-2" />
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</footer>

		</>
	)
}
