// import React from 'react';

// const ValuesSection = () => {
//   const tabs = [
//     {
//       title: 'Community Powered',
//       content: (
//         <div>
//           <h3 className="text-2xl font-bold mb-2">Community Powered</h3>
//           <p className="text-gray-700">
//             Our beginnings as a grassroots effort means we are a community
//             powered organization - a community of open source contributors,
//             business leaders, nonprofits and academics. We readily respond to
//             development requests from both our open source and closed source
//             communities.
//           </p>
//         </div>
//       ),
//     },
//     {
//       title: 'Freedom to Innovate',
//       content: (
//         <div>
//           <h3 className="text-2xl font-bold mb-2">Freedom to Innovate</h3>
//           <p className="text-gray-700">
//             Being community powered is driven by our belief in the freedom to
//             innovate. Math belongs to the world and it should be accessible to
//             people with a variety of skill sets and experiences. We have worked
//             hard to build AI to do AI, providing barrier free access to the
//             power of machine learning.
//           </p>
//         </div>
//       ),
//     },
//     {
//       title: 'Customer Empathy',
//       content: (
//         <div>
//           <h3 className="text-2xl font-bold mb-2">Customer Empathy</h3>
//           <p className="text-gray-700">
//             Working closely with the community and our customers gives us great
//             empathy for those we work with. If additional functionality is
//             needed to help you achieve your goals, we're going to co-innovate
//             right beside you. We want to do everything in our power to help you
//             succeed.
//           </p>
//         </div>
//       ),
//     },
//     {
//       title: 'Do Good',
//       content: (
//         <div>
//           <h3 className="text-2xl font-bold mb-2">Do Good</h3>
//           <p className="text-gray-700">
//             We embrace the idea that we should use our knowledge and experience
//             for good, so responsible development and model transparency are
//             corporate level initiatives for us. We regularly seek out
//             opportunities in our communities where we can make a positive impact
//             with AI.
//           </p>
//         </div>
//       ),
//     },
//   ];

//   return (
//     <div className="container mx-auto py-8">
//       <div className="flex flex-col md:flex-row">
//         <div className="w-full md:w-1/4">
//           <ol className="list-none">
//             {tabs.map((tab, index) => (
//               <li
//                 key={index}
//                 className={`py-4 cursor-pointer border-b border-gray-200 ${
//                   index === 0 ? 'font-bold' : ''
//                 }`}
//               >
//                 <h4 className="text-lg">{tab.title}</h4>
//               </li>
//             ))}
//           </ol>
//         </div>
//         <div className="w-full md:w-3/4 md:pl-8">
//           <div className="p-4 bg-gray-100 rounded-lg">
//             {tabs.map((tab, index) => (
//               <div
//                 key={index}
//                 className={`${index !== 0 ? 'hidden' : ''}`}
//               >
//                 {tab.content}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ValuesSection;












// import React, { useState } from 'react';

// // Import images
// import communityPoweredImage from '../../assets/images/back1.jpg';
// import freedomToInnovateImage from '../../assets/images/back2.jpg';
// import customerEmpathyImage from '../../assets/images/back3.jpg';
// import doGoodImage from '../../assets/images/back4.jpg';

// const ValuesSection = () => {
//   const [activeTab, setActiveTab] = useState(0);

