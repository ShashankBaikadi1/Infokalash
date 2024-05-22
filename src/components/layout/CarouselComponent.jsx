// import React from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import image1 from '../../assets/images/card1.png'
// import image2 from '../../assets/images/card2.png'
// import image3 from '../../assets/images/card3.png'
// const CarouselComponent = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 1000,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 4000,
//     nextArrow: <SampleNextArrow />,
//     prevArrow: <SamplePrevArrow />
//   };

//   const data = [
//     {
//       image: image1,
//       title: 'Lorem ipsum dolor sit amet.',
//       subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum perspiciatis nobis rem optio iusto excepturi quasi numquam illo. Rem, dolorem!'
//     },
//     {
//       image: image2,
//       title: 'Lorem, ipsum dolor.',
//       subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, odit voluptas? Optio veniam corrupti numquam.'
//     },
//     {
//       image: image3,
//       title: 'Lorem ipsum dolor sit.',
//       subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, ea!'
//     }
//   ];

//   return (
//     <div className="text-center py-10">
//       <h2 className="text-2xl font-bold mb- bg-red-200 font-roboto">Our Expertise</h2>
//       <Slider {...settings}>
//         {data.map((item, index) => (
//           <div key={index} className="flex justify-center items-center  h-[50vh]">
//             <div className="flex items-center ml-20 w-[190vh] bg-yellow-200 ">
//               <img src={item.image} alt={item.title} className="w-[40vh] p-4  h-[] mr-8" />
//               <div className="text-left">
//                 <h3 className="text-lg font-bold w-[80vh] bg-orange-200 font-roboto">{item.title}</h3>
//                 <p className='font-roboto'>{item.subtitle}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// const SampleNextArrow = (props) => {
//   const { onClick } = props;
//   return (
//     <div
//       className="absolute top-1/2 transform -translate-y-1/2 right-4 w-8 h-8 flex items-center justify-center border border-black rounded-full bg-white cursor-pointer"
//       onClick={onClick}
//     >
//       &gt;
//     </div>
//   );
// };

// const SamplePrevArrow = (props) => {
//   const { onClick } = props;
//   return (
//     <div
//       className="absolute top-1/2 transform -translate-y-1/2 left-4 w-8 h-8 flex items-center justify-center border border-black rounded-full bg-white cursor-pointer"
//       onClick={onClick}
//     >
//       &lt;
//     </div>
//   );
// };

// export default CarouselComponent;


import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from '../../assets/images/card1.png'
import image2 from '../../assets/images/card2.png'
import image3 from '../../assets/images/card3.png'
const CarouselComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  const data = [
    {
      image: image1,
      title: 'Lorem ipsum dolor sit amet.',
      subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum perspiciatis nobis rem optio iusto excepturi quasi numquam illo. Rem, dolorem!'
    },
    {
      image: image2,
      title: 'Lorem, ipsum dolor.',
      subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, odit voluptas? Optio veniam corrupti numquam.'
    },
    {
      image: image3,
      title: 'Lorem ipsum dolor sit.',
      subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, ea!'
    }
  ];

  return (
    <div className="text-center py-10 bg- h-[100vh] font-roboto">
      <h2 className="text-4xl font-bold mb- font-roboto mt-10 bg">Our <span className='text-blue-700'>Expertise</span></h2>
      <Slider {...settings}>
        {data.map((item, index) => (
          <div key={index} className="flex justify-center items-center  h-[70vh] bg-">
            <div className="flex items-center ml-20 w-[190vh]  ">
              <img src={item.image} alt={item.title} className="w-[40vh] p-4  h-[] mr-8" />
              <div className="text-left">
                <h3 className="text-lg font-bold w-[80vh]  font-roboto">{item.title}</h3>
                <p className='font-roboto'>{item.subtitle}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 transform -translate-y-1/2 right-4 w-8 h-8 flex items-center justify-center border border-black rounded-full bg-white cursor-pointer"
      onClick={onClick}
    >
      &gt;
    </div>
  );
};

const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 transform -translate-y-1/2 left-4 w-8 h-8 flex items-center justify-center border border-black rounded-full bg-white cursor-pointer"
      onClick={onClick}
    >
      &lt;
    </div>
  );
};

export default CarouselComponent;
