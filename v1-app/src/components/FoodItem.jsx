import PropTypes from "prop-types";
import "../assets/styles/components/food_item.css"

const FoodItem = ({ image, title, description, price }) => {
  return (
    <div className="menus d-flex ftco-animate fadeInUp ftco-animated">
      <div
        className="menu-img"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="text d-flex">
        <div className="one-half">
          <h3>{title}</h3>
          <p>
            {description}
          </p>
        </div>
        <div className="one-forth">
          <span className="price">{price}</span>
        </div>
      </div>
    </div>
  );
};



FoodItem.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default FoodItem;
