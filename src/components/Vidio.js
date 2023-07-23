import React from 'react';

const Video = () => {
  return (
    <>
     <h1>Reference vidios</h1>

    <div className="video-container1">
      {/* Left Video */}
     
      <div className="video-grid1">
     
        <div className="link1">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/gdKAlF_XuxA"
            title="Left Video"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>

      {/* Right Video */}
      <div className="video-grid1">
     
        <div className="link1">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/r5ZkGcuAW_c"
            title="Right Video"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
    </>
  );
};

export default Video;
