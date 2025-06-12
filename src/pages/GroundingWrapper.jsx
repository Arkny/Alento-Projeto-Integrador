import React, { useState } from 'react';
import { useNavigate, useLocation, useParams, Link } from 'react-router-dom'; // Import useParams
import GroundingPage from './GroundingPage'; // Um componente genérico GroundingPage
import '../styles/GroundingPage.css';
import homeIcon from '../assets/home-icon.png';
import imagemGrounding01 from '../assets/imagem-grounding-01.png';
import imagemGrounding02 from '../assets/imagem-grounding-02.png';
import imagemGrounding03 from '../assets/imagem-grounding-03.png';
import imagemGrounding04 from '../assets/imagem-grounding-04.png';
import imagemGrounding05 from '../assets/imagem-grounding-05.png';
import checkIcon from '../assets/check-icon.png';

export default function GroundingWrapper() {
  const navigate = useNavigate();
  const { id } = useParams(); // Get the 'id' parameter from the URL

  // Definir as páginas de grounding com seus dados
  const groundingPagesData = [
    {
      title: 'Grounding',
      subtitle: '5,4,3,2,1.',
      instructionHeader: 'Olhe ao seu redor',
      instructionText: 'Consegue achar 5 itens ao seu redor?',
      counterLabelSingular: 'item',
      counterLabelPlural: 'itens',
      maxCount: 5,
      image: imagemGrounding01,
      route: '/grounding/1'
    },
    {
      title: 'Grounding',
      subtitle: '5,4,3,2,1.',
      instructionHeader: 'Coisas que você pode tocar',
      instructionText: 'Consegue achar 4 texturas diferentes ao seu redor?',
      counterLabelSingular: 'textura',
      counterLabelPlural: 'texturas',
      maxCount: 4,
      image: imagemGrounding02,
      route: '/grounding/2'
    },
    {
      title: 'Grounding',
      subtitle: '5,4,3,2,1.',
      instructionHeader: 'Coisas que você pode ouvir',
      instructionText: 'Consegue achar 3 sons diferentes ao seu redor?',
      counterLabelSingular: 'som',
      counterLabelPlural: 'sons',
      maxCount: 3,
      image: imagemGrounding03,
      route: '/grounding/3'
    },
    {
      title: 'Grounding',
      subtitle: '5,4,3,2,1.',
      instructionHeader: 'Coisas que você pode cheirar',
      instructionText: 'Consegue achar 2 aromas diferentes ao seu redor?',
      counterLabelSingular: 'aroma',
      counterLabelPlural: 'aromas',
      maxCount: 2,
      image: imagemGrounding04,
      route: '/grounding/4'
    },
    {
      title: 'Grounding',
      subtitle: '5,4,3,2,1.',
      instructionHeader: 'Sabores que você pode sentir',
      instructionText: 'Consegue identificar 1 sabor em sua boca?',
      counterLabelSingular: 'sabor',
      counterLabelPlural: 'sabores',
      maxCount: 1,
      image: imagemGrounding05,
      route: '/grounding/5'
    },
  ];

  // Determinar o índice da página atual com base no id do URL
  // Convertemos o 'id' para número e subtraímos 1 para obter o índice do array (0-based)
  const currentPageIndex = parseInt(id) - 1;

  // Handle invalid id (e.g., /grounding/abc or /grounding/0)
  if (isNaN(currentPageIndex) || currentPageIndex < 0 || currentPageIndex >= groundingPagesData.length) {
    // Optionally redirect to a default or error page, or render nothing
    navigate('/home', { replace: true }); // Redirect to home if invalid ID
    return null;
  }

  // Estado local para o contador de cada página
  const [counts, setCounts] = useState(() => {
    const initialCounts = {};
    groundingPagesData.forEach((_, index) => {
      initialCounts[index] = 0;
    });
    return initialCounts;
  });

  const currentPageData = groundingPagesData[currentPageIndex];
  const objectCount = counts[currentPageIndex] || 0;

  const handleIncrement = () => {
    if (objectCount < currentPageData.maxCount) {
      setCounts(prevCounts => ({
        ...prevCounts,
        [currentPageIndex]: prevCounts[currentPageIndex] + 1
      }));
    }
  };

  const handleDecrement = () => {
    if (objectCount > 0) {
      setCounts(prevCounts => ({
        ...prevCounts,
        [currentPageIndex]: prevCounts[currentPageIndex] - 1
      }));
    }
  };

  const handleNextPage = () => {
    if (currentPageIndex < groundingPagesData.length - 1) {
      navigate(groundingPagesData[currentPageIndex + 1].route);
    } else {
      navigate('/home');
    }
  };

  const [touchStartX, setTouchStartX] = useState(0);

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const swipeThreshold = 50;

    if (touchStartX - touchEndX > swipeThreshold) {
      if (currentPageIndex < groundingPagesData.length - 1) {
        navigate(groundingPagesData[currentPageIndex + 1].route);
      }
    } else if (touchEndX - touchStartX > swipeThreshold) {
      if (currentPageIndex > 0) {
        navigate(groundingPagesData[currentPageIndex - 1].route);
      } else {
        navigate('/home');
      }
    }
  };

  return (
    <div
      className="grounding-wrapper-container"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      // Consider adding onTouchMove with e.preventDefault() if swipe interferes with vertical scroll
      // onTouchMove={(e) => e.preventDefault()}
    >
      <Link to="/home" className="back-circle">
        <img src={homeIcon} alt="Back to Home" className="back-icon" />
      </Link>

      <div className="grounding-container">
        <div className="grounding-card">
          <h1>{currentPageData.title}</h1>
          <h2>{currentPageData.subtitle}</h2>
          <h3>{currentPageData.instructionHeader}</h3>
          <p>{currentPageData.instructionText}</p>

          <img
            src={currentPageData.image}
            alt="Ilustração Grounding"
            className="illustration-image"
          />

          <div className="item-counter">
            <span className="current-item-text">
              {objectCount} {objectCount === 1 ? currentPageData.counterLabelSingular : currentPageData.counterLabelPlural}
            </span>
            <div className="counter-buttons">
              <button className="round-button" onClick={handleDecrement}>-</button>
              {objectCount < currentPageData.maxCount ? (
                <button className="round-button" onClick={handleIncrement}>+</button>
              ) : (
                <button className="round-button check-button" onClick={handleNextPage}>
                  <img src={checkIcon} alt="Concluído" className="check-icon-img" />
                </button>
              )}
            </div>
          </div>

          <div className="grounding-dots-container">
            {groundingPagesData.map((_, index) => (
              <span
                key={index}
                className={`grounding-dot ${index === currentPageIndex ? 'active' : ''}`}
                onClick={() => navigate(groundingPagesData[index].route)}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}