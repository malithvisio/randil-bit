
import Link from "next/link"

export default function Blog2() {
	return (
		<>

			<section className="section-blog pd-main relative">
				<div className="bg-blog-h4 bg-1" />
				<div className="tf-container">
					<div className="row">
						<div className="col-lg-12 mb-40">
							<div className="center m0-auto w-text-heading">
								<span className="sub-title-heading text-main font-yes fs-28-46  wow fadeInUp animated">Explore
									the world</span>
								<h2 className="title-heading  wow fadeInUp animated">Latest news &amp; articles from the
									blog</h2>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-6">
							<div className="tf-widget-blog blog-style2">
								<Link href="/blog-details" className="blog-image">
									<img src="/assets/images/blog/bl-h4.jpg" alt="" />
									<div className="category-blog">
										<i className="icon-Group-8" />
										<span>Business</span>
									</div>
								</Link>
								<div className="blog-content">
									<ul className="meta-list flex-three">
										<li>
											<i className="icon-profile-user-1" />
											<span>Mehedii .H</span>
										</li>
										<li>
											<i className="icon-7" />
											<span>Coments (03)</span>
										</li>
									</ul>
									<h3 className="entry-title"><Link href="#">How to Prepare for your First Track his
										consumer-focused </Link></h3>
									<Link href="/blog-details" className="btn-read-more">Read More <i className="icon-Vector-4" /></Link>
								</div>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="tf-widget-blog flex-three blog-style3 wow fadeInUp animated">
								<Link href="/blog-details" className="blog-image">
									<img src="/assets/images/blog/bl-h4-1.jpg" alt="" />
								</Link>
								<div className="blog-content">
									<ul className="meta-list flex-three">
										<li>
											<i className="icon-profile-user-1" />
											<span>Mehedii .H</span>
										</li>
										<li>
											<i className="icon-7" />
											<span>Coments (03)</span>
										</li>
									</ul>
									<h3 className="entry-title"><Link href="/blog-details">Get Best Advertiser In Your
										Side Pocket</Link>
									</h3>
									<Link href="/blog-details" className="btn-read-more">Read More <i className="icon-Vector-4" /></Link>
								</div>
							</div>
							<div className="tf-widget-blog flex-three blog-style3 wow fadeInUp animated">
								<Link href="/blog-details" className="blog-image">
									<img src="/assets/images/blog/bl-h4-2.jpg" alt="" />
								</Link>
								<div className="blog-content">
									<ul className="meta-list flex-three">
										<li>
											<i className="icon-profile-user-1" />
											<span>Mehedii .H</span>
										</li>
										<li>
											<i className="icon-7" />
											<span>Coments (03)</span>
										</li>
									</ul>
									<h3 className="entry-title"><Link href="/blog-details">Get Best Advertiser In Your
										Side Pocket</Link>
									</h3>
									<Link href="/blog-details" className="btn-read-more">Read More <i className="icon-Vector-4" /></Link>
								</div>
							</div>
							<div className="tf-widget-blog flex-three blog-style3 wow fadeInUp animated">
								<Link href="/blog-details" className="blog-image">
									<img src="/assets/images/blog/bl-h4-3.jpg" alt="" />
								</Link>
								<div className="blog-content">
									<ul className="meta-list flex-three">
										<li>
											<i className="icon-profile-user-1" />
											<span>Mehedii .H</span>
										</li>
										<li>
											<i className="icon-7" />
											<span>Coments (03)</span>
										</li>
									</ul>
									<h3 className="entry-title"><Link href="/blog-details">Get Best Advertiser In Your
										Side Pocket</Link>
									</h3>
									<Link href="/blog-details" className="btn-read-more">Read More <i className="icon-Vector-4" /></Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
