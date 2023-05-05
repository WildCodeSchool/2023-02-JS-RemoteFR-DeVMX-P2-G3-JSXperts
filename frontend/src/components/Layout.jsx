import PropTypes from "prop-types";
import NavBar from "./NavBar/NavBar";

function Layout({
  children,
  setRegisteredPseudo,
  registeredPseudo,
  wins,
  setWins,
}) {
  return (
    <>
      <NavBar
        setRegisteredPseudo={setRegisteredPseudo}
        registeredPseudo={registeredPseudo}
        wins={wins}
        setWins={setWins}
      />
      {children}
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  registeredPseudo: PropTypes.string.isRequired,
  wins: PropTypes.number.isRequired,
  setWins: PropTypes.func.isRequired,
  setRegisteredPseudo: PropTypes.func.isRequired,
};

export default Layout;
