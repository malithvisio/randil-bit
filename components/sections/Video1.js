'use client'
import { useState } from 'react'
import ModalVideo from 'react-modal-video'
import "@/node_modules/react-modal-video/css/modal-video.css"
import Link from "next/link"

export default function Video1() {
	const [isOpen, setOpen] = useState(false)
	return (
		<>

			<section className="widget-video relative">
				<div className="tf-container">
					<div className="row z-index3 relative">
						<div className="col-lg-12">
							<div className="video-wrap">
								<a onClick={() => setOpen(true)} className="widget-videos" style={{ cursor: "pointer" }}>
									<h2 className="title-video center text-white font-yes">PLay the <span className="text-main">video</span></h2>
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>
			<ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="JXMWOmuR1hU" onClose={() => setOpen(false)} />
		</>
	)
}
