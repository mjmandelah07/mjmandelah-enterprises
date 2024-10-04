import PropTypes from "prop-types";
import InstagramIcon from "@mui/icons-material/Instagram";

const InstagramItem = ({ image }) => {
  return (
    <div className="col-sm-12 col-md insta-item">
      <a
        href={image}
        className="insta-img image-popup"
        style={{ backgroundImage: `url(${image})` }}
        target="_blank"
      >
        <div className="icon d-flex justify-content-center">
          <span className="icon-instagram align-self-center"><InstagramIcon sx={{fontSize: "40px"}}/></span>
        </div>
      </a>
    </div>
  );
};

InstagramItem.propTypes = {
  image: PropTypes.string.isRequired,
};

export default InstagramItem;
