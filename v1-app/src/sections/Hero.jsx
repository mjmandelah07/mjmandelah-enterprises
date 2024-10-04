import "../assets/styles/sections/hero.css";
import { Container, Row, Col } from "react-bootstrap";


export default function Hero() {
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
              <Row className=" slider-text align-items-center justify-content-center text-center">
                <Col
                  md={10}
                  sm={12}
                  className="ftco-animate  animate__fadeInUp ftco-animated"
                >
                  <h1 className="mb-3">
                    Order food for yourself at a time convenient for you
                  </h1>
                  <p>
                    <a
                      href="/order"
                      className="btn btn-primary btn-outline-white px-5 py-3"
                    >
                      Order now
                    </a>
                  </p>
                </Col>
              </Row>
            </Container>
          </div>
          <div className="carousel-item image-2">
            <div className="overlay"></div>
            <Container>
              <Row className=" slider-text align-items-center justify-content-center text-center">
                <Col
                  md={10}
                  sm={12}
                  className="ftco-animate animate__fadeInUp ftco-animated"
                >
                  <h1 className="mb-3">
                    Order food for yourself at a time convenient for you
                  </h1>
                  <p>
                    <a
                      href="/order"
                      className="btn btn-primary btn-outline-white px-5 py-3"
                    >
                      Order now
                    </a>
                  </p>
                </Col>
              </Row>
            </Container>
          </div>
          <div className="carousel-item image-3">
            <div className="overlay"></div>
            <Container>
              <Row className=" slider-text align-items-center justify-content-center text-center">
                <Col
                  md={10}
                  sm={12}
                  className="ftco-animate animate__fadeInUp ftco-animated"
                >
                  <h1 className="mb-3">
                    Order food for yourself at a time convenient for you
                  </h1>
                  <p>
                    <a
                      href="/order"
                      className="btn btn-primary btn-outline-white px-5 py-3"
                    >
                      Order now
                    </a>
                  </p>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
    </section>
  );
}
