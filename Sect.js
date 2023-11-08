// App.js
import React from "react";
import "./Sect.css";
import logoz from './images/logo-removebg-preview.png'
import logopro  from './images/images-removebg-preview (4).png'
const Sect = () => {
  return (
    <div className="containeroer">
     
      <div className="right-section">
       <div className="kll">
       <img className="logo" src={logoz} alt="Logo" />
        <div className="title"><h1 id="poww">Zoho One</h1> </div>
        <h3 id="pow">The operating system for business</h3>
        <div className="paragraph">Run your entire business on Zoho with <br />our unified cloud software, designed <br />to help you break down silos between <br />departments and increase<br /> organizational efficiency.</div>
        <button className="explore-button">
          Explore More <span>&rarr;</span>
        </button>
       </div>
      </div>
      <div className="left-section">
       <div className="pro">
       <div className="profile-icon">
        <img src={logopro} alt="m" className="bbb"></img>
       </div>
        <div className="bio">"You can be a startup, mid-sized company, <br />or an enterprise—Zoho One is a boon for all."</div>
        <img className="profile-image" src="https://www.zohowebstatic.com/sites/zweb/images/zoho_general_pages/zh-video-poster-prakash.png" alt="Profile" />
        <h4 id="jkrowlin">Prakarsh Gagdani</h4>
        <p id="jkrowlin">CEO, 5paisa.com (an IIFL subsidiary)</p>
        <div className="border-line"></div>
       </div>
      </div>
    </div>
  );
};

export default Sect;
