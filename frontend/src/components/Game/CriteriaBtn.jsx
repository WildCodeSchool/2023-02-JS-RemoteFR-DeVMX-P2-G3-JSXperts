import "./styleCriteriaBtn.scss";
import { useState } from "react";

function CriteriaBtn() {
  const [showColors, setShowColors] = useState(false);

  const toggleColors = () => {
    setShowColors(!showColors);
  };

  return (
    <div className="btn-wrapper">
      <div className="criteria">
        <button type="button" className="criteriaButtons">
          <img
            src="src/assets/glasses.png"
            className="imageGlasses"
            alt="illustration lunettes"
          />
        </button>

        <button
          type="button"
          className="criteriaButtons"
          onClick={toggleColors}
        >
          <img
            src="src/assets/colorPicker.png"
            alt="illustration choix de couleur"
            className="imageColorPicker"
          />
        </button>
        <button type="button" className="criteriaButtons">
          <img
            src="src/assets/hat.png"
            alt="illustration chapeau"
            className="imageHat"
          />
        </button>
        <button type="button" className="criteriaButtons">
          <img
            className="imageMoustache"
            src="src/assets/moustache.png"
            alt="illustration moustache"
          />
        </button>
      </div>
      {showColors && (
        <div className="sideNav">
          <button
            type="button"
            className="round1"
            aria-label="blond criteria"
          />
          <button type="button" className="round2" aria-label="red criteria" />
          <button
            type="button"
            className="round3"
            aria-label="brown criteria"
          />
          <button type="button" className="round4" aria-label="dark criteria" />
        </div>
      )}
    </div>
  );
}

export default CriteriaBtn;