//   const tabs = [
//     {
//       title: 'Community Powered',
//       content: (
//         <div>
//           <h3 className="text-2xl font-bold mb-2">Community Powered</h3>
//           <p className="text-gray-700">
//             Our beginnings as a grassroots effort means we are a community
//             powered organization - a community of open source contributors,
//             business leaders, nonprofits and academics. We readily respond to
//             development requests from both our open source and closed source
//             communities.
//           </p>
//         </div>
//       ),
//       image: communityPoweredImage,
//     },
//     {
//       title: 'Freedom to Innovate',
//       content: (
//         <div>
//           <h3 className="text-2xl font-bold mb-2">Freedom to Innovate</h3>
//           <p className="text-gray-700">
//             Being community powered is driven by our belief in the freedom to
//             innovate. Math belongs to the world and it should be accessible to
//             people with a variety of skill sets and experiences. We have worked
//             hard to build AI to do AI, providing barrier free access to the
//             power of machine learning.
//           </p>
//         </div>
//       ),
//       image: freedomToInnovateImage,
//     },
//     {
//       title: 'Customer Empathy',
//       content: (
//         <div>
//           <h3 className="text-2xl font-bold mb-2">Customer Empathy</h3>
//           <p className="text-gray-700">
//             Working closely with the community and our customers gives us great
//             empathy for those we work with. If additional functionality is
//             needed to help you achieve your goals, we're going to co-innovate
//             right beside you. We want to do everything in our power to help you
//             succeed.
//           </p>
//         </div>
//       ),
//       image: customerEmpathyImage,
//     },
//     {
//       title: 'Do Good',
//       content: (
//         <div>
//           <h3 className="text-2xl font-bold mb-2">Do Good</h3>
//           <p className="text-gray-700">
//             We embrace the idea that we should use our knowledge and experience
//             for good, so responsible development and model transparency are
//             corporate level initiatives for us. We regularly seek out
//             opportunities in our communities where we can make a positive impact
//             with AI.
//           </p>
//         </div>
//       ),
//       image: doGoodImage,
//     },
//   ];

//   return (
//     <div className="container mx-auto py-8">
//       <div className="flex flex-col md:flex-row">
//         <div className="w-full md:w-1/4">
//           <ol className="list-none">
//             {tabs.map((tab, index) => (
//               <li
//                 key={index}
//                 className={`py-4 cursor-pointer border-b border-gray-200 relative ${
//                   index === activeTab ? 'font-bold' : ''
//                 }`}
//                 onMouseOver={() => setActiveTab(index)}
//               >
//                 <h4 className="text-lg inline-block">{tab.title}</h4>
//                 <span
//                   className={`absolute left-0 h-full bg-yellow-400 transition-all duration-300 ${
//                     index === activeTab ? 'w-1' : 'w-0'
//                   }`}
//                 ></span>
//               </li>
//             ))}
//           </ol>
//         </div>
//         <div className="w-full md:w-3/4 md:pl-8">
//           <div className="p-4 bg-gray-100 rounded-lg">
//             {tabs.map((tab, index) => (
//               <div
//                 key={index}
//                 className={`${index !== activeTab ? 'hidden' : ''}`}
//               >
//                 <img
//                   src={tab.image}
//                   alt={`${tab.title} Image`}
//                   className="mb-4"
//                 />
//                 {tab.content}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ValuesSection;







// import React, { useState } from 'react';

// // Import images
// import communityPoweredImage from '../../assets/images/back1.jpg';
// import freedomToInnovateImage from '../../assets/images/back2.jpg';
// import customerEmpathyImage from '../../assets/images/back3.jpg';
// import doGoodImage from '../../assets/images/back4.jpg';

// const ValuesSection = () => {
//   const [activeTab, setActiveTab] = useState(0);

//   const tabs = [
//     {
//       title: 'Community Powered',
//       image: communityPoweredImage,
//     },
//     {
//       title: 'Freedom to Innovate',
//       image: freedomToInnovateImage,
//     },
//     {
//       title: 'Customer Empathy',
//       image: customerEmpathyImage,
//     },
//     {
//       title: 'Do Good',
//       image: doGoodImage,
//     },
//   ];

//   return (
//     <div>
//         <div className='ml-[25vh] mt-[10vh] text-3xl font-bold font-roboto'>
// Infokalash Core Values</div>
//     <div className="flex justify-center items-center h-[70vh] ">
    
