import React from "react";
import { Link } from "react-router-dom";
import "./signUp.css";

const SignUp = () => {
  return (
    <div>
      <div className="content-wrapper">
        <div className="content">
          <div className="signup-wrapper shadow-box">
            <div className="company-details ">
              <div className="shadow" />
              <div className="wrapper-1">
                <div className="logo">
                  <div className="icon-food"></div>
                </div>
                <h1 className="title">Nom de la société</h1>
                <div className="slogan">Slogan</div>
              </div>
            </div>
            <div className="signup-form ">
              <div className="wrapper-2">
                <div className="form-title">S'inscrire !</div>
                <div className="form">
                  <form>
                    <p className="content-item">
                      <label>
                        Nom complet
                        <input
                          type="text"
                          placeholder=""
                          name="name"
                          required
                        />
                      </label>
                    </p>
                    <p className="content-item">
                      <label>
                        Adresse e-mail
                        <input
                          type="text"
                          placeholder=""
                          name="email"
                          required
                        />
                      </label>
                    </p>
                    <p className="content-item">
                      <label>
                        Mot de passe
                        <input
                          type="password"
                          placeholder="************"
                          name="password"
                          required
                        />
                      </label>
                    </p>
                    <Link to="/signin">
                      <button type="submit" className="signup">
                        inscrivez-vous{" "}
                      </button>
                    </Link>
                  </form>
                </div>
                <ul className="social-links">
                  <li>
                    <a href="">
                      <i className="fab fa-google"></i> Login with Google
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="fab fa-facebook-f"></i> Login with Facebook
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
