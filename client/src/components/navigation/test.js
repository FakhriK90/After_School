import React from 'react';

const test = () => {
  return (
  <div>
      <nav id="navbar" className="nav">
        <ul className="nav-list">
          <li>
            <a href="#welcome-section">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="#resume"><strike>Resume</strike></a>
          </li>
          <li>
            <a href="#certs"><strike>Certifications</strike></a>
          </li>
        </ul>
      </nav>
  </div>
  );
};

export default test;
