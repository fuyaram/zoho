import React, { useState } from "react";
import './Navbar.css'; // Import your CSS file
import logo from './images/zoho-logo-removebg-preview.png'
import { FaSearch,} from 'react-icons/fa';
import { AiOutlineCustomerService, AiOutlineMail, AiOutlineTeam } from 'react-icons/ai';
import {Link} from 'react-router-dom'
import { IoCallOutline,  IoMailOpenOutline, IoPeopleCircleOutline } from 'react-icons/io5';
import {  MdMobileFriendly,MdAttachMoney,MdShoppingCart} from 'react-icons/md';
const Navbar = () => {
  const [showSubMenu, setShowSubMenu] = useState(false);

  const toggleSubMenu = () => {
    setShowSubMenu(!showSubMenu);
  };
  return (
    <>



    <div className="fuck">
    
    <nav className="navbar">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className="menu-container">
      <ul className="menu-list">
        <li className="menu-item" onClick={toggleSubMenu}>
        <Link to="/" className="cust">
            products
          </Link>
          {showSubMenu && (
            <ul className="submenu">
              <li className="submenu-item">about us</li>
              <li className="submenu-item">contacts</li>
              <li className="submenu-item">press</li>
              <li className="submenu-item">rural araivals</li>
              <li className="submenu-item">events</li>
              <li className="submenu-item">carrers</li>
              <li className="submenu-item">human of zoho</li>
              <li className="submenu-item">the long game</li>
            </ul>
          )}
        </li>
        <li className="menu-item" onClick={toggleSubMenu}>
          costumer
          {showSubMenu && (
            <ul className="submenu">
              <li className="submenu-item">marketplace</li>
              <li className="submenu-item">suites</li>
              <li className="submenu-item">zoho one</li>
              <li className="submenu-item">mobiles apps</li>
              <li className="submenu-item">apps</li>
              <li className="submenu-item">marketing</li>
              <li className="submenu-item">digital zoho world</li>
              <li className="submenu-item">services</li>
              <li className="submenu-item">finance</li>
              <li className="submenu-item">zoho projects</li>
            </ul>
          )}
        </li>
        <li className="menu-item" onClick={toggleSubMenu}>
        company
          {showSubMenu && (
            <ul className="submenu">
              <li className="submenu-item">supports</li>
              <li className="submenu-item">about us</li>
              <li className="submenu-item">contacts</li>
              <li className="submenu-item">partners</li>
              <li className="submenu-item">brands</li>
              <li className="submenu-item">next FAANG zozo</li>
              <li className="submenu-item">programs</li>
            </ul>
          )}
        </li>
        <li className="menu-item" onClick={toggleSubMenu}>
          contact us
          {showSubMenu && (
            <ul className="submenu">
              <li className="submenu-item">zoho team</li>
              <li className="submenu-item">feedback</li>
              <li className="submenu-item">happy emplayes</li>
              <li className="submenu-item">work place</li>
              <li className="submenu-item">inside zoho</li>
            </ul>
          )}
        </li>
      </ul>
    </div>
      <div className="auth-container">
        <button className="auth-button">Login</button>
        <button className="auth-button">Sign Up</button>
      </div>
    </nav>
    <div className="navbar89">
      <div className="navbar-item">
        <AiOutlineCustomerService className="icon" />
       
      </div>
      <div className="navbar-item">
        <MdMobileFriendly className="icon" />
     
      </div>
      <div className="navbar-item">
        <AiOutlineMail className="icon" />
       
      </div>
      <div className="navbar-item">
        <AiOutlineTeam className="icon" />

      </div>
      <div className="navbar-item">
        <IoCallOutline className="icon" />
      
      </div>
      <div className="navbar-item">
        <MdAttachMoney className="icon" />
       
      </div>
      <div className="navbar-item">
        <MdShoppingCart className="icon" />
       
      </div>
      <div className="navbar-item">
        <IoPeopleCircleOutline className="icon" />
       
      </div>
      <div className="navbar-item">
        <IoMailOpenOutline className="icon" />
       
      </div>
      
      <div className="search-bar">
        <input className="j" type="text" placeholder="Search..." />
        <FaSearch className="search-icon" />
      </div>
    </div>
    </div>
    </>
  );
};

export default Navbar;
