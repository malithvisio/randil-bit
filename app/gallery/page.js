
import Layout from "@/components/layout/Layout"
import BrandLogoSlider from "@/components/slider/BrandLogoSlider"
import Link from "next/link"
export default function Gallery() {

	return (
		<>

			<Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Gallery">
				<div>
					<section className="gallery-page pd-main">
						<div className="tf-container">
							<div className="row">
								<div className="col-lg-12">
									<div className="grid-gallery">
										<div className="item-1">
											<div className="tf-gallery">
												<img src="/assets/images/gallery/gallery7.jpg" alt="" />
												<Link href="/assets/images/gallery/gallery7.jpg" className="btn-gallery flex-five" data-fancybox="gallery">
													<i className="icon-Group-14" />
												</Link>
												<div className="gallery-content">
													<h4 className="gallery-title text-white mb-10">Discovery Island</h4>
													<p className="sub-title">Art , Direction</p>
												</div>
											</div>
										</div>
										<div className="item-2">
											<div className="tf-gallery">
												<img src="/assets/images/gallery/gallery9.jpg" alt="" />
												<Link href="/assets/images/gallery/gallery9.jpg" data-fancybox="gallery" className="btn-gallery flex-five">
													<i className="icon-Group-14" />
												</Link>
												<div className="gallery-content">
													<h4 className="gallery-title text-white mb-10">Discovery Island</h4>
													<p className="sub-title">Art , Direction</p>
												</div>
											</div>
										</div>
										<div className="item-3">
											<div className="tf-gallery">
												<img src="/assets/images/gallery/gallery11.jpg" alt="" />
												<Link href="/assets/images/gallery/gallery11.jpg" className="btn-gallery flex-five " data-fancybox="gallery">
													<i className="icon-Group-14" />
												</Link>
												<div className="gallery-content">
													<h4 className="gallery-title text-white mb-10">Discovery Island</h4>
													<p className="sub-title">Art , Direction</p>
												</div>
											</div>
										</div>
										<div className="item-4">
											<div className="tf-gallery">
												<img src="/assets/images/gallery/gallery8.jpg" alt="" />
												<Link href="/assets/images/gallery/gallery8.jpg" className="btn-gallery flex-five" data-fancybox="gallery">
													<i className="icon-Group-14" />
												</Link>
												<div className="gallery-content ">
													<h4 className="gallery-title text-white mb-10">Discovery Island</h4>
													<p className="sub-title">Art , Direction</p>
												</div>
											</div>
										</div>
										<div className="item-5">
											<div className="tf-gallery">
												<img src="/assets/images/gallery/gallery10.jpg" alt="" />
												<Link href="/assets/images/gallery/gallery10.jpg" className="btn-gallery flex-five" data-fancybox="gallery">
													<i className="icon-Group-14" />
												</Link>
												<div className="gallery-content">
													<h4 className="gallery-title text-white mb-10">Discovery Island</h4>
													<p className="sub-title">Art , Direction</p>
												</div>
											</div>
										</div>
										<div className="item-6">
											<div className="tf-gallery">
												<img src="/assets/images/gallery/gallery12.jpg" alt="" />
												<Link href="/assets/images/gallery/gallery12.jpg" className="btn-gallery flex-five" data-fancybox="gallery">
													<i className="icon-Group-14" />
												</Link>
												<div className="gallery-content">
													<h4 className="gallery-title text-white mb-10">Discovery Island</h4>
													<p className="sub-title">Art , Direction</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
					<section className="brand-logo-widget bg-4">
						<div className="tf-container">
							<div className="row">
								<div className="col-lg-12">
								<BrandLogoSlider />
								</div>
							</div>
						</div>
					</section>
					<section className="mb--93 bg-1">
						<div className="tf-container">
							<div className="callt-to-action flex-two z-index3 relative">
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
					</section>
				</div>

			</Layout>
		</>
	)
}