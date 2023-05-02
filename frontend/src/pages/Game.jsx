import { useState, useEffect } from "react";
import list from "../components/Characters/CharactersList";
import CheckCharacter from "../components/Game/CheckCharacter";
import "../components/Characters/Game.scss";
import CriteriaBtn from "../components/Game/CriteriaBtn";

function Game() {
  const [char, setChar] = useState({});
  const [isAvatar, setIsAvatar] = useState(false);
  const [crit, setCrit] = useState("");
  const [inGame, setInGame] = useState(list);
  const [tries, setTries] = useState(3);
  const [critCounter, setCritCounter] = useState(5);

  const disabled = document.querySelectorAll(".disabled");

  const handleRandomCharSelect = () => {
    const choosenId = Math.floor(Math.random() * 32);
    const choosenOne = list.find((cat) => cat.id === choosenId);
    setChar(choosenOne);
    setIsAvatar(false);
  };

  function handleClick(e, item) {
    setTries((counter) => counter - 1);
    setIsAvatar(item.id === char.id);
    return !isAvatar && e.currentTarget.classList.add("disabled");
  }

  useEffect(() => {
    handleRandomCharSelect();
  }, []);

  // fonction bouton replay//
  function launchNewGame() {
    setCritCounter(5);
    setTries(3);
    handleRandomCharSelect();
    setInGame(list);
    setCrit("");
    for (const i of disabled) {
      i.classList.remove("disabled");
    }
    for (const i of list) {
      i.active = true;
    }
  }

  const classSwitch = ["cats", (tries === 0 || isAvatar) && "disabled"].join(
    " "
  );

  const conditionnalydispolayAnswer = () => {
    if (tries > 0) {
      return tries;
    }
    if (isAvatar) {
      return "c'était moins une!";
    }
    return "C'est perdu. Dommage!";
  };

  return (
    <div className="GamePage">
      <div className="background" />
      <div className="leftSide">
        <div className="charactersContainer">
          {list.map((item) => (
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
            src={isAvatar ? char.src : "https://robohash.org/Alaric?set=set4"}
            alt="random cat"
            className={isAvatar ? "winner" : "guess"}
          />
          <figcaption>
            {isAvatar ? "C'est lui!" : "Devine le chat mystère!"}
          </figcaption>
        </figure>
        <p>
          essai restant:
          {conditionnalydispolayAnswer()}
        </p>
        <p>critères restant: {critCounter}</p>
        <CheckCharacter
          src={char && char.src}
          id={char && char.id}
          criteria={char && char.criteria}
          crit={crit}
          inGame={inGame}
          setInGame={setInGame}
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

export default Game;
