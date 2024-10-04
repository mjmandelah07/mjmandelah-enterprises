import InstagramItem from "../components/InstagramItem";
import { images } from "../datas/instagramData.js";
import "../assets/styles/sections/InstagramSection.css";

const InstagramSection = () => {
  return (
    <section className="instagram">
      <div className="container-fluid">
        <div className="row no-gutters justify-content-center pb-5">
          <div className="col-md-7 text-center heading-section">
            <h2>
              <span>Instagram</span>
            </h2>
          </div>
        </div>
        <div className="row no-gutters">
          {images.map((image, index) => (
            <InstagramItem key={index} image={image} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;
