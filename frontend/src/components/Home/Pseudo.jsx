import { useState } from "react";
import { Link } from "react-router-dom";
import "@components/Home/pseudo.scss";

export default function Pseudo() {
  const [pseudoInput, setPseudoInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit} className="form-home">
      <label className="container-pseudo">
        <input
          type="text"
          className="input-pseudo"
          placeholder="Entrez votre pseudo"
          value={pseudoInput}
          onChange={(e) => setPseudoInput(e.target.value)}
        />
      </label>
      <Link to={`/game/${pseudoInput}`} className="playbtn">
        <button type="submit" className="btnhome">
          Jouer
        </button>
      </Link>
    </form>
  );
}
