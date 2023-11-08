import React from 'react';
import './Board.css'; // Import your CSS file for styling

const Board = () => {
  const backgroundStyles = {
    backgroundImage: `url('https://www.zohowebstatic.com/sites/zweb/images/zoho_general_pages/zh-homev2-banner-india-3.webp')`, // Replace 'your-background-image.jpg' with the path to your background image
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100vw',
    height: '100vh',
    position: 'relative',
  };

  return (
   <>
   
   <div className="iop" style={backgroundStyles}>
   <div className='ohhh'>
    <h1 id='lelo'>Made in India.<br />
Made for the World.</h1>
<h1 id='ort'>100<strong>+</strong> Users<br /> Globally</h1>
<h1 id='ortt'>150<strong>+</strong> Countries <br />Served</h1>
<h1 id='orttt'>15K<strong>+</strong> Employees<br /> Worldwide</h1>
<h1 id='ortttt'>25<strong>+</strong> Years in <br />Business</h1>
<h1 id='orttttt'>55<strong>+</strong>Products</h1>
<button class="get-started-button909090">
    <span class="button-text">Get Started Free <span>&#10148;</span></span>
  </button>
    </div>
    </div>
    
   </>
  );
};

export default Board;
