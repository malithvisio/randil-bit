
'use client'
import { useEffect, useState } from "react"
import AddClassBody from "../elements/AddClassBody"
import BackToTop from '../elements/BackToTop'
import Breadcrumb from './Breadcrumb'
import Footer1 from './footer/Footer1'
import Footer2 from './footer/Footer2'
import Header1 from "./header/Header1"
import Header2 from './header/Header2'
import Header3 from "./header/Header3"
import Header4 from "./header/Header4"
import OffcanvasModal from "./OffcanvasModal"

export default function Layout({ headerStyle, footerStyle, breadcrumbTitle, imgbg,children }) {
	const [scroll, setScroll] = useState(0)
	// Mobile Menu
	const [isMobileMenu, setMobileMenu] = useState(false)
	const handleMobileMenu = () => {
		setMobileMenu(!isMobileMenu)
		!isMobileMenu ? document.body.classList.add("mobile-menu-visible") : document.body.classList.remove("mobile-menu-visible");
	}

	// Offcanvas
	const [isOffcanvas, setOffcanvas] = useState(false)
	const handleOffcanvas = () => setOffcanvas(!isOffcanvas)

	// Search
	const [isSearch, setSearch] = useState(false)
	const handleSearch = () => setSearch(!isSearch)

	useEffect(() => {
		const WOW = require('wowjs')
		window.wow = new WOW.WOW({
			live: false
		})
		window.wow.init()

		const onScroll = () => {
			setScroll(window.scrollY > 100)
		}

		window.addEventListener("scroll", onScroll)
		return () => window.removeEventListener("scroll", onScroll)
	}, [])
	return (
		<><div id="top" />
			<AddClassBody />
			<div id="wrapper">
				<div id="pagee" className="clearfix">
					{!headerStyle && <Header1 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu}  handleOffcanvas={handleOffcanvas} isSearch={isSearch} handleSearch={handleSearch} />}
					{headerStyle == 1 ? <Header1 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} handleOffcanvas={handleOffcanvas} isSearch={isSearch} handleSearch={handleSearch} /> : null}
					{headerStyle == 2 ? <Header2 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} handleOffcanvas={handleOffcanvas} isSearch={isSearch} handleSearch={handleSearch} /> : null}
					{headerStyle == 3 ? <Header3 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} handleOffcanvas={handleOffcanvas} isSearch={isSearch} handleSearch={handleSearch} /> : null}
					{headerStyle == 4 ? <Header4 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} handleOffcanvas={handleOffcanvas} isSearch={isSearch} handleSearch={handleSearch} /> : null}


					<main className="main">
						{breadcrumbTitle && <Breadcrumb breadcrumbTitle={breadcrumbTitle} imgbg={imgbg} />}

						{children}
					</main>

					{!footerStyle && < Footer1 />}
					{footerStyle == 1 ? < Footer1 /> : null}
					{footerStyle == 2 ? < Footer2 /> : null}

				</div>
			</div>
			<BackToTop target="#top" />
			<OffcanvasModal isOffcanvas={isOffcanvas} handleOffcanvas={handleOffcanvas} />
		</>
	)
}
