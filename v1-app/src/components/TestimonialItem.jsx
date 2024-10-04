import PropTypes from "prop-types";
import StarIcon from "@mui/icons-material/Star";
import "../assets/styles/components/TestimonialItem.css";

const TestimonialItem = ({ image, stars, message, name, position }) => {
  return (
    <div className="item text-center">
      <div className="testimony-wrap p-4 pb-5">
        <div
          className="user-img mb-4"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <div className="text">
          <p className="star-rate">
            {Array.from({ length: Math.floor(stars) }).map((_, i) => (
              <StarIcon key={i} sx={{ color: "#ffb400" }} />
            ))}
            {stars < 5 && <span className="icon-star-half-full"></span>}
          </p>
          <p className="mb-5">{message}</p>
          <p className="name">{name}</p>
          <span className="position">{position}</span>
        </div>
      </div>
    </div>
  );
};

TestimonialItem.propTypes = {
  image: PropTypes.string.isRequired,
  stars: PropTypes.number.isRequired,
  message: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
};

export default TestimonialItem;
