

// import React, { useState } from 'react';
// import image1 from '../../assets/images/card1.png'; // adjust the path as needed
// import image2 from '../../assets/images/card2.png'; // adjust the path as needed
// import image3 from '../../assets/images/card3.png'; // adjust the path as needed
// import image4 from '../../assets/images/card4.png'; // adjust the path as needed
// import clientlogo from '../../assets/images/client-logo.png'; // adjust the path as needed
// const features = [
//   {
//     id: 0,
//     title: "Enterprise Master Data Management",
//     description: "Search across your data universe using natural language, business context or using SQL syntax.",
//     img: image1
//   },
//   {
//     id: 1,
//     title: "Intelligent Entity Matching using ML",
//     description: "Visualize column-level relationships from your data sources to your BI dashboards.",
//     img: image2
//   },
//   {
//     id: 2,
//     title: "State of the art data migration ETL pipeline",
//     description: "Build trust in data through effortless compliance, context-rich trust signals, and role-based access controls.",
//     img: image3
//   },
//   {
//     id: 3,
//     title: "Scalable tech architecture",
//     description: "Create a marketplace of complete data products, curated for each domain team.",
//     img: image4
//   },
//   {
//     id: 4,
//     title: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
//     description: "Create a marketplace of complete data products, curated for each domain team.",
//     img: image4
//   },
//   {
//     id: 5,
//     title: " Lorem ipsum dolor sit amet.",
//     description: "Create a marketplace of complete data products, curated for each domain team.",
//     img: image4
//   },

// ];

// const FeatureList = () => {
//   const [selectedFeature, setSelectedFeature] = useState(0); // Changed from 1 to 0

//   const toggleFeature = (id) => {
//     setSelectedFeature(selectedFeature === id ? null : id);
//   };
 

//   return (
//     <div className="container overflow-x-0">
//               <div>
//           <img src={clientlogo} alt="Client Logo" className="ml-12 w-[195vh]" />
//         </div>
//              <div className="text-gray-700 font-bold mb-6 ml-[7vh] text-4xl mt-5">
//           Provide <span className="text-blue-700">trusted data</span> with less effort and more adoption
//          </div>
//       <div className="flex gap-2 ">
//       <div className="flex w-[vh] overflow-hidden rounded-[px] ml-12 ">
//           <div className="relative h-full w-[100vh] flex">
//             <div className="relative h-full w-[90vh] flex-none ml-5">
//               {/* bg-[#EBECFC1A] */}
//               {features.map((feature, index) => (
//                 <div key={feature.id} className={`border  ${selectedFeature === feature.id ? 'border-blue-300 rounded-[6px] w-[90vh]' : 'border-t-transparent'} ease-in-expo duration-3000`}>
//                   <div
//                     id={`home-product-${feature.id}`}
//                     className={`py-5 px-4 p1 !font-bold cursor-pointer flex items-center justify-between ${selectedFeature === feature.id ? 'text-blue-600' : 'text-gray-600'}`}
//                     onClick={() => toggleFeature(feature.id)}
//                   >
//                     <div className="flex items-center gap-4">
//                       <div className="w-5 flex-none">{String(index + 1).padStart(2, '0')}</div>
//                       <div>{feature.title}</div>
//                     </div>
                  
//                   </div>
//                   <div className={`max-h-0 overflow-hidden ${selectedFeature === feature.id ? 'collapse-transition-open ease-out duration-1500 translate-y-0 max-h-[240px]' : '-translate-y-2 -mb-2 lg:mb-0'}`}>
//                     <div>
//                       <div className="px-4 mb-3">
//                         <div className="flex items-center gap-2.5">
//                           <div className="w-5 flex-none"></div>
//                           <div className="p3">{feature.description}</div>
//                         </div>
//                       </div>
//                       {selectedFeature === feature.id && (
//                         <div className="px-6 overflow-hidden lg:hidden">
//                           <img
//                             className="shadow-sm"
//                             src={feature.img}
//                             alt={feature.title}
//                             width="347"
//                             height="176"
//                             loading="lazy"
//                           />
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//         {selectedFeature !== null && (
//           <div className="flex-  bg-white border border-blue-300 overflow-hidden hidden lg:flex relative h-[465px] flex-none " style={{ borderRadius: '6px 6px 0px 0px', aspectRatio: '610/406' }}>
//             <div className="flex-1 h-full pt-4 px-2 overflow-hidden hidden lg:flex absolute w-full" style={{ background: 'rgba(235, 236, 252, 0.1)' }}>
//               {/* <img className="shadow-sm w-full h-auto mt-auto" src={features[selectedFeature].img} loading="lazy" alt={features[selectedFeature].title} width="644" height="327" /> */}
//               <img className="shadow-sm w-full h-auto mt-auto" src={features[selectedFeature].img} loading="lazy" alt={features[selectedFeature].title} width="644" height="327" />
//             </div>
//           </div>
//         )}
//       </div>
   
