// import { Component } from 'react';
import { Link } from "react-router-dom";
import "./NavBar.scss";
import { useState } from "react";

function NavBar() {
  const [showItems, setShowItems] = useState(false);
  function handleShowsItems() {
    setShowItems(!showItems);
  }
  return (
    <nav className={`navbar ${showItems ? "shownav" : "hidenav"} `}>
      <div className="navbarLogo">
        <Link to="/" className="navbarLink">
          <h1>PiQui</h1>
        </Link>
      </div>
      <div>
        <ul className="navbarlist">
          <li className="navbarItems">
            <Link to="game" className="navbarLink">
              Jeu
            </Link>
          </li>
          <li className="navbarItems">
            <Link to="rules" className="navbarLink">
              Regle
            </Link>
          </li>
          <li className="navbarItems">
            <Link to="contact" className="navbarLink">
              Contact
            </Link>
          </li>
          <li className="navbarItems">
            <Link to="aboutUs" className="navbarLink">
              Qui somme nous?
            </Link>
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

export default NavBar;
