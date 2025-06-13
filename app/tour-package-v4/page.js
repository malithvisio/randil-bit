'use client'
import RangeSlider from "@/components/elements/RangeSlider"
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from "react"
import { tourPackages } from "@/components/data/packages"
export default function TourPackageV4() {

	const [isToggled, setToggled] = useState(false)
	const handleToggle = () => setToggled(!isToggled)
	return (
		<>

			<Layout headerStyle={2} footerStyle={2} breadcrumbTitle="Best Tour Packages" imgbg={"/assets/images/page/tour-package.jpg"}>
				<div>
				
					{/* Widget Select Form */}
					{/* Widget archieve tour */}
					<section className="archieve-tour">
						<div className="tf-container">
						
						<div className="row">
						<div className="col-lg-12">
							{/* <ul className="nav justify-content-center tab-list mb-37" id="myTab" role="tablist">
								<li className="nav-item" role="presentation">
									<button className="nav-link active" id="new-york-tab" data-bs-toggle="tab" data-bs-target="#new-york-tab-pane" type="button" role="tab" aria-controls="new-york-tab-pane" aria-selected="true">New York</button>
								</li>
								<li className="nav-item" role="presentation">
									<button className="nav-link" id="london-tab" data-bs-toggle="tab" data-bs-target="#london-tab-pane" type="button" role="tab" aria-controls="london-tab-pane" aria-selected="false">London</button>
								</li>
								<li className="nav-item" role="presentation">
									<button className="nav-link" id="tokyo-tab" data-bs-toggle="tab" data-bs-target="#tokyo-tab-pane" type="button" role="tab" aria-controls="tokyo-tab-pane" aria-selected="false">Tokyo</button>
								</li>
								<li className="nav-item" role="presentation">
									<button className="nav-link" id="los-angelas-tab" data-bs-toggle="tab" data-bs-target="#los-angelas-tab-pane" type="button" role="tab" aria-controls="los-angelas-tab-pane" aria-selected="false">Los
										Angelas</button>
								</li>
								<li className="nav-item" role="presentation">
									<button className="nav-link" id="manila-tab" data-bs-toggle="tab" data-bs-target="#manila-tab-pane" type="button" role="tab" aria-controls="manila-tab-pane" aria-selected="false">Manila</button>
								</li>
							</ul> */}
							<div className="tab-content" id="myTabContent">
								<div className="tab-pane fade show active" id="new-york-tab-pane" role="tabpanel" aria-labelledby="new-york-tab" tabIndex={0}>
								<div className="row">
      {tourPackages.map((tour, index) => (
        <div
          key={tour.id}
          className={`col-md-6 col-lg-3 wow fadeInUp animated`}
          data-wow-delay={`${0.1 * (index + 1)}s`}
        >
          <div className="tour-listing box-sd">
            <Link href={`/tour-single/${tour.id}`} className="tour-listing-image">
              <div className="badge-top flex-two">
                <span className="feature">Featured</span>
                <div className="badge-media flex-five">
                  <span className="media"><i className="icon-Group-1000002909" />{tour.rating}</span>
                  <span className="media"><i className="icon-Group-1000002910" />{tour.reviews}</span>
                </div>
              </div>
              <img src={tour.image} alt={tour.title} />
            </Link>
            <div className="tour-listing-content">
              <span className="tag-listing">Bestseller</span>
              <span className="map"><i className="icon-Vector4" />{tour.location}</span>
              <h3 className="title-tour-list">
                <Link href={`/tour-single/${tour.id}`}>{tour.title}</Link>
              </h3>
              <div className="review">
                {Array.from({ length: tour.rating }, (_, i) => (
                  <i key={i} className="icon-Star" />
                ))}
                <span>({tour.reviews} Reviews)</span>
              </div>
              <div className="icon-box flex-three">
                <div className="icons flex-three">
                  <i className="icon-time-left" />
                  <span>{tour.duration}</span>
                </div>
              
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
									<div className="row">
										<div className="col-lg-12 center mt-44">
											<Link href="/archieve-tour" className="btn-main">
												<p className="btn-main-text">View all tour</p>
												<p className="iconer">
													<i className="icon-13" />
												</p>
											</Link>
										</div>
									</div>
								</div>
							
							</div>
						</div>
					</div>
						
						</div >
					</section >
					{/* Widget archieve tour */}
					
				</div >

			</Layout >
		</>
	)
}