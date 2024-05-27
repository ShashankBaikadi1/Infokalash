// import React, { useState, useEffect } from 'react';
// import image1 from '../../assets/images/card1.png';
// import image2 from '../../assets/images/card2.png';
// import image3 from '../../assets/images/card3.png';

// const CarouselComponent = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const slides = [
//     {
//       image: image1,
//       title: 'Lorem ipsum dolor sit amet.',
//       subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum perspiciatis nobis rem optio iusto excepturi quasi numquam illo. Rem, dolorem!',
//     },
//     {
//       image: image2,
//       title: 'Lorem, ipsum dolor.',
//       subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, odit voluptas? Optio veniam corrupti numquam.',
//     },
//     {
//       image: image3,
//       title: 'Lorem ipsum dolor sit.',
//       subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, ea!',
//     },
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((currentSlide + 1) % slides.length);
//     }, 4000); // Change slide every 4 seconds

//     return () => clearInterval(interval);
//   }, [currentSlide, slides.length]);

//   const handlePrevClick = () => {
//     setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
//   };

//   const handleNextClick = () => {
//     setCurrentSlide((currentSlide + 1) % slides.length);
//   };

//   return (
//     <div className="carousel flex flex-col items-center mx-auto h-[100vh]  p- ">
//       <div className="text-center mt-[5vh] mb-10 text-5xl font-bold font-geist">
//         <span className="text-blue-700">Our </span>Expertise
//       </div>
//       <div className="carousel-content relative">
//         <div className="carousel-slide flex justify-center items-center h-[70vh] rounded-md bg-[#fbfcfd] border ml-6">
//           <div className="flex items-center ml-20 w-[182vh] ">
//             <img
//               src={slides[currentSlide].image}
//               alt={slides[currentSlide].title}
//               className="w-[40vh] p-4 h-[] mr-8"
//             />
//             <div className="text-left  w-[120vh] ">
//               <h3 className="slide-title text-lg font-bold w-[60vh] font-geist">
//                 {slides[currentSlide].title}
//               </h3>
//               <p className="slide-subtitle font-geist">
//                 {slides[currentSlide].subtitle}
//               </p>
//             </div>
//           </div>
//         </div>
//         <div className="carousel-controls absolute top-1/2 left-0 right-0 flex justify-between -translate-y-1/2">
//           <button
//             className="carousel-control bg-black/50 text-white rounded-full w-10 h-10 flex items-center justify-center ml-12"
//             onClick={handlePrevClick}
//           >
//             <span className="carousel-control-icon">&#60;</span>
//           </button>
//           <button
//             className="carousel-control bg-black/50 text-white rounded-full w-10 h-10 flex items-center justify-center mr-8"
//             onClick={handleNextClick}
//           >
//             <span className="carousel-control-icon">&#62;</span>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CarouselComponent;




// import React, { useState, useEffect } from 'react';
// import image1 from '../../assets/undraw_photos/undraw_product_iteration_kjok.png';
// import image2 from '../../assets/undraw_photos/undraw_Segment_re_a3e7.png';
// import image3 from '../../assets/undraw_photos/undraw_Data_extraction_re_0rd3.png';

// const CarouselComponent = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const slides = [
//     {
//       image: image1,
//       title: 'Lorem ipsum dolor sit amet.',
//       subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum perspiciatis nobis rem optio iusto excepturi quasi numquam illo. Rem, dolorem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus explicabo quo possimus molestias sequi molestiae tenetur, in maiores voluptas debitis minus ipsa ut saepe dignissimos laboriosam recusandae! Alias, eius adipisci?',
//     },
//     {
//       image: image2,
//       title: 'Lorem, ipsum dolor.',
//       subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, odit voluptas? Optio veniam corrupti numquam Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus explicabo quo possimus molestias sequi molestiae tenetur, in maiores voluptas debitis minus ipsa ut saepe dignissimos laboriosam recusandae! Alias, eius adipisci?.',
//     },
//     {
//       image: image3,
//       title: 'Lorem ipsum dolor sit.',
//       subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, ea! Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus explicabo quo possimus molestias sequi molestiae tenetur, in maiores voluptas debitis minus ipsa ut saepe dignissimos laboriosam recusandae! Alias, eius adipisci?',
//     },
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((currentSlide + 1) % slides.length);
//     }, 4000); // Change slide every 4 seconds

//     return () => clearInterval(interval);
//   }, [currentSlide, slides.length]);

//   const handlePrevClick = () => {
//     setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
//   };

//   const handleNextClick = () => {
//     setCurrentSlide((currentSlide + 1) % slides.length);
//   };
// //bg-[#fbfcfd] 
//     return (
//     <div className="carousel flex flex-col items-center mx-auto h-[100vh]  p- ">
//       <div className="text-center mt-[5vh] mb-10 text-5xl font-bold font-geist">
//         <span className="text-blue-700">Our </span>Expertise
//       </div>
      
