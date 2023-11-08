import React from "react";
import "./Above.css";


const Above = () => {
  return (
    <div className="container9p0u">
      <div className="border-box9p0u right-box9p0u">
        <div className="top-image-container9p0u">
          <img src="https://www.zohowebstatic.com/sites/zweb/images/zoho_general_pages/zh-enterprise-illus.svg" alt="Top" className="top-image9p0u" />
        </div>
        <div className="content9p0u">
          <img src="https://www.zohowebstatic.com/sites/zweb/images/zoho_general_pages/zh-testimonial-poster-ind.png" alt="Profile" className="profile-image9p0u" />
          <div className="profile-details9p0u">
            <h3 className="name9p0u">Thomas John</h3>
            <p id="gh">Managing Director, Agappe Diagnostics</p>
            <p className="profile-paragraph9p0u">
            "With our complete business under control,<br /> our productivity is up by 80% in the<br /> last year that we have been using Zoho."
            </p>
          </div>
        </div>
        
      </div>
      <div className="border-box9p0u left-box9p0u">
        <h2 className="title9p0u">Zoho for Enterprises</h2>
        <p className="paragraph9p0u">
        Experience the breadth and depth of <br />the Zoho ecosystem, with the<br /> professional services, infrastructure,<br /> support, and security that a large<br /> business needs. Streamline complex<br /> business processes, build strong <br />relationships with your customers, <br />and drive growth at scale.
        </p>
        <button className="get-in-touch-button9p0u">
          Get in Touch <i className="arrow-icon9p0u">&#10148;</i>
        </button>
      </div>
    </div>
  );
};

export default Above;
