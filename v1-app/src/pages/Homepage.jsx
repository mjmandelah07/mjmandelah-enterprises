import Hero from "../sections/Hero";
import OrderHeroForm from "../components/OrderHeroForm";
import WelcomeArea from "../sections/WelcomeArea";
import FoodArea from "../sections/FoodArea";
import ParallaxSection from "../components/ParallaxSection";
import ParallaxImage from "../assets/images/hero/bg_3.jpg.webp"
import SpecialDish from "../sections/SpecialDish";
import TestimonialSection from "../sections/Testimonial";
import Instagram from "../sections/Instagram";
import Footer from "../sections/Footer";

export default function Homepage() {
  return (
    <>
      <Hero />
      <OrderHeroForm />
      <WelcomeArea />
      <FoodArea />
      <ParallaxSection backgroundImage={ParallaxImage} />
      <SpecialDish />
      <TestimonialSection />
      <Instagram />
      <Footer />
    </>
  );
}
