import { ParallaxBanner } from "react-scroll-parallax";
import PropTypes from "prop-types";
import "../assets/styles/components/ParallaxSection.css";

const ParallaxSection = ({ backgroundImage }) => {
  return (
    <ParallaxBanner
      layers={[{ image: backgroundImage, speed: -20 }]}
      className="aspect-[2/1] parallax-img"
    >
      <div className="overlay"></div>
      <div className="container position-relative">
        <div className="row justify-content-center mb-5 pb-5">
          <div className="col-md-7 text-center heading-section heading-section-white ftco-animate fadeInUp ftco-animated">
            <h2>Our Specialties</h2>
          </div>
        </div>
      </div>
    </ParallaxBanner>
  );
};

ParallaxSection.propTypes = {
  backgroundImage: PropTypes.string.isRequired,
};

export default ParallaxSection;
