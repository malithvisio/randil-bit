// filepath: c:\Users\malit\OneDrive\Documents\GitHub\randil_lanka\components\layout\Sidebar.js
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Sidebar({ isCollapsed }) {
  const { user, isLoading, logout } = useAuth();
  const pathname = usePathname();
  const router = useRouter();

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 991);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const handleNavigation = (e, path) => {
    e.preventDefault();
    e.stopPropagation();

    if (e.type === "touchend") {
      e.preventDefault();
    }

    // Only collapse sidebar on mobile
    if (typeof window !== "undefined" && window.innerWidth <= 991) {
      const collapseSidebarEvent = new CustomEvent("collapseSidebar", {
        detail: { collapse: true },
      });
      window.dispatchEvent(collapseSidebarEvent);
    }

    // Navigate immediately on desktop, with small delay on mobile
    const delay = window.innerWidth <= 991 ? 100 : 0;
    setTimeout(() => {
      router.push(path);
    }, delay);
  };

  return (
    <>
      <div
        className={`sidebar-dashboard ${isCollapsed ? "actives" : ""} ${
          isMobile ? "mobile" : ""
        }`}
        style={{
          transition: "all 0.3s ease",
          visibility: isMobile && isCollapsed ? "hidden" : "visible",
          opacity: isMobile && isCollapsed ? 0 : 1,
        }}
      >
        <div className="db-logo">
          <Link
            href="/"
            onClick={(e) => handleNavigation(e, "/")}
            onTouchEnd={(e) => handleNavigation(e, "/")}
          >
            {isCollapsed ? (
              <i
                className="icon-cabin-1"
                style={{ fontSize: "24px", color: "white" }}
              />
            ) : (
              <img
                src="/assets/images/logo.png"
                alt="Logo"
                style={{ width: "140px", height: "100%" }}
              />
            )}
          </Link>
        </div>
        <div className={`db-menu ${isCollapsed ? "collapsed" : ""}`}>
          <ul>
            <li className={`${pathname === "/dashboard" ? "active" : ""}`}>
              <Link
                href="/dashboard"
                onClick={(e) => handleNavigation(e, "/dashboard")}
                onTouchEnd={(e) => handleNavigation(e, "/dashboard")}
              >
                <i className="icon-Vector-9" />
                <span className="nav-text">Dashboard</span>
              </Link>
            </li>
            <li className={`${pathname === "/my-booking" ? "active" : ""}`}>
              <Link
                href="/my-booking"
                onClick={(e) => handleNavigation(e, "/my-booking")}
                onTouchEnd={(e) => handleNavigation(e, "/my-booking")}
              >
                <i className="icon-Layer-2" />
                <span className="nav-text">Bookings</span>
              </Link>
            </li>
            <li className={`${pathname === "/my-bookingtailor" ? "active" : ""}`}>
              <Link
                href="/my-bookingtailor"
                onClick={(e) => handleNavigation(e, "/my-bookingtailor")}
                onTouchEnd={(e) => handleNavigation(e, "/my-bookingtailor")}
              >
                <i className="icon-Layer-2" />
                <span className="nav-text">Tailor Bookings</span>
              </Link>
            </li>
              <li className={`${pathname === "/add-destination" ? "active" : ""}`}>
              <Link
                href="/add-destination"
                onClick={(e) => handleNavigation(e, "/add-destination")}
                onTouchEnd={(e) => handleNavigation(e, "/add-destination")}
              >
                <i className="icon-Layer-2" />
                <span className="nav-text">Destinations</span>
              </Link>
            </li>
            {/* <li className={`${pathname === "/my-listing" ? "active" : ""}`}>
              <Link
                href="/add-blog"
                onClick={(e) => handleNavigation(e, "/add-blog")}
                onTouchEnd={(e) => handleNavigation(e, "/add-blog")}
              >
                <i className="icon-Group-81" />
                <span className="nav-text">Add Blogs</span>
              </Link>
            </li> */}
            {/* <li className={`${pathname === "/add-tour" ? "active" : ""}`}>
              <Link href="/add-tour">
                <i className="icon-Group-91" />
                <span>Add Tour</span>
              </Link>
            </li> */}
            <li className={`${pathname === "/my-favorite" ? "active" : ""}`}>
              <Link
                href="/my-favorite"
                onClick={(e) => handleNavigation(e, "/my-favorite")}
                onTouchEnd={(e) => handleNavigation(e, "/my-favorite")}
              >
                <i className="icon-Vector-10" />
                <span className="nav-text">Blogs</span>
              </Link>
            </li>
            <li className={`${pathname === "/my-profile" ? "active" : ""}`}>
              <Link
                href="/my-profile"
                onClick={(e) => handleNavigation(e, "/my-profile")}
                onTouchEnd={(e) => handleNavigation(e, "/my-profile")}
              >
                <i className="icon-profile-user-1" />
                <span className="nav-text">Settings</span>
              </Link>
            </li>
            <li className={`${pathname === "/login" ? "active" : ""}`}>
              {" "}
              <Link
                href="/login"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();

                  // Always hide or collapse sidebar when logging out
                  if (typeof window !== "undefined") {
                    // Dispatch a custom event that LayoutAdmin can listen for with intention to collapse
                    const collapseSidebarEvent = new CustomEvent(
                      "collapseSidebar",
                      {
                        detail: { collapse: true },
                      }
                    );
                    window.dispatchEvent(collapseSidebarEvent);
                  }

                  // Logout and navigate after a small delay for smoother transition
                  logout();
                  setTimeout(() => {
                    router.push("/login");
                  }, 100);
                }}
                onTouchEnd={(e) => {
                  e.preventDefault();
                  e.stopPropagation();

                  // Always hide or collapse sidebar when logging out
                  if (typeof window !== "undefined") {
                    const collapseSidebarEvent = new CustomEvent(
                      "collapseSidebar",
                      {
                        detail: { collapse: true },
                      }
                    );
                    window.dispatchEvent(collapseSidebarEvent);
                  }

                  // Logout and navigate after a small delay for smoother transition
                  logout();
                  setTimeout(() => {
                    router.push("/login");
                  }, 100);
                }}
              >
                <i className="icon-turn-off-1" />
                <span className="nav-text">Logout</span>
              </Link>{" "}
            </li>
          </ul>
        </div>
      </div>{" "}
      <style jsx global>{`
        /* Custom sidebar styles to enhance toggle functionality */
        .sidebar-dashboard {
          transition: all 0.3s ease;
          width: 320px;
          max-width: 320px;
          z-index: 99;
        }

        /* Nav text visibility rules */
        .db-menu .nav-text {
          opacity: 1;
          visibility: visible;
          position: relative;
          transition: opacity 0.2s ease, visibility 0.2s ease;
          font-size: 13px;
          white-space: nowrap;
        }

        /* Adjust layout for navigation items */
        .sidebar-dashboard .db-menu ul li a {
          display: flex;
          flex-direction: row;
          align-items: center;
          padding: 12px 15px;
          gap: 12px;
        }

        .sidebar-dashboard.actives .db-menu ul li a {
          padding: 12px 8px;
          justify-content: flex-start;
        }

        /* Icon styling */
        .sidebar-dashboard .db-menu ul li a i {
          margin: 0;
          font-size: 18px;
          min-width: 20px;
        }

        .sidebar-dashboard.actives {
          max-width: 180px;
        }

        .sidebar-dashboard .db-logo {
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .sidebar-dashboard.actives .db-logo {
          padding: 38px 10px 38px 10px;
          display: flex;
          justify-content: center;
        }

        .sidebar-dashboard .db-menu ul li a {
          transition: padding 0.3s ease;
        }

        .sidebar-dashboard .db-menu ul li a span {
          transition: opacity 0.3s ease, display 0.3s ease;
        }

        /* Make sure icons are always visible */
        .sidebar-dashboard .db-menu ul li a i {
          margin-right: 15px;
          font-size: 18px;
        }

        .sidebar-dashboard.actives .db-menu ul li a i {
          margin-right: 0;
        }

        /* Enhance hover appearance */
        .sidebar-dashboard.actives .db-menu ul li a:hover {
          background-color: rgba(255, 255, 255, 0.1);
          border-radius: 5px;
        }

        /* Center icons in collapsed mode */
        .sidebar-dashboard.actives .db-menu ul li a {
          display: flex;
          justify-content: center;
          align-items: center;
        } /* Mobile-specific styles */
        @media only screen and (max-width: 991px) {
          .sidebar-dashboard {
            position: fixed;
            top: 0;
            height: 100vh;
            overflow-y: auto;
            transition: all 0.3s ease;
            box-shadow: none;
            z-index: 999;
            -webkit-overflow-scrolling: touch; /* Improve scroll on iOS */
            pointer-events: auto !important; /* Ensure clicks are registered */
            width: 250px !important; /* Ensure consistent width on mobile */
            left: -100%; /* Start off-screen */
          }

          /* IMPORTANT: On mobile, "actives" means COLLAPSED (hidden) */
          /* This is the opposite of desktop behavior */
          .sidebar-dashboard.actives {
            max-width: 250px;
            left: -100% !important; /* Keep off-screen when collapsed */
            box-shadow: none;
            opacity: 0;
            visibility: hidden;
          }

          /* When sidebar is visible in mobile */
          .sidebar-dashboard:not(.actives) {
            left: 0 !important;
            box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
            opacity: 1;
            visibility: visible;
          }

          /* Show text in mobile view */
          .sidebar-dashboard .db-menu ul li a span {
            display: block;
            font-size: 12px;
          }

          /* When sidebar is expanded in mobile */
          .sidebar-dashboard.actives .db-menu ul li a {
            padding: 12px 15px;
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 12px;
            -webkit-tap-highlight-color: transparent; /* Remove tap highlight on mobile */
            pointer-events: auto !important; /* Ensure clicks are registered */
            position: relative; /* Create a stacking context */
            z-index: 1000; /* Higher than backdrop */
          }

          .sidebar-dashboard.actives .db-menu ul li a i {
            margin-right: 15px;
          }

          .sidebar-dashboard.actives .db-menu ul li a span {
            display: block;
            opacity: 1;
          }

          .sidebar-dashboard.actives .db-logo {
            padding: 38px 20px;
          }
        }
      `}</style>
    </>
  );
}
