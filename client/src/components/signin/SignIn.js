/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import "./signIn.css";

const SignIn = () => {
  return (
    <div>
      <div className="login">
        <h2 className="active"> Connexion </h2>
        <form>
          <input type="text" className="text" name="username" />
          <span>Pseudo</span>
          <br />
          <br />
          <input type="password" className="text" name="password" />
          <span>Entrer le mot de passe</span>
          <br />
          <input
            type="checkbox"
            id="checkbox-1-1"
            className="custom-checkbox"
          />
          <label htmlFor="checkbox-1-1">Rester connecter</label>
          <Link to="/home" className="sign-btn">
          <button className="signin">Se connecter</button>
          </Link>
          <hr />
          <a className="zzz" href="#">Mot de passe oublier?</a>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
