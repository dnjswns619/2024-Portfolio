import React from "react";

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__logo">
        <a href="#intro">Jun's Web Portfolio</a>
      </h1>
      <nav className="header__nav nav">
        <ul className="nav__wrap">
          <li className="nav__item">
            <a href="#about">About</a>
          </li>
          <li className="nav__item">
            <a href="#port">Portfolio</a>
          </li>
          <li className="nav__item">
            <a href="#work">Work</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;