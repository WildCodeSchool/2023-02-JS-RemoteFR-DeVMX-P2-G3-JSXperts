import "../components/rules.scss";
import useSound from "use-sound";
import mp3File from "@assets/cats-meow-111.mp3";
import catRules from "@assets/cat_rules.png";
import { useState } from "react";
import { Link } from "react-router-dom";

const rulesPages = [
  {
    message: "Laisse moi t'expliquer comment jouer !",
  },
  {
    message:
      "Dans PiQui ton objectif est de trouver un chat mystère choisi au hasard, avant de ne plus avoir le droit de poser des questions !",
  },
  {
    message: `Pour ça, tu vas pouvoir cliquer sur différents critères. Par exemple: "est-ce que le chat que je dois deviner porte un chapeau ?" Je vais cliquer sur le critère chapeau pour avoir ma réponse !`,
  },
  {
    message:
      "Une fois ton critère choisi, des chats vont se griser. Cela t'indique qu'ils ne correspondent pas au chat que tu dois deviner. L'objectif est d'éliminer le plus de profils avec le moins de coups possibles !",
  },
  {
    message:
      "Si ton compteur de questions arrive à zéro, tu peux cliquer sur l'un des chats pour vérifier si c'est le chat mystère. Tu as trois chances ! Et si tu es sûr(e) de toi, tu n'es même pas obligé(e) d'attendre !",
  },
  {
    message: "Prêt(e) à relever le défi ?",
  },
];

export default function Rules() {
  const [textIndex, setTextIndex] = useState(0);
  const [play] = useSound(mp3File);

  const textPrevious = () => {
    setTextIndex(textIndex - 1);
  };
  const textNext = () => {
    setTextIndex(textIndex + 1);
  };
  return (
    <div className="centering">
      <div className="background" />
      <div className="bubble-content">
        <div className="content1">
          <p>{rulesPages[textIndex].message}</p>
          {textIndex === rulesPages.length - 1 && (
            <Link to="../game" className="playBtnRules">
              <button
                type="button"
                aria-label="gameBtnRules"
                className="gameBtnRules"
                onClick={play}
              >
                C'est parti !
              </button>
            </Link>
          )}
        </div>
        <div className="buttons">
          {textIndex > 0 && (
            <button
              type="button"
              aria-label="preBtn"
              className="previousBtn"
              onClick={textPrevious}
            />
          )}
          {textIndex < rulesPages.length - 1 && (
            <button
              type="button"
              aria-label="nexBtn"
              className="nextBtn"
              onClick={textNext}
            />
          )}
        </div>
      </div>
      <img className="cat-img" src={catRules} alt="cat img" />
    </div>
  );
}
