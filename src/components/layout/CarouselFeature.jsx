import React, { useState, useEffect } from 'react';

const CarouselFeature = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      title: 'Web Development',
      subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus velit asperiores ex explicabo adipisci nisi ipsam nulla officiis assumenda, distinctio, soluta omnis at beatae perferendis non exercitationem minus unde ut magni quibusdam amet necessitatibus dolores eos? Vero quia expedita nobis a, maxime voluptatum optio minima reprehenderit eligendi numquam tempore dolorem.',
    },
    {
      title: 'Mobile App Development',
      subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus velit asperiores ex explicabo adipisci nisi ipsam nulla officiis assumenda, distinctio, soluta omnis at beatae perferendis non exercitationem minus unde ut magni quibusdam amet necessitatibus dolores eos? Vero quia expedita nobis a, maxime voluptatum optio minima reprehenderit eligendi numquam tempore dolorem.',
    },
    {
      title: 'UI/UX Design',
      subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus velit asperiores ex explicabo adipisci nisi ipsam nulla officiis assumenda, distinctio, soluta omnis at beatae perferendis non exercitationem minus unde ut magni quibusdam amet necessitatibus dolores eos? Vero quia expedita nobis a, maxime voluptatum optio minima reprehenderit eligendi numquam tempore dolorem.',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % slides.length);
    }, 10000); // Change slide every 10 seconds

    return () => clearInterval(interval);
  }, [currentSlide, slides.length]);

  const handlePrevClick = () => {
    setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
  };

  const handleNextClick = () => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  };

  return (
    <div className="carousel flex flex-col items-center mx-auto  h-[85vh] w-[200vh] bg-blue-100 p-8 rounded-lg">
      <h2 className="carousel-heading text-4xl font-bold mt-10 font-roboto  ">Enterprise need</h2>
      <div className="carousel-content relative">
        <div className="carousel-slide p-4  h-[50vh] w-[200vh] ">
          <h3 className="slide-title text-3xl font-bold mb-2 mt-5 text-blue-700 text-center font-roboto">{slides[currentSlide].title}</h3>
          <p className="slide-subtitle text-gray-600 text-center ml-[55vh] w-[80vh] mt-10 font-roboto font-semibold" >{slides[currentSlide].subtitle}</p>
        </div>
        <div className="carousel-controls absolute top-1/2 left-0 right-0 flex justify-between -translate-y-1/2">
          <button
            className="carousel-control bg-black/50 text-white rounded-full w-10 h-10 flex items-center justify-center ml-12"
            onClick={handlePrevClick}
          >
            <span className="carousel-control-icon">&#60;</span>
          </button>
          <button
            className="carousel-control bg-black/50 text-white rounded-full w-10 h-10 flex items-center justify-center mr-12"
            onClick={handleNextClick}
          >
            <span className="carousel-control-icon">&#62;</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarouselFeature;