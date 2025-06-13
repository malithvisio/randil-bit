
import Link from "next/link"

export default function Blog3() {
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
							<div className="tf-widget-blog blog-style4">
								<Link href="/blog-details" className="blog-image">
									<img src="/assets/images/blog/bl-h5.jpg" alt="" />
								</Link>
								<div className="blog-content">
									<ul className="meta-list flex-three">
										<li>
											<i className="icon-4" />
											<Link href="/blog-details"> <span>02 Apr 2021</span></Link>
										</li>
										<li>
											<i className="icon-7" />
											<Link href="/blog-details"><span>Coments (03)</span></Link>
										</li>
									</ul>
									<h3 className="entry-title"><Link href="/blog-details">Providing solutions for
										Industrial men, and
										restoration.</Link></h3>
									<Link href="/blog-details" className="button-link">Read More <i className="icon-Arrow-11" /></Link>
								</div>
							</div>
						</div>
						<div className="col-md-4 wow fadeInUp animated " data-wow-delay="0.2s">
							<div className="tf-widget-blog blog-style4">
								<Link href="/blog-details" className="blog-image">
									<img src="/assets/images/blog/bl-h5.2.jpg" alt="" />
								</Link>
								<div className="blog-content">
									<ul className="meta-list flex-three">
										<li>
											<i className="icon-4" />
											<Link href="/blog-details"><span>02 Apr 2021</span></Link>
										</li>
										<li>
											<i className="icon-7" />
											<Link href="/blog-details"><span>Coments (03)</span></Link>
										</li>
									</ul>
									<h3 className="entry-title"><Link href="/blog-details">Providing solutions for
										Industrial men, and
										restoration.</Link></h3>
									<Link href="/blog-details" className="button-link">Read More <i className="icon-Arrow-11" /></Link>
								</div>
							</div>
						</div>
						<div className="col-md-4 wow fadeInUp animated " data-wow-delay="0.3s">
							<div className="tf-widget-blog blog-style4">
								<Link href="/blog-details" className="blog-image">
									<img src="/assets/images/blog/bl-h5-3.jpg" alt="" />
								</Link>
								<div className="blog-content">
									<ul className="meta-list flex-three">
										<li>
											<i className="icon-4" />
											<Link href="/blog-details"><span>02 Apr 2021</span></Link>
										</li>
										<li>
											<i className="icon-7" />
											<Link href="/blog-details"><span>Coments (03)</span></Link>
										</li>
									</ul>
									<h3 className="entry-title"><Link href="/blog-details">Providing solutions for
										Industrial men, and
										restoration.</Link></h3>
									<Link href="/blog-details" className="button-link">Read More <i className="icon-Arrow-11" /></Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
