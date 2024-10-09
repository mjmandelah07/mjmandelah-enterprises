import Hero from "../sections/Hero";

import SpecialDish from "../sections/SpecialDish";
import Instagram from "../sections/Instagram";
import Footer from "../sections/Footer";

export default function Specialties() {
  const customContent = (
    <>
      <h1 className="mb-3">Our Specialties</h1>
    </>
  );
  return (
    <>
      <Hero content={customContent} />
   

      <SpecialDish />
      <Instagram />
      <Footer />
    </>
  );
}
