import React from 'react';
import HanImage from "../img/han.png"

const Vconnect = () => {
  return (
    <div className="vconnect-container">
      {/* YouTube Video */}
      <div className="video-container">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/3hYh9-RBpo0"
          title="YouTube video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
            <div className="text-container">
        <h1>DIY ICI With</h1>
        <button className="v-conceive-button">V-CONCEIVE</button>
        <p>Easy, Smooth & Simple</p>
      </div>
      </div>

      {/* Text */}
  

      {/* Image */}
      <div className="image-container">
        <img src={HanImage} alt="Image" />
      </div>
    </div>
    
  );
};

export default Vconnect;
