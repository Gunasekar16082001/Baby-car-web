import React from 'react';
import HanImage from "../img/p2-e15887524306041.png"

const Book = () => {
  return (
    <div className="book-container">
      {/* Text */}
      <div className="text-book-container">
        <h1>Further Increase Chances By</h1>
      
        <div className="androwash-card">
          <h2>ANDROWASH</h2>
        </div>
        <button className="book-button">Book Sperm Wash</button>
        <p>Economical, Smart & Automated</p>
      </div>

      {/* Image */}
      <div className="image-container-book">
        <img src={HanImage} alt="Image" />
      </div>
    </div>
  );
};

export default Book;
