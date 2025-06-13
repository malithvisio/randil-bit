
import Link from "next/link"

export default function Blog1() {
	return (
		<>

			<section className="pd-main">
				<div className="tf-container">
					<div className="row">
						<div className="col-lg-12">
							<div className="center mb-40">
								<span className="sub-title-heading text-main fs-28-46 font-yes wow fadeInUp animated">Explore
									the world</span>
								<h2 className="title-heading wow fadeInUp animated">Updated News &amp; Blogs</h2>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-md-4 wow fadeInUp animated " data-wow-delay="0.1s">
							<div className="tf-widget-blog blog-style1 mb-30">
								<Link href="/blog-details" className="blog-image">
									<img src="/assets/images/blog/bl4.jpg" alt="" />
									<div className="admin flex-three">
										<img src="/assets/images/avata/2.jpg" alt="" />
										<span>By: <span className="text-main">Rasalina</span></span>
									</div>
								</Link>
								<div className="blog-content center">
									<ul className="meta-list flex-five">
										<li>
											<i className="icon-4" />
											<Link href="/blog-details"><span>02 Apr 2021</span></Link>
										</li>
										<li>
											<i className="icon-7" />
											<Link href="/blog-details"><span>Coments (03)</span></Link>
										</li>
									</ul>
									<h3 className="entry-title"><Link href="/blog-details">Facebook design is dedicated
										our
										customers</Link>
									</h3>
									<Link href="/blog-details" className="icon-link flex-five"><i className="icon-Vector-3" /></Link>
								</div>
							</div>
						</div>
						<div className="col-md-4 wow fadeInUp animated " data-wow-delay="0.2s">
							<div className="tf-widget-blog blog-style1 mb-30">
								<Link href="/blog-details" className="blog-image">
									<img src="/assets/images/blog/bl5.jpg" alt="" />
									<div className="admin flex-three">
										<img src="/assets/images/avata/2.jpg" alt="" />
										<span>By: <span className="text-main">Rasalina</span></span>
									</div>
								</Link>
								<div className="blog-content center">
									<ul className="meta-list flex-five">
										<li>
											<i className="icon-4" />
											<Link href="/blog-details"><span>02 Apr 2021</span></Link>
										</li>
										<li>
											<i className="icon-7" />
											<Link href="/blog-details"><span>Coments (03)</span></Link>
										</li>
									</ul>
									<h3 className="entry-title"><Link href="/blog-details">Facebook design is dedicated
										our
										customers</Link>
									</h3>
									<Link href="/blog-details" className="icon-link flex-five"><i className="icon-Vector-3" /></Link>
								</div>
							</div>
						</div>
						<div className="col-md-4 wow fadeInUp animated " data-wow-delay="0.3s">
							<div className="tf-widget-blog blog-style1 mb-30">
								<Link href="/blog-details" className="blog-image">
									<img src="/assets/images/blog/bl6.jpg" alt="" />
									<div className="admin flex-three">
										<img src="/assets/images/avata/2.jpg" alt="" />
										<span>By: <span className="text-main">Rasalina</span></span>
									</div>
								</Link>
								<div className="blog-content center">
									<ul className="meta-list flex-five">
										<li>
											<i className="icon-4" />
											<Link href="/blog-details"><span>02 Apr 2021</span></Link>
										</li>
										<li>
											<i className="icon-7" />
											<Link href="/blog-details"><span>Coments (03)</span></Link>
										</li>
									</ul>
									<h3 className="entry-title"><Link href="/blog-details">Facebook design is dedicated
										our
										customers</Link>
									</h3>
									<Link href="/blog-details" className="icon-link flex-five"><i className="icon-Vector-3" /></Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
