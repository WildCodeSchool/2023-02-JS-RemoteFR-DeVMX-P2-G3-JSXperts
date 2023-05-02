import { useState } from "react";
import charlotte from "../assets/charlotte.png";
import charlottecat from "../assets/charlotte-cat.png";
import alaric from "../assets/alaric.png";
import alariccat from "../assets/alaric-cat.png";
import trung from "../assets/trung.png";
import trungcat from "../assets/trung-cat.png";
import amani from "../assets/amani.png";
import amanicat from "../assets/amani-cat.png";
import rudy from "../assets/rudy.png";
import rudycat from "../assets/rudy-cat.png";
import catheart from "../assets/catheart.png";
import thankyou from "../assets/thankyou.png";
import "../components/aboutUs.scss";

function AboutUs() {
  const [flip, setFlip] = useState(true);

  function handleClick() {
    setFlip(!flip);
  }

  return (
    <div className="about-wrapper">
      <div className="background" />
      <div className="about-us">
        <figure className="thank-img">
          <img src={thankyou} alt="Thank you !" />
        </figure>
        <figure className="charac-img">
          <div className="team-container">
            <img
              className="front-character"
              src={flip ? alaric : alariccat}
              alt="Alaric character"
            />
            <figcaption>Alaric</figcaption>
          </div>
          <div className="team-container">
            <img
              className="front-character"
              src={flip ? amani : amanicat}
              alt="Amani character"
            />
            <figcaption>Amani</figcaption>
          </div>
          <div className="team-container">
            <img
              className="front-character"
              src={flip ? charlotte : charlottecat}
              alt="Charlotte character"
            />
            <figcaption>Charlotte</figcaption>
          </div>
          <div className="team-container">
            <img
              className="front-character"
              src={flip ? rudy : rudycat}
              alt="Rudy character"
            />
            <figcaption>Rudy</figcaption>
          </div>
          <div className="team-container">
            <img
              className="front-character"
              src={flip ? trung : trungcat}
              alt="Trung character"
            />
            <figcaption>Trung</figcaption>
          </div>
        </figure>
      </div>
      <hr />
      <div className="cheerUs">
        <h1>Miaou !</h1>
        <br />
        <p>
          Nous sommes un groupe de développeurs passionnés de chats, et nous
          avons créé un jeu "Qui est-ce ?" unique en son genre. Avec notre amour
          pour les chats et notre expertise en développement de jeux, nous avons
          créé un jeu amusant et engageant qui met en scène nos amis félins
          préférés.
        </p>
        <br />
        <p>
          Nous avons soigneusement conçu chaque chat dans notre jeu avec des
          traits de personnalité uniques pour rendre le jeu encore plus amusant
          et excitant. Nous sommes fiers de notre création et nous espérons que
          vous apprécierez autant que nous avons aimé le créer.
        </p>
        <br />
        <p>
          Si vous êtes un amoureux des chats et que vous cherchez un jeu de
          société amusant et interactif pour jouer, vous êtes au bon endroit.
        </p>
        <button type="button" className="cat-button" onClick={handleClick}>
          <img className="cat-heart" src={catheart} alt="cat heart" />
        </button>
      </div>
    </div>
  );
}

export default AboutUs;
