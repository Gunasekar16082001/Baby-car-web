import React from 'react';
import card1Image from '../img/feature_vconcieve1.png';
import card2Image from '../img/feature_vconcieve2.png';
import card3Image from '../img/feature_vconcieve3.png';

const Med = () => {
  return (<>
<h1>V-Conceive Usage</h1>
    <div className="med-container">
          
      <div className="card2">
        <img src={card1Image} alt="Card 1" />
        <h2>Easy Insertion</h2>
        <p>
          The cup of V-Conceive clutches the wall of the vagina on insertion and opens up at the top of the vagina near the cervix, filling the necessary space.
        </p>
      </div>
      <div className="card2">
        <img src={card2Image} alt="Card 2" />
        <h2>Simple Yet Effective</h2>
        <p>
          V-Conceive is soft, comfortable and easy to use. The cup will keep the sperm in place and is designed to fit one’s lifestyle.
        </p>
      </div>
      <div className="card2">
        <img src={card3Image} alt="Card 3" />
        <h2>Smooth Removal</h2>
        <p>
          The stem may extend beyond the length of the vagina or it may sit just inside making it easy to reach for smooth removal.
        </p>
      </div>
    </div>
    
    </>
  );
};

export default Med;
