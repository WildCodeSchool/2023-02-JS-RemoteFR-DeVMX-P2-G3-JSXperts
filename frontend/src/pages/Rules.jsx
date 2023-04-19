import "../components/rules.scss";

export default function Rules() {
  return (
    <div className="centering">
      <div className="rules">
        <h1>Bienvenue sur PiQui !</h1>
        <p>
          Dans PiQui le but est de trouver un personnage mystère choisi au
          hasard, avant de ne plus avoir le droit de poser des questions !
        </p>
        <p>
          Pour ça, tu vas pouvoir cliquer sur différents critères dans la barre
          des critères à gauche des personnages. Par exemple: "est-ce que le
          personnage que je dois deviner porte un chapeau ?" Je vais cliquer sur
          le critère chapeau pour avoir ma réponse !
        </p>
        <p>
          Une fois ton critère choisi, des personnages vont se griser. Cela
          t'indique qu'ils ne correspondent pas au personnage que tu dois
          deviner. Le but est d'éliminer le plus de profils avec le moins de
          coups possibles !
        </p>
        <p>
          Si ton compteur de questions arrive à zéro, tu peux cliquer sur l'un
          des personnages pour vérifier si c'est le personnage mystère. Et si tu
          es sûr(e) de toi, tu n'es même pas obligé(e) d'attendre !
        </p>
        <p>Prêt(e) à relever le défi ?</p>
      </div>
    </div>
  );
}
