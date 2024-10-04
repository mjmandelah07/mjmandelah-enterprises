import { useState, useEffect } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import "../assets/styles/sections/navbar.css"; // Assuming you have a CSS file

export default function NavBar() {
  const location = useLocation(); // Get the current route location
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const threshold = 100; // Threshold in pixels

      setIsScrolled(scrollPosition >= threshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location]);

  // Function to check if the link is active
  const isActiveLink = (path) => location.pathname === path;

  return (
    <>
      <header
        className={`header-sticky header-absolute mj-navbar-light ${
          isScrolled ? "header-sticky-on scrolled awake" : ""
        }`}
      >
        <nav className="navbar navbar-expand-xl py-lg-0 f">
          <div className="container">
            <a className="navbar-brand me-3 py-4" href="/#home">
              MjMandelah
            </a>
            <button
              className="navbar-toggler  p-2 collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo02"
              aria-controls="navbarTogglerDemo02"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-animation">
                <span className="navbar-toggler-icon"></span>
                <span className="navbar-toggler-icon"></span>
                <span className="navbar-toggler-icon"></span>
              </span>
              menu
            </button>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav navbar-nav-scroll ms-auto">
                <li className="nav-item">
                  {/* Home link */}
                  <Link
                    to="/"
                    className={`nav-link px-lg-3 ${
                      isActiveLink("/") ? "active-link" : ""
                    }`}
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  {/* Menu link */}
                  <Link
                    to="/menu"
                    className={`nav-link px-lg-3 ${
                      isActiveLink("/menu") ? "active-link" : ""
                    }`}
                  >
                    Menu
                  </Link>
                </li>
                <li className="nav-item">
                  {/* Today's Special link */}
                  <a
                    className={`nav-link px-lg-3 ${
                      location.hash === "#daily" ? "active-link" : ""
                    }`}
                    href="/#daily"
                  >
                    Today&apos;s Special
                  </a>
                </li>
                <li className="nav-item">
                  {/* Specialties link */}
                  <a
                    className={`nav-link px-lg-3 ${
                      location.hash === "#specialities" ? "active-link" : ""
                    }`}
                    href="/#specialities"
                  >
                    Specialities
                  </a>
                </li>
                <li className="nav-item">
                  {/* Order link */}
                  <a
                    className={`nav-link px-lg-3 ${
                      location.hash === "#order" ? "active-link" : ""
                    }`}
                    href="/#order"
                  >
                    Order
                  </a>
                </li>
                <li className="nav-item">
                  {/* Contact Us link */}
                  <Link
                    to="/contact"
                    className={`nav-link px-lg-3 ${
                      isActiveLink("/contact") ? "active-link" : ""
                    }`}
                  >
                    Contact Us
                  </Link>
                </li>
                <li className="nav-item">
                  {/* Contact Us link */}
                  <Link
                    to="/contact"
                    className={`nav-link px-lg-3 ${
                      isActiveLink("/contact") ? "active-link" : ""
                    }`}
                  >
                 Log In | Sign Up
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <Outlet />
    </>
  );
}
