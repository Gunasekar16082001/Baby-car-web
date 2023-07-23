// Footer.js

import React from 'react';

const Footer = () => {
  return (
    <footer className="footer-container">
      {/* Footer Details */}
      <div className="footer-details">
        <h2>More Information</h2>
        <ul>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Press and Media</li>
          <li>Careers</li>
          <li>Privacy Policy</li>
          <li>Terms & Conditions</li>
          <li>How Does it Work?</li>
          <li>Meet The Team</li>
          <li>Recommended Blogs</li>
        </ul>
        </div>
        <div className="footer-details">
        <h2>More Information</h2>
        <ul>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Press and Media</li>
          <li>Careers</li>
          <li>Privacy Policy</li>
          <li>Terms & Conditions</li>
          <li>How Does it Work?</li>
          <li>Meet The Team</li>
          <li>Recommended Blogs</li>
        </ul>
        </div>
        <div className="contact-details">
          <h2>Connect</h2>
          <p>Contact: +91 90364 90490</p>
          <p>WhatsApp: +91 90364 90490</p>
          <p>Email: info@subhag.in</p>
          <p>
            Subhag HealthTech
            <br />
            Supported By Social Alpha – A Tata Trust Initiative
            <br />
            (Research Of Germany, Love Of India)
            <br />
            Bengaluru Karnataka – 560077
          </p>
        
      </div>

      {/* Contact Form */}
      <div className="contact-form">
        <h2>I want to talk to an Expert</h2>
        <form>
          <label>Name</label>
          <input type="text" />
          <label>Email</label>
          <input type="email" />
          <label>Mobile</label>
          <input type="tel" />
          <label>Please Provide Your Problems</label>
          <textarea rows="3"></textarea>
          <label>City Name</label>
          <input type="text" />
          <label>Explain Other Problems</label>
          <textarea rows="3"></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
