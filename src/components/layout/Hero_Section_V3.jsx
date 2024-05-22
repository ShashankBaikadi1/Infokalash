import React from 'react';
import Landing_Image from '../../assets/images/Landing_Img.png';

const Hero_Section_V3 = () => {
  return (
    <div className="flex bg-white h-[90vh] ml-5 font-sans">
      <div className="flex flex-col md:flex-row mt-32 px-8">
        <div className="md:w-[80vh]">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Create faster <br /> writing drafts <br /> with <span className='text-blue-700'> AI</span>
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Whether you're writing a speech, email or a meal plan, add your
            writing ideas to Compose within Microsoft Edge sidebar and get
            AI-generated draft to get you started, wherever you write online.
          </p>
         
        </div>
        <div className="md:w-[110vh] ml-5 mt-8 md:mt-0">
          <img
            src={Landing_Image}
            alt=""
            className="h-[65vh] w-[180vh] rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero_Section_V3;
