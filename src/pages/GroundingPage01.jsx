import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/GroundingPage.css'; //
import homeIcon from '../assets/home-icon.png';
import imagemGrounding01 from '../assets/imagem-grounding-01.png'; //
import checkIcon from '../assets/check-icon.png'; // NOVO: Importar o ícone de check

export default function GroundingPage01() {
  const [objectCount, setObjectCount] = useState(0);
  const totalGroundingPages = 5;
  const currentPageIndex = 0;
  const maxItems = 5; // Definir o número máximo de itens

  const incrementCount = () => {
    if (objectCount < maxItems) { // Usar maxItems aqui
      setObjectCount(objectCount + 1);
    }
  };

  const decrementCount = () => {
    if (objectCount > 0) {
      setObjectCount(objectCount - 1);
    }
  };

  return (
    <>
      {/* Back button circle */}
      <Link to="/home" className="back-circle">
        <img src={homeIcon} alt="Back to Home" className="back-icon" />
      </Link>

      <div className="grounding-container">
        <div className="grounding-card">
          <h1>Grounding</h1>
          <h2>5,4,3,2,1.</h2>
          <h3>Olhe ao seu redor</h3>
          <p>Consegue achar 5 itens ao seu redor?</p>

          {/* Imagem de ilustração */}
          <img
            src={imagemGrounding01} //
            alt="Ilustração Grounding"
            className="illustration-image" //
          />

          <div className="item-counter">
            <span className="current-item-text">
              {objectCount} {objectCount === 1 ? 'item' : 'itens'}
            </span>
            <div className="counter-buttons">
              <button className="round-button" onClick={decrementCount}>-</button>
              {/* Renderização condicional para o botão de + / check */}
              {objectCount < maxItems ? (
                <button className="round-button" onClick={incrementCount}>+</button>
              ) : (
                <button className="round-button check-button"> {/* Nova classe para o botão de check */}
                  <img src={checkIcon} alt="Concluído" className="check-icon-img" /> {/* Imagem do check */}
                </button>
              )}
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