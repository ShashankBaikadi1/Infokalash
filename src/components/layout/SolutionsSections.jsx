// import React from 'react';

// const SolutionsSection = () => {
//   return (
//     <div className="flex flex-col gap-5 p-5">
//       <div className="border border-black rounded-t-lg overflow-hidden flex flex-col">
//         <div className="p-5">
//           <h2 className="text-2xl mb-2">Auto ML</h2>
//           <div className="text-lg mb-2">
//             Automatically train and tune robust models via the world’s most advanced AutoML.
//           </div>
//           <ul className="list-disc pl-5">
//             <li>Automated pipeline does all ML for you: data preprocessing, foundation model fine-tuning, hyperparameter tuning, and model selection</li>
//             <li>ML models are used to diagnose data issues, and then can be re-trained on your corrected dataset with one click</li>
//           </ul>
//         </div>
//         <div className="w-full max-w-[488px] mx-auto my-0">
//           <div className="relative pb-[calc(248/488*100%)]">
//             <div className="absolute top-0 left-0 w-full h-full">
//               <picture>
//                 <source srcSet="/_next/static/images/image-2-b877806e920786ab7890b5ed60896fbb.png.webp" type="image/webp" />
//                 <source srcSet="/_next/static/images/image-2-a7c9ae6411ebbf0467e98716510b9823.png" />
//                 <img 
//                   alt="Automatically train and tune robust models via the world’s most advanced AutoML."
//                   src="/_next/static/images/image-2-a7c9ae6411ebbf0467e98716510b9823.png"
//                   loading="lazy"
//                   className="w-full h-full object-cover"
//                 />
//               </picture>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="border border-black rounded-t-lg overflow-hidden flex flex-col">
//         <div className="p-5">
//           <h2 className="text-2xl mb-2">Model Deployment</h2>
//           <div className="text-lg mb-2">
//             Seamless model deployment: Just a few clicks to get accurate predictions.
//           </div>
//           <ul className="list-disc pl-5">
//             <li>Train and deploy a robust ML model without writing code</li>
//             <li>Access real-time and batch inference through a web interface or REST API</li>
//             <li>Get predictions for unlabeled data or evaluate models on labeled test data</li>
//           </ul>
//         </div>
//         <div className="w-full max-w-[488px] mx-auto my-0">
//           <div className="relative pb-[calc(234/488*100%)]">
//             <div className="absolute top-0 left-0 w-full h-full">
//               <picture>
//                 <source srcSet="/_next/static/images/image-3-73342a8a90b9492b0894ccfd59f16b6b.png.webp" type="image/webp" />
//                 <source srcSet="/_next/static/images/image-3-72024a024d987c24b632ce0aed71173d.png" />
//                 <img 
//                   alt="Seamless model deployment: Just a few clicks to get accurate predictions."
//                   src="/_next/static/images/image-3-72024a024d987c24b632ce0aed71173d.png"
//                   loading="lazy"
//                   className="w-full h-full object-cover"
//                 />
//               </picture>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SolutionsSection;


import React from 'react';
import image1 from '../../assets/images/card2.png';

const SolutionsSection = () => {
  return (
    <div>
      <div className='text-center font-geist text-3xl mt-16 mb-16 font-bold'>
        What <span className='text-blue-700'>Solution</span> We <span className='text-blue-700'> Provide</span> 
      </div>
    <div className="flex flex-col lg:flex-row gap-10 p-5 ml-12">
      <div className="border bg-[#fbfcfd] rounded-t-lg overflow-hidden flex flex-col w- lg:w-[60vh]  ">
        <div className="p-5">
          <h2 className="text-md mb-2 font-geist font-semibold">Auto ML</h2>
          <div className="text-xl mb-2 font-geist font-bold">
            Automatically train and tune robust models via the world’s most advanced AutoML.
          </div>
          <ul className="list-disc pl-5 font-geist font-normal">
            <li>Automated pipeline does all ML for you: data preprocessing, foundation model fine-tuning, hyperparameter tuning, and model selection</li>
            <li>ML models are used to diagnose data issues, and then can be re-trained on your corrected dataset with one click</li>
          </ul>
        </div>
        <div className="w-full max-w-[488px] mx-auto my-0">
          <div className="relative pb-[calc(248/488*100%)]">
            <div className="absolute top-0 left-0 w-full h-full">
              <picture>
             
                <img 
                  alt="Automatically train and tune robust models via the world’s most advanced AutoML."
                  src={image1}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </picture>
            </div>
          </div>
        </div>
      </div>

      <div className="border   rounded-t-lg overflow-hidden flex flex-col w- lg:w-[60vh] bg-[#fbfcfd]">
        <div className="p-5">
          <h2 className="text-md font-semibold mb-2 font-geist">Model Deployment</h2>
          <div className="text-xl font-geist font-bold mb-2">
            Seamless model deployment: Just a few clicks to get accurate predictions.
          </div>
          <ul className="list-disc  font-normal pl-5">
            <li>Train and deploy a robust ML model without writing code</li>
            <li>Access real-time and batch inference through a web interface or REST API</li>
            <li>Get predictions for unlabeled data or evaluate models on labeled test data</li>
          </ul>
        </div>
        <div className="w-full max-w-[488px] mx-auto my-0">
          <div className="relative pb-[calc(234/488*100%)]">
            <div className="absolute top-0 left-0 w-full h-full">
              <picture>
               
                <img 
                  alt="Seamless model deployment: Just a few clicks to get accurate predictions."
                  src={image1}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </div>



    <div className="flex flex-col gap-5 p-5">
      <div className="border  rounded-t-lg overflow-hidden flex flex-col bg-[#fbfcfd] w-[125vh] ml-12">
        <div className="p-5">
          <h2 className="text-md mb-2 font-geist font-semibold">Auto ML</h2>
          <div className="text-xl mb-2 font-geist font-bold ">
            Automatically train and tune robust models via the world’s most advanced AutoML.
          </div>
          <ul className="list-disc pl-5 font-geist font-normal">
            <li>Automated pipeline does all ML for you: data preprocessing, foundation model fine-tuning, hyperparameter tuning, and model selection</li>
            <li>ML models are used to diagnose data issues, and then can be re-trained on your corrected dataset with one click</li>
          </ul>
        </div>
        <div className="w-full max-w-[488px] mx-auto my-0">
          <div className="relative pb-[calc(248/488*100%)]">
            <div className="absolute top-0 left-0 w-full h-full">
              <picture>
           
                <img 
                  alt="Automatically train and tune robust models via the world’s most advanced AutoML."
                  src={image1}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </picture>
            </div>
          </div>
        </div>
      </div>

   
    </div>

    </div>
  );
};

export default SolutionsSection;
