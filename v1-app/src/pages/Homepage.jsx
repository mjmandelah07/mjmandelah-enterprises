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
   const customContent = (
     <>
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
     </>
   );
  return (
    <>
      <Hero content={customContent} />
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
