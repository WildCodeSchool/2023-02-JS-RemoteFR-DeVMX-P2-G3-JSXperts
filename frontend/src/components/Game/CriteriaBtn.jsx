import "./styleCriteriaBtn.scss";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import list from "../Characters/CharactersList";

function CriteriaBtn({ crit, setCrit }) {
  const [showColors, setShowColors] = useState(false);

  const toggleColors = () => {
    setShowColors(!showColors);
  };

  const handleCriteria = (e) => {
    setCrit(e);
  };
  const compareCrit = () => {
    return list.filter((cat) => cat.criteria.includes(crit));
  };

  useEffect(() => {
    compareCrit();
  }, [crit]);

  return (
    <div className="btn-wrapper">
      <div className="criteria">
        <button
          type="button"
          className="criteriaButtons"
          value="glasses"
          onClick={(e) => handleCriteria(e.currentTarget.value)}
        >
          <img src="src/assets/glasses.png" alt="illustration lunettes" />
        </button>

        <button
          type="button"
          className="criteriaButtons"
          onClick={toggleColors}
        >
          <img
            src="src/assets/colorPicker.png"
            alt="illustration choix de couleur"
          />
        </button>
        <button
          type="button"
          className="criteriaButtons"
          value="accessories"
          onClick={(e) => handleCriteria(e.currentTarget.value)}
        >
          <img src="src/assets/hat.png" alt="illustration chapeau" />
        </button>
        <button
          type="button"
          className="criteriaButtons"
          value="collar"
          onClick={(e) => handleCriteria(e.currentTarget.value)}
        >
          <img src="src/assets/collar.png" alt="illustration collier" />
        </button>
      </div>
      {showColors && (
        <div className="sideNav">
          <button
            aria-label="white"
            type="button"
            className="round1"
            value="white"
            onClick={(e) => handleCriteria(e.currentTarget.value)}
          />
          <button
            aria-label="yellow"
            type="button"
            className="round2"
            value="yellow"
            onClick={(e) => handleCriteria(e.currentTarget.value)}
          />
          <button
            aria-label="dark yellow"
            type="button"
            className="round3"
            value="dark yellow"
            onClick={(e) => handleCriteria(e.currentTarget.value)}
          />
          <button
            aria-label="orange"
            type="button"
            className="round4"
            value="orange"
            onClick={(e) => handleCriteria(e.currentTarget.value)}
          />
          <button
            aria-label="pink"
            type="button"
            className="round5"
            value="pink"
            onClick={(e) => handleCriteria(e.currentTarget.value)}
          />
          <button
            aria-label="dark red"
            type="button"
            className="round6"
            value="dark red"
            onClick={(e) => handleCriteria(e.currentTarget.value)}
          />
          <button
            aria-label="dark grey"
            type="button"
            className="round7"
            value="dark grey"
            onClick={(e) => handleCriteria(e.currentTarget.value)}
          />
        </div>
      )}
    </div>
  );
}

CriteriaBtn.propTypes = {
  crit: PropTypes.string.isRequired,
  setCrit: PropTypes.func.isRequired,
};
export default CriteriaBtn;
