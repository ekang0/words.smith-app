import { NavLink } from "react-router-dom";

function NavBar() {
  const navStyles = {

  };

  const activeStyles = {
    background: "#e3d9c3",
    fontWeight: "bold"
  };

  const linkStyles = {
    textDecoration: "none",
    color: "white",
    background: "#384b96",
    display: "inline-block",
    width: "50%",
    padding: "20px 0",
    fontSize: "30px",
    letterSpacing: "10px",
    textAlign: "center",
    lineHeight: "1"
  };

  return (
    <div className="navBar" style={navStyles}>
      <NavLink to="/wordssmith/instructions" style={linkStyles} activeStyle={activeStyles}>How to Play</NavLink>
    </div>
  )
};

export default NavBar;