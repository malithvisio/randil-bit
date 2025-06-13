"use client";

import Link from "next/link";
import Menu from "../Menu";
import MobileMenu from "../MobileMenu";
import AuthStatus from "@/components/elements/AuthStatus";

export default function Header1({
  scroll,
  isMobileMenu,
  handleMobileMenu,
  handleOffcanvas,
  isSearch,
  handleSearch,
}) {
  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "short",
    day: "2-digit",
    year: "numeric",
  });

  return (
    <header className="main-header flex">
      {/* Header Lower */}
      <div id="header">
        <div className="header-top">
          <div className="header-top-wrap flex-two">
            <div className="header-top-right">
              <ul className=" flex-three">
                <li className="flex-three">
                  <i className="icon-day" />
                  <span>{currentDate}</span>
                </li>
                <li className="flex-three">
                  <i className="icon-mail" />
                  <span>Info@randiltravels.co.uk</span>
                </li>
                <li className="flex-three">
                  <i className="icon-phone" />
                  <span>+44 20 7946 0958</span>
                </li>
              </ul>
            </div>
            <div className="header-top-left flex-two">
              <Link href="/contact-us" className="booking">
                <i className="icon-19" />
                <span>Book Your Trip</span>
              </Link>
              <div className="follow-social flex-two">
                <span>Follow Us :</span>
                <ul className="flex-two">
                  <li>
                    <Link href="https://facebook.com">
                      <i className="icon-icon-2" />
                    </Link>
                  </li>
                  <li>
                    <Link href="https://twitter.com">
                      <i className="icon-icon_03" />
                    </Link>
                  </li>
                  <li>
                    <Link href="https://instagram.com">
                      <i className="icon-x" />
                    </Link>
                  </li>
                  <li>
                    <Link href="https://linkedin.com">
                      <i className="icon-icon" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className={`header-lower ${scroll ? "is-fixed is-small" : ""}`}>
          <div className="tf-container full">
            <div className="row">
              <div className="col-lg-12">
                <div className="inner-container flex justify-space align-center">
                  {/* Logo Box */}
                  <div
                    className="mobile-nav-toggler mobie-mt mobile-button"
                    onClick={handleMobileMenu}
                  >
                    <i className="icon-Vector3" />
                  </div>
                  <div className="logo-box">
                    <div className="logo">
                      <Link href="/">
                        <img src="assets/images/logo.png" alt="Logo" />
                      </Link>
                    </div>{" "}
                  </div>
                  <div className="nav-outer flex align-center">
                    {/* Main Menu */}
                    <nav className="main-menu show navbar-expand-md">
                      <div
                        className="navbar-collapse collapse clearfix"
                        id="navbarSupportedContent"
                      >
                        <Menu />
                      </div>
                    </nav>
                    {/* Main Menu End*/}
                  </div>

                  {/* Auth Status Component */}
                  <div className="header-auth">
                    <AuthStatus />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img src="/assets/images/page/fl1.png" alt="" className="fly-ab" />
        </div>
      </div>
      {/* End Header Lower */}
      <a className="header-sidebar flex-three" onClick={handleOffcanvas}>
        <i className="icon-Bars" />
      </a>
      {/* Mobile Menu  */}
      <div className="close-btn" onClick={handleMobileMenu}>
        {" "}
        <span className="icon flaticon-cancel-1" />
      </div>
      <div className="mobile-menu">
        <div className="menu-backdrop" onClick={handleMobileMenu} />
        <nav className="menu-box">
          <div className="nav-logo">
            <Link href="/">
              <img src="assets/images/logo2.png" alt="" />
            </Link>
          </div>
          <div className="bottom-canvas">
            <div className="menu-outer">
              <MobileMenu />
            </div>
          </div>
        </nav>
      </div>
      {/* End Mobile Menu */}
    </header>
  );
}
