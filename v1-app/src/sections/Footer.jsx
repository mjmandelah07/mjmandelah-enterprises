import CallMadeIcon from "@mui/icons-material/CallMade";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import "../assets/styles/sections/footer.css";

const Footer = () => {
  return (
    <footer className="ftco-footer  ftco-section">
      <div className="container">
        <div className="row mb-5">
          <div className="col-md">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">MjMandelah</h2>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
              <ul className="ftco-footer-social list-unstyled float-md-left float-lft">
                <li className="">
                  <a href="#">
                    <span className="icon-twitter">
                      <FacebookIcon sx={{ fontSize: 24 }} />
                    </span>
                  </a>
                </li>
                <li className="">
                  <a href="#">
                    <span className="icon-facebook">
                      <InstagramIcon sx={{ fontSize: 24 }} />
                    </span>
                  </a>
                </li>
                <li className="">
                  <a href="#">
                    <span className="icon-instagram">
                      <XIcon sx={{ fontSize: 24 }} />
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Opening Hours</h2>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="py-2 d-block">
                    Monday: <span>08:00 - 22:00</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="py-2 d-block">
                    Tuesday: <span>08:00 - 22:00</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="py-2 d-block">
                    Wednesday: <span>08:00 - 22:00</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="py-2 d-block">
                    Thursday: <span>08:00 - 22:00</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="py-2 d-block">
                    Friday: <span>08:00 - 22:00</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="py-2 d-block">
                    Saturday: <span>08:00 - 22:00</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="py-2 d-block">
                    Sunday: <span>08:00 - 22:00</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Contact Information</h2>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="py-2 d-block">
                    132 adeniji adele road, lagos island, lagos state, Nigeria
                  </a>
                </li>
                <li>
                  <a href="#" className="py-2 d-block">
                    + 234 8167065474
                  </a>
                </li>
                <li>
                  <a
                    href="https://mojisola-aramide.netlify.app"
                    className="py-2 d-block"
                    target="_blank"
                  >
                    https://mojisola-aramide.netlify.app
                  </a>
                </li>
                <li>
                  <a href="#" className="py-2 d-block">
                    aramidemojisola7@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Newsletter</h2>
              <p>
                Far far away, behind the word mountains, far from the countries.
              </p>
              <form action="#" className="subscribe-form">
                <div className="form-group">
                  <span className="icon icon-paper-plane">
                    <CallMadeIcon />
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Subscribe"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <p>
              Copyright ©
              <script>document.write(new Date().getFullYear());</script> 2024
              All rights reserved |{" "}
              <i className="icon-heart" aria-hidden="true"></i>{" "}
              <a
                href="https://colorlib.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                MjMandelah
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
