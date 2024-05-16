
import { useState } from 'react';
import bgImage1 from '../../assets/images/image.png';
import bgImage2 from '../../assets/images/back2.jpg';
import bgImage3 from '../../assets/images/back3.jpg';
import bgImage4 from '../../assets/images/back4.jpg';
import cardBgImage1 from '../../assets/images/card1.png'; 
import cardBgImage2 from '../../assets/images/card2.png';
import cardBgImage3 from '../../assets/images/card3.png';
import cardBgImage4 from '../../assets/images/card4.png';


const HeroSection = () => {
  const [heroBackground, setHeroBackground] = useState(bgImage1);
  const [hoveredCard, setHoveredCard] = useState(0);

  const handleCardHover = (cardIndex) => {
    setHoveredCard(cardIndex);
    switch (cardIndex) {
      case 1:
        setHeroBackground(bgImage2);
        break;
      case 2:
        setHeroBackground(bgImage3);
        break;
      case 3:
        setHeroBackground(bgImage4);
        break;
      default:
        setHeroBackground(bgImage1);
    }
  };

  return (
    <div
      className="hero-section h-screen bg-cover bg-center flex items-center"
      style={{ backgroundImage: `url(${heroBackground})` }}
    >
      {/* Render the cards */}
      <div className="card-container flex justify-between mt-[20vh] ml-[70vh]">
        <div
          className={`card p-5 text-center w-[30vh] transition-transform rounded-md mr-6 ${hoveredCard === 0 ? 'scale-110' : ''
            } ${hoveredCard !== 0 ? 'opacity-100' : ''}`}
          style={{
            backgroundImage: `url(${cardBgImage1})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          {/* Card 1 content */}
          <h3 className="font-bold mt-[20vh] text-white ">Gen AI/ML Powered Data Engineering</h3>
          <p className='text-white'>Use natural language queries to find the right operators...</p>
        </div>
        <div
          className={`card p-5 h-[40vh] w-[30vh] text-center rounded-md transition-transform hover:scale-110 ml-6 ${hoveredCard === 1 ? 'scale-110' : ''
            }`}
          style={{
            backgroundImage: `url(${cardBgImage2})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
          onMouseEnter={() => handleCardHover(1)}
          onMouseLeave={() => handleCardHover(0)}
        >
          {/* Card 2 content */}
          <h3 className="font-bold text-white mt-[20vh]">Unified Collaborative Experience</h3>
          <p className='text-white'>Experience a unified and collaborative data engineering process.</p>
        </div>
        <div
          className={`card p-5 text-center w-[30vh] transition-transform rounded-md hover:scale-110 ml-6 ${hoveredCard === 2 ? 'scale-110' : ''
            }`}
          style={{
            backgroundImage: `url(${cardBgImage3})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
          onMouseEnter={() => handleCardHover(2)}
          onMouseLeave={() => handleCardHover(0)}
        >
          {/* Card 3 content */}
          <h3 className="font-bold mt-[20vh] text-white">No-Code Drag and Drop Simplicity</h3>
          <p className='text-white'>Accelerate your data engineering journey with drag-and-drop simplicity.</p>
        </div>
        <div
          className={`card p-5 text-center w-[30vh] rounded-md transition-transform hover:scale-110 ml-6 ${hoveredCard === 3 ? 'scale-110' : ''
            }`}
          style={{
            backgroundImage: `url(${cardBgImage4})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
          onMouseEnter={() => handleCardHover(3)}
          onMouseLeave={() => handleCardHover(0)}
        >
          {/* Card 4 content */}
          <h3 className="font-bold mt-[20vh] text-white">Accelerate Data to Outcome Journey</h3>
          <p className='text-white'>Streamline your data engineering process for faster outcomes.</p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;