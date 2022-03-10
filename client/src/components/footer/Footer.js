import React from 'react';
import { FcPhone } from "react-icons/fc";
import { HiMail } from "react-icons/hi";
import './Footer.css'

const Footer = () => {
  return (
    <div>
    <div className="main" />
    <div className="footer">
      <div className="bubbles">
        <div className="bubble" style={{size: '2.4330375582991524rem', distance: '8.335273196639164rem', position: '77.27899567804734%', time: '2.4454202829322873s', delay: '-3.147492666374395s'}} />
      </div>
      <div className="content">
        <div>
          <div><b>Nos contacts</b><a href="#">Secuce</a><a href="#">Drupand</a><a href="#">Oceash</a><a href="#">Ugefe</a><a href="#">Babed</a></div>
          <div><b>Spotha</b><a href="#">Miskasa</a><a href="#">Agithe</a><a href="#">Scesha</a><a href="#">Lulle</a></div>
          <div><b>Nos contacts</b><a href="#"> <FcPhone/>00.000.0000000</a><a href="#">Phachuled</a><a href="#">Tiebeft</a><a href="#">Ocid</a><a href="#">Izom</a><a href="#">Ort</a></div>
          <div><b>Nos réseaux</b><a href="#"> <HiMail/> Mail</a><a href="#">Neesk</a><a href="#">Omemanen</a></div>
        </div>
        <div><a className="image" href="https://codepen.io/z-" target="_blank" style={{backgroundImage: 'url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/199011/happy.svg")'}} />
          <p>© Nom de la société</p>
        </div>
      </div>
    </div><svg style={{position: 'fixed', top: '100vh'}}>
      <defs>
        <filter id="blob">
          <feGaussianBlur in="SourceGraphic" stdDeviation={10} result="blur" />
          <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="blob" />
          <feComposite in="SourceGraphic" in2="blob" operator="atop" />
        </filter>
      </defs>
    </svg>
  </div>
  );
};

export default Footer;
