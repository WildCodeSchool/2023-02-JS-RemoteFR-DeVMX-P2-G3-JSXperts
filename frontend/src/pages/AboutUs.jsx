import thankyou from "../assets/thankyou.png";
import charlotte from "../assets/charlotte.png";
import alaric from "../assets/alaric.png";
import trung from "../assets/trung.png";
import amani from "../assets/amani.png";
import avatartest from "../assets/avatartest.png";
import stars from "../assets/stars.jpg";
import "../components/aboutUs.scss";

function AboutUs() {
  return (
    <div className="about-wrapper">
      <div className="about-us">
        <figure className="thank-img">
          <img src={thankyou} alt="Thank you !" />
        </figure>
        <figure className="charac-img">
          <div className="alaric-container">
            <img className="alaric" src={alaric} alt="Alaric character" />
            <figcaption>Alaric</figcaption>
          </div>
          <div className="amani-container">
            <img className="amani" src={amani} alt="Amani character" />
            <figcaption>Amani</figcaption>
          </div>
          <div className="charlotte-container">
            <img
              className="charlotte"
              src={charlotte}
              alt="Charlotte character"
            />
            <figcaption>Charlotte</figcaption>
          </div>
          <div className="rudy-container">
            <img className="rudy" src={avatartest} alt="Rudy character" />
            <figcaption>Rudy</figcaption>
          </div>
          <div className="trung-container">
            <img className="trung" src={trung} alt="Trung character" />
            <figcaption>Trung</figcaption>
          </div>
        </figure>
      </div>
      <hr />
      <div className="cheerUs">
        <h1>Soutenez-nous!</h1>
        <br />
        <p>Bienvenue sur la page de soutien de notre jeu web !</p>
        <br />
        <p>
          Nous sommes ravis que vous ayez choisi de jouer à notre jeu et nous
          sommes là pour vous aider à profiter pleinement de votre expérience de
          jeu.
        </p>
        <br />
        <p>
          Nous comprenons que parfois vous pouvez rencontrer des défis
          techniques, des questions sur le gameplay ou des problèmes de compte,
          et nous sommes là pour vous offrir notre soutien et résoudre vos
          problèmes.
        </p>
        <br />
        <p>
          Que vous soyez un nouveau joueur ou que vous ayez déjà de l'expérience
          dans notre jeu, nous sommes déterminés à vous offrir un soutien de
          qualité pour vous aider à profiter pleinement de l'univers de jeu que
          nous avons créé.
        </p>
        <img className="ratingStars" src={stars} alt="rating stars" />
      </div>
    </div>
  );
}

export default AboutUs;
