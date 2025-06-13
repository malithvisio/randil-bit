import Link from "next/link"

export default function OffcanvasModal({ isOffcanvas, handleOffcanvas }) {
	return (
		<>
			<div className={`offcanvas offcanvas-end ${isOffcanvas ? 'show' : ''}`} tabIndex={-1} id="offcanvasRight" style={{ visibility: 'visible' }}>
				<div className="offcanvas-header" onClick={handleOffcanvas}>
					<button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
				</div>
				<div className="offcanvas-body">
					<div className="logo-canvas">
						<img src="/assets/images/logo.png" alt="image" />
					</div>
					<p className="des">The world’s first and largest digital market
						for crypto collectibles and non-fungible
					</p>
					<ul className="canvas-info">
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
					<ul className="social flex-three">
						<li>
							<Link href="#">
								<i className="icon-icon-2" />
							</Link>
						</li>
						<li>
							<Link href="#">
								<i className="icon-icon-1" />
							</Link>
						</li>
						<li>
							<Link href="#">
								<i className="icon-8" />
							</Link>
						</li>
						<li>
							<Link href="#">
								<i className="icon-6" />
							</Link>
						</li>
					</ul>
				</div>
			</div>

		</>
	)
}