//     </div>
//   );
// };

// export default FeatureList;



// import React, { useState } from 'react';
// import image1 from '../../assets/undraw_photos/undraw_growth_chart_r99m.png'; // adjust the path as needed
// import image2 from '../../assets/undraw_photos/undraw_data_processing_yrrv.png'; // adjust the path as needed
// import image3 from '../../assets/undraw_photos/undraw_Business_plan_re_0v81.png'; // adjust the path as needed
// import image4 from '../../assets/undraw_photos/undraw_Investment_data_re_sh9x.png'; // adjust the path as needed
// import clientlogo from '../../assets/images/client-logo.png'; // adjust the path as needed

// const features = [
//   {
//     id: 0,
//     title: "Enterprise Master Data Management",
//     description: "Search across your data universe using natural language, business context or using SQL syntax.",
//     img: image1
//   },
//   {
//     id: 1,
//     title: "Intelligent Entity Matching using ML",
//     description: "Visualize column-level relationships from your data sources to your BI dashboards.",
//     img: image2
//   },
//   {
//     id: 2,
//     title: "State of the art data migration ETL pipeline",
//     description: "Build trust in data through effortless compliance, context-rich trust signals, and role-based access controls.",
//     img: image3
//   },
//   {
//     id: 3,
//     title: "Scalable tech architecture",
//     description: "Create a marketplace of complete data products, curated for each domain team.",
//     img: image4
//   },

// ];

// const FeatureList = () => {
//   const [selectedFeature, setSelectedFeature] = useState(0);

//   const toggleFeature = (id) => {
//     setSelectedFeature(selectedFeature === id ? null : id);
//   };

//   return (
//     <div className="container overflow-x-0 font-geist ">
//       {/* <div>
//         <img src={clientlogo} alt="Client Logo" className="ml-12 w-[195vh]" />
//       </div> */}
//       <div className="text-gray-700 font-bold mb-14 text-center text-5xl mt-12">
//         Provide <span className="text-blue-700">trusted data</span> with less effort and more adoption
//       </div>
//       <div className="flex gap-2 bg-[#fbfcfd] pt-12 pb-12 w-[194vh] ml-12 rounded-md border" >
//         <div className="flex w-[vh] overflow-hidden rounded-[px] ml-12">
//           <div className="relative h-full w-[95vh] flex">
//             <div className="relative h-full w-[90vh] flex-none ml- ">
//               {features.map((feature, index) => (
//                 <div key={feature.id} className={` ${selectedFeature === feature.id ? 'border  border-black rounded-[6px]' : 'border-b-2 border-blue-50 '} ease-in-expo duration-3000 w-[90vh]`}>
//                   <div
//                     id={`home-product-${feature.id}`}
//                     className={`py-5 px-4 p1 !font-bold cursor-pointer flex items-center justify-between ${selectedFeature === feature.id ? 'text-blue-600' : 'text-gray-600'}`}
//                     onClick={() => toggleFeature(feature.id)}
//                   >
//                     <div className="flex items-center ">
//                     {/* <div className="w-5 p3 flex-none text-md">{String(index + 1).padStart(2, '0')}</div> */}
//                       <div className='text-xl' >{feature.title}</div>
//                     </div>
//                   </div>
//                   <div className={`max-h-0 overflow-hidden ${selectedFeature === feature.id ? 'collapse-transition-open ease-out duration-1500 translate-y-0 max-h-[240px]' : '-translate-y-2 -mb-2 lg:mb-0'}`}>
//                     <div>
//                       <div className="px-4 mb-3">
//                         <div className="flex items-center gap-2.5">
//                           <div className="w-5 flex-none"></div>
//                           <div className="p3">{feature.description}</div>
//                         </div>
//                       </div>
//                       {selectedFeature === feature.id && (
//                         <div className="px-6 overflow-hidden lg:hidden">
//                           <img
//                             className="shadow-sm"
//                             src={feature.img}
//                             alt={feature.title}
//                             width="347"
//                             height="176"
//                             loading="lazy"
//                           />
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//         {selectedFeature !== null && (
//           <div className="flex-  border border-black overflow-hidden hidden lg:flex relative h-[465px] flex-none " style={{ borderRadius: '6px 6px 0px 0px', aspectRatio: '510/406' }}>
//             <div className="flex-1 h- pt-4 px-2 overflow-hidden hidden lg:flex absolute w-[80vh] " style={{ background: 'rgba(235, 236, 252, 0.1)' }}>
//               <img className="shadow-sm w-full h-auto mt-auto" src={features[selectedFeature].img} loading="lazy" alt={features[selectedFeature].title} width="644" height="327" />
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default FeatureList;




