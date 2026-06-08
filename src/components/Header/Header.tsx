import { NavLink } from "react-router-dom";

function Header() {
  function getLinkClass({ isActive }: { isActive: boolean }) {
    return isActive ? "header__link header__link--active" : "header__link";
  }

  return (
    <header className="header">
      <div className="header__logo">SmartStart</div>

      <nav className="header__nav">
        <NavLink className={getLinkClass} to="/">
          Home
        </NavLink>

        <NavLink className={getLinkClass} to="/generator">
          Generator
        </NavLink>

        <NavLink className={getLinkClass} to="/templates">
          Templates
        </NavLink>

        <NavLink className={getLinkClass} to="/preview">
          Preview
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;