import React from 'react';
import '../index.css';
import BottomNav from './BottomNav';

const Banner = () => {
  return (
    <div className="banner">
          <div className="">
     <BottomNav />
      </div>
      <div className="banner-content">
        <h1>Improve Chance of Conception with IUI at Home</h1>
       
     
      </div>
      <div className="cardmain-container">
        <div className="cardmain">
          <button>I'm a Couple</button>
          <p>Private, comfortable and Effective</p>
        </div>
        <div className="cardmain">
          <button>I'm a Doctor</button>
          <p>Private, comfortable and Effective</p>
        </div>
        <div className="cardmain">
          <button>I'm an Investor</button>
          <p>Private, comfortable and Effective</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
