import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/HomePage.css';
import blobShape from '../assets/blob-shape.png';
import groundingIcon from '../assets/grounding-icon.png'; // Importar o ícone
import { 
  Brain,
  Info,
  BookOpen
} from "lucide-react";

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
          src={blobShape}
          alt="blob-shape"
          className={`blob-shape-img ${isOpen ? 'show' : ''}`}
          onClick={toggleMenu}
        />

        {/* bolinhas */}
        <div
          className={`circle-item item1 ${isOpen ? 'show' : ''}`}
          onClick={() => handleCircleItemClick('/grounding-01')}
        >
          {/* Adicionar o ícone aqui */}
          <Brain className="circle-icon" />
        </div>
        <div 
          className={`circle-item item2 ${isOpen ? 'show' : ''}`}
          onClick={() => handleCircleItemClick('')}
        >
          <Info className="circle-icon" />
          
        </div>
        <div className={`circle-item item3 ${isOpen ? 'show' : ''}`}>

          <BookOpen className="circle-icon" />
        </div>
        <div className={`circle-item item4 ${isOpen ? 'show' : ''}`} />
      </div>
    </div>
  );
}