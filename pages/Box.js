import React from 'react';
import '../pages/Box.css'; // Import your CSS file
import boxlogo1 from '../images/crm.png'
import boxlogo2 from '../images/books.png'
import boxlogo3 from '../images/email.png'
import boxlogo4 from '../images/people.png'
import boxlogo5 from '../images/projects.png'
import boxlogo6 from '../images/png-transparent-google-logo-zoho-office-suite-software-suite-microsoft-office-zoho-corporation-cloud-computing-customerrelationship-management-office-365-thumbnail-removebg-preview.png'
const Box = () => {
  return (
    <div className="border-box">
      <h5 id='boxtitle'>FEATURED APPS
</h5>
      <div className="categories">
        <div className="category-box">
          <img src={boxlogo1} alt="Category" className="category-image" />
          <div className="category-content">
            <h3>CRM</h3>
            <p> 
Convert leads and close sales deals faster.</p>
          </div>
          <div className="arrow-icon"></div>
        </div>
        <div className="category-box">
          <img src={boxlogo2} alt="Category" className="category-image" />
          <div className="category-content">
            <h3> Books</h3>
            <p>
 Powerful financial platform for growing businesses.</p>
          </div>
          <div className="arrow-icon"></div>
        </div>
        <div className="category-box">
          <img src={boxlogo3} alt="Category" className="category-image" />
          <div className="category-content">
            <h3>Mail</h3>
            <p> 
Secure email service for your business.</p>
          </div>
          <div className="arrow-icon"></div>
        </div>
        <div className="category-box">
          <img src={boxlogo4} alt="Category" className="category-image" />
          <div className="category-content">
            <h3> People</h3>
            <p>
 Organize, automate, and simplify your HR processes.</p>
          </div>
          <div className="arrow-icon"></div>
        </div>
        <div className="category-box">
          <img src={boxlogo5} alt="Category" className="category-image" />
          <div className="category-content">
            <h3>Projects</h3>
            <p> 
Manage, track, collaborate on projects with teams.</p>
          </div>
          <div className="arrow-icon"></div>
        </div>
        <div className="category-box">
        <img src={boxlogo6} alt="Category" className="category-image" />
          <div className="category-content">
          
            <p><strong>EXPLORE ALL PRODUCTS</strong></p>
          </div>
          <div className="arrow-icon"></div>
        </div>
      </div>
    </div>
  );
};

export default Box;
