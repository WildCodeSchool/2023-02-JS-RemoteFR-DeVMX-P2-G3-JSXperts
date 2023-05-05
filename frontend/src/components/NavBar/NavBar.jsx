import { Link, useParams } from "react-router-dom";
import "./navBar.scss";
import { useState } from "react";
import logo from "@assets/piqui-logo2.png";
import PropTypes from "prop-types";
import useSound from "use-sound";
import mp3File from "@assets/cats-meow-111.mp3";

function NavBar({ setRegisteredPseudo, registeredPseudo, wins, setWins }) {
  const [showItems, setShowItems] = useState(false);
  const { pseudo } = useParams();
  const [play] = useSound(mp3File);
  const handleShowsItems = () => setShowItems(!showItems);

  return (
    <nav className={`navbar ${showItems ? "shownav" : "hidenav"} `}>
      <div className="navbarLogo">
        <Link to="/" className="navbarLink">
          <img src={logo} alt="logo PiQui" className="logo-img" />
        </Link>
      </div>
      <div className="navbarPseudo">{pseudo && <p>Chalut {pseudo} !</p>}</div>
      {registeredPseudo && (
        <div className="display-acc-name">
          {registeredPseudo} <br />
          Nombre de victoires: {wins}
        </div>
      )}
      <div>
        <ul className="navbarlist">
          {registeredPseudo && (
            <li className="navbarItems">
              <button
                type="button"
                onClick={() => {
                  setRegisteredPseudo("");
                  setWins(0);
                }}
              >
                Se déconnecter
              </button>
            </li>
          )}
          <li className="navbarItems">
            {pseudo ? (
              <Link to={`/game/${pseudo}`} className="navbarLink">
                Jeu
              </Link>
            ) : (
              <Link
                to="/game"
                className="navbarLink"
                onClick={() => {
                  play();
                  handleShowsItems();
                }}
              >
                Jeu
              </Link>
            )}
          </li>

          <li className="navbarItems">
            {pseudo ? (
              <Link to={`/rules/${pseudo}`} className="navbarLink">
                Règles
              </Link>
            ) : (
              <Link
                to="/rules"
                className="navbarLink"
                onClick={handleShowsItems}
              >
                Règles
              </Link>
            )}
          </li>

          <li className="navbarItems">
            {pseudo ? (
              <Link to={`/contact/${pseudo}`} className="navbarLink">
                Contact
              </Link>
            ) : (
              <Link
                to="/contact"
                className="navbarLink"
                onClick={handleShowsItems}
              >
                Contact
              </Link>
            )}
          </li>

          <li className="navbarItems">
            {pseudo ? (
              <Link to={`/aboutUs/${pseudo}`} className="navbarLink">
                L'équipe
              </Link>
            ) : (
              <Link
                to="/aboutUs"
                className="navbarLink"
                onClick={handleShowsItems}
              >
                L'équipe
              </Link>
            )}
          </li>
        </ul>
        <button
          type="button"
          className="navbarBurger"
          onClick={handleShowsItems}
        >
          <span className="burgerBar" />
        </button>
      </div>
    </nav>
  );
}

NavBar.propTypes = {
  registeredPseudo: PropTypes.string.isRequired,
  wins: PropTypes.number.isRequired,
  setWins: PropTypes.func.isRequired,
  setRegisteredPseudo: PropTypes.func.isRequired,
};

export default NavBar;
