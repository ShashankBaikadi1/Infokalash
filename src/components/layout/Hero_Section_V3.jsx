// import React from 'react';
// import Landing_Image from '../../assets/images/Landing_Img.png';

// const Hero_Section_V3 = () => {
//   return (
//     <div  >
//     <div className="flex bg-white h-[90vh] ml-5 font-geist">
//       <div className="flex flex-col md:flex-row mt-32 px-8">
//         <div className="md:w-[80vh]">
//           <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[#000000] ">
//             Create faster <br /> writing drafts <br /> with <span className='text-blue-700'> AI</span>
//           </h1>
//           <p className="text-lg font-semibold md:text-xl mb-8 ">
//             Whether you're writing a speech, email or a meal plan, add your
//             writing ideas to Compose within Microsoft Edge sidebar and get
//             AI-generated draft to get you started, wherever you write online.
//           </p>
         
//         </div>
//         <div className="md:w-[110vh] ml-5 mt-8 md:mt-0">
//           <img
//             src={Landing_Image}
//             alt=""
//             className="h-[65vh] w-[180vh] rounded-lg shadow-lg"
//           />
//         </div>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default Hero_Section_V3;

import React from 'react';
import Landing_Image from '../../assets/images/Landing_Img.png';

const Hero_Section_V3 = () => {
  return (
    <div className="flex flex-col md:flex-row bg-white h-screen ml-5 md:ml-0 xl:ml-5 font-geist">
      <div className="mt-10 md:mt-32 xl:mt-32 px-8 md:px-16 xl:px-8">
        <div className="md:w-full xl:w-[80vh]">
          <h1 className="text-2xl md:text-4xl xl:text-6xl font-bold mb-6 text-[#000000]">
            Create faster <br /> writing drafts <br /> with <span className='text-blue-700'> AI</span>
          </h1>
          <p className="text-sm md:text-lg xl:text-xl mb-8">
            Whether you're writing a speech, email or a meal plan, add your
            writing ideas to Compose within Microsoft Edge sidebar and get
            AI-generated draft to get you started, wherever you write online.
          </p>
        </div>
      </div>
      <div className="md:w-full lg:w-[110vh] xl:w-[110vh] ml-5 mt-8 md:mt-[10vh]">
        <img
          src={Landing_Image}
          alt=""
          className="h-[50vh] md:h-[65vh] lg:h-[65vh] xl:h-[65vh] w-full md:w-[80vh] lg:w-[180vh] xl:w-[180vh] rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default Hero_Section_V3;