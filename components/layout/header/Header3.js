import Link from "next/link"
import Menu from "../Menu"
import MobileMenu from "../MobileMenu"

export default function Header3({ scroll, isMobileMenu, handleMobileMenu, handleOffcanvas, isSearch, handleSearch }) {
	return (
		<>

			<header className="main-header header-style2 flex">
				{/* Header Lower */}
				<div id="header">
					<div className="header-top relative overflow-hidden">
						<div className="header-top-wrap flex-two">
							<div className="header-top-left">
								<div className="follow-social flex-two">
									<ul className="flex-two">
										<li><Link href="#"><i className="icon-icon-2" /></Link></li>
										<li><Link href="#"><i className="icon-icon_03" /></Link></li>
										<li><Link href="#"><i className="icon-x" /></Link></li>
										<li><Link href="#"><i className="icon-icon" /></Link></li>
									</ul>
								</div>
							</div>
							<div className="header-top-right">
								<ul className=" flex-three">
									<li className="flex-three">
										<i className="icon-day" />
										<span>Thursday, Mar 26, 2021</span>
									</li>
									<li className="flex-three">
										<i className="icon-mail" />
										<span>support@example.com</span>
									</li>
									<li className="flex-three">
										<i className="icon-phone" />
										<span>684 555-0102 490</span>
									</li>
								</ul>
							</div>
							<div className="header-top-left flex-two">
								<div className="follow-social flex-two">
									<ul className="flex-two">
										<li><Link href="#"><i className="icon-icon-2" /></Link></li>
										<li><Link href="#"><i className="icon-icon_03" /></Link></li>
										<li><Link href="#"><i className="icon-x" /></Link></li>
										<li><Link href="#"><i className="icon-icon" /></Link></li>
									</ul>
								</div>
							</div>
						</div>
						<img src="/assets/images/page/mask-header-3.png" alt="image" className="mask-header3" />
					</div>
					<div className={`header-lower ${scroll ? 'is-fixed is-small' : ''}`}>
						<div className="tf-container full">
							<div className="row">
								<div className="col-lg-12">
									<div className="inner-container flex justify-space align-center">
										{/* Logo Box */}
										<div className="logo-box">
											<div className="logo">
												<Link href="/">
													<img src="assets/images/logo.png" alt="Logo" />
												</Link>
											</div>
										</div>
										<div className="nav-outer flex align-center">
											{/* Main Menu */}
											<nav className="main-menu show navbar-expand-md">
												<div className="navbar-collapse collapse clearfix" id="navbarSupportedContent">
													<Menu />
												</div>
											</nav>
											{/* Main Menu End*/}
										</div>
										<div className="header-account flex align-center">
											<div className="language">
												<select className="nice-select" tabIndex={0}>

													<option data-value className="option selected">English
													</option>
													<option data-value="Vietnam" className="option">Vietnam
													</option>
													<option data-value="German" className="option">German
													</option>
													<option data-value="Russian" className="option">Russian
													</option>
													<option data-value="Canada" className="option">Canada
													</option>

												</select>
											</div>
											<div className="currency">
												<select className="nice-select" tabIndex={0}>

													<option data-value className="option selected">USD</option>
													<option data-value="vnd" className="option">VND</option>
													<option data-value="ero" className="option">ERO</option>

												</select>
											</div>
											<div className="search-mobie relative">
												<div className="dropdown">
													<a type="button" className={`show-search ${isSearch ? 'show' : ''}`} onClick={handleSearch}>
														<i className="icon-Vector5" />
													</a>
													<ul className={`dropdown-menu top-search ${isSearch ? 'show' : ''}`}>
														<form action="/" id="search-bar-widget">
															<input type="text" placeholder="Search here..." />
															<button type="button"><i className="icon-search-2" /></button>
														</form>
													</ul>
												</div>
											</div>
											<div className="register">
												<ul className="flex align-center">
													<li>
														<Link href="/login" className="flex-three">
															<img src="/assets/images/page/avata.jpg" alt="image" />
														</Link>
													</li>
												</ul>
											</div>
										</div>
										<div className="mobile-nav-toggler mobile-button" onClick={handleMobileMenu}>
											<i className="icon-bar" />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div >
				{/* End Header Lower */}
				{/* Mobile Menu  */}
				<div className="close-btn" onClick={handleMobileMenu}><span className="icon flaticon-cancel-1" /></div>
				<div className="mobile-menu">
					<div className="menu-backdrop" onClick={handleMobileMenu} />
					<nav className="menu-box">
						<div className="nav-logo"><Link href="/">
							<img src="assets/images/logo2.png" alt="" /></Link></div>
						<div className="bottom-canvas">
							<div className="menu-outer">
								<MobileMenu />
							</div>
						</div>
					</nav>
				</div>
				{/* End Mobile Menu */}
			</header >

		</>
	)
}
