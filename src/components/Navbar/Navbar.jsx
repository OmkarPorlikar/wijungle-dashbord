import React, { useState } from 'react';
import './Navbar.css';
import { FaSun, FaMoon, FaHome } from 'react-icons/fa';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [toggleBars , setToggleBars]= useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleToggle=()=>{
    // console.log(toggle , "toggle")
    setToggleBars((prev)=> !prev)
  }
  return (
    <nav className={`navbar ${darkMode ? 'dark' : 'light'} `} >
      <div className="navbar-left">
        <div className="logo">
          <span className="brand-name"> <a href="#"><img src="wijungle logo.png" alt="Wijungle Logo" /> </a> </span>
          <span >Dashboard</span>
        </div>
      </div>
      
      
      <div  className='toggleContainer' onClick={handleToggle}>
  <img src='bars.png' alt="" className="toggleButton" />
</div>  
      <div className={`navbar-right ${toggleBars ? 'hidden ' : ''}`}>


        <div className="dropdown">
          <button onClick={toggleDropdown} className="dropbtn">
            Charts
          </button>
          <div className={`dropdown-content ${dropdownOpen ? 'show' : ''}`}>
            <a href="#f-chart"  >Frequency Chart</a>
            <a href="#c-chart">Category Chart</a>
            <a href="#p-chart">Protocol Chart</a>
            <a href="#e-chart">Event Type Chart</a>
          </div>
        </div>
        <a href="#chart-info">Chart Info</a>
        <button onClick={toggleDarkMode} className="toggle-button">
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
