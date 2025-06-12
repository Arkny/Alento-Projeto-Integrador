// Este arquivo GroundingPage.jsx não será uma rota direta, mas um componente usado pelo GroundingWrapper
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/GroundingPage.css'; //
import homeIcon from '../assets/home-icon.png';
import checkIcon from '../assets/check-icon.png';

export default function GroundingPage({
  title,
  subtitle,
  instructionHeader,
  instructionText,
  counterLabelSingular,
  counterLabelPlural,
  maxCount,
  currentCount,
  image,
  onIncrement,
  onDecrement,
  onNextPage,
  totalGroundingPages,
  currentPageIndex
}) {
  return (
    <>
      {/* O back-circle é movido para o GroundingWrapper para ser constante */}
      {/* <Link to="/home" className="back-circle">
        <img src={homeIcon} alt="Back to Home" className="back-icon" />
      </Link> */}

      <div className="grounding-container">
        <div className="grounding-card">
          <h1>{title}</h1>
          <h2>{subtitle}</h2>
          <h3>{instructionHeader}</h3>
          <p>{instructionText}</p>

          <img
            src={image}
            alt="Ilustração Grounding"
            className="illustration-image"
          />

          <div className="item-counter">
            <span className="current-item-text">
              {currentCount} {currentCount === 1 ? counterLabelSingular : counterLabelPlural}
            </span>
            <div className="counter-buttons">
              <button className="round-button" onClick={onDecrement}>-</button>
              {currentCount < maxCount ? (
                <button className="round-button" onClick={onIncrement}>+</button>
              ) : (
                <button className="round-button check-button" onClick={onNextPage}>
                  <img src={checkIcon} alt="Concluído" className="check-icon-img" />
                </button>
              )}
            </div>
          </div>

          {/* Os navigating dots são movidos para o GroundingWrapper */}
          {/* <div className="grounding-dots-container">
            {[...Array(totalGroundingPages)].map((_, index) => (
              <span
                key={index}
                className={`grounding-dot ${index === currentPageIndex ? 'active' : ''}`}
              ></span>
            ))}
          </div> */}
        </div>
      </div>
    </>
  );
}