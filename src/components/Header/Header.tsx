function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        SmartStart
      </div>

      <nav className="header__nav">
        <a className="header__link" href="#">
          Home
        </a>

        <a className="header__link" href="#">
          Generator
        </a>

        <a className="header__link" href="#">
          Templates
        </a>

        <a className="header__link" href="#">
          Preview
        </a>
      </nav>
    </header>
  );
}

export default Header;