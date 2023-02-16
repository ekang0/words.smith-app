import { NavLink } from "react-router-dom";

function NavBar() {
  const activeStyles = {
    background: "#e3d9c3",
    fontWeight: "bold"
  };

  return (
    <div className="navBar">
      <NavLink to="/wordssmith/instructions" className="navLink" activeStyle={activeStyles}>How to Play</NavLink>
    </div>
  )
};

export default NavBar;