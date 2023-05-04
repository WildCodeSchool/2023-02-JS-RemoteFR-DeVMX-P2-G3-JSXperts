import PropTypes from "prop-types";
import NavBar from "./NavBar/NavBar";

function Layout({ children, setRegisteredPseudo, registeredPseudo, wins }) {
  return (
    <>
      <NavBar
        setRegisteredPseudo={setRegisteredPseudo}
        registeredPseudo={registeredPseudo}
        wins={wins}
      />
      {children}
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  registeredPseudo: PropTypes.string.isRequired,
  wins: PropTypes.number.isRequired,
  setRegisteredPseudo: PropTypes.func.isRequired,
};

export default Layout;
