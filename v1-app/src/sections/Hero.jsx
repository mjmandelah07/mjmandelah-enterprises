import PropTypes from "prop-types";
import "../assets/styles/sections/hero.css";
import { Container, Row, Col } from "react-bootstrap";

const Hero = ({ content }) => {
  return (
    <section className="home-slider owl-carousel owl-loaded owl-drag">
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item image-1 active">
            <div className="overlay"></div>
            <Container>
              <Row className="slider-text align-items-center justify-content-center text-center">
                <Col
                  md={10}
                  sm={12}
                  className="ftco-animate animate__fadeInUp ftco-animated"
                >
                  {content}
                </Col>
              </Row>
            </Container>
          </div>
          <div className="carousel-item image-2">
            <div className="overlay"></div>
            <Container>
              <Row className="slider-text align-items-center justify-content-center text-center">
                <Col
                  md={10}
                  sm={12}
                  className="ftco-animate animate__fadeInUp ftco-animated"
                >
                  {content}
                </Col>
              </Row>
            </Container>
          </div>
          <div className="carousel-item image-3">
            <div className="overlay"></div>
            <Container>
              <Row className="slider-text align-items-center justify-content-center text-center">
                <Col
                  md={10}
                  sm={12}
                  className="ftco-animate animate__fadeInUp ftco-animated"
                >
                  {content}
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = {
  content: PropTypes.node.isRequired,
};

export default Hero;
