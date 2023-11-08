import React from 'react';
import './Footer.css';
import logo from './images/png-transparent-zoho-office-suite-customer-relationship-management-zoho-corporation-email-computer-software-email-miscellaneous-text-trademark-removebg-preview.png'
import logo2 from './images/zoho-logo-removebg-preview.png'
function Footer() {
  return (
   <>
   
   <footer>
   <div class="container365">
    <h1 id="jh">Ready to do your best work?</h1>
    <h1 id="jhh">Let's get you started.</h1>
    <button class="btnui">Sign Up Now <i class="fa fa-arrow-right"></i></button>
  </div>
    <div class="content">
      <div class="top">
        <div class="logo-details">
         
          <span class="logo_name"><img src={logo2} alt='kl' className='jii'></img></span>
        </div>
        <div class="media-icons">
          <a href="."><i class="fab fa-facebook-f"></i></a>
          <a href="."><i class="fab fa-twitter"></i></a>
          <a href="."><i class="fab fa-instagram"></i></a>
          <a href="."><i class="fab fa-linkedin-in"></i></a>
          <a href="."><i class="fab fa-youtube"></i></a>
        </div>
      </div>
      <div class="link-boxes">
        <ul class="box">
          <li class="link_name">Company</li>
          <li><a href=".">zoho </a></li>
          <li><a href=".">zoho team</a></li>
          <li><a href=".">zoho employes</a></li>
          <li><a href=".">zoho 2024</a></li>
          <li><a href=".">next zoho</a></li>
          <li><a href=".">company</a></li>
          <li><a href=".">works</a></li>
          <li><a href=".">projects</a></li>
          <li><a href=".">sucess of zoho</a></li>
          <li><a href=".">founder</a></li>
        </ul>
        <ul class="box">
          <li class="link_name">Services</li>
          <li><a href=".">apps</a></li>
          <li><a href=".">mobiles apps</a></li>
          <li><a href=".">marketing</a></li>
          <li><a href=".">join zoho</a></li>
          <li><a href=".">community</a></li>
          <li><a href=".">zoho costumers</a></li>
          <li><a href=".">happy costumers</a></li>
          <li><a href=".">collabration</a></li>
          <li><a href=".">sponsors</a></li>
          <li><a href=".">join market zoho</a></li>
        </ul>
        <ul class="box">
          <li class="link_name">maeket place</li>
          <li><a href=".">suites</a></li>
          <li><a href=".">apps</a></li>
          <li><a href=".">mobiles apps</a></li>
          <li><a href=".">Purchase</a></li>
          <li><a href=".">market</a></li>
          <li><a href=".">marketing</a></li>
          <li><a href=".">services</a></li>
          <li><a href=".">finance</a></li>
          <li><a href=".">india</a></li>
          <li><a href=".">zoho help</a></li>
        </ul>
        <ul class="box">
          <li class="link_name">zoho</li>
          <li><a href=".">about us</a></li>
          <li><a href=".">contact us</a></li>
          <li><a href=".">press </a></li>
          <li><a href=".">events</a></li>
          <li><a href=".">careers</a></li>
          <li><a href=".">rural arrivals</a></li>
          <li><a href=".">humans of zoho</a></li>
          <li><a href=".">the log game</a></li>
          <li><a href=".">zoho one</a></li>
          <li><a href=".">support 24/7</a></li>
        </ul>
        <ul class="box input-box">
          <li class="link_name">join zoho</li>
          <li><input type="text" placeholder="Enter your email"></input></li>
          <li><input type="button" value="join zoho"></input></li>
        </ul>
      </div>
    </div>
    <div class="bottom-details">
    <span>
        <img src={logo} alt='kl' className='footerlogo'></img>
        </span>
      <div class="bottom_text">
        <span class="copyright_text">Copyright © 2023 <a href=".">zoho</a>All rights reserved</span>
        
        <span class="policy_terms">
          <a href=".">Privacy policy</a>
          <a href=".">Terms & condition</a>
        </span>
      </div>
    </div>
  </footer>
   </>
  );
}

export default Footer;
