import Link from "next/link";
import MobileMenu from "../MobileMenu";

export default function HeaderAdmin({
  scroll,
  isMobileMenu,
  handleMobileMenu,
  handleOffcanvas,
  isSearch,
  handleSearch,
  isSidebarCollapsed,
  handleSidebarToggle,
}) {
  return (
    <>
      <header className="main-header flex">
        {/* Header Lower */}
        <div id="header">
          <div className="header-dashboard">
            <div className="tf-container full">
              <div className="row">
                <div className="col-lg-12">
                  <div className="inner-container flex justify-space align-center">
                    {/* Logo Box */}{" "}
                    <div className="header-search flex-three">
                      {" "}
                      <div
                        className={`icon-bars ${
                          isSidebarCollapsed ? "collapsed" : ""
                        }`}
                        onClick={(e) => {
                          // Explicitly call handleSidebarToggle with the event
                          handleSidebarToggle(e);
                          // Make sure event doesn't propagate to other elements
                          e.stopPropagation();
                        }}
                        style={{
                          cursor: "pointer",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          padding: "8px",
                        }}
                        title={
                          isSidebarCollapsed
                            ? "Expand Sidebar"
                            : "Collapse Sidebar"
                        }
                      >
                        <i className="icon-Vector3" />
                      </div>
                      {/* <form action="/" className="search-dashboard">
												<i className="icon-Vector5" />
												<input type="search" placeholder="Search tours" />
											</form> */}
                    </div>
                    <div className="nav-outer flex align-center">
                      {/* Main Menu */}
                      <nav className="main-menu show navbar-expand-md">
                        <div
                          className="navbar-collapse collapse clearfix"
                          id="navbarSupportedContent"
                        >
                          <ul className="navigation clearfix">                            <li className="dropdow">
                              <Link href="/">Home</Link>
                            </li>
                            <li className="dropdown">
                              <Link href="/destinations">Destination</Link>
                            </li>
                            <li className="dropdown">
                              <Link href="/packages">Packages</Link>
                            </li>
                            <li className="dropdown ">
                              <Link href="/day-tours">Day Tours</Link>
                            </li>
                            <li className="dropdown">
                              <Link href="/tailormade">Tailor Made Tours</Link>
                            </li>
                            {/* <li className="dropdown2 current">
                              <Link href="/dashboard">Dashboard</Link>
                              <ul>
                                <li>
                                  <Link href="/my-booking">My booking</Link>
                                </li>
                                <li>
                                  <Link href="/my-listing">My Listing</Link>
                                </li>
                                <li>
                                  <Link href="/add-tour">Add Tour</Link>
                                </li>
                                <li>
                                  <Link href="/my-favorite">My Favorites</Link>
                                </li>
                                <li>
                                  <Link href="/my-profile">My profile</Link>
                                </li>
                              </ul>
                            </li> */}
                            <li>
                              <Link href="/contact-us">Contact</Link>
                            </li>
                          </ul>
                        </div>
                      </nav>
                      {/* Main Menu End*/}
                    </div>
                    <div className="header-account flex align-center">
                      {/* <div className="dropdown notification">
                        <a
                          className="icon-notification"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="icon-notification-1" />
                        </a>
                        <ul className="dropdown-menu">
                          <li>
                            <div className="message-item  flex-three">
                              <div className="image">
                                <i className="icon-26" />
                              </div>
                              <div>
                                <div className="body-title">
                                  Discount available
                                </div>
                                <div className="text-tiny">
                                  Morbi sapien massa, ultricies at rhoncus at,
                                  ullamcorper nec diam
                                </div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="message-item  flex-three">
                              <div className="image">
                                <i className="icon-26" />
                              </div>
                              <div>
                                <div className="body-title">
                                  Discount available
                                </div>
                                <div className="text-tiny">
                                  Morbi sapien massa, ultricies at rhoncus at,
                                  ullamcorper nec diam
                                </div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="message-item  flex-three">
                              <div className="image">
                                <i className="icon-26" />
                              </div>
                              <div>
                                <div className="body-title">
                                  Discount available
                                </div>
                                <div className="text-tiny">
                                  Morbi sapien massa, ultricies at rhoncus at,
                                  ullamcorper nec diam
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div> */}
                      {/* <div className="dropdown account">
                        <a
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <img
                            src="/assets/images/page/avata.jpg"
                            alt="image"
                          />
                        </a>
                        <ul className="dropdown-menu">
                          <li>
                            <Link href="#">Account</Link>
                          </li>
                          <li>
                            <Link href="#">Setting</Link>
                          </li>
                          <li>
                            <Link href="#">Support</Link>
                          </li>
                          <li>
                            <Link href="/login">Logout</Link>
                          </li>
                        </ul>
                      </div> */}
                      <div
                        className="mobile-nav-toggler mobile-button"
                        onClick={handleMobileMenu}
                      >
                     
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
    </>
  );
}
