import PropTypes from "prop-types";
import "./CheckCharacters.scss";

function CheckCharacter({ criteria, crit }) {
  return (
    <div className="checkChar">
      {criteria && criteria.includes(crit) ? (
        <img
          src="src/assets/yes-png.jpg"
          alt="le personnage mystère a bien ce critère"
        />
      ) : (
        <img
          src="src/assets/no-png.jpg"
          alt="le personnage mystère n'a pas ce critère"
        />
      )}
    </div>
  );
}

CheckCharacter.propTypes = {
  criteria: PropTypes.isRequired,
  crit: PropTypes.string.isRequired,
};

export default CheckCharacter;
