import React from 'react';

function TopNav() {
  return (
    <div className="top-nav">
      <div className="left-icons">
        <i className="fab fa-facebook fa-lg"></i>
        <i className="fab fa-instagram fa-lg"></i>
        <i className="fab fa-youtube fa-lg"></i>
        <i className="fab fa-linkedin-in fa-lg"></i>
        <i className="fab fa-twitter fa-lg"></i>
      </div>
      <div className="right-icons">
        <i className="fas fa-search fa-lg"></i>
        <i className="fas fa-phone fa-lg"></i>
        <span>+91-9036 490 490
</span>
        <i className="fas fa-envelope fa-lg"></i>
        <span>support@subhag.in</span>
      </div>
    </div>
  );
}

export default TopNav;
