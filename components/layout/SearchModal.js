
export default function SearchModal() {
	return (
		<>
			<div className="modal search-mobie fade" id="exampleModal" tabIndex={-1} aria-hidden="true">
				<div className="modal-dialog">
					<div className="modal-content">
						<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
						<div className="modal-body">
							<form action="/" className="search-form-mobie">
								<div className="search">
									<i className="icon-circle2017" />
									<input type="search" placeholder="Search Travel" className="search-input" autoComplete="off" />
									<button type="button">Search</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>

		</>
	)
}
