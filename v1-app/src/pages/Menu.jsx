import Hero from "../sections/Hero";
import OrderHeroForm from "../components/OrderHeroForm";
import FoodArea from "../sections/FoodArea";
import Instagram from "../sections/Instagram";
import Footer from "../sections/Footer";

export default function Menu() {
  const customContent = (
    <>
      <h1 className="mb-3">Discover Our Exclusive Menu</h1>
    </>
  );
  return (
    <>
      <Hero content={customContent} />
      <OrderHeroForm />

      <FoodArea />
      <Instagram />
      <Footer />
    </>
  );
}
