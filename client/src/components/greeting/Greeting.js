import React from "react";
import { Link } from "react-router-dom";
import bckVid from "../../video/Background-video.mp4";
import "./Greeting.css";

const Greeting = () => {
  return (
    <div className="vid">
      <video autoPlay loop muted>
        <source src={bckVid} type="video/mp4" />
      </video>
      <h1 className="deepshadow">Archi-me</h1>
      <h2 className="insetshadow">le site qui vous rapproche</h2>
      <div className="frame">
        <Link to="/home">
        <button className="custom-btn btn-16">Accédez au site</button>
        </Link>
      </div>
    </div>
  );
};

export default Greeting;
