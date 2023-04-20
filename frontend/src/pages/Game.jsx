import { useState, useEffect } from "react";
import list from "@components/Characters/CharactersList";
import CheckCharacter from "@components/Game/CheckCharacter";
import "../components/Characters/Game.scss";
import CriteriaBtn from "../components/Game/CriteriaBtn";

function Game() {
  const [char, setChar] = useState({});
  const [isAvatar, setIsAvatar] = useState(false);
  const [crit, setCrit] = useState("");

  const handleRandomCharSelect = () => {
    const choosenId = Math.floor(Math.random() * 32);
    const choosenOne = list.find((cat) => cat.id === choosenId);
    setChar(choosenOne);
    setIsAvatar(false);
  };
  function handleClick(identifier) {
    setIsAvatar(identifier === char.id);
  }

  useEffect(() => {
    handleRandomCharSelect();
  }, []);

  return (
    <div className="GamePage">
      <div className="leftSide">
        <div className="charactersContainer">
          {list.map((item) => (
            <button
              type="button"
              key={item.id}
              onClick={() => handleClick(item.id)}
            >
              <img src={item.src} alt="cat" />
            </button>
          ))}
        </div>
        <CriteriaBtn crit={crit} setCrit={setCrit} />
      </div>

      <div className="rightSide">
        <img src={char.src} alt="random cat" className="guess" />
        <button
          type="button"
          onClick={handleRandomCharSelect}
          className="generate"
        >
          generate random cat to guess
        </button>
        <CheckCharacter
          src={char.src}
          id={char.id}
          criteria={char.criteria}
          crit={crit}
        />
        <p>Did i pick the right avatar ?</p>
        <p>{isAvatar.toString()}</p>
      </div>
    </div>
  );
}

export default Game;
