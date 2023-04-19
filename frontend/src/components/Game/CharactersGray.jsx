import React, { useState } from "react";
import avatartest from "@assets/avatartest.png";

function CharactersGray() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
  };

  const styles = {
    cursor: "pointer",
    filter: isClicked ? "grayscale(100%)" : "none",
    PointerEvents: isClicked ? "none" : "auto",
  };

  return (
    <div>
      <img
        src={avatartest}
        alt="avatar test"
        // onClick={handleClick}
        style={styles}
      />
      <button type="button" onClick={handleClick}>
        mauvaise réponse
      </button>
    </div>
  );
}

export default CharactersGray;
