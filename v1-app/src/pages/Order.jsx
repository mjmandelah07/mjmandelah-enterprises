import Hero from "../sections/Hero";
import OrderForm from "../components/OrderForm";
import Instagram from "../sections/Instagram";
import Footer from "../sections/Footer";

export default function Order() {
  const customContent = (
    <>
      <h1 className="mb-3">Your Order</h1>
    </>
  );
  return (
    <>
      <Hero content={customContent} />

      <OrderForm />
      <Instagram />
      <Footer />
    </>
  );
}
