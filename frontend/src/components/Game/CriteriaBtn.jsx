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
        <button type="button" className="criteriaButtons" id="criteriaGlasses">
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
          id="criteriaFurColor"
        >
          <img
            src="src/assets/colorPicker.png"
            alt="illustration choix de couleur"
            className="imageColorPicker"
          />
        </button>
        <button
          type="button"
          className="criteriaButtons"
          id="criteriaHeadAccessories"
        >
          <img
            src="src/assets/hat.png"
            alt="illustration chapeau"
            className="imageHat"
          />
        </button>
        <button type="button" className="criteriaButtons" id="criteriaCollar">
          <img
            className="imageCollar"
            src="src/assets/collar.png"
            alt="illustration collier"
          />
        </button>
      </div>
      {showColors && (
        <div className="sideNav">
          <button
            type="button"
            className="round1"
            aria-label="white fur"
            id="whiteFurCriteria"
          />
          <button
            type="button"
            className="round2"
            aria-label="yellow fur"
            id="yellowFurCriteria"
          />
          <button
            type="button"
            className="round3"
            aria-label="dark yellow fur"
            id="darkyellowFurCriteria"
          />
          <button
            type="button"
            className="round4"
            aria-label="orange fur"
            id="orangeFurCriteria"
          />
          <button
            type="button"
            className="round5"
            aria-label="pink fur"
            id="pinkFurCriteria"
          />
          <button
            type="button"
            className="round6"
            aria-label="dark red fur"
            id="darkRedFurCriteria"
          />
          <button
            type="button"
            className="round7"
            aria-label="grey fur"
            id="greyFurCriteria"
          />
        </div>
      )}
    </div>
  );
}

export default CriteriaBtn;
