import React from 'react';

export default function Header() {
  return (
    <nav>
      <div className="nav-container">
        <div className="logo">May Cheong</div>
        <ul className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </ul>
      </div>
    </nav>
  );
}

