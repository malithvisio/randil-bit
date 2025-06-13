"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
export default function MobileMenu() {
  const pathname = usePathname();
  const [currentMenuItem, setCurrentMenuItem] = useState("");

  useEffect(() => {
    setCurrentMenuItem(pathname);
    // Hide the mobile menu when the pathname changes
    document.body.classList.remove("mobile-menu-visible");
  }, [pathname]);

  const checkCurrentMenuItem = (path) =>
    currentMenuItem === path ? "current" : "";
  const checkParentActive = (paths) =>
    paths.some((path) => currentMenuItem.startsWith(path)) ? "current" : "";

  const [isAccordion, setIsAccordion] = useState(1);

  const handleAccordion = (key) => {
    setIsAccordion((prevState) => (prevState === key ? null : key));
  };
  return (
    <>
      <div
        className="navbar-collapse collapse clearfix"
        id="navbarSupportedContent"
      >
        <ul className="navigation clearfix">          <li>
            <Link href="/" onClick={() => document.body.classList.remove("mobile-menu-visible")}>Home</Link>

            <div className="dropdown2-btn" onClick={() => handleAccordion(1)} />
          </li>
          <li>
            <Link href="/destinations" onClick={() => document.body.classList.remove("mobile-menu-visible")}>Destinations</Link>

            <div className="dropdown2-btn" onClick={() => handleAccordion(2)} />
          </li>
          <li>
            <Link href="/packages">Packages</Link>

            <div className="dropdown2-btn" onClick={() => handleAccordion(3)} />
          </li>
          <li>
            <Link href="/blog">Blogs</Link>

            <div className="dropdown2-btn" onClick={() => handleAccordion(4)} />
          </li>
          <li>
            <Link href="/day-tours">Day Tours</Link>

            <div className="dropdown2-btn" onClick={() => handleAccordion(5)} />
          </li>
          <li>
            <Link href="/tailormade">Tailor Made Tours</Link>

            <div className="dropdown2-btn" onClick={() => handleAccordion(6)} />
          </li>
          <li className={`${checkCurrentMenuItem("/contact-us")}`}>
            <Link href="/about-us">About Us</Link>
          </li>
          <li className={`${checkCurrentMenuItem("/contact-us")}`}>
            <Link href="/contact-us">Contact Us</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
