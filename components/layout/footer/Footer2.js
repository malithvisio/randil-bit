import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faYoutube,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer2() {
  return (
    <>
      <footer
        className="footer footer-style2"
        style={{ backgroundColor: "black", color: "white" }}
      >
        <div className="tf-container">
          <div className="row">
            {/* Company Information */}
            <div className="col-md-3">
              <div className="footer-item-logo">
                <div className="logo">
                  <img
                    src="/assets/images/logo.png"
                    alt="Randil Lanka Tours Logo"
                  />
                </div>
                <p className="des-footer">
                  No:23, 1st floor,
                  <br />
                  New Shopping Complex,
                  <br />
                  Hospital Junction,
                  <br />
                  Polonnaruwa,
                  <br />
                  Sri Lanka
                  <br />{" "}
                  <Link href="tel:+94773087631" style={{ color: "white" }}>
                    +94 77 308 7631
                  </Link>{" "}
                </p>
                <ul className="social flex-three">
                  <li>
                    <Link
                      href="https://www.facebook.com/share/1DfWWg9nRz/?mibextid=wwXIfr"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontSize: "18px",
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
                        fontSize: "18px",
                        color: "white",
                        transition: "color 0.3s",
                      }}
                    >
                      <FontAwesomeIcon icon={faInstagram} />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.tiktok.com/@randil.lanka.tour?_t=ZS-8wxykYkcWEy&_r=1"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontSize: "18px",
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

            {/* About Us Links */}
            <div className="col-md-3">
              <div className="footer-item-company" style={{ color: "white" }}>
                <h6 className="title mb-30" style={{ color: "white" }}>
                  About Us
                </h6>
                <ul className="footer-menu">
                  <li>
                    <Link href="/about-us">About Randil Lanka Tours</Link>
                  </li>
                  <li>
                    <Link href="/contact-us">Contact Us</Link>
                  </li>
                  <li>
                    <Link href="/tailormade">Tailormade Tours</Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Quick Links */}
            <div className="col-md-3">
              <div className="footer-item-quick-link">
                <h6 className="title mb-30" style={{ color: "white" }}>
                  Quick Links
                </h6>{" "}
                <ul className="footer-menu">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/destinations">Destinations</Link>
                  </li>
                  <li>
                    <Link href="/packages">Tour Packages</Link>
                  </li>

                  <li>
                    <Link href="/day-tours">One Day Tours</Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Newsletter */}
            <div className="col-md-3">
              <div className="footer-item-newsletter">
                <h6 className="title mb-30" style={{ color: "white" }}>
                  Subscribe to Our Newsletter
                </h6>
                <p className="des mb-22">
                  Stay updated with the latest travel deals and news from Randil
                  Lanka Tours.
                </p>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    const email = e.target.elements.email.value;
                    const whatsappNumber = "94773087631"; // Replace with the WhatsApp number
                    const message = `Hello, I would like to subscribe to the newsletter. My email is: ${email}`;
                    window.open(
                      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                        message
                      )}`,
                      "_blank"
                    );
                  }}
                  className="form-footer-st2 flex-three"
                >
                  <input
                    type="email"
                    name="email"
                    className="input-search"
                    placeholder="Enter your email"
                    required
                    style={{
                      backgroundColor: "white",
                      color: "black",
                      borderRadius: "5px",
                      marginRight: "6px",
                    }}
                  />
                  <button type="submit">
                    <i className="icon-paper-plane" />
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="row footer-bottom">
            <div className="col-md-6">
              <p className="copy-right" style={{ color: "white" }}>
                Copyright© {new Date().getFullYear()} by {" "}
                <Link href="https://www.visioinnovation.com/" className="text-main">
                  Visio Innovations (Pvt) Ltd
                </Link>
                . All Rights Reserved.
              </p>
            </div>
            <div className="col-md-6">
              {/* <ul className="policy-tern flex-six">
                                <li>
                                    <Link href="/terms-condition">Terms & Conditions</Link>
                                </li>
                                <li>
                                    <Link href="/privacy-policy">Privacy Policy</Link>
                                </li>
                                <li>
                                    <Link href="/login">Login / Signup</Link>
                                </li>
                            </ul> sample change */
                            }
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
