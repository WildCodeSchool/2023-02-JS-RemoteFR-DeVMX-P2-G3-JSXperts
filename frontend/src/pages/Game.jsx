import { useState, useEffect } from "react";
import list from "@components/Characters/CharactersList";
import GetCharacters from "../components/Characters/GetCharacters";
import "../components/Characters/Game.scss";
import CriteriaBtn from "../components/Game/CriteriaBtn";

function Game() {
  const [char, getChar] = useState({});

  const randomCharSelect = () => {
    const choosenId = Math.floor(Math.random() * 32);
    const choosenOne = list.find((cat) => cat.id === choosenId);
    return choosenOne;
  };

  const handleRandomCharSelect = () => {
    getChar(randomCharSelect());
  };

  useEffect(() => {
    getChar(randomCharSelect());
  }, []);

  return (
    <div className="GamePage">
      <div className="charactersContainer">
        {list.map((item) => (
          <GetCharacters imgSrc={item.src} key={item.id} />
        ))}
      </div>
      <CriteriaBtn />
      <button type="button" onClick={handleRandomCharSelect}>
        generate random cat to guess
      </button>
      <img src={char.src} alt="random cat" />
    </div>
  );
}

export default Game;
