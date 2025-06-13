import Link from "next/link";
import Menu from "../Menu";
import MobileMenu from "../MobileMenu";
// Add Font Awesome import at the top of the file
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faYoutube,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

export default function Header2({
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
    <header className="main-header header-style1 flex">
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
                  <Link
                    href="mailto:Info@randillankatours.com"
                    style={{ color: "white" }}
                  >
                    Info@randillankatours.com
                  </Link>
                </li>
                <li className="flex-three">
                  <i className="icon-phone" />
                  <span>
                    <Link href="tel:+94773087631" style={{ color: "white" }}>
                      +94 77 308 7631
                    </Link>{" "}
                    |{" "}
                    <Link href="tel:+94273122966" style={{ color: "white" }}>
                      +94 27 31 22 966
                    </Link>
                  </span>{" "}
                </li>
              </ul>
            </div>
            <div className="header-top-left flex-two">
              <Link href="/contact-us" className="booking">
                <i className="icon-19" />
                <span>Booking Now</span>
              </Link>
              <div className="follow-social flex-two">
                <span>Follow Us :</span>{" "}
                <ul className="flex-two" style={{ gap: "7px" }}>
                  <li>
                    <Link
                      href="https://www.facebook.com/share/1DfWWg9nRz/?mibextid=wwXIfr"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontSize: "20px",
                        color: "white",
                        transition: "color 0.3s",
                      }}
                    >
                      <FontAwesomeIcon icon={faFacebookF} />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.instagram.com/invites/contact/?igsh=1gk7yuyi9xxjz&utm_content=xgth3mj"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontSize: "20px",
                        color: "white",
                        transition: "color 0.3s",
                      }}
                    >
                      <FontAwesomeIcon icon={faInstagram} />
                    </Link>
                  </li>
                  {/* <li>
                    <Link
                      href="https://www.youtube.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontSize: "20px",
                        color: "white",
                        transition: "color 0.3s",
                      }}
                    >
                      <FontAwesomeIcon icon={faYoutube} />
                    </Link>
                  </li> */}
                  <li>
                    <Link
                      href="https://www.tiktok.com/@randil.lanka.tour?_t=ZS-8wxykYkcWEy&_r=1"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontSize: "20px",
                        color: "white",
                        transition: "color 0.3s",
                      }}
                    >
                      <FontAwesomeIcon icon={faTiktok} />
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
                  <div className="logo-box">
                    <div className="logo">
                      <Link href="/">
                        <img src="/assets/images/logo2.png" alt="Logo" />
                      </Link>
                    </div>
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
                  <div className="header-account flex align-center"></div>
                  <div
                    className="mobile-nav-toggler mobile-button"
                    onClick={handleMobileMenu}
                  >
                    <i className="icon-bar" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Header Lower */}
      {/* Mobile Menu  */}
      <div className="close-btn" onClick={handleMobileMenu}>
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
