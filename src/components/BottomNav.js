import React, { useState, useEffect } from 'react';
import logoImage from "../img/log.png";


function BottomNav() {
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [isIUIDropdownOpen, setIsIUIDropdownOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);

  const toggleAboutDropdown = () => {
    setIsAboutDropdownOpen(!isAboutDropdownOpen);
  };

  const toggleProductsDropdown = () => {
    setIsProductsDropdownOpen(!isProductsDropdownOpen);
  };

  const toggleIUIDropdown = () => {
    setIsIUIDropdownOpen(!isIUIDropdownOpen);
  };

  const handleScroll = () => {
    // Check if the user has scrolled more than 100px from the top
    setIsFixed(window.scrollY > 100);
  };

  useEffect(() => {
    // Add event listener for scroll event
    window.addEventListener('scroll', handleScroll);

    // Remove the event listener when the component is unmounted
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`bottom-nav ${isFixed ? 'fixed' : ''}`}>
      {/* Logo */}
      <img src={logoImage} alt="Logo" className="logo" />
      {/* Navigation Links */}
      <div className="nav-links">
        <ul>
          <li>Home</li>
          <li onClick={toggleAboutDropdown}>
            About Us
            {isAboutDropdownOpen && (
              <ul>
                <li>Our Story</li>
                <li>Culture</li>
                <li>Mission</li>
                <li>Vision</li>
              </ul>
            )}
          </li>
          <li onClick={toggleProductsDropdown}>
            Products
            {isProductsDropdownOpen && (
              <ul>
                <li>V-Conceive</li>
                <li>AndroWash Products</li>
              </ul>
            )}
          </li>
          <li onClick={toggleIUIDropdown}>
            IUI Insights
            {isIUIDropdownOpen && (
              <ul>
                <li>IUI Success Tips</li>
                <li>IUI Wellness</li>
                <li>Know Fertility</li>
              </ul>
            )}
          </li>
          <li>Certifications</li>
          <li>Blog</li>
          <li>Contact Us</li>
        </ul>
      </div>
      {/* Order Button */}
      <div className="order-button">
        <button>Order Now</button>
      </div>
    </div>
  );
}

export default BottomNav;
