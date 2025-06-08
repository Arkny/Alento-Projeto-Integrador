import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../styles/HomePage.css'; //
import gotinha from '../assets/gotinha.png';

export default function HomePage() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleCircleItemClick = (path) => {
    navigate(path); // Navigate to the specified path
  };

  return (
    <div className="home-container"> {/* */}
      <div className="circle-wrapper"> {/* */}
        {/* bolona */}
        <div className={`central-circle ${isOpen ? 'hide' : ''}`} onClick={toggleMenu}></div> {/* */}

        {/* gotinha por cima */}
        <img
          src={gotinha}
          alt="Gotinha"
          className={`gotinha-img ${isOpen ? 'show' : ''}`}
          onClick={toggleMenu}
        />

        {/* bolinhas */}
        {/* Add onClick handler to the first circle item */}
        <div 
          className={`circle-item item1 ${isOpen ? 'show' : ''}`} 
          onClick={() => handleCircleItemClick('/grounding-01')} // This is the change
        /> {/* */}
        <div className={`circle-item item2 ${isOpen ? 'show' : ''}`} /> {/* */}
        <div className={`circle-item item3 ${isOpen ? 'show' : ''}`} /> {/* */}
        <div className={`circle-item item4 ${isOpen ? 'show' : ''}`} /> {/* */}
      </div>
    </div>
  );
}