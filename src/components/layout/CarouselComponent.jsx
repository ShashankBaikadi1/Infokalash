import React, { useState, useEffect } from 'react';
import image1 from '../../assets/images/card1.png';
import image2 from '../../assets/images/card2.png';
import image3 from '../../assets/images/card3.png';

const CarouselComponent = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image: image1,
      title: 'Lorem ipsum dolor sit amet.',
      subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum perspiciatis nobis rem optio iusto excepturi quasi numquam illo. Rem, dolorem!',
    },
    {
      image: image2,
      title: 'Lorem, ipsum dolor.',
      subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, odit voluptas? Optio veniam corrupti numquam.',
    },
    {
      image: image3,
      title: 'Lorem ipsum dolor sit.',
      subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, ea!',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % slides.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [currentSlide, slides.length]);

  const handlePrevClick = () => {
    setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
  };

  const handleNextClick = () => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  };

  return (
    <div className="carousel flex flex-col items-center mx-auto h-[100vh]  p- ">
      <div className="text-center mt-[5vh] mb-10 text-5xl font-bold font-geist">
        <span className="text-blue-700">Our </span>Expertise
      </div>
      <div className="carousel-content relative">
        <div className="carousel-slide flex justify-center items-center h-[70vh] rounded-md bg-[#fbfcfd] border ml-6">
          <div className="flex items-center ml-20 w-[182vh] ">
            <img
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              className="w-[40vh] p-4 h-[] mr-8"
            />
            <div className="text-left  w-[120vh] ">
              <h3 className="slide-title text-lg font-bold w-[60vh] font-geist">
                {slides[currentSlide].title}
              </h3>
              <p className="slide-subtitle font-geist">
                {slides[currentSlide].subtitle}
              </p>
            </div>
          </div>
        </div>
        <div className="carousel-controls absolute top-1/2 left-0 right-0 flex justify-between -translate-y-1/2">
          <button
            className="carousel-control bg-black/50 text-white rounded-full w-10 h-10 flex items-center justify-center ml-12"
            onClick={handlePrevClick}
          >
            <span className="carousel-control-icon">&#60;</span>
          </button>
          <button
            className="carousel-control bg-black/50 text-white rounded-full w-10 h-10 flex items-center justify-center mr-8"
            onClick={handleNextClick}
          >
            <span className="carousel-control-icon">&#62;</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarouselComponent;