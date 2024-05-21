import React from 'react';

const CallToAction = () => {
  return (
    <div className="container relative z-20 text-center my-xl-3 py-1 py-md-4 py-lg-5 bg-black h-[60vh]">
      <div className="w-full">
        <div className="p-0 mt-[20vh]">
          <div className="mb-3">
            <p className="text-light opacity-70 mb-3 lead">
              <span className="text-2xl text-gray-400 font-semibold ">Ready to get started?</span>
            </p>
          </div>
          <div>
            <h2 className="text-light pb-3 pb-lg-0 mb-lg-5 text-4xl ">
              <span className="font-bold text-white shadow-orange-100">Launch Your Project With Us</span>
            </h2>
          </div>
          <div>
            <div className="mt-[5vh]">
              <a
                className="shadow-primary bg-primary text-white font-bold py-2 px-4 rounded"
                href="https://www.infokalash.com/contacts-v1/"
                role="button"
              >
                <span className="items-center"> 
                  <button className="ml-2 h-[7vh] w-36 rounded-md bg-[#1d4ed8] shadow-white">Work with us</button>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;