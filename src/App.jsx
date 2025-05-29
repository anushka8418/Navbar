import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import './index.css'
const App = () => {
   const current_theme = localStorage.getItem('current_theme');
   const [theme, setTheme]=useState(current_theme);

   return (
    <>
      <div className="main-content">
  <Navbar theme={theme} setTheme={setTheme} />
  <div className="container">
    <h1>Welcome to CraftsyCart</h1>
    <p>Explore handcrafted treasures made with love ❤️</p>
    <button className="shop-btn">Start Shopping</button>
    <ul className="features-list">
  <li><i className="fas fa-hand-sparkles"></i> 100% Handmade</li>
  <li><i className="fas fa-leaf"></i> Eco-Friendly</li>
  <li><i className="fas fa-shipping-fast"></i> Free Shipping</li>
</ul>
<div className="testimonial">
  <p>"Absolutely love the craftsmanship!" – A Happy Customer</p>
</div>

  </div>
  <div><footer className="footer">
  <p>&copy; {new Date().getFullYear()} CraftsyCart. All rights reserved.</p>
  <p>Follow us on 
    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"> Instagram</a> | 
    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"> Facebook</a>
  </p>
</footer>
</div>

</div>

    </>
  );
};

export default App
