import React from "react";
import "./Contenus.css";

const Contenus = () => {
  return (
    <div id="contenus">
      <div className="card">
        <div className="card-content">
          <h2 className="card-title">Hover On Me</h2>
          <p className="card-body">
            {" "}
            In this area you will need to fill your content's texts and info,
            for your card's purpouses.
          </p>
          <a href="#" className="button">
            Voir profil
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contenus;
