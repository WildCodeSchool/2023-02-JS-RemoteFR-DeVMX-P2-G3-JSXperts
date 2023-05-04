import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import useSound from "use-sound";
import mp3File from "@assets/cats-meow-111.mp3";
import guesscat from "@assets/guesscat.png";
import list from "../components/Characters/CharactersList";
import CheckCharacter from "../components/Game/CheckCharacter";
import "../components/Game/game.scss";
import CriteriaBtn from "../components/Game/CriteriaBtn";

let newList = [];
function shuffle() {
  const shuffledArray = list.sort(() => 0.5 - Math.random());
  return shuffledArray.slice(0, 32);
}
newList = shuffle();

function Game({ setWins, wins, registeredPseudo }) {
  const [char, setChar] = useState({});
  const [isAvatar, setIsAvatar] = useState(false);
  const [crit, setCrit] = useState("");
  const [tries, setTries] = useState(3);
  const [critCounter, setCritCounter] = useState(4);
  const [inGame, setInGame] = useState(newList);
  const [play] = useSound(mp3File);

  const disabled = document.querySelectorAll(".disabled");

  // randomly select the mystery character
  const handleRandomCharSelect = () => {
    const choosenId = Math.floor(Math.random() * 32);
    const choosenOne = newList.find((cat) => cat.id === newList[choosenId].id);
    setChar(choosenOne);
    setIsAvatar(false);
  };

  const handleClick = (e, item) => {
    setTries((counter) => counter - 1);
    setIsAvatar(item.id === char.id);
    return [
      !isAvatar && e.currentTarget.classList.add("disabled"),
      item.id === char.id && setWins((win) => win + 1),
    ];
  };

  useEffect(() => {
    axios.patch(`${import.meta.env.VITE_BACKEND_URL}/win-counter`, {
      wins,
      registeredPseudo,
    });
  }, [wins]);

  useEffect(() => {
    handleRandomCharSelect();
  }, []);

  // fonction bouton replay//
  function launchNewGame() {
    play();
    setCritCounter(4);
    setTries(3);
    newList = shuffle();
    handleRandomCharSelect();
    setInGame(newList);
    setCrit("");
    for (const i of disabled) {
      i.classList.remove("disabled");
    }
    for (const i of newList) {
      i.active = true;
    }
  }

  const classSwitch = ["cats", (tries === 0 || isAvatar) && "disabled"].join(
    " "
  );

  const conditionnalydisplayAnswer = () => {
    if (tries > 0) {
      return tries;
    }
    return 0;
  };

  return (
    <div className="GamePage">
      <div className="background" />
      <div className="leftSide">
        <div className="charactersContainer">
          {newList &&
            newList.map((item) => (
              <button
                type="button"
                key={item.id}
                id={item.id}
                className={classSwitch}
                onClick={(e) => handleClick(e, item)}
              >
                <img src={item.src} alt="cat" />
              </button>
            ))}
        </div>
        <CriteriaBtn
          crit={crit}
          setCrit={setCrit}
          critCounter={critCounter}
          setCritCounter={setCritCounter}
          tries={tries}
          isAvatar={isAvatar}
        />
      </div>

      <div className="rightSide">
        <figure>
          <img
            src={isAvatar ? char.src : guesscat}
            alt="random cat"
            className={isAvatar ? "winner" : "guess"}
          />
          <figcaption>
            {isAvatar ? "C'est lui!" : "Devine le chat mystère!"}
          </figcaption>
        </figure>
        <p>
          {tries <= 1 ? "Essai restant:" : "Essais restants:"} <br />
          {conditionnalydisplayAnswer()}
        </p>
        <p>
          {critCounter <= 1 ? "Critère restant:" : "Critères restants:"} <br />{" "}
          {critCounter}
        </p>
        <CheckCharacter
          src={char && char.src}
          id={char && char.id}
          criteria={char && char.criteria}
          crit={crit}
          inGame={inGame}
          setInGame={setInGame}
          list={newList}
        />
        {(isAvatar || tries <= 0) && (
          <div>
            {isAvatar ? <p>Bravo</p> : <p>Dommage</p>}
            <button id="replay" type="button" onClick={launchNewGame}>
              Rejouer
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

Game.propTypes = {
  wins: PropTypes.number.isRequired,
  setWins: PropTypes.func.isRequired,
  registeredPseudo: PropTypes.string.isRequired,
};

export default Game;