// import React, { useState } from 'react';
// import image1 from '../../assets/undraw_photos/undraw_growth_chart_r99m.png';
// import image2 from '../../assets/undraw_photos/undraw_data_processing_yrrv.png';
// import image3 from '../../assets/undraw_photos/undraw_Business_plan_re_0v81.png';
// import image4 from '../../assets/undraw_photos/undraw_Investment_data_re_sh9x.png';
// import clientlogo from '../../assets/images/client-logo.png';

// const features = [
//   {
//     id: 0,
//     title: "Enterprise Master Data Management",
//     description: "Search across your data universe using natural language, business context or using SQL syntax.",
//     img: image1
//   },
//   {
//     id: 1,
//     title: "Intelligent Entity Matching using ML",
//     description: "Visualize column-level relationships from your data sources to your BI dashboards.",
//     img: image2
//   },
//   {
//     id: 2,
//     title: "State of the art data migration ETL pipeline",
//     description: "Build trust in data through effortless compliance, context-rich trust signals, and role-based access controls.",
//     img: image3
//   },
//   {
//     id: 3,
//     title: "Scalable tech architecture",
//     description: "Create a marketplace of complete data products, curated for each domain team.",
//     img: image4
//   },
// ];

// const FeatureList = () => {
//   const [selectedFeature, setSelectedFeature] = useState(0);

//   const toggleFeature = (id) => {
//     setSelectedFeature(selectedFeature === id ? null : id);
//   };

//   return (
//     <div className="container overflow-x-0 font-geist">
//       <div className="text-gray-700 font-bold mb-14 text-center text-5xl mt-12">
//         Provide <span className="text-blue-700">trusted data</span> with less effort and more adoption
//       </div>
//       <div className="flex flex-col lg:flex-row gap-2 bg-[#fbfcfd] pt-12 pb-12 lg:w-[194vh] ml-12 rounded-md border md:w-[89vh]">
//         <div className="flex w-full lg:w-[95vh] overflow-hidden rounded-[px] ml-12">
//           <div className="relative h-full w-full lg:w-[90vh] flex">
//             <div className="relative h-full w-full lg:w-[90vh] flex-none ml-0">
//               {features.map((feature, index) => (
//                 <div key={feature.id} className={`${selectedFeature === feature.id ? 'border border-black rounded-[6px]' : 'border-b-2 border-blue-50'} ease-in-expo duration-3000 w-full md:w-[50vh] lg:w-[90vh]`}>
//                   <div
//                     id={`home-product-${feature.id}`}
//                     className={`py-5 px-4 p1 !font-bold cursor-pointer flex items-center justify-between ${selectedFeature === feature.id ? 'text-blue-600' : 'text-gray-600'}`}
//                     onClick={() => toggleFeature(feature.id)}
//                   >
//                     <div className="flex items-center">
//                       <div className='text-xl'>{feature.title}</div>
//                     </div>
//                   </div>
//                   <div className={`max-h-0 overflow-hidden ${selectedFeature === feature.id ? 'collapse-transition-open ease-out duration-1500 translate-y-0 max-h-[240px]' : '-translate-y-2 -mb-2 lg:mb-0'}`}>
//                     <div>
//                       <div className="px-4 mb-3">
//                         <div className="flex items-center gap-2.5">
//                           <div className="p3">{feature.description}</div>
//                         </div>
//                       </div>
//                       {selectedFeature === feature.id && (
//                         <div className="px-6 overflow-hidden lg:hidden">
//                           <img
//                             className="shadow-sm"
//                             src={feature.img}
//                             alt={feature.title}
//                             width="347"
//                             height="176"
//                             loading="lazy"
//                           />
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//         {selectedFeature !== null && (
//           <div className="flex-1 border border-black overflow-hidden hidden lg:flex relative h-[465px] " style={{ borderRadius: '6px 6px 0px 0px', aspectRatio: '510/406' }}>
//             <div className="flex-1 h- pt-4 px-2 overflow-hidden hidden lg:flex absolute w-[80vh]" style={{ background: 'rgba(235, 236, 252, 0.1)' }}>
//               <img className="shadow-sm w-full h-auto mt-auto" src={features[selectedFeature].img} loading="lazy" alt={features[selectedFeature].title} width="644" height="327" />
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default FeatureList;



