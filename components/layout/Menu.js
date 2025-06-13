"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
export default function Menu() {
  const pathname = usePathname();
  const [currentMenuItem, setCurrentMenuItem] = useState("");

  useEffect(() => {
    setCurrentMenuItem(pathname);
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
    <ul className="navigation clearfix">
      <li>
        <Link href="/">Home</Link>
      </li>

      <li>
        <Link href="/packages">Packages</Link>
      </li>
      <li>
        <Link href="/day-tours">Day Tours</Link>
      </li>
      <li>
        <Link href="/destinations">Destinations</Link>
      </li>
      <li>
        <Link href="/tailormade">Tailor Made Tours</Link>
      </li>
      <li>
        <Link href="/about-us">About Us</Link>
      </li>
      <li>
        <Link href="/blog">Blogs</Link>
      </li>
      <li>
        <Link href="/contact-us">Contact</Link>
      </li>
    </ul>
  );
}
