import { useState, useEffect } from "react";
import { Outlet, Link, useLocation} from "react-router-dom";

import PersonIcon from "@mui/icons-material/Person";
import useMediaQuery from "@mui/material/useMediaQuery";
import "../assets/styles/sections/navbar.css";

export default function NavBar() {
  const location = useLocation();

  const isMobile = useMediaQuery("(max-width: 912px)");
  const [isScrolled, setIsScrolled] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Define routes that have a white background
  const whiteBackgroundRoutes = ["/login", "/signup", "/dashboard", "/verify-email",];

  // Check if the current route is in the white background routes
  const isWhiteBackground = whiteBackgroundRoutes.includes(location.pathname);

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

  const handleMouseEnter = () => {
    if (!isMobile) {
      setShowDropdown(true); // Open on hover for desktop
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setShowDropdown(false); // Close on hover for desktop
    }
  };

  const handleIconClick = () => {
    if (isMobile) {
      setShowDropdown(!showDropdown); // Toggle on click for mobile
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  // Function to check if the link is active
  const isActiveLink = (path) => location.pathname === path;

  return (
    <>
      <header
        className={`header-sticky header-absolute mj-navbar-light ${
          isScrolled ? "header-sticky-on scrolled awake" : ""
        }`}
      >
        <nav className="navbar navbar-expand-lg py-lg-0 f">
          <div className="container">
            <a
              className={`navbar-brand ${isWhiteBackground ? "dark" : ""}`}
              href="/#home"
            >
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
                    } ${isWhiteBackground ? "dark" : ""}`}
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
                    } ${isWhiteBackground ? "dark" : ""}`}
                  >
                    Menu
                  </Link>
                </li>

                <li className="nav-item">
                  {/* Specialties link */}
                  <Link
                    className={`nav-link px-lg-3 ${
                      isActiveLink("/specialties") ? "active-link" : ""
                    } ${isWhiteBackground ? "dark" : ""}`}
                    to="/specialties"
                  >
                    Specialties
                  </Link>
                </li>
                <li className="nav-item">
                  {/* Order link */}
                  <Link
                    className={`nav-link px-lg-3 ${
                      isActiveLink("/order") ? "active-link" : ""
                    } ${isWhiteBackground ? "dark" : ""}`}
                    to="/order"
                  >
                    Order
                  </Link>
                </li>
                <li className="nav-item">
                  {/* Contact Us link */}
                  <Link
                    to="/contact"
                    className={`nav-link px-lg-3 ${
                      isActiveLink("/contact") ? "active-link" : ""
                    } ${isWhiteBackground ? "dark" : ""}`}
                  >
                    Contact Us
                  </Link>
                </li>
                <li
                  className="nav-item user-icon"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  onClick={handleIconClick}
                >
                  <PersonIcon
                    sx={{
                      color:
                        isWhiteBackground && !isScrolled && !isMobile
                          ? "#404044"
                          : "#f0f0f0",
                      verticalAlign: "bottom",
                      marginLeft: "15px",
                      marginTop: "5px",
                      transform: "translateY(2px)",
                    }}
                  />

                  {showDropdown && (
                    <div className="nav-dropdown-menu">
                      {!isLoggedIn ? (
                        <>
                          <Link
                            to="/login"
                            className={`dropdown-item ${
                              isWhiteBackground ? "dark" : ""
                            }`}
                          >
                            Log In
                          </Link>
                          <Link
                            to="/signup"
                            className={`dropdown-item ${
                              isWhiteBackground ? "dark" : ""
                            }`}
                          >
                            Sign Up
                          </Link>
                          
                        </>
                      ) : (
                        <>
                          <Link
                            to="/dashboard"
                            className={`dropdown-item ${
                              isWhiteBackground ? "dark" : ""
                            }`}
                          >
                            Dashboard
                          </Link>
                          <Link
                            to="/"
                            className={`dropdown-item ${
                              isWhiteBackground ? "dark" : ""
                            }`}
                            onClick={handleLogout}
                          >
                            Log Out
                          </Link>
                        </>
                      )}
                    </div>
                  )}
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
