import PropTypes from "prop-types";

function GetCharacters({ imgSrc, key }) {
  return <img src={imgSrc} alt="icons" key={key} />;
}

GetCharacters.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  key: PropTypes.string.isRequired,
};

export default GetCharacters;
