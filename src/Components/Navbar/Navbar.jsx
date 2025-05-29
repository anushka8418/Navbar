import React, { useState } from 'react';
import './Navbar.css';

import logo_light from '../../assets/CraftsyCart.png';
import logo_dark from '../../assets/CraftsyCart2.png';
import search_icon_light from '../../assets/search-w.png';
import search_icon_dark from '../../assets/search-w.png';
import toggle_light from '../../assets/night.png';
import toggle_dark from '../../assets/day.png';

const Navbar = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.body.setAttribute('data-theme', newTheme); // optional for global styling
  };

  return (
    <div className='navbar'>
      <img src={theme === 'light' ? logo_light : logo_dark} alt='' className='logo' />

      <ul>
        <li>Home</li>
        <li>Products</li>
        <li>Features</li>
        <li>About</li>
      </ul>

      <div className='search-box'>
        <input type='text' placeholder='search' />
        <img src={theme === 'light' ? search_icon_light : search_icon_dark} alt='' />
      </div>

      <img
        src={theme === 'light' ? toggle_light : toggle_dark}
        alt=''
        className='toggle-icon'
        onClick={toggleTheme}
        style={{ cursor: 'pointer' }}
      />
      
    </div>
    
  );
};

export default Navbar;
