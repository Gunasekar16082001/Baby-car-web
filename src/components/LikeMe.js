import React from 'react';


const LikeMe = () => {
  return (
    <div className="likeme-container">
      <div className="background-image"></div>
      <div className="content">
        <h1>I BET YOU ARE LIKE ME</h1>
        <div className="cards-container">
          <div className="card1">
            <i className="fas fa-calendar" style={{ color: '#fff', fontSize: '48px' }}></i>
            <h2>You have tried conceiving for more than 12 months</h2>
          </div>
          <div className="card1">
            <i className="fas fa-hospital" style={{ color: '#fff', fontSize: '48px' }}></i>
            <h2>You are frustrated waiting in hospital queue.</h2>
          </div>
          <div className="card1">
            <i className="fas fa-user-friends" style={{ color: '#fff', fontSize: '48px' }}></i>
            <h2>You don't want your neighbors to know it know it..</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LikeMe;
