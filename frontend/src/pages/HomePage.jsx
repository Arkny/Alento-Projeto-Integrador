import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/HomePage.css';
import gotinha from '../assets/gotinha.png';
import groundingIcon from '../assets/grounding-icon.png'; // Importar o ícone

export default function HomePage() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleCircleItemClick = (path) => {
    navigate(path);
  };

  return (
    <div className="home-container">
      <div className="circle-wrapper">
        {/* bolona */}
        <div className={`central-circle ${isOpen ? 'hide' : ''}`} onClick={toggleMenu}></div>

        {/* gotinha por cima */}
        <img
          src={gotinha}
          alt="Gotinha"
          className={`gotinha-img ${isOpen ? 'show' : ''}`}
          onClick={toggleMenu}
        />

        {/* bolinhas */}
        <div
          className={`circle-item item1 ${isOpen ? 'show' : ''}`}
          onClick={() => handleCircleItemClick('/grounding-01')}
        >
          {/* Adicionar o ícone aqui */}
          <img src={groundingIcon} alt="Grounding Icon" className="circle-icon" />
        </div>
        <div className={`circle-item item2 ${isOpen ? 'show' : ''}`} />
        <div className={`circle-item item3 ${isOpen ? 'show' : ''}`} />
        <div className={`circle-item item4 ${isOpen ? 'show' : ''}`} />
      </div>
    </div>
  );
}