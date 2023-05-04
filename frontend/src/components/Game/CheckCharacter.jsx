import PropTypes from "prop-types";
import "./checkCharacters.scss";
import { useEffect } from "react";

function CheckCharacter({ criteria, crit, inGame, setInGame, list }) {
  // props: criteria is array criteria of mistery cat
  // crit is the criteria selected with the button
  const btns = document.querySelectorAll(".cats");

  function filtering() {
    if (criteria.includes(crit)) {
      setInGame(inGame.filter((item) => item.criteria.includes(crit)));
      for (const i of inGame) {
        if (!i.criteria.includes(crit)) i.active = false;
      }
    } else {
      setInGame(inGame.filter((item) => !item.criteria.includes(crit)));
      for (const i of inGame) {
        if (i.criteria.includes(crit)) i.active = false;
      }
    }
  }

  useEffect(() => {
    if (criteria) filtering();
    const result = list.filter((obj) => obj.active === false);
    for (const j of result) {
      for (const i of btns) {
        if (j.id === parseInt(i.id, 10)) i.classList.add("disabled");
      }
    }
  }, [crit]);
  return (
    <div className="checkChar">
      {criteria && criteria.includes(crit) ? (
        <img
          className="images notDisplayed"
          src="../src/assets/yes-png.jpg"
          alt="le personnage mystère a bien ce critère"
        />
      ) : (
        <img
          className="images notDisplayed"
          src="../src/assets/no-png.jpg"
          alt="le personnage mystère n'a pas ce critère"
        />
      )}
    </div>
  );
}

CheckCharacter.propTypes = {
  criteria: PropTypes.arrayOf(PropTypes.string),
  crit: PropTypes.string.isRequired,
  inGame: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
  setInGame: PropTypes.func.isRequired,
  list: PropTypes.arrayOf(PropTypes.shape),
};

CheckCharacter.defaultProps = {
  criteria: null,
  list: null,
};

export default CheckCharacter;
