'use client'
import { useState } from 'react'
import ModalVideo from 'react-modal-video'
import "@/node_modules/react-modal-video/css/modal-video.css"
import Link from "next/link"

export default function Video2() {
	const [isOpen, setOpen] = useState(false)
	return (
		<>

			<section className="widget-video-style2">
				<div className="tf-container">
					<div className="row ">
						<div className="col-lg-12">
							<div className="video-h4-widget relative overflow-hidden mb--14em video-wrap">
								<a onClick={() => setOpen(true)} className="video-box widget-videos flex-five z-index3 relative">
									<i className="icon-Polygon-4" />
								</a>
								<p className="font-yes text-white center text-video z-index3 relative">Watch Video</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			<ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="JXMWOmuR1hU" onClose={() => setOpen(false)} />
		</>
	)
}
