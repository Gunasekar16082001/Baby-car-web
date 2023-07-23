import React from 'react';


const Solve = () => {
  return (
    <div className="solve-container">
      <h1>WHAT IF YOU CAN SOLVE YOUR PROBLEM?</h1>
      <div className="card-1">
        <div className="card-so">
          <i className="fas fa-user-md" style={{ color: '#32cf86', fontSize: '48px' }}></i>
          <h2>Doctor</h2>
          <p>Get expert advice from top doctors.</p>
        </div>
        <div className="card-so">
          <i className="fas fa-home" style={{ color: '#c0bcbc', fontSize: '48px' }}></i>
          <h2>Home</h2>
          <p>Access healthcare services from home.</p>
        </div>
        <div className="card-so">
          <i className="fas fa-heart" style={{ color: '#131414', fontSize: '48px' }}></i>
          <h2>Healthcare</h2>
          <p>Receive personalized healthcare solutions.</p>
        </div>
      </div>
    </div>
  );
};

export default Solve;
