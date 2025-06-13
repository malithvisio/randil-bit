import Link from "next/link"
import Menu from "../Menu"
import MobileMenu from "../MobileMenu"

export default function Header4({ scroll, isMobileMenu, handleMobileMenu, handleOffcanvas, isSearch, handleSearch }) {
	return (
		<>

			<header className="main-header header-style3 flex">
				{/* Header Lower */}
				<div id="header">
					<div className="tf-container">
						<div className="header-top">
							<div className="header-top-wrap flex-two">
								<div className="header-top-right">
									<ul className=" flex-three">
										<li className="flex-three">
											<i className="icon-Group-32" />
											<span>Hot Line: 684 555-0102 490</span>
										</li>
										<li className="flex-three">
											<i className="icon-mail" />
											<span>Mail Us: Info@Webmail.Com</span>
										</li>
									</ul>
								</div>
								<div className="header-top-left flex-two">
									<ul className="menu-right-top flex-three ">
										<li><Link href="#">About</Link></li>
										<li><Link href="#">Faqs </Link></li>
										<li><Link href="#">Contact</Link></li>
									</ul>
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
														<img src="assets/images/logo2.png" alt="Logo" />
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
												<div className="address-wrap-right flex-three ">
													<div className="icon flex-five">
														<i className="icon-Group-32" />
													</div>
													<div className="content">
														<span>Phone</span>
														<p>+88 1900 6789 56</p>
													</div>
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
					</div>
				</div>
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
			</header>

		</>
	)
}
