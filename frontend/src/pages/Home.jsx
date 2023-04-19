import { Link } from "react-router-dom";
import "../components/home.scss";
import UselessFactsApi from "@components/Home.jsx/UselessFactsApi";

export default function Home() {
  return (
    <div className="centering">
      <div className="homePage">
        <h1>Bienvenue sur PiQui!</h1>
        <p>
          Vous pouvez consulter les <Link to="rules">regles du jeu</Link> avant
          de lancer une partie!
        </p>
        <p>Sinon vous pouvez directement jouer!</p>
        <Link to="game" className="playbtn">
          <button type="button">PLAY</button>
        </Link>
        <UselessFactsApi />
      </div>
    </div>
  );
}
