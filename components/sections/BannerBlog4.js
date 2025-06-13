
import Link from "next/link"

export default function BannerBlog4() {
	return (
		<>

			<section className="pd-main">
				<div className="tf-container">
					<div className="row">
						<div className="col-lg-12">
							<div className="center m0-auto w-text-heading">
								<span className="sub-title-heading text-main mb-15 wow fadeInUp animated">Explore the
									world</span>
								<h2 className="title-heading mb-40 wow fadeInUp animated">Latest news &amp; articles <span className="text-gray font-yes">from</span> the blog</h2>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-md-4 wow fadeInUp animated " data-wow-delay="0.1s">
							<div className="tf-widget-blog blog-style">
								<Link href="/blog-details" className="blog-image">
									<img src="/assets/images/blog/bl1.jpg" alt="" />
									<div className="category-blog">
										<i className="icon-Group-8" />
										<span>Traveling</span>
									</div>
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
									<h3 className="entry-title"><Link href="/blog-details">The 8 best things about
										Touristy</Link></h3>
									<p className="des">Business is the activity of making on cing or buying and selling
										pro
									</p>
									<Link href="/blog-details" className="btn-read-more">Read More <i className="icon-Vector-4" /></Link>
								</div>
							</div>
						</div>
						<div className="col-md-4 wow fadeInUp animated " data-wow-delay="0.2s">
							<div className="tf-widget-blog blog-style">
								<Link href="/blog-details" className="blog-image">
									<img src="/assets/images/blog/bl2.jpg" alt="" />
									<div className="category-blog">
										<i className="icon-Group-8" />
										<span>Business</span>
									</div>
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
									<h3 className="entry-title"><Link href="/blog-details">The 8 best things about
										Touristy</Link></h3>
									<p className="des">Business is the activity of making on cing or buying and selling
										pro
									</p>
									<Link href="/blog-details" className="btn-read-more">Read More <i className="icon-Vector-4" /></Link>
								</div>
							</div>
						</div>
						<div className="col-md-4 wow fadeInUp animated " data-wow-delay="0.3s">
							<div className="tf-widget-blog blog-style">
								<Link href="/blog-details" className="blog-image">
									<img src="/assets/images/blog/bl3.jpg" alt="" />
									<div className="category-blog">
										<i className="icon-Group-8" />
										<span>Cavesse</span>
									</div>
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
									<h3 className="entry-title"><Link href="/blog-details">The 8 best things about
										Touristy</Link></h3>
									<p className="des">Business is the activity of making on cing or buying and selling
										pro
									</p>
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
