'use client'
import { useState } from 'react'
import ModalVideo from 'react-modal-video'
import "@/node_modules/react-modal-video/css/modal-video.css"
import Link from "next/link"

export default function BannerContact() {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
            <section
                className="widget-banner-contact relative"
                style={{
                    backgroundImage: "url('/assets/images/page/banner-background.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <div className="tf-container">
                    <div className="row z-index3 relative">
                        <div className="col-lg-7 content-banner-contact">
                            <div className="mb-32">
                                <span className="sub-title-heading text-main mb-15 font-yes fs-28-46 wow fadeInUp animated">
                                    Discover Sri Lanka
                                </span>
                                <h2 className="title-heading text-white wow fadeInUp animated">
                                    Embark on an Unforgettable Journey with Randil Lanka Tours
                                </h2>
                            </div>
                            <div className="flex-three">
                                <address className="wow fadeInUp animated">
                                    Contact us at <Link href="mailto:info@randillankatours.com">info@randillankatours.com</Link><br />
                                    Or call us at <Link href="tel:+94773087631">+94 77 308 7631</Link>
                                </address>
                            </div>
                            <img src="/assets/images/page/vector2.png" alt="image" className="mask-icon-banner" />
                        </div>
                        <div className="col-lg-5">
                            <div className="image-banner-contact">
                                <img src="/assets/images/page/sri-lanka-banner.jpg" alt="Randil Lanka Tours" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}