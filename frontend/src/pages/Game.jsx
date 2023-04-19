import list from "@components/Characters/CharactersList";
import GetCharacters from "../components/Characters/GetCharacters";
import "../components/Characters/Game.scss";
import CriteriaBtn from "../components/Game/CriteriaBtn";

function Game() {
  return (
    <div className="GamePage">
      <div className="charactersContainer">
        {list.map((item) => (
          <GetCharacters imgSrc={item.src} key={item.id} />
        ))}
      </div>
      <CriteriaBtn />
    </div>
  );
}

export default Game;
