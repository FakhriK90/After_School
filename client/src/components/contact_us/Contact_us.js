import React from "react";
import './Contact_Us.css'

const Contact_us = () => {
  return (
    <div>
     <div className="wrapper">
        <div className="title">
          <h1>contact us form</h1>
        </div>
        <div className="contact-form">
          <div className="input-fields">
            <input type="text" className="input" placeholder="Name" />
            <input type="text" className="input" placeholder="Email Address" />
            <input type="text" className="input" placeholder="Phone" />
            <input type="text" className="input" placeholder="Subject" />
          </div>
          <div className="msg">
            <textarea placeholder="Message" defaultValue={""} />
            <div className="btn">send</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact_us;
