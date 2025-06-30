import React from 'react';
import SocialLinks from '../sections/SocialLinks';
export default function Header() {
  return (
    <nav>
      <div className="nav-container">
        <div className="logo">May Cheong </div>
        <div className="nav-right">
          <ul className="nav-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>

          </ul>
          <SocialLinks />
        </div>




      </div>
    </nav>
  );
}

