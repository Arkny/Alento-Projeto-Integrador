import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import GroundingPage from './GroundingPage'; // Um componente genérico GroundingPage
import '../styles/GroundingPage.css'; //
import homeIcon from '../assets/home-icon.png';
import imagemGrounding01 from '../assets/imagem-grounding-01.png';
import imagemGrounding02 from '../assets/imagem-grounding-02.png'; // Supondo que você terá mais imagens
import imagemGrounding03 from '../assets/imagem-grounding-03.png';
import imagemGrounding04 from '../assets/imagem-grounding-04.png';
import imagemGrounding05 from '../assets/imagem-grounding-05.png';
import checkIcon from '../assets/check-icon.png';

export default function GroundingWrapper() {
  const navigate = useNavigate();
  const location = useLocation(); // Para saber a rota atual
  
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
      image: imagemGrounding02, // Placeholder, ajuste se tiver imagens específicas
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
      image: imagemGrounding03, // Placeholder
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
      image: imagemGrounding04, // Placeholder
      route: '/grounding/4'
    },
    {
      title: 'Grounding',
      subtitle: '5,4,3,2,1.',
      instructionHeader: 'Sabores que você pode sentir',
      instructionText: 'Consegue identificar 1 sabor em sua boca?',
      counterLabelSingular: 'sabor',
      counterLabelPlural: 'sabores', // Ou apenas 'sabor' se sempre singular
      maxCount: 1,
      image: imagemGrounding05, // Placeholder
      route: '/grounding/5'
    },
  ];

  // Determinar o índice da página atual com base na URL
  const currentPathSegment = location.pathname.split('/').pop();
  const currentPageIndex = groundingPagesData.findIndex(
    (page) => page.route.endsWith(currentPathSegment)
  );

  // Estado local para o contador de cada página
  // Usamos um objeto para armazenar o count para cada página, keyed by its index
  const [counts, setCounts] = useState(() => {
    const initialCounts = {};
    groundingPagesData.forEach((_, index) => {
      initialCounts[index] = 0;
    });
    return initialCounts;
  });

  const currentPageData = groundingPagesData[currentPageIndex];
  const objectCount = counts[currentPageIndex] || 0; // Get count for current page

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
      // Última página, talvez navegar para uma tela de "Concluído" ou Home
      navigate('/home');
    }
  };

  // Lógica para navegação por arrastar (swipe)
  // Para uma implementação completa, você pode usar uma biblioteca como 'react-swipeable'
  // Por simplicidade, vou usar eventos básicos de touch para detecção de swipe horizontal.
  const [touchStartX, setTouchStartX] = useState(0);

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    // Para evitar scroll vertical ao arrastar horizontalmente
    e.preventDefault();
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const swipeThreshold = 50; // Pixels para considerar um swipe

    if (touchStartX - touchEndX > swipeThreshold) {
      // Swipe para a esquerda (próxima página)
      if (currentPageIndex < groundingPagesData.length - 1) {
        navigate(groundingPagesData[currentPageIndex + 1].route);
      }
    } else if (touchEndX - touchStartX > swipeThreshold) {
      // Swipe para a direita (página anterior)
      if (currentPageIndex > 0) {
        navigate(groundingPagesData[currentPageIndex - 1].route);
      } else {
        // Se estiver na primeira página e deslizar para a direita, volta para a home
        navigate('/home');
      }
    }
  };

  // Renderiza a página de grounding atual usando um componente genérico
  return (
    <div
      className="grounding-wrapper-container" // Um novo container para os eventos de toque
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <Link to="/home" className="back-circle">
        <img src={homeIcon} alt="Back to Home" className="back-icon" />
      </Link>

      <div className="grounding-container"> {/* Mantém o estilo do card */}
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
                <button className="round-button check-button" onClick={handleNextPage}> {/* O botão de check navega para a próxima página */}
                  <img src={checkIcon} alt="Concluído" className="check-icon-img" />
                </button>
              )}
            </div>
          </div>

          {/* Navigation dots para as páginas de grounding */}
          <div className="grounding-dots-container">
            {groundingPagesData.map((_, index) => (
              <span
                key={index}
                className={`grounding-dot ${index === currentPageIndex ? 'active' : ''}`}
                onClick={() => navigate(groundingPagesData[index].route)} // Clicar no dot navega diretamente
              ></span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}