import React, { useState } from 'react';
import image1 from '../../assets/undraw_photos/undraw_growth_chart_r99m.png';
import image2 from '../../assets/undraw_photos/undraw_data_processing_yrrv.png';
import image3 from '../../assets/undraw_photos/undraw_Business_plan_re_0v81.png';
import image4 from '../../assets/undraw_photos/undraw_Investment_data_re_sh9x.png';
import clientlogo from '../../assets/images/client-logo.png';

const features = [
  {
    id: 0,
    title: "Enterprise Master Data Management",
    description: "Search across your data universe using natural language, business context or using SQL syntax.",
    img: image1
  },
  {
    id: 1,
    title: "Intelligent Entity Matching using ML",
    description: "Visualize column-level relationships from your data sources to your BI dashboards.",
    img: image2
  },
  {
    id: 2,
    title: "State of the art data migration ETL pipeline",
    description: "Build trust in data through effortless compliance, context-rich trust signals, and role-based access controls.",
    img: image3
  },
  {
    id: 3,
    title: "Scalable tech architecture",
    description: "Create a marketplace of complete data products, curated for each domain team.",
    img: image4
  },
];

const FeatureList = () => {
  const [selectedFeature, setSelectedFeature] = useState(0);

  const toggleFeature = (id) => {
    setSelectedFeature(selectedFeature === id ? null : id);
  };

  return (
    <div className="container mx-auto overflow-x-0 font-geist p-4 lg:p-12 ">
      <div className="text-gray-700 font-bold mb-8 text-center text-3xl lg:text-5xl mt-8 lg:mt-12">
        Provide <span className="text-blue-700">trusted data</span> with less effort and more adoption
      </div>
      <div className="flex flex-col lg:flex-row gap-6 bg-[#fbfcfd] pt-8 pr-4 pl-4 pb-8 lg:pt-12 lg:pb-12 w-full mx-auto rounded-md border max-w-screen-lg ">
        <div className="flex flex-col lg:w-1/2 overflow-hidden rounded-lg mx-auto lg:mx-0  ">
          {features.map((feature, index) => (
            <div key={feature.id} className={`${selectedFeature === feature.id ? 'border border-black rounded-lg' : 'border-b-2 border-blue-50'} ease-in-expo duration-3000 w-full`}>
              <div
                id={`home-product-${feature.id}`}
                className={`py-4 px-4 cursor-pointer flex items-center justify-between ${selectedFeature === feature.id ? 'text-blue-600' : 'text-gray-600'}`}
                onClick={() => toggleFeature(feature.id)}
              >
                <div className="flex items-center">
                  <div className='text-lg lg:text-xl'>{feature.title}</div>
                </div>
              </div>
              <div className={`max-h-0 overflow-hidden ${selectedFeature === feature.id ? 'max-h-96 transition-max-height ease-out duration-1500' : ''}`}>
                <div className="px-4 mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="p-3">{feature.description}</div>
                  </div>
                </div>
                {selectedFeature === feature.id && (
                  <div className="px-4 lg:hidden">
                    <img
                      className="shadow-sm w-full"
                      src={feature.img}
                      alt={feature.title}
                      loading="lazy"
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        {selectedFeature !== null && (
          <div className="flex-1 border border-black overflow-hidden hidden lg:flex relative h-96  rounded-md">
            <div className="flex-1 pt-4 px-2 overflow-hidden absolute w-full h-full" style={{ background: 'rgba(235, 236, 252, 0.1)' }}>
              <img className="shadow-sm w-full h-auto mt-auto" src={features[selectedFeature].img} loading="lazy" alt={features[selectedFeature].title} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FeatureList;