//       <div className="w-3/4 flex">
//         <div className="w-1/4 ">
//           <ul className="list-none ">
//             {tabs.map((tab, index) => (
//               <li
//                 key={index}
//                 className={`py-4 cursor-pointer relative  ${
//                   index === activeTab ? 'font-bold ' : ''
//                 }`}
//                 onMouseOver={() => setActiveTab(index)}
//               >
//                 <span
//                   className={`absolute left-0 h-[5vh] bg-blue-400 transition-all duration-300 ${
//                     index === activeTab ? 'w-1 ' : 'w-0 '
//                   }`}
//                 ></span>
//                 <h4 className="text-lg pl-4 font-roboto">{tab.title}</h4>
//               </li>
//             ))}
//           </ul>
//         </div>
//         <div className="w-3/4 p-2 rounded-sm border-2">
//           {tabs.map((tab, index) => (
//             <div
//               key={index}
//               className={`${index !== activeTab ? 'hidden' : ''}`}
//             >
//               <img
//                 src={tab.image}
//                 alt={`${tab.title} Image`}
//                 className="max-w-full h-auto"
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default ValuesSection;








import React, { useState } from 'react';
import image1 from '../../assets/images/card1.png';
import image2 from '../../assets/images/card2.png';
import image3 from '../../assets/images/card3.png';
import image4 from '../../assets/images/card4.png';

const ValuesSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      title: 'Community Powered',
      text: 'This is the text for Community Powered',
      image: image1,
    },
    {
      title: 'Freedom to Innovate',
      text: 'This is the text for Freedom to Innovate',
      image: image2,
    },
    {
      title: 'Customer Empathy',
      text: 'This is the text for Customer Empathy',
      image: image3,
    },
    {
      title: 'Do Good',
      text: 'This is the text for Do Good',
      image: image4,
    },
  ];

  return (
    <div>
      {/* <div className='ml-[25vh] mt-[10vh] text-4xl font-bold font-geist '><span className='text-blue-700'>Infokalash </span> Core Values</div> */}
            <h2 className="text-5xl text-center font-bold mb- font-geist mt-10 bg">Enterprise <span className='text-blue-700'>Need</span></h2>
      <div className="flex justify-center items-center h-[70vh] mt-10 bg-[#fbfcfd] border w-[194vh] ml-12 rounded-md">
        <div className="w-3/4 flex">
          <div className="w-1/4 bg- mt-10 ">
            <ul className="list-none ">
              {tabs.map((tab, index) => (
            
                <li
  role=""

  className={` ${index === activeTab ? ' font-bold ' : ''}`}//text-bold on hover 
 
  tabIndex={index === activeTab ? "" : "-1"}
 
  aria-selected={index === activeTab}
  onMouseEnter={() => setActiveTab(index)}
  
  style={{
    position: 'relative',
  }}
>
  <h4 className="ml-8 p-2 text-xl font-roboto  ">{tab.title}</h4>
  <span
    className=" -mt-[9.5vh]"//line up d down 
    style={{
      position: 'absolute',
      left: 0,
      height: '13vh',
      backgroundColor: '#a3a3a3',
      transition: 'all 0.3s',
      width: '2%',
      zIndex: 1,
    }}
  ></span>
  <span
    className={`-mt-10  absolute left-0 h-[5vh] transition-all duration-300 ${index === activeTab ? 'bg-black w-1.5 ' : 'bg-black w-0 '}`}
    style={{
      zIndex: 2,
    }}
  ></span>
</li>
              ))}
            </ul>
          </div>
         
          <div className="p-6 rounded-md border border-black w-[120vh] h-[50vh] translate-x-12 text-center flex">
  {tabs.map((tab, index) => (
    <div key={index} className={` ${index !== activeTab ? 'hidden' : ''}`}>
      <img src={tab.image} alt={tab.title} className="h-48 mb-4" />
      <p className="text-lg">{tab.text}</p>
    </div>
  ))}
</div>
        </div>
      </div>
    </div>
  );
};

export default ValuesSection;


