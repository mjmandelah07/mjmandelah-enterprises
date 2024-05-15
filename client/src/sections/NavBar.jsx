import { useState, useEffect } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import "../assets/styles/navbar.css";
// import logo from "../assets/images/navbar/72dc-logo.png";

export default function NavBar() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const heroSection = document.querySelector("#home");

      if (!heroSection) return;

      const heroHeight = heroSection.offsetHeight;
      const halfHeroHeight = heroHeight / 2;

      setIsScrolled(scrollPosition >= halfHeroHeight);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`header-sticky header-absolute ${
          isScrolled ? "header-sticky-on" : ""
        }`}
      >
        {/* Logo Nav START */}

        <nav className="navbar navbar-expand-xl  py-lg-0">
          <div className="container">
            <a className="navbar-brand me-3 py-4" href="/#home">
              {/* <img
                className="dark-mode-item navbar-brand-item"
                src={logo}
                alt="logo"
              /> */}
              Mjmandelah
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
                  <a
                    href="/#home"
                    className={`nav-link px-lg-3 ${isHomePage ? "active" : ""}`}
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <Link to="/menu" className="nav-link px-lg-3">
                    Menu
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link px-lg-3" href="/#daily">
                    Today&apos;s Special
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link px-lg-3" href="/#specialities">
                    Specialites
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link px-lg-3" href="/#order">
                    Order
                  </a>
                </li>
                <li className="nav-item">
                  <Link to="/contact" className="nav-link px-lg-3">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* Logo Nave END */}
      </header>
      <Outlet />
    </>
  );
}