//       <div className="carousel-content relative ">
//         <div className="carousel-slide flex justify-center items-center h-[70vh] rounded-md bg-[#e7ead6] border ml-6 sm:ml-4 md:ml-6 lg:ml-6 xl:ml-6">
//           <div className="flex items-center ml-20 w-[182vh] sm:w-[90vh] md:w-[120vh] lg:w-[182vh] xl:w-[182vh] ">
//             <img
//               src={slides[currentSlide].image}
//               alt={slides[currentSlide].title}
//               className="w-[40vh] p-4 h-[] mr-8 sm:w-[30vh] md:w-[35vh] lg:w-[40vh] xl:w-[40vh]"
//             />
//             <div className="text-left w-[120vh] sm:w-[60vh] md:w-[85vh] lg:w-[120vh] xl:w-[120vh]">
//               <h3 className="slide-title font-bold w-[60vh] font-geist sm:w-[50vh] md:w-[55vh] lg:w-[60vh] xl:w-[60vh] text-2xl">
//                 {slides[currentSlide].title}
//               </h3>
//               <p className="slide-subtitle font-geist text-lg">
//                 {slides[currentSlide].subtitle}
//               </p>
//             </div>
//           </div>
//         </div>
//         <div className="carousel-controls absolute top-1/2 left-0 right-0 flex justify-between -translate-y-1/2">
//           <button
//             className="carousel-control bg-black/50 text-white rounded-full w-10 h-10 flex items-center justify-center ml-12 sm:ml-8 md:ml-10 lg:ml-12 xl:ml-12"
//             onClick={handlePrevClick}
//           >
//             <span className="carousel-control-icon">&#60;</span>
//           </button>
//           <button
//             className="carousel-control bg-black/50 text-white rounded-full w-10 h-10 flex items-center justify-center mr-8 sm:mr-6 md:mr-7 lg:mr-8 xl:mr-8"
//             onClick={handleNextClick}
//           >
//             <span className="carousel-control-icon">&#62;</span>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CarouselComponent;


import React, { useState, useEffect } from 'react';
import image1 from '../../assets/undraw_photos/undraw_product_iteration_kjok.png';
import image2 from '../../assets/undraw_photos/undraw_Segment_re_a3e7.png';
import image3 from '../../assets/undraw_photos/undraw_Data_extraction_re_0rd3.png';

const CarouselComponent = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image: image1,
      title: 'Lorem ipsum dolor sit amet.',
      subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum perspiciatis nobis rem optio iusto excepturi quasi numquam illo. Rem, dolorem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus explicabo quo possimus molestias sequi molestiae tenetur, in maiores voluptas debitis minus ipsa ut saepe dignissimos laboriosam recusandae! Alias, eius adipisci?',
    },
    {
      image: image2,
      title: 'Lorem, ipsum dolor.',
      subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, odit voluptas? Optio veniam corrupti numquam Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus explicabo quo possimus molestias sequi molestiae tenetur, in maiores voluptas debitis minus ipsa ut saepe dignissimos laboriosam recusandae! Alias, eius adipisci?.',
    },
    {
      image: image3,
      title: 'Lorem ipsum dolor sit.',
      subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, ea! Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus explicabo quo possimus molestias sequi molestiae tenetur, in maiores voluptas debitis minus ipsa ut saepe dignissimos laboriosam recusandae! Alias, eius adipisci?',
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
    <div className="carousel flex flex-col items-center mx-auto h-screen bg-[#fbfcfd] p-5">
      <div className="text-center mt-10 mb-10 text-5xl font-bold font-geist">
        <span className="text-blue-700">Our </span>Expertise
      </div>
      
      <div className="carousel-content relative w-full max-w-6xl">
        <div className="carousel-slide flex justify-center items-center h-[70vh] rounded-md bg-[#e7ead6] border mx-4">
          <div className="flex items-center justify-center w-full lg:w-[85%] xl:w-[75%]">
            <img
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              className="w-1/2 max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl p-4"
            />
            <div className="text-left w-1/2 px-4">
              <h3 className="slide-title font-bold font-geist text-xl md:text-2xl lg:text-3xl">
                {slides[currentSlide].title}
              </h3>
              <p className="slide-subtitle font-geist text-sm md:text-base lg:text-lg">
                {slides[currentSlide].subtitle}
              </p>
            </div>
          </div>
        </div>
        <div className="carousel-controls absolute top-1/2 left-0 right-0 flex justify-between -translate-y-1/2 px-8">
          <button
            className="carousel-control bg-black/50 text-white rounded-full w-10 h-10 flex items-center justify-center"
            onClick={handlePrevClick}
          >
            <span className="carousel-control-icon">&#60;</span>
          </button>
          <button
            className="carousel-control bg-black/50 text-white rounded-full w-10 h-10 flex items-center justify-center"
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
