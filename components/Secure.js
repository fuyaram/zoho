import React from 'react';
import logo from '../images/6783360-removebg-preview.png';
import movieIcon from '../images/video-player.png';
import './Secure.css'; // Import your CSS file for styling

const Secure = () => {
  return (
    <div className="containerbigbo">
      <div className="contentlelo">
        <img src={logo} alt="Logo" className="logordx" />
        <h1 className="title56">Your privacy is our responsibility</h1>
        <p className="paragraph96">We believe that trust is paramount in a relationship. We do not own or sell your data, and we most certainly do not bank on advertising-based business models. The only way we make money is from the software license fees you pay us.
</p>
        <button className="watch-button">
          Watch Video <img src={movieIcon} alt="Movie Icon" className="icon890" />
        </button>
      </div>
    </div>
  );
};

export default Secure;
