
import Link from "next/link"

export default function Cta3() {
	return (
		<>

			<section className="mt--60 z-index3 relative">
				<div className="tf-container">
					<div className="callt-to-action flex-two overflow-hidden relative">
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
						<img src="/assets/images/page/mask-cta.png" alt="image" className="mask-cta" />
					</div>
				</div>
			</section>
		</>
	)
}
