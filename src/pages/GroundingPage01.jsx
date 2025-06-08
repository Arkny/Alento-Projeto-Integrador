import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/GroundingPage.css';

export default function GroundingPage01() {
  const [objectCount, setObjectCount] = useState(0);
  const totalGroundingPages = 5;
  const currentPageIndex = 0; // This page is the first one (index 0)

  const incrementCount = () => {
    if (objectCount < 5) {
      setObjectCount(objectCount + 1);
    }
  };

  const decrementCount = () => {
    if (objectCount > 0) {
      setObjectCount(objectCount - 1);
    }
  };

  return (
    <> {/* Use a React Fragment to render multiple top-level elements */}
      {/* Back button circle - This is now truly outside the main card container */}
      <Link to="/home" className="back-circle">
        {/* You can add an icon here */}
      </Link>

      <div className="grounding-container"> {/* This container holds only the card now */}
        <div className="grounding-card">
          <h1>Grounding</h1>
          <h2>5,4,3,2,1.</h2>
          <h3>Olhe ao seu redor</h3>
          <p>Consegue achar 5 itens ao seu redor?</p>

          {/* Placeholder for the central image/illustration */}
          <div className="illustration-placeholder">
            {/* You can replace this div with an actual image later */}
          </div>

          <div className="item-counter">
            <span className="current-item-text">{objectCount} item{objectCount !== 1 ? 's' : ''}</span>
            <div className="counter-buttons">
              <button className="round-button" onClick={decrementCount}>-</button>
              <button className="round-button" onClick={incrementCount}>+</button>
            </div>
          </div>

          {/* Navigation dots for the 5 grounding pages */}
          <div className="grounding-dots-container">
            {[...Array(totalGroundingPages)].map((_, index) => (
              <span
                key={index}
                className={`grounding-dot ${index === currentPageIndex ? 'active' : ''}`}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}