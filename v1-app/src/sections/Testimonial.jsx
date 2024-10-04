import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import TestimonialItem from "../components/TestimonialItem";
import { testimonialData } from "../datas/testimonialData";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "../assets/styles/sections/TestimonialSection.css";

const TestimonialSection = () => {
  return (
    <section className="ftco-section testimony-section">
      <div className="container">
        <div className="row justify-content-center mb-5 pb-5">
          <div className="col-md-7 text-center heading-section">
            <span className="subheading">Guests Says</span>
            <h2>Our Satisfied Guests says</h2>
          </div>
        </div>
        <div className="row ftco-animate fadeInUp ftco-animated">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="testimonial-swiper"
          >
            {testimonialData.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <TestimonialItem
                  image={testimonial.image}
                  stars={testimonial.stars}
                  message={testimonial.message}
                  name={testimonial.name}
                  position={testimonial.position}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
