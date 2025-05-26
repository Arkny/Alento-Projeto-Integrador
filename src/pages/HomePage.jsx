import { useState } from 'react';
import '../styles/HomePage.css';
import gotinha from '../assets/gotinha.png';

export default function HomePage() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
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
        <div className={`circle-item item1 ${isOpen ? 'show' : ''}`} />
        <div className={`circle-item item2 ${isOpen ? 'show' : ''}`} />
        <div className={`circle-item item3 ${isOpen ? 'show' : ''}`} />
        <div className={`circle-item item4 ${isOpen ? 'show' : ''}`} />
      </div>
    </div>
  );
}
