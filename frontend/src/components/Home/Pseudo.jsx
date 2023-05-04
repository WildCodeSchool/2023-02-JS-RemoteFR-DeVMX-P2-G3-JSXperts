import { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "@components/Home/pseudo.scss";
import useSound from "use-sound";
import mp3File from "@assets/cats-meow-111.mp3";

export default function Pseudo({ registeredPseudo }) {
  const [pseudoInput, setPseudoInput] = useState("");
  const [play] = useSound(mp3File);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit} className="form-home">
      {!registeredPseudo && (
        <label className="container-pseudo">
          <input
            type="text"
            className="input-pseudo"
            placeholder="Entrez votre pseudo"
            value={pseudoInput}
            onChange={(e) => setPseudoInput(e.target.value)}
          />
        </label>
      )}
      <Link to={`/game/${pseudoInput}`} className="playbtn">
        <button type="submit" onClick={play} className="btnhome">
          Jouer
        </button>
      </Link>
    </form>
  );
}
Pseudo.propTypes = {
  registeredPseudo: PropTypes.string.isRequired,
};
