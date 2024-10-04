import { Typography } from "@mui/material";
import PropTypes from "prop-types";
import "../assets/styles/components/DishItem.css";

const DishItem = ({ image, title, description, price, index }) => {
  const orderClass =
    Math.floor(index / 2) % 2 === 0 ? "order-last" : "order-first";

  return (
    <div className={`block-3 d-md-flex`} >
      <div
        className={`image ${orderClass}`}
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="text text-center order-first">
        <Typography variant="h2" className="heading">
          {title}
        </Typography>
        <Typography variant="body2">{description}</Typography>
        <span className="price">{price}</span>
      </div>
    </div>
  );
};

DishItem.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default DishItem;
