"use client";
import { useEffect, useState } from "react";
import AddClassBody from "../elements/AddClassBody";
import BackToTop from "../elements/BackToTop";
import Breadcrumb from "./Breadcrumb";
import FooterAdmin from "./footer/FooterAdmin";
import HeaderAdmin from "./header/HeaderAdmin";
import SearchModal from "./SearchModal";
import Sidebar from "./Sidebar";

const MOBILE_BREAKPOINT = 991;

export default function LayoutAdmin({
  headerStyle,
  footerStyle,
  breadcrumbTitle,
  children,
}) {
  const [scroll, setScroll] = useState(0);
  const [isMobileMenu, setMobileMenu] = useState(false);
  const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);

  const handleMobileMenu = () => {
    setMobileMenu(!isMobileMenu);
  };
  const handleSidebarToggle = (e) => {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }

    const isMobile = window.innerWidth <= MOBILE_BREAKPOINT;
    const newState = !isSidebarCollapsed;

    if (isMobile) {
      // On mobile, allow toggling the sidebar
      setSidebarCollapsed(newState);
      localStorage.setItem("sidebarCollapsed", newState ? "true" : "false");
    } else {
      // On desktop, always keep sidebar expanded
      setSidebarCollapsed(false);
      localStorage.setItem("sidebarCollapsed", "false");
    }

    if (typeof document !== "undefined") {
      document.body.offsetHeight;
    }
  };

  const handleClickOutside = (e) => {
    // e.preventDefault();
    e.stopPropagation();

    // Only collapse sidebar if we're in mobile view
    if (isMobileView && !isSidebarCollapsed) {
      setSidebarCollapsed(true);
      if (typeof window !== "undefined") {
        localStorage.setItem("sidebarCollapsed", "false");
      }
    }
  };

  useEffect(() => {
    const WOW = require("wowjs");
    window.wow = new WOW.WOW({
      live: false,
    });
    window.wow.init();

    const handleCollapseSidebar = (event) => {
      if (event.detail?.collapse) {
        setSidebarCollapsed(true);
      }
    };

    window.addEventListener("collapseSidebar", handleCollapseSidebar);

    // Initialize sidebar state
    if (typeof window !== "undefined") {
      const isMobile = window.innerWidth <= MOBILE_BREAKPOINT;
      if (isMobile) {
        // On mobile, sidebar should be collapsed (hidden) by default
        setSidebarCollapsed(true);
        localStorage.setItem("sidebarCollapsed", "true");
      } else {
        // On desktop, sidebar should always be expanded by default
        setSidebarCollapsed(false);
        localStorage.setItem("sidebarCollapsed", "false");
      }
    }

    return () => {
      window.removeEventListener("collapseSidebar", handleCollapseSidebar);
    };
  }, []);

  useEffect(() => {
    const handleBackdropClick = (e) => {
      if (window.innerWidth <= MOBILE_BREAKPOINT && !isSidebarCollapsed) {
        setSidebarCollapsed(true);
      }
    };

    if (typeof window !== "undefined") {
      document.addEventListener("click", handleBackdropClick);
    }

    return () => {
      if (typeof window !== "undefined") {
        document.removeEventListener("click", handleBackdropClick);
      }
    };
  }, [isSidebarCollapsed]);

  useEffect(() => {
    const onScroll = () => {
      setScroll(window.scrollY > 100);
      // Add a class to the body when scrolled for additional styling options
      if (typeof document !== "undefined") {
        if (window.scrollY > 100) {
          document.body.classList.add("is-scrolled");
        } else {
          document.body.classList.remove("is-scrolled");
        }
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []); // Set initial state in state variable

  // Add effect to detect mobile view
  const [isMobileView, setIsMobileView] = useState(false);
  useEffect(() => {
    const checkMobileView = () => {
      setIsMobileView(window.innerWidth <= MOBILE_BREAKPOINT);
    };

    // Check initially
    if (typeof window !== "undefined") {
      checkMobileView();
      window.addEventListener("resize", checkMobileView);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", checkMobileView);
      }
    };
  }, []);

  return (
    <>
      <div id="top" />
      <AddClassBody />{" "}
      <div
        id="wrapper"
        onClick={(e) => {
          // Only prevent propagation when the sidebar is open in mobile view
          if (!isSidebarCollapsed && isMobileView) {
            e.stopPropagation();
          }
        }}
      >
        {" "}
        <div id="pagee" className="clearfix">
          {" "}
          <Sidebar isCollapsed={isSidebarCollapsed} />{" "}
          {/* Only show the backdrop when sidebar is expanded in mobile view */}
          {!isSidebarCollapsed && isMobileView && (
            <div
              className="sidebar-backdrop"
              onClick={(e) => {
                handleClickOutside(e);
              }}
              onTouchEnd={(e) => {
                handleClickOutside(e);
              }}
              style={{
                cursor: "pointer",
                position: "fixed",
                top: isMobileView ? "70px" : 0, // Adjust for fixed header in mobile
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: 998, // Higher than content but lower than sidebar
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                pointerEvents: "auto",
                height: isMobileView ? "calc(100vh - 70px)" : "100vh", // Adjust height for fixed header
              }}
            />
          )}{" "}
          <div
            className={`has-dashboard ${
              isSidebarCollapsed ? "sidebar-collapsed" : ""
            }`}
            onClick={handleClickOutside}
          >
            <HeaderAdmin
              scroll={scroll}
              isMobileMenu={isMobileMenu}
              handleMobileMenu={handleMobileMenu}
              isSidebarCollapsed={isSidebarCollapsed}
              handleSidebarToggle={handleSidebarToggle}
            />

            <main className="main">{children}</main>

            <FooterAdmin />
          </div>
        </div>{" "}
      </div>
      <BackToTop target="#top" />
      <SearchModal /> {/* Custom styles for sidebar collapse */}{" "}
      <style jsx global>{`
        /* Main content wrapper */
        .has-dashboard {
          transition: all 0.3s ease;
          margin-left: 320px;
          width: calc(100% - 320px);
          position: relative;
          min-height: 100vh;
        }

        /* Collapsed state */
        .has-dashboard.sidebar-collapsed {
          margin-left: 70px;
          width: calc(100% - 70px);
        }

        /* Main content area */
        .main {
          padding: 20px;
          width: 100%;
          position: relative;
          z-index: 1;
        }

        /* Visual indicator for sidebar toggle button */
        .icon-bars {
          position: relative;
          transition: all 0.3s ease;
          z-index: 1050 !important; /* Ensure it's above everything */
        }

        .icon-bars:hover {
          transform: scale(1.1);
        } /* Add a visual indicator that the sidebar is collapsed/expanded */
        .icon-Vector3 {
          position: relative;
          transition: all 0.3s ease;
        }

        .sidebar-collapsed .icon-Vector3 {
          transform: rotate(180deg);
        }

        /* Enhanced header styling for mobile */
        @media (max-width: 991px) {
          .header-dashboard {
            padding: 10px 0;
          }

          /* Add a transition for smoother header appearance */
          .main-header {
            transition: box-shadow 0.3s ease, background-color 0.3s ease;
          }

          /* Make header more visible when scrolled */
          .fixed-header .header-dashboard {
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          }
        } /* Backdrop overlay for mobile view */
        .sidebar-backdrop {
          display: none;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.5);
          z-index: 997; /* Lower than sidebar z-index */
          cursor: pointer; /* Indicate it's clickable */
          touch-action: none; /* Disable touch events on iOS */
          pointer-events: auto; /* Ensure click events are captured */
        }

        /* Fixed header styles */
        .main-header {
          transition: all 0.3s ease;
        }

        .fixed-header .main-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 999;
          box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
          background-color: #fff;
        }        @media (max-width: 991px) {
          .has-dashboard,
          .has-dashboard.sidebar-collapsed {
            margin-left: 0;
            width: 100%;
            overflow-x: hidden;
          }

          /* Mobile fixed header */
          .main-header,
          .header-dashboard {
            position: fixed !important;
            top: 0;
            left: 0;
            right: 0;
            z-index: 1010;
            background-color: #021b32;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          }

          /* Adjust main content spacing for mobile */
          .main {
            padding: 20px;
            margin-top: 70px; /* Space for fixed header */
            width: 100%;
            position: relative;
            z-index: 1;
          }

          /* Mobile sidebar specific fixes */
          .sidebar-dashboard {
            z-index: 1000;
            pointer-events: auto !important;
            width: 250px !important; /* Ensure mobile sidebar has proper width */
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
          } /* When sidebar is expanded on mobile (no 'actives' class) */
          .sidebar-dashboard:not(.actives) {
            left: 0 !important;
            transform: translateX(0);
            top: 70px; /* Leave space for the fixed header */
            height: calc(
              100vh - 70px
            ); /* Adjust height to account for header */
          }

          /* When sidebar is collapsed on mobile (has 'actives' class) */
          .sidebar-dashboard.actives {
            left: -350px !important;
            transform: translateX(0);
            top: 70px; /* Leave space for the fixed header */
            height: calc(
              100vh - 70px
            ); /* Adjust height to account for header */
          } /* Ensure all links in sidebar remain clickable */
          .sidebar-dashboard a,
          .sidebar-dashboard .db-menu ul li a,
          .sidebar-dashboard .db-logo a {
            pointer-events: auto !important;
            position: relative;
            z-index: 1001;
          }

          /* Only show backdrop when sidebar is expanded in mobile view */
          .sidebar-backdrop {
            display: block;
            pointer-events: auto;
          }

          /* Make sure the sidebar-backdrop only blocks clicks when visible */
          .sidebar-collapsed .sidebar-backdrop {
            display: none;
            pointer-events: none;
          } /* Mobile sidebar fixes */
        @media (max-width: 991px) {
          .sidebar-dashboard.mobile {
            position: fixed;
            left: -250px;
            width: 250px !important;
            top: 70px;
            height: calc(100vh - 70px);
            transition: all 0.3s ease;
            background: var(--primary-color4, #090b24);
          }

          .sidebar-dashboard.mobile:not(.actives) {
            left: 0;
            box-shadow: 2px 0 8px rgba(0,0,0,0.1);
          }

          .sidebar-dashboard.mobile.actives {
            left: -250px;
          }

          /* Hide menu text when collapsed on mobile */
          .sidebar-dashboard.mobile.actives .db-menu ul li a span,
          .sidebar-dashboard.mobile.actives .db-logo img {
            display: none;
          }

          /* Center icons when collapsed */
          .sidebar-dashboard.mobile.actives .db-menu ul li a {
            justify-content: center;
          }

          /* Ensure proper spacing */
          .sidebar-dashboard.mobile .db-menu ul li a {
            padding: 12px 20px;
            display: flex;
            align-items: center;
          }

          .sidebar-dashboard.mobile .db-menu ul li a i {
            margin-right: 15px;
          }
        }        /* Desktop Styles (above 991px) */
        @media (min-width: 992px) {
          .has-dashboard {
            margin-left: 320px !important;
            transition: margin-left 0.3s ease;
            width: calc(100% - 320px);
          }

          .sidebar-dashboard {
            position: fixed !important;
            top: 0;
            left: 0 !important;
            height: 100vh;
            width: 320px !important;
            max-width: 320px !important;
            transition: all 0.3s ease;
            z-index: 1000;
          }

          /* Hide sidebar toggle button on desktop */
          .header-dashboard .header-search .icon-bars {
            display: none !important;
          }

          /* Keep sidebar fully expanded on desktop */
          .sidebar-dashboard,
          .sidebar-dashboard.actives {
            transform: none !important;
            opacity: 1 !important;
            visibility: visible !important;
          }

          /* Show all sidebar content on desktop */
          .sidebar-dashboard .db-menu ul li a span,
          .sidebar-dashboard .db-logo span,
          .sidebar-dashboard .db-logo img {
            display: block !important;
            opacity: 1 !important;
            visibility: visible !important;
          }
        }

        /* Mobile Styles (991px and below) */
        @media (max-width: 991px) {
          .has-dashboard {
            margin-left: 0 !important;
          }

          .sidebar-dashboard {
            left: -320px;
            position: fixed;
            top: 70px; /* Leave space for header */
            height: calc(100vh - 70px);
            transition: all 0.3s ease;
          }

          /* Show sidebar toggle button on mobile */
          .header-dashboard .header-search .icon-bars {
            display: block !important;
          }

          /* Expanded state on mobile */
          .sidebar-dashboard:not(.actives) {
            left: 0 !important;
          }
        }        /* Common styles for both mobile and desktop */
        .sidebar-dashboard {
          background-color: #021b32;
          z-index: 1000;
          transition: all 0.3s ease;
          position: fixed;
          top: 0;
          left: 0;
          bottom: 0;
          overflow-y: auto;
          overflow-x: hidden;
          box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
        }

        /* Header should always be on top */
        .header-dashboard {
          z-index: 1001;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 70px;
          display: flex;
          align-items: center;
          padding: 0 20px;
        }

        /* Ensure content scrolls independently */
        #wrapper {
          min-height: 100vh;
          position: relative;
          overflow-x: hidden;
        }
      `}</style>
    </>
  );
}
