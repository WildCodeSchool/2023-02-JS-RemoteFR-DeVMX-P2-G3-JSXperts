import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../components/home.scss";
import UselessFactsApi from "@components/Home/UselessFactsApi";
import Pseudo from "@components/Home/Pseudo";

export default function Home({ setPseudoInput, pseudoInput }) {
  return (
    <div className="centering-home">
      <div className="page-bg">
        <div className="animation-wrapper">
          <div className="particle particle-1" />
          <div className="particle particle-2" />
          <div className="particle particle-3" />
          <div className="particle particle-4" />
        </div>
      </div>

      <div className="container-homePage">
        <h1>Bienvenue sur PiQui !</h1>
        <p className="rules-link-text">
          Vous pouvez consulter les <Link to="rules">règles du jeu</Link> avant
          de lancer une partie !
        </p>
        <p className="rules-link-text">Sinon vous pouvez directement jouer !</p>
        <Pseudo setPseudoInput={setPseudoInput} pseudoInput={pseudoInput} />
        <UselessFactsApi />
      </div>
    </div>
  );
}

Home.propTypes = {
  pseudoInput: PropTypes.string.isRequired,
  setPseudoInput: PropTypes.func.isRequired,
};
